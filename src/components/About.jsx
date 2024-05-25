/* eslint-disable react/prop-types */
const About = ({ theme }) => {
  return (
    <section id="about">
      <div className="flex justify-center items-center p-10">
        <div className="max-w-5xl">
          <h2 className="text-2xl text-center font-bold mb-6">
            <span
              className={`border-b-4 ${
                theme === 'light' ? 'border-sky-500' : 'border-orange-500'
              }`}
            >
              About
            </span>
          </h2>
          <p className="text-lg">
            {`I am fresh graduate from Telkom Institute of Technology Purwokerto majoring in Software Engineering. I am passionate about software engineering and web development. I have experience in developing web applications using various technolgy such as React.js, Node.js, Golang, and Laravel. I am also familiar with Git, Docker, and RESTful API. I am a fast learner and I am eager to learn new things. I am looking for a job in the field of software engineer or web developer.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
