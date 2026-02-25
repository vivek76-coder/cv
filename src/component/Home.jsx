import Nav from './navbar/Nav.jsx';
import Footer from './footer/Footer.jsx'
function Home(){
	return (
		<>
		<Nav />
		<div className="bg-red-500">
    		<h1 >this is main section</h1>
		</div>
		<Footer />
		</>
	)
}
export default Home