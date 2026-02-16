function Footer() {
    return (
        <>
            <div className="flex gap-20 bg-black h-auto">
                <div className="text-white w-full p-4">
                    <h3 className="font-semibold mb-4">
                        ABOUT US
                    </h3>
                    <p className="text-slate-300">Es una España a la que 75 millones de españoles vienen cada año. Por algo será, en cualquier caso, no pienso dar ni un </p>
                </div>
                <div className="text-white w-full p-4">
                    <h3 className="font-semibold mb-4">
                        follow on
                    </h3>
                    <ul className="text-sm cursor-pointer">
                        <li className="hover:text-slate-300 hover:translate-all hover:duration-300">facebook</li>
                        <li className="hover:text-slate-300 hover:translate-all hover:duration-300">twitter</li>
                        <li className="hover:text-slate-300 hover:translate-all hover:duration-300">instagram</li>
                        <li className="hover:text-slate-300 hover:translate-all hover:duration-300">linked in</li>
                    </ul>
                </div>
                <div className="text-white w-full p-4">
                    <h3 className="font-semibold mb-4">
                        Contact Us
                    </h3>
                    <form className='flex flex-col gap-4'>
                        <input type="email" placeholder="abc@email.com" className="p-2 border   rounded  border-b-1 border-b-neutral-700"></input>
                        <textarea classname="size-60"></textarea>
                    </form>
                </div>
            </div>

        </>
    )
}
export default Footer