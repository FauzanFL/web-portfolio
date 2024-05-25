// import TypingText from './TypingText';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero bg-base-200">
        <div className="hero-content text-center m-10">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">{`Hello, I'm Fauzan Fashihul Lisan`}</h1>
            {/* <p className="py-6">
              {`I'm a `}
            </p> */}
            <div className="flex justify-center flex-wrap mt-2">
              <div
                className={`border max-w-fit cursor-default border-fuchsia-600 rounded-md m-2 px-2 py-1 text-fuchsia-600 font-medium hover:border-fuchsia-500 hover:text-fuchsia-500`}
              >
                Software Engineer
              </div>
              <div
                className={`border max-w-fit cursor-default border-yellow-600 rounded-md m-2 px-2 py-1 text-yellow-600 font-medium hover:border-yellow-500 hover:text-yellow-500`}
              >
                Backend Developer
              </div>
              <div
                className={`border max-w-fit cursor-default border-sky-600 rounded-md m-2 px-2 py-1 text-sky-600 font-medium hover:border-sky-500 hover:text-sky-500`}
              >
                Frontend Developer
              </div>
              <div
                className={`border max-w-fit cursor-default border-lime-600 rounded-md m-2 px-2 py-1 text-lime-600 font-medium hover:border-lime-500 hover:text-lime-500`}
              >
                Fullstack Developer
              </div>
            </div>
            <div className="flex justify-center items-center mt-2">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="mailto:fauzanarth@gmail.com"
                className="btn btn-primary mx-1"
              >
                Hire me!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
