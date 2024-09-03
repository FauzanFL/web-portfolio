/* eslint-disable react/prop-types */
import { getImageURL } from '../utils/image-util';
const Contact = ({ theme }) => {
  const contacts = [
    {
      icon: 'linkedin.png',
      account: 'Fauzan Fashihul Lisan',
      link: 'https://www.linkedin.com/in/fauzanfl/',
    },
    {
      icon: 'facebook.png',
      account: 'Fauzan Fashihul Lisan',
      link: 'https://www.facebook.com/fauzan.fashihullisan',
    },
    {
      icon: 'github.png',
      account: 'FauzanFL',
      link: 'https://github.com/FauzanFL',
    },
    {
      icon: 'instagram.png',
      account: '@fauzan_fl',
      link: 'https://www.instagram.com/fauzan_fl/',
    },
    {
      icon: 'gmail.png',
      account: 'fauzanarth@gmail.com',
      link: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNtfCmPPKjvFjrwZvxrllNbPWtqFNBnmmqBGvSCzjbSxVTlDvVBklVltpdFbHwxngNLlmL',
    },
  ];
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
              className={`border-b-4 ${
                theme === 'light' ? 'border-sky-500' : 'border-orange-500'
              }`}
            >
              Contact
            </span>
          </h2>
          <div className="">
            <h3 className="text-xl font-medium">Follow me on:</h3>
            <div className="flex flex-wrap mt-2 gap-4">
              {contacts.map((item, index) => (
                <div className="btn" key={index}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-bold font-poppins flex justify-center items-center space-x-2"
                  >
                    <img
                      src={getImageURL(item.icon)}
                      alt=""
                      className="w-8 h-8 mr-2"
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
