import { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
export default function Header(props) {
  const navigate = useNavigate();
  const [randomUser,setRandomUser]= useState(null)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignOut = () => {
    handleClose();
    navigate("/");
  };
  const userValue = JSON.parse(localStorage.getItem("userData"));
  const myData = JSON.parse(localStorage.getItem("myData"));

  function MinimumData(myData) {
    const myArray = myData&&myData?.users?.filter(
      (item) => item?.name !== userValue?.name
    );
    const randomUserIndex1 = Math.floor(Math.random() * myArray.length);
    const randomUserIndex2 = Math.floor(Math.random() * myArray.length);

    const randomFruits = myArray
      .splice(randomUserIndex1, 1)
      .concat(myArray.splice(randomUserIndex2, 1));
      setRandomUser(randomFruits)
  }
  console.log("myarr", userValue);
useEffect(()=>{
    MinimumData(myData)
},[])
  return (
    <div className="header d-flex justify-content-between">
      <h5 className="header-title">{props?.title}</h5>
      <div onClick={handleClick}>
        {" "}
        <img
          src={userValue?.profilepicture}
          alt="avatar"
          className="avatar"
        />{" "}
        <span>{userValue?.name}</span>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx:{borderRadius:"20px"}
        }}
      >
        <MenuItem onClick={handleClose}>
          <div className="menu-head">
            <img className="menu-avatar" src={userValue?.profilepicture} />
            <h6 className="u-name">{userValue?.name}</h6>
            <p className="u-email">{userValue?.email}</p>
          </div>
        </MenuItem>
        {randomUser?.map((item)=>(<MenuItem key={item?.name} onClick={()=>{props?.setRenderDetails(item); handleClose();localStorage.setItem('userData',  JSON.stringify(item))}}>
            <div className="menu-users">
                <h6 className="u-name">
                {item?.name}
                </h6>
                <p className="u-email">
                {item?.email}
                </p>
            </div>
            </MenuItem>))}
        <MenuItem onClick={handleSignOut}>
          <button className="sign-out-btn">Sign out</button>
        </MenuItem>
      </Menu>
    </div>
  );
}
