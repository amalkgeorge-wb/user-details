import Header from "../Header/header";
import SideMenu from "../SideMenu/sideMenu";
export default function Gallery(props) {
  return (
    <div className="container">
      <div className=" d-flex  mt-5 ">
        <SideMenu selected={"gallery"} />
        <div className="head">
          <Header
            title={"Gallery"}
            setRenderDetails={props?.setRenderDetails}
          />
          <div className="coming-soon">
            <h1 className="coming-text">coming soon</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
