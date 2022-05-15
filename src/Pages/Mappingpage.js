import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import "../Styles/Liststyle.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";

import { render } from "@testing-library/react";

function Mappingpage() {
  const [isOpen, setIsOpen] = useState(false);
  const [doctors,setdoctorname] = useState([])
  const [serial_number, setserial_number] = useState("");
  const [area, setarea] = useState("");
  const [doctorname, setdoctor] = useState("");
  const [speciality, setspeciality] = useState("");
  const [workspace, setworkspace] = useState("");
  const [serialnumber, setserialnumber] = useState("");
  

  
  useEffect(() => {
    const getdoctors = async () => {
      const res = await fetch("http://localhost:8080/doctor/getdoctordetails");
      const getdata = await res.json();
      setdoctorname(getdata);
      setdoctor(getdata.doctorname);
      setserial_number(getdata.serial_number);
      setspeciality(getdata.speciality);
      setarea(getdata.area);
      setworkspace(getdata.workspace);
      
      // console.log(getdata);
  };
  getdoctors();
},[]);


  async function getdoctors(item) {
    return fetch('http://localhost:8080/doctor/getdoctordetails', {
      method: ' GET',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify(item)
    })
      .then(data => data.json())
   }

  function updatedoctor()
  {
    let item={doctorname,serial_number,speciality,area,workspace,}
    console.warn("item",item)
    fetch(`http://localhost:8080/doctor/doctordetails/${serial_number}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getdoctors(item.doctorname)
      })
    })
  }

  const handleSubmit2 = () => {
    table({
      serial_number,
      serialnumber
    });
  }

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

  return (
    <div>
      {/* <input type="button" value="Click to Open Popup" onClick={togglePopup} /> */}
      
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
            // onChange={e => setserialnumber(e.target.value)}
          />
          <TextField
            id="serial_number"
            label="DOCTOR ID:"
            defaultValue=""
            variant="filled"
            // onChange={e => setserial_number(e.target.value)}
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
      <table id="customers">
        <tbody>
        <tr>
            <th>DOCTOR ID</th>
            <th>DOCTOR NAME</th>
            <th>SPECIALITY</th>
            <th>AREA</th>
            <th>WORKSPACE</th>
          </tr>
          {
            doctors.map((item, i) =>
            <tr key={i}>
              <td>{item.serial_number}</td>
              <td>{item.doctorname}</td>
              <td>{item.speciality}</td>
              <td>{item.area}</td>
              <td>{item.workspace}</td>
              
            </tr>
             )
          }
        </tbody>
       
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
          label="SERIAL NUMBER:"
          value={serial_number}
          onChange={(e)=>{setserialnumber(e.target.value)}}
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="DOCTOR NAME:"
          value={doctorname}
          onChange={(e)=>{setdoctor(e.target.value)}}
          defaultValue=""
          variant="filled"
        />
         
         <TextField
          id="filled-required"
          label="SPECIALITY:"
          value={speciality}
          onChange={(e)=>{setspeciality(e.target.value)}}
          defaultValue=""
          variant="filled"
        />
        
         <TextField
          id="filled-required"
          label="AREA:"
          value={area}
          onChange={(e)=>{setarea(e.target.value)}}
          defaultValue=""
          variant="filled"
        />
         <TextField
          id="filled-required"
          label="WORKSPACE:"
          value={workspace}
          onChange={(e)=>{setworkspace(e.target.value)}}
          defaultValue=""
          variant="filled"
        />
      </div>
    </Box>
      <button onClick={updatedoctor} >Update User</button> 
            </>
          }
        />
      )}
    </div>
  );
}

export default Mappingpage;