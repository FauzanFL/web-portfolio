import Tier from './Tier';
import skillSet from '../data/skill-set.json';

const Skill = ({ theme }) => {
  const tiers = [
    { rank: 'A', color: '#ef4444' },
    { rank: 'B', color: '#f97316' },
    { rank: 'C', color: '#06b6d4' },
  ];
  return (
    <section id="skills">
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
            Skill Tier List
          </span>
        </h2>
        <div className="lg:mx-24 mx-4 my-2 border-2 border-slate-600 divide-y-2 divide-slate-600">
          {tiers.map((tier, i) => {
            const skills = skillSet.filter((skill) => skill.tier === tier.rank);
            return (
              <Tier
                tier={tier.rank}
                key={i}
                skills={skills}
                color={tier.color}
                theme= {theme}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
