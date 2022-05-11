//useContext hook is used and it is imported from react
import React, { useContext } from "react";
import Viewdoct from "./Viewdoct";
//material UI imports
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {useState, useEffect} from "react";
import DoctorAPI from "../api/Listdoct";

export default function Doctor (){
  const [Doctors] = DoctorAPI.Doctor;

  return (
    <Container>
    
      <Grid container spacing={2}>
        {Doctors.map((Doctor) => {
          return (
            <Grid item key={Doctor.id} xs={8} md={6} lg={3}>
              <Viewdoct key={Doctor.id} Doctor={Doctor} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

// export default Doctor;