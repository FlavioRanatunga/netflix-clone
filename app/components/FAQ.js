import React, { useState } from 'react';

function FAQ () {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);

    const showAnswer1 = () => {
        setShow1(!show1);
    };

    const showAnswer2 = () => {
        setShow2(!show2);
    }

    const showAnswer3 = () => {
        setShow3(!show3);
    }

    const showAnswer4 = () => {
        setShow4(!show4);
    }

    const showAnswer5 = () => {
        setShow5(!show5);
    }

    const showAnswer6 = () => {
        setShow6(!show6);
    }

    return (
        <div className="bg-black text-white">
            <div className="container mx-auto py-20 px-6 md:px-10">
                <h1 className="text-3xl md:text-4xl font-medium text-left">Frequently Asked Questions</h1>

                <ul className="mt-10">
                    <li className="border-gray-700 py-1" onClick= {showAnswer1}>
                    <button className= "w-full flex justify-between items-center bg-[#303030] text-left text-lg md:text-xl font-normal px-6 py-5 hover:bg-gray-700">
                        <span>What is Netflix?</span>
                        <span className="text-3xl">{show1 ? "✕" : "+"}</span>
                    </button>
                        <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            show1 ? "max-h-96 opacity-100 mt-" : "max-h-0 opacity-0"
                        }`}
                        >
                            <p className="w-full flex justify-between items-center bg-[#303030] text-left text-lg md:text-xl font-normal px-6 py-5">
                                Netflix is a streaming service that offers a wide variety of
                                award-winning TV shows, movies, anime, documentaries, and more on
                                thousands of internet-connected devices. <br /> <br />

                                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                            </p>
                        </div>
                    </li>              
                    <li className="border-gray-700 py-1" onClick={showAnswer2}>
                        <button className="w-full flex justify-between items-center bg-[#303030] text-left text-lg md:text-xl font-normal px-6 py-5 hover:bg-gray-700">
                            <span>How much does Netflix cost?</span>
                            <span className="text-3xl">{show2 ? "✕" : "+"}</span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                show2 ? "max-h-96 opacity-100 mt-" : "max-h-0 opacity-0"
                            }`}
                        >
                            <p className="w-full flex justify-between items-center bg-[#303030] text-left text-lg md:text-xl font-normal px-6 py-5">
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD7.99 to USD13.99 a month. No extra costs, no contracts.
                            </p>
                        </div>
                    </li>
                    <li className="border-gray-700 py-1" onClick={showAnswer3}>
                        <button className="w-full flex justify-between items-center bg-[#303030] text-left text-lg md:text-xl font-normal px-6 py-5 hover:bg-gray-700">
                            <span>Where can I watch?</span>
                            <span className="text-3xl">{show3 ? "✕" : "+"}</span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                show3 ? "max-h-96 opacity-100 mt-" : "max-h-0 opacity-0"
                            }`}
                        >
                            <p className="w-full flex justify-between items-center bg-[#303030] text-left text-lg md:text-xl font-normal px-6 py-5">
                                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, such as smart TVs, smartphones, tablets, streaming media players, and game consoles.
                            </p>
                        </div>
                    </li>
                    <li className="border-gray-700 py-1" onClick={showAnswer4}>
                        <button className="w-full flex justify-between items-center bg-[#303030] text-left text-lg md:text-xl font-normal px-6 py-5 hover:bg-gray-700">
                            <span>How do I cancel?</span>
                            <span className="text-3xl">{show4 ? "✕" : "+"}</span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                show4 ? "max-h-96 opacity-100 mt-" : "max-h-0 opacity-0"
                            }`}
                        >
                            <p className="w-full flex justify-between items-center bg-[#303030] text-left text-lg md:text-xl font-normal px-6 py-5">
                                Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                            </p>
                        </div>
                    </li>
                    <li className="border-gray-700 py-1" onClick={showAnswer5}>
                        <button className="w-full flex justify-between items-center bg-[#303030] text-left text-lg md:text-xl font-normal px-6 py-5 hover:bg-gray-700">
                            <span>What can I watch on Netflix?</span>
                            <span className="text-3xl">{show5 ? "✕" : "+"}</span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                show5 ? "max-h-96 opacity-100 mt-" : "max-h-0 opacity-0"
                            }`}
                        >
                            <p className="w-full flex justify-between items-center bg-[#303030] text-left text-lg md:text-xl font-normal px-6 py-5">
                                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                            </p>
                        </div>
                    </li>
                    <li className="border-gray-700 py-1" onClick={showAnswer6}>
                        <button className="w-full flex justify-between items-center bg-[#303030] text-left text-lg md:text-xl font-normal px-6 py-5 hover:bg-gray-700">
                            <span>Is Netflix good for kids?</span>
                            <span className="text-3xl">{show6 ? "✕" : "+"}</span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                show6 ? "max-h-96 opacity-100 mt-" : "max-h-0 opacity-0"
                            }`}
                        >
                            <p className="w-full flex justify-between items-center bg-[#303030] text-left text-lg md:text-xl font-normal px-6 py-5">
                                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                            </p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}
export default FAQ;