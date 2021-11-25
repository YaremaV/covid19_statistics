import React from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ value, onHandleFilter }) {
  return (
    <input
      className={s.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search..."
      value={value}
      onChange={onHandleFilter}
    />
  );
}

Searchbar.propType = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
