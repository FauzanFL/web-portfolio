import { useState } from "react";
import skills from "../data/skill-set.json";
import AllSkillModal from "./AllSkillModal";

export default function Skill() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const duplicatedSkills = [...skills, ...skills];

  console.log(duplicatedSkills);

  return (
    <>
      <section
        id="skills"
        className="py-20 bg-linear-to-br from-gray-50 to-purple-50/30 dark:from-gray-900 dark:to-purple-900/10 transition-colors duration-300 overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-center font-bodoni-moda mb-10 italic underline decoration-2 underline-offset-8 decoration-purple-600 dark:text-white">
            Skill Set
          </h2>

          <div className="relative mb-8 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-gray-50 dark:from-gray-900 to-transparent z-10"></div>

            <div className="flex w-max py-6 gap-4 animate-[scroll-left_100s_linear_infinite]">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="shrink-0 font-montserrat flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer w-24"
                >
                  <span className="text-3xl">
                    <img
                      src={"/img/skills/" + skill.image}
                      alt={skill.name}
                      className="h-6 w-6"
                    />
                  </span>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={() => setShowAllSkills(true)}
              className="px-8 py-3 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-medium"
            >
              View All Skills
            </button>
          </div>
        </div>
      </section>

      {showAllSkills && (
        <AllSkillModal
          skills={skills}
          closeModal={() => setShowAllSkills(false)}
        />
      )}
    </>
  );
}
