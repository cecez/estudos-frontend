import PropTypes from "prop-types";

TodoFilters.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

function TodoFilters(props) {
  const setFilter = (filter) => {
    props.setFilter(filter);
  };

  return (
    <div>
      <button
        className={`button filter-button ${
          props.filter === "all" ? "filter-button-active" : ""
        }`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`button filter-button ${
          props.filter === "active" ? "filter-button-active" : ""
        }`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className={`button filter-button ${
          props.filter === "completed" ? "filter-button-active" : ""
        }`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilters;
