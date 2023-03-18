export default function UserProfile(props) {
  const { profilepicture, name, username, email, phone, website } =
    props?.userValue;
  return (
    <div className="user-data">
      <div className="avatar-head">
        <img className="avatar" src={profilepicture} alt="profile" />
        <h4 className="mt-2 user-name">{name}</h4>
      </div>
      <div>
        <ul>
          <li>
            <h6>
              Username : <span>{username}</span>
            </h6>
          </li>
          <li>
            <h6>
              e-mail : <span>{email}</span>
            </h6>
          </li>
          <li>
            <h6>
              Phone : <span>{phone}</span>
            </h6>
          </li>
          <li>
            <h6>
              Website : <span>{website}</span>
            </h6>
          </li>
        </ul>
      </div>
    </div>
  );
}
