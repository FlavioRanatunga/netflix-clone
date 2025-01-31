function HomePage() {
    return (
        <div className = "flex flex-col items-center justify-center h-screen text-center px-6">
            <div className = "home-header text-white">
                <h1 className = "text-4xl sm:text-6xl font-black leading-[1.2]">Unlimited movies,<br /> TV shows, and <br /> more</h1>
                <p className = "text-lg text-white-300 mt-4">Starts at USD 2.99. Cancel anytime.</p>
            </div>
            <div className = "flex flex-col items-center mt-5"> 
                <p className="text-lg mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="flex flex-row sm:flex-row items-center w-full sm:w-auto">
                    <div className="relative w-full sm:w-auto">  
                        <input type="email" id="email" placeholder=" " className="w-full sm:w-96 p-4 rounded-md bg-transparent text-sm text-white border border-gray-300 peer"/>
                        <label htmlFor="email" className="absolute left-3 top-3 text-gray-400 transition-all duration-300 transform -translate-y-1/2 scale-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Email address</label>
                    </div>
                    <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-md px-6 py-4 ml-3 transition duration-300">
                            Get Started &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;