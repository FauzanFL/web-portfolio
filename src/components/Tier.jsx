import { getImageSkill } from '../utils/image-util';

const Tier = ({ tier, color, skills, theme }) => {
  return (
    <>
      <div className="flex w-full min-h-[70px] divide-x-2 divide-slate-600">
        <div
          style={{ backgroundColor: color }}
          className="flex items-center p-3 font-bold text-2xl text-black w-10"
        >
          {tier}
        </div>
        <div className="grow flex flex-wrap items-center p-3 gap-2">
          {skills.map((skill, i) => (
            <img
              key={i}
              width={'80px'}
              className={`aspect-[3/2] object-contain drop-shadow-xl rounded-full p-1 ${theme == "dark" ? "bg-gray-300 shadow-[0_0_2px_1px] shadow-gray-200" : ""}`}
              loading="lazy"
              src={getImageSkill(skill.image)}
              alt={skill.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tier;
