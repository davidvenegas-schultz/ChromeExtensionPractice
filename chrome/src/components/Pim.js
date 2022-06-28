import { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

function Pim({key, name, open, setOpen}) {
  const [dropdown, setDropdown] = useState(false)
  const handleClick = () => setDropdown(!dropdown)
  const handleSelect = () => setOpen(!open)

  return (
    <div className='pim-wrapper' key={key}>
      <h2 className="pim-name">{name}</h2>
      {dropdown ?
        <BsChevronUp className="pim-caret" onClick={handleClick}/>
        : <BsChevronDown className="pim-caret" onClick={handleClick}/>
      }
      {dropdown ?
        <div className="pim-dropdown-wrapper">
          {/* TRANSITION FUCNTIONALITY */}
          <button onClick={handleSelect}>Select</button>
          <button onClick={handleClick}>Cancel</button>
        </div>
      : null}
    </div>
  )
}

export default Pim