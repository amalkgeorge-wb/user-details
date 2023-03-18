import Header from "../Header/header";
import SideMenu from "../SideMenu/sideMenu";
import Maps from "./map";
import UserProfile from "./userProfile";
import CompanyProfile from "./companyProfile";
import Address from "./address";
export default function Profile() {
  const userValue = JSON.parse(localStorage.getItem("userData"));
  return (
    <div>
      <Header title={"Profile"} />
      <div className=" d-flex justify-content-between align-items-center">
        <SideMenu />
        <div>
          <UserProfile userValue={userValue} />
          <CompanyProfile userValue={userValue} />
        </div>
        <div>
          <Address userValue={userValue} />
          <div>
            <Maps userValue={userValue} />
            <p>
              <span>Lat : {userValue?.address?.geo?.lat} </span>
              <span>Long : {userValue?.address?.geo?.lng}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
