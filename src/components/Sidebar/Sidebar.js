import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="dashboard">
        <div>
          <img className="img1" src="Ellipse.png" alt="" />
          <img className="img2" src="D.png" alt="" />
        </div>
        <p className="dashboardtitle"> DASHBOARD</p>
      </div>

      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li key={key} className="row">
              <div id="img">{val.img}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
