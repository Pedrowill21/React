import "./NavBar.css";

import React, { useEffect, useState } from 'react'

function NavBar() {

  const [active,setActive] = useState(false)

  function On (){
    setActive(!active)
  }

  useEffect(()=>{
    console.log(active)
  }, [active])

  return (
    <>
    
     <div className="container"  >

            <div onClick={()=> On()} className="menu_toggle">
              <div className={active == true ? "one_distortion ":"one"}></div>
              <div className={active == true ? "two_distortion " : "two"}></div>
              <div className={active ==true ? "three_distortion" :"three"}></div>
            </div>

           {active == true && (
             <div className="menu_mobile">
             <nav>
                 <ul className="ul_mobile">
                     <li>Home</li>
                     <li>Sobre</li>
                     <li>Contato</li>
                     <li>Ajuda</li>
                 </ul>
             </nav>
         </div>
           )}

            <div className="menu_pc">
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Contato</li>
                        <li>Ajuda</li>
                    </ul>
                </nav>
            </div>
     </div>
    
    </>
  )
}

export default NavBar