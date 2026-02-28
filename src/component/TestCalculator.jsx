import Nav from './navbar/Nav.jsx'
import Footer from './footer/Footer.jsx'
const TestPriceCalculator = () => {
 return (
 	    <div>
	        <Nav />
	             <div className='bg-slate-100 min-h-screen'>
	             	<div className='bg-white  w-[70%] min-h-screen mx-auto'>
                      
                      <h1 className='text-lg font-bold p-4 text-center'>testPriceCalculator</h1>
                      <hr/>
                      <div>
                      	<lable className='font-semibold'>enter&nbsp;test&nbsp;name</lable>
                      </div>
	             	</div>
	             </div>
	        <Footer />
        </div>
 	   )
}
export default TestPriceCalculator
