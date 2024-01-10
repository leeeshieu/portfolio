const Projects = () => {
    return (
        <div className="Projects" id="projects">
            <div className="py-40">
                <div className="mx-auto lg:w-9/12">
                <h1 className="mb-10 text-center text-3xl lg:text-5xl font-heading font-extrabold tracking-tight leading-none underline decoration-wavy decoration-violet-400 underline-offset-4">My Projects 🎨</h1>
                    <div className="lg:flex lg:jusity-center">
                        <div className="my-10 lg:my-0 lg:w-6/12 lg:mx-auto">
                            <div className="bg-white border border-gray-200 rounded-lg shadow mx-10 lg:mx-5">
                                <img className="rounded-t-lg" src="/assets/project-1.png" alt="" />
                                <div className="p-5 shadow-xl">
                                    <a href="seken">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">SEKEN: The First Indonesian Thrifting Application</h5>
                                    </a>
                                    <div className="flex flex-wrap">
                                        <p className="inline-block px-2 mx-1 mb-2 text-sm text-blue-700 bg-blue-200 rounded-md">Visual Designer</p>
                                        <p className="inline-block px-2 mx-1 mb-2 text-sm text-amber-700 bg-amber-200 rounded-md">UX Researcher</p>
                                        <p className="inline-block px-2 mx-1 mb-2 text-sm text-pink-700 bg-pink-200 rounded-md">UI/UX Designer</p>
                                        <p className="inline-block px-2 mx-1 mb-2 text-sm text-emerald-700 bg-emerald-200 rounded-md">Web Developer</p>
                                    </div>
                                    <p className="mb-3 font-normal text-gray-700">A thrifting e-commerce prototype based User Interface solution</p>
                                    <a href="seken" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                        Read more
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="my-10 lg:my-0 lg:w-6/12 lg:mx-auto">
                            <div className="bg-white border border-gray-200 rounded-lg shadow mx-10 lg:mx-5">
                                <img className="rounded-t-lg" src="/assets/project-2.png" alt="" />
                                <div className="p-5 shadow-xl">
                                    <a href="forgoodspace">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">For Good Space: Space Booking Application</h5>
                                    </a>
                                    <div className="flex flex-wrap">
                                        <p className="inline-block px-2 mx-1 mb-2 text-sm text-blue-700 bg-blue-200 rounded-md">Visual Designer</p>
                                        <p className="inline-block px-2 mx-1 mb-2 text-sm text-pink-700 bg-pink-200 rounded-md">UI/UX Designer</p>
                                        <p className="inline-block px-2 mx-1 mb-2 text-sm text-lime-700 bg-lime-200 rounded-md">Chief Technology Officer</p>
                                    </div>
                                    <p className="mb-3 font-normal text-gray-700">A business proposal for a space booking startup</p>
                                    <a href="forgoodspace" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                        Read more
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="my-10 lg:my-0 lg:w-6/12 lg:mx-auto">
                            <div className="bg-white border border-gray-200 rounded-lg shadow mx-10 lg:mx-5">
                                <img className="rounded-t-lg" src="/assets/project-3.png" alt="" />
                                <div className="p-5 shadow-xl">
                                    <a href="forgoodspace">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Mobile JKN: A UI/UX Redesign Case Study</h5>
                                    </a>
                                    <div className="flex flex-wrap">
                                        <p className="inline-block px-2 mx-1 mb-2 text-sm text-amber-700 bg-amber-200 rounded-md">UX Researcher</p>
                                        <p className="inline-block px-2 mx-1 mb-2 text-sm text-pink-700 bg-pink-200 rounded-md">UI/UX Designer</p>
                                    </div>
                                    <p className="mb-3 font-normal text-gray-700">A user interface redesign of the Mobile JKN application by BPJS Kesehatan</p>
                                    <a href="https://medium.com/@aliciautomo/mobile-jkn-a-ui-ux-redesign-case-study-43b29d60999f" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                        Read more
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;