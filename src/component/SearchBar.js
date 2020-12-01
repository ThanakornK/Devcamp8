import React, { Component } from 'react'
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import './../styles/SearchBar.css'

class SearchBar extends Component {

  render () {
    return (
      <div className='searchbar-container'>
            <InputGroup className="FormInput">
                <FormControl className="searchField" placeholder="Search by Keyword" />
                <Button className="enterBtn">Search</Button>
            </InputGroup>
      </div>
    )
  }
}

export default SearchBar