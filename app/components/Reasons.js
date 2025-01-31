function Reasons() {
    return (
      <div className="container mx-auto px-5">
        <div>
          <h1 className="text-white text-2xl font-medium text-left mt-10">Reasons to watch Netflix</h1>
        </div>
        <div className="flex flex-row gap-5 mt-5 justify-center items-center w-full h-full">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full h-full">
            <div className="relative flex-shrink-0 p-4 w-auto h-64">
              <div className="relative flex-shrink-0 p-4 rounded-xl shadow-lg text-white w-full h-full" 
              style={{ background: 'linear-gradient(60deg, #1B1C39, #1C1831, #1F1222)' }}>
                <h2 className="text-white text-2xl font-normal text-left mb-2">
                  Enjoy on your TV
                </h2>
                <p className="opacity-60">
                  Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                </p>
                <img src="/television-core-small.svg" alt="Enjoy on your TV" className="w-20 h-auto absolute right-8 bottom-8" />
              </div>
            </div>
            <div className="relative flex-shrink-0 p-4 w-auto h-64">
              <div className="relative flex-shrink-0 p-4 rounded-xl shadow-lg text-white w-full h-full" style={{ background: 'linear-gradient(60deg, #1B1C39, #1C1831, #1F1222)' }}>
                <h2 className="text-white text-2xl font-normal text-left mb-2">
                  Download your shows to watch offline.
                </h2>
                <p className="opacity-60">
                  Save your favorites easily and always have something to watch.
                </p>
                <img src="/download.svg" alt="Download your shows to watch offline." className="w-20 h-auto absolute right-8 bottom-8" />
              </div>
            </div>
            <div className="relative flex-shrink-0 p-4 w-auto h-64">
              <div className="relative flex-shrink-0 p-4 rounded-xl shadow-lg text-white w-full h-full" style={{ background: 'linear-gradient(60deg, #1B1C39, #1C1831, #1F1222)' }}>
                <h2 className="text-white text-2xl font-normal text-left mb-2">
                  Watch everywhere.
                </h2>
                <p className="opacity-60">
                  Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                </p>
                <img src="/horn.svg" alt="Watch everywhere." className="w-20 h-auto absolute right-8 bottom-8" />
              </div>
            </div>
            <div className="relative flex-shrink-0 p-4 w-auto h-64">
              <div className="relative flex-shrink-0 p-4 rounded-xl shadow-lg text-white w-full h-full" style={{ background: 'linear-gradient(60deg, #1B1C39, #1C1831, #1F1222)' }}>
                <h2 className="text-white text-2xl font-normal text-left mb-2">
                  Create profiles for kids.
                </h2>
                <p className="opacity-60">
                  Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                </p>
                <img src="/profile.svg" alt="Create profiles for kids." className="w-20 h-auto absolute right-8 bottom-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Reasons;