import { useEffect, useState } from 'react';
import Search from '../Searchbar/Searchbar';
import * as API from '../../API/API';
import logo from '../../Image/logo.png';
import s from './header.module.css';

export default function Header() {
  const [countryName, setCountryName] = useState('');
  const [searchCountry, setSearchCountry] = useState([]);

  useEffect(() => {
    if (countryName === '') {
      return;
    }
    API.fetchDetails(countryName).then(res => console.log(res));
  }, [countryName]);

  const handleFormSubmit = name => {
    setCountryName(name);
  };

  return (
    <>
      <header>
        <div className={s.wrapper}>
          <img src={logo} alt="logo" />
          <h1 className={s.title}>Statistic</h1>
        </div>
        <Search onSubmit={handleFormSubmit} />
      </header>
    </>
  );
}
