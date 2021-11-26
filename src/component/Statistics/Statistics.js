import { useState, useEffect } from 'react';
import * as API from '../../API/API';
import Logo from '../Header/Logo';
import Modal from '../Modal/Modal';
import Table from '../Table/Table';
import Search from '../Searchbar/Searchbar';
import s from './statistics.module.css';
import health from '../../Image/Vector.png';
import recovered from '../../Image/recovered.png';
import died from '../../Image/died.png';

export default function Statistics() {
  const [country, setCountry] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    API.fetchSearch().then(res => setCountry(res.Countries));
  }, []);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  const getDetailInfo = e => {
    toggleModal();
    API.fetchDetails(e.target.innerText).then(res =>
      setDetail(res.slice(-1)[0]),
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredCountry = () => {
    const filterCase = filter.toLowerCase();

    return country.filter(country =>
      country.Country.toLowerCase().includes(filterCase),
    );
  };

  return (
    <>
      <header>
        <Logo />
        <Search value={filter} onHandleFilter={changeFilter} />
      </header>

      <Table country={getFilteredCountry()} info={getDetailInfo} />

      {showModal && (
        <Modal onClose={toggleModal}>
          <h1 className={s.modalTitle}>{detail.Country}</h1>
          <ul className={s.modalList}>
            <li className={s.items}>
              <img src={health} alt="" width="30" height="26" />
              <p className={s.name}>Total Confirmed</p>
              <p> {detail.Confirmed}</p>
            </li>
            <li className={s.items}>
              <img src={recovered} alt="" width="30" height="30" />
              <p className={s.name}>Total Deaths </p>
              <p>{detail.Deaths}</p>
            </li>
            <li className={s.items}>
              <img src={died} alt="" width="22.5" height="30" />
              <p className={s.name}>Total Recovered</p>
              <p> {detail.Recovered}</p>
            </li>
          </ul>

          <button className={s.modalButton} type="button" onClick={toggleModal}>
            Ok
          </button>
        </Modal>
      )}
    </>
  );
}
