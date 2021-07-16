import React from "react";
import Devices from "../Devices/Devices";
import SelectBranch from "../Cartridges/formComponent/SelectBranch";
import SelectBranchRequest from "../Cartridges/SelectBranchRequest/SelectBranchRequest";
import "./Equipment.scss";
import { ADD_BRANCH_CARTRIDGES, DEVICE_FILTER_BRANCH } from "../../redux/types";

export default function Equipment() {
  return (
    <div className="equipment">
      <SelectBranch add={ADD_BRANCH_CARTRIDGES} filter={DEVICE_FILTER_BRANCH} />
      <hr style={{ width: "70%" }} />
      <div className="equipment__cartridges">
      <h3>Картриджи в заправку</h3>
        <SelectBranchRequest />
      </div>
      <hr style={{ width: "90%" }} />
      <div className="__devices">
        <h3>Техника в ремонт</h3>
        <Devices />
      </div>
    </div>
  );
}
