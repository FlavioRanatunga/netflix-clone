function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-transparent">
            <div className="flex items-center">
                <img src="logo.png" alt="Netflix Logo" className="w-24 h-auto" />
            </div>
            <div>
                <button className="bg-red-600 text-white px-4 py-2 rounded shadow-lg hover:bg-red-700 transition duration-300"> Sign In </button>
            </div>
        </header>
    );
}

export default Header;