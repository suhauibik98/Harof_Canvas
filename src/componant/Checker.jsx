/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
// import Alert from '@mui/material/Alert';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Canvas from "./Canvas";
import image1 from '../images/i0.jpg';
import image2 from '../images/i1.jpg';
import image3 from '../images/i2.jpg';
import image4 from '../images/i3.jpg';
const Checker = ({ firstLetter }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [show, setShow] = useState(true);

  const [selectedColor , setSelectedColor] = useState(null)

  const onChange = (e) => {
    setSelectedColor( e.target.value)
  }
  
  const color = selectedColor

  const [resetCanvas , setResetCanvas] = useState(false)

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {

    if (
      (firstLetter === "ل" ||
        firstLetter === "أ" ||
        firstLetter === "ك" ||
        firstLetter === "ا") &&
      selectedValue === "مستقيم"
    ) {
      toast.success("اجابة صحيحة", {
        pposition: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",

        });
        setTimeout(()=>{setShow(false);},[2000])
        
    } else if (
    (
      firstLetter === "ب" ||
      firstLetter === "ت" ||
      firstLetter === "ث" ||
      firstLetter === "ج" ||
      firstLetter === "ح" ||
      firstLetter === "خ" ||
      firstLetter === "ذ" ||
      firstLetter === "د" ||
      firstLetter === "ر" ||
      firstLetter === "ز" ||
      firstLetter === "س" ||
      firstLetter === "ش" ||
      firstLetter === "ص" ||
      firstLetter === "ض" ||
      firstLetter === "ط" ||
      firstLetter === "ظ" ||
      firstLetter === "ع" ||
      firstLetter === "غ" ||
      firstLetter === "ف" ||
      firstLetter === "ق" ||
      firstLetter === "ه" ||
      firstLetter === "ن" ||
      firstLetter === "م" ||
      firstLetter === "و" ||
      firstLetter === "ي"
    )&& selectedValue === "منحني"
    ) {
      // Add more conditions as needed
      toast.success("اجابة صحيحة", {
        pposition: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        setTimeout(()=>{setShow(false);},[2000])

    } else {
      toast.error("اجابة خاطئة  ", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  };
  return (
    <>
     <ToastContainer
   position="top-center"
   autoClose={1500}
   hideProgressBar={false}
   newestOnTop={false}
   closeOnClick
   rtl={false}
   pauseOnFocusLoss
   draggable
   pauseOnHover
   theme="colored"
   />
      {show && (
        <div>
          {firstLetter !== null ? (
            <div>
              <h1 style={{ fontSize: "2em", textAlign: "center" }}>
                {firstLetter}
              </h1>
              <h2 style={{ fontSize: "2em", textAlign: "center" }}>
                هل هاذا الحرف منحني ام مستقيم؟
              </h2>

              <div style={{ textAlign: "center",display:"flex",justifyContent:"center",alignItems:"center" }}>
                <div style={{display:"flex"}}>
                <h3 >منحني</h3>
                <input
                  type="radio"
                  name="shape"
                  value="منحني"
                  onChange={handleRadioChange}
                /></div>
                <div style={{display:"flex"}}>
                <h3 >مستقيم</h3>
                <input
                  type="radio"
                  name="shape"
                  value="مستقيم"
                  onChange={handleRadioChange}
                /></div>
              </div>
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button onClick={handleSubmit}>تحقق</button>
              </div>
            </div>
          ) : (
            <>
              <p style={{ fontSize: "6em", textAlign: "center" }}>
                الرجاء العوده وادخل اسمك
              </p>
            </>
          )}
        </div>
      )}
      {!show && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1em",
            }}
          >
            <Canvas
              resetCanvas={resetCanvas}
              setResetCanvas={setResetCanvas}
              color={color}
            />
          </div>
          <div className="buttons">
            <div className="selectOptions">
              <input type="color" onChange={onChange} id="colorPicker" />
            </div>

            <button onClick={() => setResetCanvas((prev) => !prev)}>
              clear board
            </button>
          </div>
          <p style={{ textAlign: "center", fontSize: "1.3vw",fontWeight:"700" }}>لوحات حروفية</p>
          <div className="image-gallery">
            <img src={image1} alt="Image 1" />
            <img src={image2} alt="Image 2" />
            <img src={image3} alt="Image 3" />
            <img src={image4} alt="Image 4" />
          </div>
        </>
      )}
    </>
  );
};

export default Checker;
