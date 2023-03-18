export default function Header(props){
    const userValue = JSON.parse(localStorage.getItem('userData'));
    console.log(userValue);
    return(
        <div className="header d-flex justify-content-between">
            <h5 className="header-title">
            {props?.title}
            </h5>
            <div> <img src={userValue?.profilepicture} alt="avatar" className="avatar"/> <span>{userValue?.name}</span></div> 
        </div>
    )
}