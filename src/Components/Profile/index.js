import Header from "../Header/header";
import SideMenu from "../SideMenu/sideMenu";
import Maps from "./map";
import UserProfile from "./userProfile";
import CompanyProfile from "./companyProfile";
export default function Profile() {
    const userValue = JSON.parse(localStorage.getItem('userData'));
  return (
    <div>
      <Header 
      title={"Profile"}/>
      <SideMenu />
      <UserProfile userValue={userValue}/>
      <CompanyProfile userValue={userValue}/>
      <div>
        <Maps userValue={userValue}/>
        <p><span>Lat : {userValue?.address?.geo?.lat} </span><span>Long : {userValue?.address?.geo?.lng}</span></p>
      </div>
    </div>
  );
}
