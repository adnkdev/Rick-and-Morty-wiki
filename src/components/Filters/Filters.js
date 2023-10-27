import React from "react";
import Gender from "../Filters/Catergory/Gender";
import Species from "./Catergory/Species";
import Status from "./Catergory/Status";

const Filters = ({ setStatus, setGender, setSpecies, setPageNumber }) => {
  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber("");
    window.location.reload(false);
  };
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
        onClick={clear}
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
      </div>
    </div>
  );
};

export default Filters;
