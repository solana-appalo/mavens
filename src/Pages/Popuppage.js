import React, { useState } from "react";
import Popup from "./Popup";
import "../Styles/Liststyle.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Listdoct from "../api/Listdoct";
import Viewdoctors from "../mappingpages/Viewdoctors"


export default function Popuppage() {

  const [serial_number, setSerial_number] = useState();
  const [doctorname, setDoctorname] = useState();
  const [workspace, setWorkspace] = useState();
  const [speciality, setSpeciality] = useState();
  const [status, setStatus] = useState();
  const [street_name, setStreet_name] = useState();
  const [area, setArea] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [pincode, setPincode] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await Popupwindow({
      serial_number,
      doctorname,
      workspace,
      speciality,
      status,
      street_name,
      area,
      city,
      state,
      pincode,
    });
  }
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
        <Viewdoctors/>
      </table>
      {isOpen && (
        <Popup
          content={
            <>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="serial_number"
                    label="SERIAL ID:"
                    defaultValue=""
                    variant="filled"
                    onChange={e => setSerial_number(e.target.value)}
                  />
                  <TextField
                    id="doctorname"
                    label="DOCTOR NAME:"
                    defaultValue=""
                    variant="filled"
                    onChange={e => setDoctorname(e.target.value)}
                  />
                  <TextField
                    id="workspace"
                    label="WORKSPACE:"
                    defaultValue=""
                    variant="filled"
                    onChange={e => setWorkspace(e.target.value)}
                  />
                  <TextField
                    id="speciality"
                    label="SPECIALTY:"
                    defaultValue=""
                    variant="filled"
                    onChange={e => setSpeciality(e.target.value)}
                  />
                  <TextField
                    id="status"
                    label="STATUS:"
                    defaultValue=""
                    variant="filled"
                    onChange={e => setStatus(e.target.value)}
                  />
                  <TextField
                    id="street_name"
                    label="STREET NAME:"
                    defaultValue=""
                    variant="filled"
                    onChange={e => setStreet_name(e.target.value)}
                  />
                  <TextField
                    id="area"
                    label="AREA:"
                    defaultValue=""
                    variant="filled"
                    onChange={e => setArea(e.target.value)}
                  />
                  <TextField
                    id="city"
                    label="CITY:"
                    defaultValue=""
                    variant="filled"
                    onChange={e => setCity(e.target.value)}
                  />
                  <TextField
                    id="state"
                    label="STATE:"
                    defaultValue=""
                    variant="filled"
                    onChange={e => setState(e.target.value)}
                  />
                  <TextField
                    id="pincode"
                    label="PINCODE:"
                    defaultValue=""
                    variant="filled"
                    onChange={e => setPincode(e.target.value)}
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

async function Popupwindow(credentials) {
  return fetch('localhost:8080/doctor/doctordetails/{serialNumber}', {
    method: 'PUT',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => {
          return response.json()
  }).then(json => {
    console.log(json)
    this.setState({
      token:json
    });
  })
}