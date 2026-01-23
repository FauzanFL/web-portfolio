import { X } from "lucide-react";

interface Props {
  skills: SkillData[];
  closeModal: () => void;
}

export default function AllSkillModal({ skills, closeModal }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto animate-[fadeInUp_0.4s_ease-out]">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between z-10">
          <h3 className="text-2xl font-bold font-playfair-display dark:text-white">
            All Skills
          </h3>
          <button
            onClick={closeModal}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="w-6 h-6 dark:text-white" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 30}ms` }}
                className="shrink-0 font-montserrat flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer w-24 mx-auto"
              >
                <img
                  src={"/img/skills/" + skill.image}
                  alt={skill.name}
                  className="h-6 w-6"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
