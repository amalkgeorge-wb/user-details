import { useNavigate } from "react-router-dom";
export default function SideMenu() {
  const navigate= useNavigate()
  const sideMenu = [
    {
      url: "/profile",
      label: "Profile",
      value: "profile",
    },
    {
      url: "/posts",
      label: "Posts",
      value: "posts",
    },
    {
      url: "/gallery",
      label: "Gallery",
      value: "gallery",
    },
    {
      url: "/todo",
      label: "ToDo",
      value: "todo",
    },
  ];
  return (
    <div className="sidebar d-flex align-items-center justify-content-center">
      <ul className="menu-items">
        {sideMenu.map((menuItem)=>(
            <li className="menu-lists" key={menuItem?.value} onClick={()=>navigate(menuItem?.url)}>{menuItem?.label}</li>
        ))}
      </ul>
    </div>
  );
}
