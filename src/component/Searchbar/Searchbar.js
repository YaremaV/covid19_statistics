import React from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import searchIcon from '../../Image/search.png';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ value, onHandleFilter }) {
  return (
    <form>
      <input
        className={s.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search..."
        value={value}
        onChange={onHandleFilter}
      />
      <img className={s.icon} src={searchIcon} alt="" width="40" height="40" />
    </form>
  );
}

Searchbar.propType = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
