function Nav(){
    return(
        <>
        <nav className="flex justify-between items-center px-10 py-5 bg-[#2596be] text-white">
            {/* name */}
            <div><h1 className="font-bold text-lg">Welcome</h1></div>
            {/* list */}
            <div>
                <ul className="flex gap-10 font-semibold">
                    <li className="hover:text-gray-400 hover:underline hover:underline-offset-1 hover:transition-all hover:duration-1000">Home</li>
                    <li className="hover:text-gray-400 hover:underline hover:underline-offset-1 hover:transition-all hover:duration-1000">Projects</li>
                    <li className="hover:text-gray-400 hover:underline hover:underline-offset-1 hover:transition-all hover:duration-1000">Contact-Us</li>
                    <li className="hover:text-gray-400 hover:underline hover:underline-offset-1 hover:transition-all hover:duration-1000">About</li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default Nav