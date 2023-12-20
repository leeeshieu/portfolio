function Landing() {
    return (
      <div className="Landing">
        <div className="h-screen pt-60">
            <div className="mx-auto w-9/12">
                <h1 className="mb-4 font-heading font-extrabold text-center text-3xl lg:text-start lg:text-5xl tracking-tight leading-none">
                    Hello! I'm <span className="font-heading font-extrabold text-center text-3xl lg:text-start lg:text-5xl tracking-tight leading-none inline-block px-4 py-1 text-violet-900 bg-violet-200 rounded-md">Alicia</span>, a Web Developer &
                    UI/UX Designer based in <span className="font-heading font-extrabold text-center text-3xl lg:text-start lg:text-5xl tracking-tight leading-none inline-block px-4 py-1 text-amber-900 bg-amber-200 rounded-md">Depok, Indonesia</span>.<br /><br />
                    Welcome to my <span className="font-heading font-extrabold text-center text-3xl lg:text-start lg:text-5xl tracking-tight leading-none underline decoration-wavy decoration-pink-400 underline-offset-4">portfolio</span>!
                </h1>

                <p className="animate-bounce mt-10 text-emerald-700 text-4xl text-center lg:text-start">↓</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Landing;
  