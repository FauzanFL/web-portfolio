const Skill = ({ theme }) => {
  return (
    <section id="skill">
      <div
        className={`py-10 px-10 ${
          theme === 'light' ? 'bg-gray-100' : 'bg-[#1c1c24]'
        }`}
      >
        <h2 className="text-2xl text-center font-bold mb-6">
          <span
            className={`border-b-4 ${
              theme === 'light' ? 'border-sky-500' : 'border-orange-500'
            }`}
          >
            Skills
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Skill;
