/*import {useState} from 'react'
import Nav from './navbar/Nav.jsx'
import Footer from './footer/Footer.jsx'
const TestPriceCalculator = () => {
	const [shows, setShows] = useState([])
    const test = async ()=> {
      try {
       const responce = await fetch('https://jsonplaceholder.typicode.com/users')
       const data = await responce.json()
       setShows(data)
       console.log(data)
      }
      catch(err){

      }
    }
 return (
 	    <div>
	        <Nav />
	             <div className='bg-slate-100 min-h-screen'>
	             	<div className='bg-white  w-[70%] min-h-screen mx-auto'>
                      
                      <h1 className='text-lg font-bold p-4 text-center'>testPriceCalculator</h1>
                      <hr/>
                      <div className='bg-red-200'>
                        {
                          shows.map((show, index)=>(
                           <table className='table-fixed' key={index}>
                              <tr>
                                <th>Name</th>
                                <th>Username</th>
                              </tr>
                              <tr>
                                <td>{show.name}</td>
                                <td>{show.username}</td>
                              </tr>
                            </table>
                            ))
                        }
                      </div>
                      	<button onClick={test}>test</button>
	             	</div>
	             </div>
	        <Footer />
        </div>
 	   )
}
export default TestPriceCalculator*/
