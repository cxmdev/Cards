import "./styles.css";
import React from "react";

export var TextInput = function ({ searchValue, handleChange }) {
    return (
        <input
            className="text-input"
            onChange={handleChange}
            value={searchValue}
            type="search"
            placeholder="Type your search"
        />
    );
};
