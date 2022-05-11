import { useState, useEffect } from "react";
import axios from 'axios';

function Listdoct() {
  const [Doctors, setDoctors] = useState([]);

  const getDoctors = async () => {
    const res = await axios.get(
      "localhost:8080/doctor/getdoctordetails/"
    );
    setDoctors(res.data);
  };
  useEffect(() => {
    getDoctors();
  }, []);

  return {
    Doctors: [Doctors, setDoctors],
  };
}

export default Listdoct;