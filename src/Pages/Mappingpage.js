import React, { useState } from "react";
import "../Styles/Liststyle.css";
import "../Styles/Mapping.css";
import "../Styles/homestyle.css"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Listdoct from "../api/Listdoct";

export const Mappingpage = () => {
 
  const [Doctors] = Listdoct.Doctor;
  // const [serial_number, setserial_number] = useState();
  const [doctorname, setdoctorname] = useState();
  const [workspace, setworkspace] = useState();
  const [speciality, setspeciality] = useState();
  // const [status, setstatus] = useState();
  // const [street_name, setstreet_name] = useState();
  const [area, setarea] = useState();
  // const [city, setcity] = useState();
  // const [state, setstate] = useState();
  // const [pincode, setpincode] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await Mappage({  
      doctorname,
      area,
      workspace,
      speciality,
    });
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
            id="filled-required"
            label="USER ID:"
            defaultValue=""
            variant="filled"
          />
          <TextField
            id="filled-required"
            label="DOCTOR ID:"
            defaultValue=""
            variant="filled"
          />
          {/* <br></br>
          <br></br> */}
           <Button style={{minWidth:"20px",minHeight:"10px" }} className="click" variant="contained">SAVE</Button>
        <br></br>
        <br></br>
        </div>
      </Box>
      <div>
        <table id="customers">
          <tr>
            <th>DOCTOR</th>
            <th>SPECIALITY</th>
            <th>AREA</th>
            <th>WORKSPACE</th>
            <th> </th>
          </tr>
          <tr>
          <td>{Doctors.doctorname}</td>
          <td>{Doctors.speciality}</td>
          <td>{Doctors.area}</td>
          <td>{Doctors.workspace}</td>
          <td>
          <label class="cont">
                <input type="checkbox" />
                <span class="check"></span>
              </label>
          </td>
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
