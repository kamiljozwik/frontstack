import React from "react";

export const Table = () => {
  return (
    <table className="table-simple">
      <thead>
        <tr>
          <th>Skąd</th>
          <th>Dokąd</th>
          <th>Jakiego komponentu użyć?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>React Router</td>
          <td>React Router</td>
          <td>
            <code>&lt;Link /&gt;</code> z React Routera
          </td>
        </tr>
        <tr>
          <td>React Router</td>
          <td>Next.js</td>
          <td>
            <code>&lt;Link /&gt;</code> z Next.js
          </td>
        </tr>
        <tr>
          <td>Next.js</td>
          <td>React Router</td>
          <td>
            <code>&lt;Link /&gt;</code> z Next.js
          </td>
        </tr>
        <tr>
          <td>Next.js</td>
          <td>Next.js</td>
          <td>
            <code>&lt;Link /&gt;</code> z Next.js
          </td>
        </tr>
      </tbody>
    </table>
  );
};
