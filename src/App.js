import React, { useState } from "react";
import "./App.css";
import Checker from "./componant/Checker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // State to store the Arabic name
  const [name, setName] = useState("");
  const [Show, setShow] = useState(true);

  // Function to handle input change
  const handleInputChange = (event) => {
    const arabicLettersRegex = /^[\u0600-\u06FF\s]+$/;
    if (arabicLettersRegex.test(event.target.value)) {
      setName(event.target.value); // Update the name state with the input value
    } else {
    }
  };

  // Function to catch the first letter
  const catchFirstLetter = () => {
    if (name.length > 0) {
      const firstLetter = name.trim().charAt(0); // Get the first letter of the name
      return firstLetter;
    } else {
      return null;
    }
  };

  const Submit = () => {
    if (name.trim() !== "") {
      setShow(false);
    } else {
      toast.error("أدخل أسمك باللغة العربية", {
        pposition: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <>
      {
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      }

      {Show && (
        <div class="input-group">
          <input
            type="text"
            value={name}
            class="input"
            placeholder="أدخل اسمك باللغة العربية"
            onChange={handleInputChange}
            autocomplete="off"
          />
          <input
            class="button--submit"
            value="تحقق"
            onClick={Submit}
            type="submit"
          />
        </div>
      )}
      {!Show && <Checker firstLetter={catchFirstLetter()} />}
    </>
  );
}

export default App;
