import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../Styles/homestyle.css"
const Homepage = () => {
  return (
    <div className="container">
      <div className="center">
        <Stack spacing={2} direction="row">
          <Button style={{minWidth:"200px",minHeight:"70px"}} className="click" variant="contained">DOCTOR MASTER
          </Button>
          <Button style={{minWidth:"200px",minHeight:"70px"}}  className="click" variant="contained">SCHEDULER</Button>
        </Stack>
      </div>
    </div>
  );
};

export default Homepage;
