import { Link } from 'react-router-dom'
function Nav(){
    return(
        <>
        <nav className="flex justify-between items-center px-10 py-5 bg-[#2596be] text-white">
            {/* name */}
            <div><h1 className="font-bold text-lg">Welcome</h1></div>
            {/* list */}
            <div>
                <ul className="flex gap-10 font-semibold">
                    <li className="hover:text-gray-400 hover:underline hover:underline-offset-1 hover:transition-all hover:duration-1000"><Link to='/'>Home</Link></li>
                    <li className="hover:text-gray-400 hover:underline hover:underline-offset-1 hover:transition-all hover:duration-1000"><Link to='/project'>Projects</Link></li>
                    <li className="hover:text-gray-400 hover:underline hover:underline-offset-1 hover:transition-all hover:duration-1000"><Link to='/Contact'>Contact-Us</Link></li>
                    <li className="hover:text-gray-400 hover:underline hover:underline-offset-1 hover:transition-all hover:duration-1000"><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default Nav