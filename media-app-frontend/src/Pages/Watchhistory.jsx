import React from 'react'
import { FaBackward } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";
function Watchhistory() {
  return (
    <div>
      <div className="row">
        <div className="col-5"><h1>Watch History</h1></div>
        <div className="col-2">
          <Link to={'/'}>
          <h5>Back to Home <FaBackward /></h5>
          </Link>
        </div>
      </div>

      <div className="row">
      <Table striped="columns">
      <thead>
        <tr>
          <th><b>SLno</b></th>
          <th><b>Caption</b></th>
          <th><b>URL</b></th>
          <th><b>Timestamp</b></th>
          <th><b>Action</b></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <button className='btn btn-danger
          text-white mx-3'><FaTrash /></button>
        </tr>
      </tbody>
    </Table>        
      </div>
    </div>
  )
}

export default Watchhistory