import React from "react";
import PropTypes from "prop-types";

export default function Xeproperties(props) {
  return (
    <div>
      <h2>{props.defect}</h2>
      <ul>
        <li>{props.num}</li>
        <li>{props.char}</li>
        <li>{props.bol ? "truly" : "false"}</li>
        <li>{props.arr.join(",")}</li>
        <li>{props.obj.name}</li>
        <li>{props.arr.map(props.fun).join(",")}</li>
      </ul>
    </div>
  );
}

Xeproperties.defaultProps = {
  defect: "my pops",
};
Xeproperties.propTypes = {
  num: PropTypes.number,
};
