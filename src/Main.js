import About from './About';
import Contact from './Contact';
import Landing from './Landing';
import Projects from './Projects';

function Main() {
  return (
      <div className="Main">
          <Landing />
          <About />
          <Projects />
          <Contact />
      </div>
  );
}

export default Main;