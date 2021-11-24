import React, { useState } from 'react';

import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ onSubmit }) {
  const [name, setName] = useState('');

  const handleNameChange = EventTarget => {
    setName(EventTarget.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (name.trim() === '') {
      toast.error('Please Enter countries!', {
        position: 'top-left',
        theme: 'colored',
      });
      return;
    }
    onSubmit(name);
    setName('');
  };

  return (
    <form className={s.SearchForm} onSubmit={handleSubmit}>
      <input
        className={s.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search..."
        value={name}
        onChange={handleNameChange}
      />
    </form>
  );
}

Searchbar.propType = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
