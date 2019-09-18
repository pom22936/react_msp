import React, { useState, useEffect } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const getdatatable = async () => await axios.get('https://e2015f43-ffd3-4dda-b9d9-99f0322a8cb1.mock.pstmn.io/incident');

const Dash_incident = () => {
  let [table, setTable] = useState([])

  useEffect(() => {
    getdatatable().then(res => {
      setTable(res.data)
    })
  }, []);

  //style jsx
  const marginL = {
    marginLeft: 'auto',
    position:'relative',
    // top:'35px'
  }

  const options = {
    searchPosition: 'left'  // right or left
  };

  return (
    <div>
      <ButtonToolbar >
        <Link to='/incident' style={marginL}>
          <Button variant="info"> <FontAwesomeIcon icon={faPlusCircle} size='1x' style={{ color: 'white' }} /> Create Incident</Button>
        </Link>
      </ButtonToolbar>
      <BootstrapTable data={table} options={options} pagination={true} striped hover condensed search>
        <TableHeaderColumn dataField='id' dataSort={true} isKey>ID <FontAwesomeIcon icon={faSort} size='1x' style={{ color: 'white' }} /></TableHeaderColumn>
        <TableHeaderColumn dataField='customer_name' dataSort={true}>Customer Name</TableHeaderColumn>
        <TableHeaderColumn dataField='subject' dataSort={true}>Subject</TableHeaderColumn>
        <TableHeaderColumn dataField='createdDate' dataSort={true}>Created Date</TableHeaderColumn>
        <TableHeaderColumn dataField='Status' dataSort={true}>Status</TableHeaderColumn>
      </BootstrapTable>
    </div>
  )
}

export default Dash_incident