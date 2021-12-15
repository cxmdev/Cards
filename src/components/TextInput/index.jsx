import './styles.css';
import React from 'react';
import P from 'prop-types';

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

TextInput.propTypes = {
    searchValue: P.string.isRequired,
    handleChange: P.func.isRequired,
};
