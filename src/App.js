import {Routes, Route} from 'react-router-dom';
import './App.css';
import Loginpage from './Pages/Loginpage';
import Homepage from './Pages/Homepage';
import Popuppage from './Pages/Popuppage';
import Homepage2 from './Pages/Homepage2';
import Mappingpage from './Pages/Mappingpage';


function App() {
  return (
    <div className="App">
     <Routes>
     <Route exact path="/login" element={<Loginpage/>}></Route>
     {/* <Route exact path="/signup" element={<Signuppage/>}></Route> */}
     <Route exact path="/home" element={<Homepage/>}></Route>
     <Route exact path="/pop" element={<Popuppage/>}></Route>
     <Route exact path="/home2" element={<Homepage2/>}></Route>
     <Route exact path="/map" element={<Mappingpage/>}></Route>
    
     </Routes>
    </div>
  );
}

export default App;
