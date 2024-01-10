function About() {
  return (
    <div className="About" id="about-me">
      <div className="bg-gray-50 py-40">
        <div className="mx-auto w-9/12 lg:flex">
          <img src="/assets/avatar.png" className="rounded-full h-max mx-auto w-6/12 lg:w-3/12" alt="Alicia Kirana" />
          <div className="mt-10 lg:ml-20 lg:my-auto">
            <h1 className="mb-8 text-center lg:text-start text-3xl lg:text-5xl font-heading font-extrabold tracking-tight leading-none underline decoration-wavy decoration-emerald-400 underline-offset-4">About Me 👩🏻</h1>
            <p className="text-center text-lg lg:text-start ">
            A <span className="inline-block my-1 px-2 font-bold text-lg text-violet-900 bg-violet-200 rounded-md">Computer Science</span> student deeply passionate in the fields 
            of <span className="inline-block my-1 px-2 font-bold text-lg text-pink-900 bg-pink-200 rounded-md">UI/UX Design</span> and <span className="inline-block my-1 px-2 font-bold text-lg text-amber-900 bg-amber-200 rounded-md">Web Development</span>. Fusing technical
            expertise with a creative flair, I'm driven to craft innovative and user-centric solutions, leveraging both coding
            proficiency and design sensibilities to create seamless, impactful experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
