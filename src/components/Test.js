import React, { useState, useContext } from 'react'
import Table from 'react-bootstrap/Table'
export const Testing = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>room type</th>
          <th>included</th>
          <th>selct rooms</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>double room </td>

          <td>
            <tr><td>Breakfast</td></tr>
            <tr><td>Wifi</td></tr>
          </td>
          <td>
            <tr><td>0</td></tr>
            <tr><td>0</td></tr>
          </td>
          <td>
            <tr><td>120</td></tr>
            <tr><td>140</td></tr>
          </td>

        </tr>

      </tbody>
    </Table>
  )
}
{ /* <td>120euros</td>
<td>130euros</td> */ }
