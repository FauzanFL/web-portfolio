/* eslint-disable react/prop-types */
import paragraphs from "../data/about.json"
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
          {
            paragraphs.map((p) => {
              return (
                <p key={p.paragraph} className="indent-10 my-2 text-lg text-justify">
                  {p.content}
                </p>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default About;
