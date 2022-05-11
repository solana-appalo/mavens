import { useState } from "react";
export default function Viewdoct (Doctor) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
  
  return (
         <tr>
          <td>{Doctor.doctorname}</td>
          <td>{Doctor.speciality}</td>
          <td>{Doctor.area}</td>
          <td>{Doctor.workspace}</td>
          <td>
            <button class="buttonstyle" type="button" onClick={togglePopup}>
              View
            </button>
          </td>
        </tr> 
  )
}
// export default Viewdoct;