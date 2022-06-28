import { BsChevronDown } from 'react-icons/bs'

function Pim({key, name}) {
  return (
    <div className='pim-wrapper' key={key}>
      <h2 className="pim-name">{name}</h2>
      <BsChevronDown alt="->" className="pim-caret" />
    </div>
  )
}

export default Pim