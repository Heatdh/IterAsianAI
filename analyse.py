import numpy as np
import matplotlib.pyplot as plt
import sys
import os
import re
import argparse
import glob
import pandas as pd
import neurokit2 as nk
from sklearn.covariance import EllipticEnvelope
from statsmodels.tsa.seasonal import seasonal_decompose
import json

def simutale_data(duration):
    simutale_data=nk.ecg_simulate(duration=duration, method="multileads")
    nk.signal_plot(simutale_data, subplots=True)
    plt.show()
    plt.savefig('simutale_data.png')
  

def analyse_all_csv(dir,csv_file,dir_csv_test_analysed):
    """Open a file and return the contents as a list of lines"""
    # Get the filename from the command line
    data= pd.read_csv(dir+csv_file)
    time_np=data['timestamp'].values
    signals, info = nk.ecg_process(data["heart_rate"], sampling_rate=1000)
    nk.ecg_plot(signals) 
    plt.savefig(f'{dir_csv_test_analysed}ecg_plot_{csv_file}.png')
    signals_t=signals[["ECG_Raw","ECG_Clean","ECG_Rate","ECG_Quality","ECG_R_Peaks"]]
    signals_t['timestamp']= time_np
    signals_t.set_index('timestamp')
    return signals_t





def seasonality_correction(heartrate, heart_quality,ts):
    """
    This function takes output pre-processing and applies seasonality correction
    """
    heart_rate_decomp = seasonal_decompose(heartrate, model='additive', period=24)
    qualityHeart_decomposition = seasonal_decompose(heart_quality, model='additive', period=24)
    HR_col = pd.DataFrame(heart_rate_decomp.resid + heart_rate_decomp.trend)
    HR_col.rename(columns={HR_col.columns[0]:'heartrate'}, inplace=True)
    HRQual_col = pd.DataFrame(qualityHeart_decomposition.resid + qualityHeart_decomposition.trend)
    HRQual_col.rename(columns={HRQual_col.columns[0]:'heartquality'}, inplace=True)
    frames = [HR_col, HRQual_col,ts]
    data = pd.concat(frames, axis=1)
    return data    
def anomaly_detection(data):
    model =  EllipticEnvelope(contamination=0.1, 
                            #behaviour="new",
                            )
    data.dropna(inplace=True)
    model.fit(data[['heartrate','heartquality']])
    
    preds = pd.DataFrame(model.predict(data[['heartrate','heartquality']]))
    preds = preds.rename(lambda x: 'anomaly' if x == 0 else x, axis=1)
    data = data.reset_index()
    data = data.join(preds)
    return data

if __name__ == "__main__":
    dir_csv_test = 'datasets/test_set/'
    files = [f for f in os.listdir(dir_csv_test) if f.endswith('.csv')]
    dict_analysed={}
    dir_csv_test_analysed = 'datasets/test_set_analysed/'
    if not os.path.exists(dir_csv_test_analysed): # will make it to overwrite after
        os.makedirs(dir_csv_test_analysed)
    for file in files:
        dict_analysed[file]=analyse_all_csv(dir_csv_test,file,dir_csv_test_analysed)
        dict_analysed[file].to_csv(dir_csv_test_analysed+file[:-4]+'_analysed.csv', index=False)
   
    #simutale_data(1000)
    simutale_data(10)
    predictions = {}
    for file in files:
        dt_annomaly=seasonality_correction(dict_analysed[file]['ECG_Clean'],dict_analysed[file]['ECG_Quality'],dict_analysed[file]['timestamp'])
        dt_annomaly=anomaly_detection(dt_annomaly)
        anom_only=dt_annomaly[dt_annomaly['anomaly']==-1]
        predictions[file]=anom_only.iloc[0]['timestamp']
        dt_annomaly.to_csv(f"{dir_csv_test_analysed}annomaly_{file}", index=False)

    
    with open('predictions.json', 'w') as fp:
        json.dump(predictions, fp)
  
    
 