type githubRepo = {
  name: string;
  url: string;
};

interface PortfolioData {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  publication: string;
  technologies: string[];
  githubRepo: githubRepo[];
}

interface SkillData {
  id: number;
  name: string;
  tier: string;
  image: string;
}

interface ContactData {
  name: string;
  account: string;
  link: string;
  color: string;
  bgColor: string;
}
