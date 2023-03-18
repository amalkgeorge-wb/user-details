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
    <div>
      <ul>
        {sideMenu.map((menuItem)=>(
            <li key={menuItem?.value} onClick={()=>navigate(menuItem?.url)}>{menuItem?.label}</li>
        ))}
      </ul>
    </div>
  );
}
