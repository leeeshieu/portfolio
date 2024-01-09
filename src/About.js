function About() {
  return (
    <div className="About" id="about-me">
      <div className="bg-gray-50 py-40">
        <div className="mx-auto w-9/12 lg:flex">
          <img src="/assets/avatar.jpeg" className="rounded-full h-max mx-auto w-6/12 lg:w-3/12" alt="Avatar" />
          <div className="mt-10 lg:ml-20 lg:my-auto">
            <h1 className="mb-8 text-center lg:text-start text-3xl lg:text-5xl font-heading font-extrabold tracking-tight leading-none underline decoration-wavy decoration-emerald-400 underline-offset-4">About Me 👩🏻</h1>
            <p className="text-center text-lg lg:text-start ">
            A <span className="inline-block my-1 px-2 font-bold text-lg text-violet-900 bg-violet-200 rounded-md">Computer Science</span> student deeply passionate in the fields 
            of <span className="inline-block my-1 px-2 font-bold text-lg text-pink-900 bg-pink-200 rounded-md">UI/UX Design</span> and <span className="inline-block my-1 px-2 font-bold text-lg text-amber-900 bg-amber-200 rounded-md">Web Development</span>. Fusing technical
            expertise with a creative flair, I'm driven to craft innovative and user-centric solutions, leveraging both coding
            proficiency and design sensibilities to create seamless, impactful experiences.
            </p>
            <div className="flex justify-center space-x-2 mt-5 lg:justify-start">
              <a className="pr-5" href="https://www.linkedin.com/in/alicia-kirana-utomo/" rel="noreferrer" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-8 h-8 fill-gray-900 hover:fill-pink-600">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              
              <a className="px-5" href="https://github.com/aliccciao/" rel="noreferrer" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-8 h-8 fill-gray-900 hover:fill-violet-600">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>

              <a className="pl-5" href="https://aliciautomo.medium.com/" rel="noreferrer" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1043.63 592.71" className="w-10 h-8 fill-gray-900 hover:fill-cyan-600">
                <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
