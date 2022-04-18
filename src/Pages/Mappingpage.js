import React, { useState } from "react";
import "../Styles/Liststyle.css";
import "../Styles/Mapping.css";
import "../Styles/homestyle.css"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Mappingpage = () => {
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
            label="EMPLOYEE ID:"
            defaultValue=""
            variant="filled"
          />
          <TextField
            id="filled-required"
            label="EMPLOYEE NAME:"
            defaultValue=""
            variant="filled"
          />
          <br></br>
          <br></br>
           <Button style={{minWidth:"20px",minHeight:"30px" }} className="click" variant="contained">SAVE</Button>
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
            <td>Sols</td>
            <td>Cardiac</td>
            <td>Germany</td>
            <td>Hospital</td>
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
export default Mappingpage;
// hello