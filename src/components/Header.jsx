import { useState } from "react"
import Showcase from  './Showcase'
import { FaBeer } from 'react-icons/fa';


function Header() {

  const [toggle, setToggle] = useState(true)
  const [input, setInput] = useState("")
   
  return (
    <div>
          <nav className="d-flex d-md-none px-3 bg-primary text-white">
            <li>Home <FaBeer /></li>
            
            <li>About</li>
            <li>Contact</li>
          </nav>
        {toggle ? <button onClick={()=> setToggle(!toggle)}>Close</button> : <button onClick={()=> setToggle(!toggle)}>Open</button> }

        { toggle && <input value={input} type="text" style={{display: 'block', margin: '20px 0 0 30px'}} onChange={(e)=> setInput(e.target.value)}/> }
        <Showcase toggleB={toggle} inputV={input}/>
        <p>{input}</p>
    </div>
  )
}

export default Header