import React, { useState } from "react";
import Popup from "./Popup";
import "../Styles/Liststyle.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* <input type="button" value="Click to Open Popup" onClick={togglePopup} /> */}
      <h1>List Doctors</h1>

      <table id="customers">
        <tr>
          <th>DOCTOR</th>
          <th>SPECIALITY</th>
          <th>AREA</th>
          <th>WORKSPACE</th>
          <th>View</th>
        </tr>
        <tr>
          <td>Sols</td>
          <td>Cardiac</td>
          <td>Germany</td>
          <td>Hospital</td>
          <td>
            <button class="buttonstyle" type="button" onClick={togglePopup}>
              View
            </button>
          </td>
        </tr>
       
      </table>
      {isOpen && (
        <Popup
          content={
            <>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-required"
          label="SERIAL ID:"
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="DOCTOR NAME:"
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="WORKSPACE:"
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="SPECIALTY:"
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="STATUS:"
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="STREET NAME:"
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="AREA:"
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="CITY:"
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="STATE:"
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="PINCODE:"
          defaultValue=""
          variant="filled"
        />
      </div>
    </Box>
              <button>Update</button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default App;
