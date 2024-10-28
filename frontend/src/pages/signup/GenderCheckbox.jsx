import React from "react";

const GenderCheckbox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className="flex p-1 gap-2">
      <div className="form-control">
        <label htmlFor="male" className="cursor-pointer label gap-2">
          <span className="label-text text-gray-300">Male</span>
          <input
            id="male"
            type="checkbox"
            className="checkbox checkbox-error outline outline-red-500"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="female" className="cursor-pointer label gap-2">
          <span className="label-text text-gray-300">Female</span>
          <input
            id="female"
            type="checkbox"
            className="checkbox checkbox-error outline outline-red-500"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
