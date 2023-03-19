import Header from "../Header/header";
import SideMenu from "../SideMenu/sideMenu";
export default function ToDo(props) {
  return (
    <div className="container">
      <div className=" d-flex  mt-5">
        <SideMenu selected={"todo"} />
        <div className="head">
          <Header title={"ToDo"} setRenderDetails={props?.setRenderDetails} />
          <div className="coming-soon">
            <h1 className="coming-text">coming soon</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
