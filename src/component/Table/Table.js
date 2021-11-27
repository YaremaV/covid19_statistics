import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { COLUMNS } from '../columns';
import './table.css';

export default function Table({ country, info }) {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => country, [country]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy,
    );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            <th>№</th>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr key={row.index} {...row.getRowProps}>
              <td> {row.index + 1}</td>
              {row.cells.map(cell => {
                return (
                  <td onClick={info} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
