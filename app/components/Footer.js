function Footer() {
  return (
    <div>
      <div className="container mx-auto px-6 md:px-10 py-10 text-center flex flex-col items-center"> 
            <p className="text-lg mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
                <div className="relative w-full sm:w-auto">  
                    <input type="email" id="email" placeholder=" " className="w-full sm:w-96 p-4 rounded-md bg-transparent text-sm text-white border border-gray-300 peer"/>
                    <label htmlFor="email" className="absolute left-3 top-3 text-gray-400 transition-all duration-300 transform -translate-y-1/2 scale-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Email address</label>
                </div>
                    <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-md px-6 py-4 ml-3 transition duration-300">
                            Get Started &gt;
                    </button>
            </div>
      </div>
      <footer className="container mx-auto px-6 md:px-10 py-10 text-left text-gray-300">
        <p className="text-left"> Questions? Contact Us </p>
        <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2">
          <li><a href="#" className="underline">Help Center</a></li>
          <li><a href="#" className="underline">Account</a></li>
          <li><a href="#" className="underline">Media Center</a></li>
          <li><a href="#" className="underline">Investor Relations</a></li>
          <li><a href="#" className="underline">Jobs</a></li>
          <li><a href="#" className="underline">Ways to Watch</a></li>
          <li><a href="#" className="underline">FAQ</a></li>
          <li><a href="#" className="underline">Terms of Use</a></li>
          <li><a href="#" className="underline">Privacy</a></li>
          <li><a href="#" className="underline">Cookie Preferences</a></li>
          <li><a href="#" className="underline">Corporate Information</a></li>
          <li><a href="#" className="underline">Contact Us</a></li>
          <li><a href="#" className="underline">Speed Test</a></li>
          <li><a href="#" className="underline">Legal Notices</a></li>
          <li><a href="#" className="underline">Only on Netflix</a></li>
        </ul>
        <div className="relative inline-block pt-16">
            <select
                className="block w-full px-4 py-2 text-white bg-black border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
                <option>English</option>
            </select>
        </div>
        <div className="mt-4 text-sm text-gray-400">
            <p>Netflix Sri Lanka</p>
        </div>
    </footer>
    </div>
  );
}
export default Footer;