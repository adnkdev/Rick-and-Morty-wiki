import React from "react";

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {
  return (
    <>
      <style jsx>{`
        .x:checked + label {
          background-color: #0b5ed7;
          color: white;
        }

        input[type="radio"] {
          display: none;
        }
      `}</style>
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          onClick={() => {
            setPageNumber(1);
            task(items);
          }}
        />
        <label class="btn btn-outline-primary" for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </>
  );
};

export default FilterBTN;
