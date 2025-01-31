/* eslint-disable react/prop-types */
const Footer = ({ theme }) => {
  return (
    <footer
      className={`p-5 text-center border-t border-slate-300 noto-serif ${
        theme === 'light' ? 'bg-gray-100' : 'bg-[#1c1c24]'
      }`}
    >
      <p>FauzanFL © 2024 - All rights reserved</p>
    </footer>
  );
};

export default Footer;
