import React from "react";
import PropTypes from "prop-types";

TodoItemsRemaining.propTypes = {
  remainingItems: PropTypes.number.isRequired
};

function TodoItemsRemaining(props) {
    return (
        <span>{props.remainingItems} items remaining</span>
    )
}

export default TodoItemsRemaining;