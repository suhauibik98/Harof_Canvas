import React ,{ useState }from "react";
import { Link } from "react-router-dom";




const InputUser = () => {
    const [name, setName] = useState("");
    const [firstLetter, setFirstLetter] = useState("");
  
    // Function to handle input change
    const handleInputChange = (event) => {
      setName(event.target.value); // Update the name state with the input value
      
    };
  
    // Function to catch the first letter
    const catchFirstLetter = () => {
      if (name.length > 0) {
        const letter = name.charAt(0); // Get the first letter of the name
        setFirstLetter(letter); // Store the first letter in state
    }
    };
  return (
      <div>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name in Arabic"
      />
      {/* Pass the first letter as a parameter when navigating */}
      <Link to='/Cheker' state={{firstLetter:firstLetter}}  onClick={catchFirstLetter}>Get First Letter</Link>
    </div>
  );
};

export default InputUser;
