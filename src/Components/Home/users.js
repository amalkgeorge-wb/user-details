import { useNavigate } from "react-router-dom";
export default function Users(props) {
  const navigate = useNavigate();
  return (
    <div className="card-outer">
        <h6 className="card-header">Select an account</h6>
      <div>
        <ul className="user-list">
          {props?.userData?.users?.map((item) => (
            <li className="user"
              key={item?.name}
              onClick={() => {
                navigate("/profile"); localStorage.setItem('userData',  JSON.stringify(item));
              }}
            >
             <img src={item?.profilepicture} alt="avatar" className="avatar"/> {item?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
