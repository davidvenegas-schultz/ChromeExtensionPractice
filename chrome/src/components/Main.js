import { useState } from 'react'
import Pim from './Pim.js'
import fetchitLogo from '../images/fetchitLogo.png'

function Main({search, handleSearch, open, setOpen}) {
  const [filteredSearch, setFilteredSearch] = useState(search)
  // SEARCH FUNCTIONALITY

  return (
    <div className="main-container">
      <div className="main-wrapper">
        <div className="main-header">
          <img src={fetchitLogo} alt="FetchIT" className="main-logo" />
          <h2 className="main-title">FetchIT Chrome Extension</h2>
        </div>
        <div className="main-content">
          <div className="main-search-section">

            <form className='income-search-form'>
              <input onChange={handleSearch} type="text" placeholder='Search PIMs...' className='main-searchbar' />
            </form>
            {filteredSearch.map(i => (
              <Pim key={i.id} name={i.name} open={open} setOpen={setOpen} />
            ))}

          </div>
          <div className="main-PIM-section"></div>
        </div>
        <div className="main-footer">
          <p>For help or development requests contact Schultz Technology at <i>davidv@schultztechnolgy.com</i></p>
        </div>
      </div>
    </div>
  )
}

export default Main