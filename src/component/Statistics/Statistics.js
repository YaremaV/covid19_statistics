import { useState, useEffect } from 'react';
import * as API from '../../API/API';
import Modal from '../Modal/Modal';

export default function Statistics() {
  const [country, setCountry] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState([]);

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

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Country</th>
            <th>Total Confirmed</th>
          </tr>
        </thead>
        <tbody>
          {country.map((country, idx) => (
            <tr key={country.ID}>
              <td>{idx}</td>
              <td onClick={getDetailInfo}>{country.Country}</td>
              <td>{country.TotalConfirmed}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <Modal onClose={toggleModal}>
          {console.log(detail.Country)}
          <h1>{detail.Country}</h1>
          <ul>
            <li>
              <p>Total Confirmed: {detail.Confirmed}</p>
            </li>
            <li>
              <p>Total Deaths: {detail.Deaths}</p>
            </li>
            <li>
              <p>Total Recovered: {detail.Recovered}</p>
            </li>
          </ul>
          <button type="button" onClick={toggleModal}>
            Ok
          </button>
        </Modal>
      )}
    </>
  );
}
