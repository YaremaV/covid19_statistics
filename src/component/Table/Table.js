import React from 'react';
import './table.css';

export default function Table({ country, info, maxSort, minSort }) {
  return (
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
            <td>{idx + 1}</td>
            <td onClick={info}>{country.Country}</td>
            <td>{country.TotalConfirmed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
