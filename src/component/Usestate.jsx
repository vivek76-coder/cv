import { useState } from 'react';
import Nav from './navbar/Nav.jsx';
import Footer from './footer/Footer.jsx'
const Usestate = () =>{
        const [show , setShow] = useState(false);
               
               function clickshow(){
                   setShow(!show)
               }
           		
	return( 

            
            <>
               <div className="h-[100vh]">
           		<Nav />
                <h1>toggle-image</h1>
                <button className="border bg-slate-500 py-1 px-4 rounded" onClick={()=>{clickshow()}}>click</button>
           		{ show && <img src="./pexels-agrosales-20804701 (1).jpg" />}
           		<Footer />
               </div>
           </>
		  )
}
export default Usestate;