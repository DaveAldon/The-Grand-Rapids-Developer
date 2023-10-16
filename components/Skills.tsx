enum SkillType {
  KNOWN = 'green',
  LEARNING = 'blue',
  WANT_TO_LEARN = 'red'
}

interface ISkillData {
  title: string;
  skills: string[];
  color: SkillType;
}

const SkillData: ISkillData[] = [
  {
    title: 'WHAT I KNOW',
    skills: [
      'Typescript',
      'Javascript',
      'C#',
      'Python',
      'Kotlin',
      'ObjectScript'
    ],
    color: SkillType.KNOWN
  },
  {
    title: `CURRENTLY LEARNING`,
    skills: ['Swift'],
    color: SkillType.LEARNING
  },
  {
    title: 'WANT TO LEARN NEXT',
    skills: ['C', 'C++'],
    color: SkillType.WANT_TO_LEARN
  }
];

const Category = ({ skill }: { skill: ISkillData }) => {
  const { title, skills, color } = skill;
  return (
    <div className="lg:w-1/3 sm:w-1/2 w-full mb-10">
      <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left dark:text-white">
        {title}
      </h2>
      <nav className="flex flex-col sm:items-start sm:text-left text-center items-center space-y-2.5">
        {skills.map((skill, index) => (
          <Skill name={skill} color={color} key={index} />
        ))}
      </nav>
    </div>
  );
};

const Skill = ({ name, color }: { name: string; color: SkillType }) => {
  return (
    <div className="dark:text-white">
      <span
        className={`bg-${color}-100 text-${color}-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center`}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          className="w-3 h-3"
          viewBox="0 0 24 24"
        >
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      </span>
      {name}
    </div>
  );
};

export default function Skills() {
  return (
    <section className="text-gray-600 body-font w-full">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 dark:text-white">
            Programming Knowledge
          </h1>
        </div>
        <div className="flex flex-wrap">
          {SkillData.map((skill, index) => (
            <Category skill={skill} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
