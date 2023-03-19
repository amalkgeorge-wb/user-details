import Header from "../Header/header";
import SideMenu from "../SideMenu/sideMenu";
export default function Posts(props) {
  return (
    <div className="container">
      <div className="d-flex  mt-5">
        <SideMenu selected={"posts"}/>
        <div className="head">
          <Header title={"Posts"} setRenderDetails={props?.setRenderDetails}/>
          <div className="coming-soon">
              <h1 className="coming-text">coming soon</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
