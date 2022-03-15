import React from "react";
import PropTypes from "prop-types";

CheckAll.propTypes = {
  checkAll: PropTypes.func.isRequired,
};

function CheckAll(props) {
  return (
    <div onClick={props.checkAll} className="button">
      Check Todos
    </div>
  );
}

export default CheckAll;
