# IterAsianAI
Repository for The TUM.AI competition
# Motivation
Based on data collected from smartwatches, we are interested in analyzing the metrics collected such as the heartrate, total amount of steps, and the sleep-time to determine whether the user had a high likelihood of having contracted disease before the symptoms start or to report an already existing chronic problem. We were provided with data from 30 labelled users with either COVID-19, influenza-b or other diseases and the timestamp of the onset of symptoms for each disease.

# Market / Business Model
Our ideal target group are health-conscious elderly people (>age 65) who already own a smartwatch and are interested in detecting diseases like COVID-19 early on. To further tune the model based on the hardware-specifications of newly released smartwatches and to have access to more data, we are aiming to partner up with hospitals, medical professionals and smartwatch producers. For our business model we chose a monthly-based subscription (recurring revenue) and to make the app free exclusively for certain partners.



## Project dependencies 
To install the project libraries it is enough to run 

```bash
pip install -r requirements.txt
``` 

Ps: it is recommended to make a new virtual environment so you don't overwrite library versions used in other projects.
This can be done <br /> 
On Windows
```bash
py -m venv <name_of_virtualenv>
//activate it 
<name_of_virtualenv>\Scripts\activate.bat

```
on linux
```bash
python3 -m venv <name_of_virtualenv>
source <name_of_virtualenv>/bin/activate
``` 
