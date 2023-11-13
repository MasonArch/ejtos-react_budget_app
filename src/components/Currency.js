import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    return (
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" onChange = {handleChange}>
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">$ Dollar</Dropdown.Item>
        <Dropdown.Item href="#/action-2">£ Pound</Dropdown.Item>
        <Dropdown.Item href="#/action-3">€ Euro</Dropdown.Item>
        <Dropdown.Item href="#/action-4">₹ Ruppee</Dropdown.Item> 
      </Dropdown.Menu>
    </Dropdown>

    );

};

    export default Currency;