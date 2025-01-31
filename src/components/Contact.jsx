/* eslint-disable react/prop-types */
import { getImageURL } from '../utils/image-util';
import contacts from '../data/contact.json'
const Contact = ({ theme }) => {
  return (
    <section id="contact">
      <div
        className={`py-10 px-10 ${
          theme === 'light' ? 'bg-gray-100' : 'bg-[#1c1c24]'
        }`}
      >
        <div className="w-full">
          <h2 className="text-2xl text-center font-bold mb-6">
            <span
              className={`border-b-4 lobster ${
                theme === 'light' ? 'border-sky-500' : 'border-orange-500'
              }`}
            >
              Contact
            </span>
          </h2>
          <div className="">
            <h3 className="text-xl lilita-one">Follow me on:</h3>
            <div className="flex flex-wrap mt-2 gap-4">
              {contacts.map((item, index) => (
                <div className={`btn ${theme == 'dark' ? 'hover:shadow-[0_0_2px_1px] hover:shadow-gray-200': ''}`} key={index}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-bold font-poppins flex justify-center items-center space-x-2"
                  >
                    <img
                      src={getImageURL(item.icon)}
                      alt=""
                      loading="lazy"
                      className={`w-8 h-8 mr-2 p-0.5 ${theme == 'dark' ? 'bg-gray-400 rounded-full': ''}`}
                    />
                    {item.account}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
