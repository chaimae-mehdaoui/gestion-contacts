import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "0.5rem",
        marginBottom: "1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    />
  );
}

export default SearchBar;