import React, {useState} from "react"
import "./styles.css"
import {useRef} from "react";


export default function WelcomeBlue() {
  
  const [upload, setText] = useState("UPLOAD .csv")

  function updateText(){
    setText(<a href="https://www.thomaswoelkhart.com">"GET RESULTS"</a>)
  }
  const inputRef = useRef(null);
 
  const handleClick = () => {
    inputRef.current.click(); 
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    updateText();
    event.currentTarget.disabled = true;
    console.log("fileObj is ", fileObj);
    event.target.value = null;

    console.log(fileObj);
    console.log(fileObj.name);
  };


  return (
    <div className="iphone-11-pro-max3 flex-col-hstart-vstart clip-contents">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9b5ltivmcus-115%3A2671?alt=media&token=776ebd54-4a7a-4847-b2eb-dda88244ce09"
        alt="SettingsIcon"
        className="settings"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9b5ltivmcus-115%3A2675?alt=media&token=f37309ca-7acb-4167-960e-ba4d33ac0254"
        alt="CalendarRemove"
        className="calendar-remove"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9b5ltivmcus-115%3A2676?alt=media&token=16cf0261-c095-44df-8dbb-7e5d31fa054b"
        alt="calendar-add"
        className="calendar-add"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9b5ltivmcus-115%3A2677?alt=media&token=69b7430a-64ea-41ee-8192-9d20ec688fb7"
        alt="calendar-question"
        className="calendar-question"
      />
      <p className="txt-638 flex-hcenter">WELCOME</p>
      <div className="group-615 flex-col-hcenter">
        <div className="group-415">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9b5ltivmcus-115%3A2681?alt=media&token=b521cd2a-a683-47b6-8894-3d1ee60c7cd0"
            alt="iterasianLogo"
            className="iterasian-_upscayled-_-4x-2"
          />
        </div>
        <div className="buttons flex-row-vstart-hstart">
          <input style={{display: 'none'}} ref={inputRef} type="file" onChange={handleFileChange}/>
          <button className="normalButton" onClick={handleClick}><div className="base-button flex-row-vcenter-hcenter clip-contents">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9b5ltivmcus-I115%3A2674%3B1812%3A4935%3B1812%3A4290?alt=media&token=28ca1d99-e10d-4e56-a0ef-317837c308be"
              alt="Left-Icon"
              className="left-icon"
            />
            <div className="label flex-row-vcenter-hstart">
              <p className="txt-191">{upload}</p>
            </div>
          </div></button>
        </div>
        <button className="normalButton"><div className="buttons flex-row-vstart-hstart">
          <div className="base-button flex-row-vcenter-hcenter clip-contents">
            <div className="label flex-row-vcenter-hstart">
              <p className="txt-191">Sign-Up</p>
            </div>
          </div>
        </div></button>
        <button className="normalButton"><div className="buttons-1 flex-row-vstart-hstart">
          <div className="base-button flex-row-vcenter-hcenter clip-contents">
            <div className="label flex-row-vcenter-hstart">
              <p className="txt-191">Login</p>
            </div>
          </div>
        </div></button>
      </div>
      <div className="upper-bar flex-row-vcenter-hstart">
        <div className="time-style flex-col-hstart-vstart clip-contents">
          <p className="txt-679 flex-hcenter">9:41</p>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9b5ltivmcus-I115%3A2682%3B112%3A2546?alt=media&token=dcb74203-f6b1-4000-b3d1-abe75e100806"
          alt="Not Found"
          className="cellular-connection"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9b5ltivmcus-I115%3A2682%3B112%3A2542?alt=media&token=26e6dab6-eadb-4eba-ace1-d71f5506c2b7"
          alt="Not Found"
          className="wifi"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/9b5ltivmcus-I115%3A2682%3B112%3A2538?alt=media&token=8b914c3f-e928-48eb-8a9d-02a6229da0f9"
          alt="Not Found"
          className="battery"
        />
      </div>
    </div>
  )
}
