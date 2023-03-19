import Header from "../Header/header";
import SideMenu from "../SideMenu/sideMenu";
import Maps from "./map";
import UserProfile from "./userProfile";
import CompanyProfile from "./companyProfile";
import Address from "./address";
export default function Profile(props) {
  const userValue = JSON.parse(localStorage.getItem("userData"));
  return (
    <div className="container">
      <div className="d-flex mt-5">
        <SideMenu selected={"profile"} />
        <div>
          <Header
            title={"Profile"}
            setRenderDetails={props?.setRenderDetails}
          />
          <div className=" d-flex justify-content-between align-items-center">
            <div className="profile-left">
              <UserProfile userValue={userValue} />
              <CompanyProfile userValue={userValue} />
            </div>
            <div className="profile-right">
              <Address userValue={userValue} />
              <div className="map">
                <Maps userValue={userValue} />
                <p className="coordinates">
                  <span>Lat : {userValue?.address?.geo?.lat} </span>
                  <span>Long : {userValue?.address?.geo?.lng}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
