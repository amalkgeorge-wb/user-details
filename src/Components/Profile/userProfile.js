export default function UserProfile(props) {
  const { profilepicture, name, username, email, phone, website } =
    props?.userValue;
  return (
    <div className="user-data">
      <div className="avatar-head">
        <img className="avatar" src={profilepicture} alt="profile" />
        <h4 className="mt-2 user-name">{name}</h4>
      </div>
      <div className="d-flex menu-items ms-5">
        <div>
            <h6>Username</h6>
            <h6>e-mail</h6>
            <h6>Phone</h6>
            <h6>Website</h6>
        </div>
        <div>
            <h6 className="ms-2">: <span className="right-element ms-2" >{username}</span></h6>
            <h6 className="ms-2">:<span className="right-element ms-2">{email}</span></h6>
            <h6 className="ms-2">:<span className="right-element ms-2">{phone}</span></h6>
            <h6 className="ms-2">:<span className="right-element ms-2">{website}</span></h6>
        </div>
        </div>
    </div>
  );
}
