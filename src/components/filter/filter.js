import React from "react";
import "./filter.css";

const Filter = (props) => {
  const { selectedYear, onSelectedYearChange } = props;

  return (
    <div className="filter">
      <div className="filter__control">
        <label>Filter by year</label>
        <select
          onChange={(evt) => onSelectedYearChange(Number(evt.target.value))}
          defaultValue={selectedYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export { Filter };
