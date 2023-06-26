function About() {
  return (
    <div className="About">
      <div className="mx-auto w-9/12 pt-15 px-10 lg:flex">
        <img src="/assets/avatar.jpg" className="mx-auto rounded-full md:w-3/12" alt="Avatar" />
        <div className="mt-10 lg:ml-20 lg:mt-0">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none">Hello! I'm <a className="mb-4 text-4xl font-extrabold tracking-tight leading-none underline decoration-orange-600">Kira</a>!</h1>
          <p className="vertical-align">
            I am a second-year university student at University of Indonesia,
            pursuing Bachelor of Computer Science, and majoring Information Systems.
            My passion revolves around human computer interaction, UI/UX design and
            web developing. I also have a hobby on writing and journalism.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
