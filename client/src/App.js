import React from "react";
import "./App.scss";
import { Route, NavLink } from "react-router-dom";
import { FormCartridge } from "./components/Cartridges/FormCartridges/FormCartridge";
import Equipment from "./components/Equipment/Equipment";
import FormDevices from "./components/Devices/FormDevices";

function App() {
  return (
    <div className="App">
      <nav className="__nav">
        <ul className="__nav__ul">
          <li>
            <NavLink to="/" exact activeClassName="activeLink link">
              <button className="btn btn-success">Главная страница</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/addFormCartridge" activeClassName="activeLink link">
              <button className="btn btn-success">
                Добавить картриджи в заправку
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/addFormEquipment" activeClassName="activeLink link">
              <button className="btn btn-success">
                Добавить технику в ремонт
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr style={{width: '40%', margin: '10px auto'}}/>
      <Route path={"/"} exact component={Equipment} />
      <Route path={"/addFormCartridge"} exact component={FormCartridge} />
      <Route path={'/addFormEquipment'} exact component={FormDevices}/>
    </div>
  );
}

export default App;
