import "./Landing.css";

function Landing() {
    return (
      <div className="Landing">
        <div className="h-screen py-40">
            <div className="mx-auto lg:w-9/12">
                <h1 className="mb-4 mx-20 font-heading font-extrabold text-center text-xl lg:text-start lg:text-4xl lg:leading-normal">
                    Hello! I'm <span className="font-heading font-extrabold text-center text-xl lg:text-start lg:text-4xl lg:leading-normal inline-block px-2 text-violet-900 bg-violet-200 rounded-md">Alicia</span>, 
                    a <span className="font-heading font-extrabold text-center text-2xl lg:text-start lg:text-5xl lg:leading-normal underline decoration-wavy decoration-pink-400 underline-offset-10"> UI/UX Designer</span> &
                    <br/> <span className="font-heading font-extrabold text-center text-2xl lg:text-start lg:text-5xl lg:leading-normal underline decoration-wavy decoration-amber-400 underline-offset-10">Web Developer</span> based in<br />📍 Depok, Indonesia.<br /><br />
                    Welcome to my <span className="font-heading font-extrabold text-center text-2xl lg:text-start lg:text-4xl lg:leading-normal underline decoration-wavy decoration-red-600 underline-offset-4">portfolio</span>!
                </h1>

                <p className="animate-bounce mt-10 mx-20 text-emerald-700 text-4xl text-center lg:text-start">↓</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Landing;
  