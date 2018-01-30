import React from "react";
import dota2 from "./Dota2_logo.png"
import world from "./world.svg";
import team from "./team.svg";
import { Link } from "react-router-dom";
import "./App.css"

const Sidebar = () => (

      <div className="sidebar">
      <nav>
      <ul>
        <Link to="/">
          <li>
            <img src={dota2}  className="dota2-logo" alt="logo" />
          </li>
        </Link>
         <Link to="/heroes">
          <li>
            <img src={team} className="teams-logo" alt="logo" />
          </li>
        </Link>
        <Link to="/live-games">
          <li>
            <img src={world} className="world-logo" alt="logo" />
          </li>
        </Link>
      </ul>
    
    </nav>
    
  </div>
)



export default Sidebar;
