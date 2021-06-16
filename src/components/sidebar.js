import "../App.css";
import TransitionsModal from "./modal";
import { useState } from "react";
import logo from '../icons/logo.png';


function Sidebar() {
   
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="sidebar center">
<img src={logo} alt="logo" style={{width:'100px'}}/>
<h1>iContact</h1>
<p>Version 1.0</p>
          <button type="button" onClick={handleOpen} className="card__button">
        Add Contact
      </button>
  
      <TransitionsModal handleOpen={handleOpen} handleClose={handleClose} open={open} />
    </div>
  );
}
export default Sidebar;
