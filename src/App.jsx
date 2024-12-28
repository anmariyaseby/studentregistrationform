import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import backgroundImage from './assets/bg.jpg';
import "./App.css";
import { useState } from "react";

function App() {
  const [fullname, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(""); 
  const [selectedGender, setSelectedGender] = useState("female"); 
  const [dob, setDob] = useState("");

  const [invalidfullname, setInvalidFullName] = useState(false);
  const [invalidaddress, setInvalidAddress] = useState(false);
  const [invalidlocation, setInvalidLocation] = useState(false);
  const [invalidmobile, setInvalidMobile] = useState(false);
  const [invalidemail, setInvalidEmail] = useState(false);
  const [invalidpincode, setInvalidPincode] = useState(false);
  const [invaliddob,setInvalidDob]= useState(false)

  // validate input
  const validateInput = (input) => {
    const { name, value } = input;
    if (name === "fullname") {
      if (value.match(/^[A-Za-z\s]+$/)) {
        setInvalidFullName(false);
      } else {
        setInvalidFullName(true);
      }
    } else if (name === "address") {
      if (value.match(/^[A-Za-z\s]+$/)) {
        setInvalidAddress(false);
      } else {
        setInvalidAddress(true);
      }
    } else if (name === "location") {
      if (value.match(/^[A-Za-z]+$/)) {
        setInvalidLocation(false);
      } else {
        setInvalidLocation(true);
      }
    } else if (name === "email") {
      if (value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        setInvalidEmail(false);
      } else {
        setInvalidEmail(true);
      }
    } else if (name === "pincode") {
      if (value.match(/^\d+$/)) {
        setInvalidPincode(false);
      } else {
        setInvalidPincode(true);
      }
    } else if (name === "mobile") {
      if (value.match(/^\d+$/)) {
        setInvalidMobile(false);
      } else {
        setInvalidMobile(true);
      }
    }
  };

  // submit button
  const submitbutton = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  
      
    if(fullname && address && location && mobile && email && pincode && selectedCourse && selectedGender && dob){
      alert(`
      Registration Completed Successfully
      Full Name : ${fullname}
      Address : ${address}
      Location : ${location}
      Mobile : ${mobile}
      Pin Code : ${pincode}
      Date of Birth : ${selectedCourse}
      `)
    }
    
    else{
      alert('please fill form completly')
    }
  };

  // reset button
  const resetbutton = () => {
    setFullName("");
    setEmail("");
    setAddress("");
    setMobile("");
    setPincode("");
    setLocation("");
    setDob("");
    setSelectedCourse(""); // Reset the course dropdown
    setSelectedGender("female"); // Reset the gender radio button
    setInvalidFullName(false);
    setInvalidAddress(false);
    setInvalidEmail(false);
    setInvalidMobile(false);
    setInvalidPincode(false);
    setInvalidLocation(false);
  };

  return (
    <>
      <div className=" d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
        <div id="maindiv" className="p-4 rounded " style={{ maxWidth: "900px", width: "100%" }}>
          <h2 className="text-center text-dark ">STUDENT REGISTRATION FORM</h2>
          <hr style={{color:"black", border: '2px solid black'}} className="mb-3"/>
          <div className="row g-4">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12">
              <form>
                <div className="mb-3">
                  <TextField
                    name="fullname"
                    value={fullname}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      validateInput(e.target);
                    }}
                    className="w-100"
                    id="FullName-basic"
                    label="Full Name"
                    variant="outlined"
                  />
                  {invalidfullname && <p className="ms-2" style={{ fontWeight: '200', color: '#d00000', fontSize: '15px', fontFamily: 'serif' }}>Name must contain only letters and spaces</p>}
                </div>
                <div className="mb-3">
                  <TextField
                    name="address"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      validateInput(e.target);
                    }}
                    className="w-100"
                    id="Address-basic"
                    label="Address"
                    variant="outlined"
                  />
                  {invalidaddress && <p className="ms-2" style={{ fontWeight: '200', color: '#d00000', fontSize: '15px', fontFamily: 'serif' }}>Address must contain only letters and spaces</p>}
                </div>
                <div className="mb-3">
                  <TextField
                    name="location"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      validateInput(e.target);
                    }}
                    className="w-100"
                    id="Location-basic"
                    label="Location"
                    variant="outlined"
                  />
                  {invalidlocation && <p className="ms-2" style={{ fontWeight: '200', color: '#d00000', fontSize: '15px', fontFamily: 'serif' }}>Location must contain only letters and spaces</p>}
                </div>
                <div className="mb-3">
                  <TextField
                    name="mobile"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                      validateInput(e.target);
                    }}
                    className="w-100"
                    id="Mobile"
                    label="Mobile"
                    variant="outlined"
                  />
                  {invalidmobile && <p className="ms-2" style={{ fontWeight: '200', color: '#d00000', fontSize: '15px', fontFamily: 'serif' }}>Invalid Mobile Number</p>}
                </div>
                <div className="mb-3">
                  <TextField
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateInput(e.target);
                    }}
                    className="w-100"
                    id="Email-basic"
                    label="Email"
                    variant="outlined"
                  />
                  {invalidemail && <p className="ms-2" style={{ fontWeight: '200', color: '#d00000', fontSize: '15px', fontFamily: 'serif' }}>Invalid Email Address</p>}
                </div>
                <div className="mb-3">
                  <TextField
                    name="pincode"
                    value={pincode}
                    onChange={(e) => {
                      setPincode(e.target.value);
                      validateInput(e.target);
                    }}
                    className="w-100"
                    id="Pincode-basic"
                    label="Pin-Code"
                    variant="outlined"
                  />
                  {invalidpincode && <p className="ms-2" style={{ fontWeight: '200', color: '#d00000', fontSize: '15px', fontFamily: 'serif' }}>Invalid Pin Code</p>}
                </div>
              </form>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 col-md-12">
              <form>
                <div className="mb-4">
                  <h6>Date of Birth</h6>
                  <input
                    name="dOB"
                    type="date"
                    className="form-control w-100"
                    onChange={(e) => setDob(e.target.value)}
                    value={dob}
                    style={{ background: "rgba(255, 255, 255, 0.9)"}}
                  />
                </div>
                <div className="mb-4">
                  <h6>Gender</h6>
                  <RadioGroup
                    row
                    value={selectedGender} // bind value to state
                    onChange={(e) => setSelectedGender(e.target.value)} // handle change
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </div>
                <div className="mb-4">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectedCourse} // bind value to state
                      onChange={(e) => setSelectedCourse(e.target.value)} // handle change
                      label="Course"
                    >
                      <MenuItem value="Biology">Biology</MenuItem>
                      <MenuItem value="Computer Science">Computer Science</MenuItem>
                      <MenuItem value="Commerce">Commerce</MenuItem>
                      <MenuItem value="BCA">BCA</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <Button type="submit" onClick={submitbutton} disabled={invalidfullname || invalidlocation || invalidaddress || invalidemail || invalidmobile || invalidpincode} className="w-100 mb-4 p-3"  variant="contained">
                    Submit
                  </Button>
                  <Button onClick={resetbutton} className="w-100 p-3" variant="outlined">
                    Reset
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
