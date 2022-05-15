import React, { useState } from "react";
import "../Styles/Liststyle.css";
import "../Styles/Mapping.css";
import "../Styles/homestyle.css"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Listdoct from "../api/Listdoct";

async function table(credentials) {
  return fetch('localhost:8080/event/eventdetails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export const Mappingpage = () => {
 
  const [Doctors] = Listdoct.Doctors;
  const [serial_number, setserial_number] = useState();
  const [doctorname, setdoctorname] = useState();
  const [workspace, setworkspace] = useState();
  const [speciality, setspeciality] = useState();
  const [area, setarea] = useState();
  const [serialnumber, setserialnumber] = useState();  

  const handleSubmit2 = () => {
    
    console.warn("done");
    table({
      serial_number,
      serialnumber
      
    });
    window.location.href = '/home2'
  }
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <h1>DOCTOR EMPLOYEE MAPPING</h1>
          <TextField
            id="serialnumber"
            label="USER ID:"
            defaultValue=""
            variant="filled"
            onChange={e => setserialnumber(e.target.value)}
          />
          <TextField
            id="serial_number"
            label="DOCTOR ID:"
            defaultValue=""
            variant="filled"
            onChange={e => setserial_number(e.target.value)}
          />
          {/* <br></br>
          <br></br> */}
           <Button style={{minWidth:"20px",minHeight:"10px" }} 
           onClick={() => { handleSubmit2();}}
           className="click" variant="contained">SAVE</Button>
        <br></br>
        <br></br>
        </div>
      </Box>
      <div>
        <table id="customers">
          <tr>
            <th>DOCTOR ID</th>
            <th>DOCTOR NAME</th>
            <th>SPECIALITY</th>
            <th>AREA</th>
            <th>WORKSPACE</th>
          </tr>
          <tr>
          <th>{Doctors.serial_number}</th>
          <td>{Doctors.doctorname}</td>
          <td>{Doctors.speciality}</td>
          <td>{Doctors.area}</td>
          <td>{Doctors.workspace}</td>
          {/* <td>
          <label class="cont">
                <input type="checkbox" />
                <span class="check"></span>
              </label>
          </td> */}
        </tr>
        </table>
      </div>
    </div>
  );
};

async function Mappage(credentials) {
  return fetch('localhost:8080/map/getmappingdetails', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
export default Mappingpage;
