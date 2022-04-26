import * as React from 'react';
import Menu from '../components/menu';

const Header = () => (
    <>
    <div className="w-full border-2 border-rose-500 absolute">
        <a>Logo</a>
        <h1 className="font-roboto_mono">Ciao</h1>
        <Menu/>
        <button className="bg-yellow-500 sm:bg-blue-500 md:bg-red-300 lg:bg-green-300 xl:bg-violet-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Cliccami
        </button>
    </div>
    </>
);

export default Header;