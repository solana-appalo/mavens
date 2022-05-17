import React, { useState, useEffect } from "react";
import "../Styles/Liststyle.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

function Mappingpage() {
  const [isOpen, setIsOpen] = useState(false);
  const [doctors,setdoctorname] = useState([])
  const [doctors2,setdoctorname2] = useState([])
  const [serial_number, setserial_number] = useState("");
  const [area, setarea] = useState("");
  const [doctorname, setdoctor] = useState("");
  const [speciality, setspeciality] = useState("");
  const [workspace, setworkspace] = useState("");
  const [user_id, setuser_id] = useState("");
  const [doctor_id, setdoctor_id] = useState("");
  const [doctor_name, setdoctor_name] = useState("");
  // const [serialnumber, setserialnumber] = useState("");

  
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

useEffect(() => {
  const mappeddoctors = async () => {
    const res2 = await fetch("localhost:8080/mapping/getmapdetails");
    const getdata2 = await res2.json();
    setdoctorname2(getdata2);
    setuser_id(getdata2.user_id);
    setdoctor_id(getdata2.doctor_id);
    setdoctor_name(getdata2.doctor_name);
    
    // console.log(getdata);
};
mappeddoctors();
},[]);

  // async function mappeddoctors(item) {
  //   return fetch('localhost:8080/mapping/getmapdetails', {
  //     method: ' GET',
  //     headers: {
  //       'Accept':'application/json',
  //       'Content-Type': 'application/json'
  //     },
      
  //     body: JSON.stringify(item)
  //   })
  //     .then(data => data.json())
  //  }

  // function updatedoctor()
  // {
  //   let item={doctorname,serial_number,speciality,area,workspace,}
  //   console.warn("item",item)
  //   fetch(`http://localhost:8080/doctor/doctordetails/${serial_number}`, {
  //     method: 'PUT',
  //     headers:{
  //       'Accept':'application/json',
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify(item)
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.warn(resp)
  //       getdoctors(item.doctorname)
  //     })
  //   })
  // }

  const handleSubmit2 = () => {
    table({
      user_id,
      doctor_id,
      doctor_name
    });
  }

  // async function table(credentials) {
  //   return fetch('localhost:8080/map/mapdoctors', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(credentials)
  //   })
  //     .then(data => data.json())
  //     .then(data => this.setserialnumber({ serialnumber:data.user.serialnumber }))
  //     .then(data => this.setserial_number({ serial_number:data.doctor.serial_number }));
  //  }
   async function table(credentials) {
    return fetch('localhost:8080/mapping/mappingdoctors', {
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
            id="user_id"
            label="USER ID:"
            defaultValue=""
            variant="filled"
            onChange={e => setuser_id(e.target.value)}
          />
          <TextField
            id="doctor_id"
            label="DOCTOR ID:"
            defaultValue=""
            variant="filled"
            onChange={e => setdoctor_id(e.target.value)}
          />
           <TextField
            id="doctor_name"
            label="DOCTOR NAME:"
            defaultValue=""
            variant="filled"
            onChange={e => setdoctor_name(e.target.value)}
          />
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
    <div>
    <h1>MAPPING DETAILS</h1>
    <table id="customers">
        <tbody>
        <tr>
            <th>USER ID</th>
            <th>DOCTOR ID</th>
            <th>DOCTOR NAME</th>
      
          </tr>
          {
            doctors2.map((item, i) =>
            <tr key={i}>
              <td>{item.user_id}</td>
              <td>{item.doctor_id}</td>
              <td>{item.doctor_name}</td>
    
            </tr>
             )
          }
        </tbody>
       
      </table>
      
    </div>
  
    </div>
  );


}

export default Mappingpage;