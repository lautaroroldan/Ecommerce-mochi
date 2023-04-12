import React from 'react'

function NavBarDaisyUI() {
    return (
        <div className="navbar bg-white sticky top-0 left-0 z-10">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl text-orange-400 hover:text-cyan-400 tracking-[.5em]">MOCHI</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">0</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 py-4 px-6 shadow bg-base-100 rounded-box w-52"> 
                        <span className="font-bold text-lg">0 Items</span>
                        <span className="text-orange-400">Total: $0</span>
                        <div className="card-actions">
                            <button className="btn-block text-white">Ver carro</button>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.pinimg.com/736x/a6/9c/59/a69c597f717821ed156c44438cfbf554.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between hover:text-orange-400">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a className='hover:text-orange-400'>Settings</a></li>
                        <li><a className='hover:text-orange-400'>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBarDaisyUI