import React from "react";
import { useSelector } from "react-redux";
import Device from "./Device";

export default function Devices() {
  const devices = useSelector(state => state.device.devices);
  const branch = useSelector(state => state.equipment.branch);
  const br = devices.filter((el, index) => {
    return el.branch === branch;
  })
  return (
    <ul>
      {br.map((device, index) => (
        <Device key={index} device={device} />
      ))}
    </ul>
  );
}
