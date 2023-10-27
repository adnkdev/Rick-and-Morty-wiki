import React from "react";
import FilterBTN from "./FilterBTN";

const Gender = ({ setGender, setPageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-1">
          {genders.map((items, index) => (
            <FilterBTN task={setGender} setPageNumber={setPageNumber} name="Gender" key={index} index={index} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
