import { useContext } from 'react';
import { ThemeColors, ThemeContext } from '../providers/theme';
import { Link } from '@mui/icons-material';

interface Project {
  name: string;
  description: string;
  link: string;
  tags: string[];
};

const projects: Project[] = [
  {
    name: 'LO Tracker',
    description: '(in progress, a senior project) A website that help teachers to analyze their students\' progress throughout the class'
      + ' by keeping students\' score from the examinations; besides, teachers have to create PLOs/LOs for the class and link them with the'
      + ' questions that they saved in the website. In doing this, teachers would see a dashboard with graphs that has been interpreted'
      + ' in many ways.',
    link: 'NapatJamjan/LO-Tracker',
    tags: ['Next.js', 'Go', 'GraphQL', 'Prisma', 'Redis', 'JWT']
  },
  {
    name: 'LXD',
    description: 'An app to promote a new building in KMUTT. The app\'s feature is to book a room in the building to make a'
     + ' party activity and then other poeple can see the activity schedule and its info and come to join the party if they are interested',
    link: 'Nuttawut503/Flutter-LXD',
    tags: ['Flutter', 'Firebase']
  },
  {
    name: 'Lawtalk',
    description: 'A forum website allows people to post their legal issues and find a lawyer to chat and consult with them',
    link: 'Nuttawut503/integrated-project',
    tags: ['Flutter', 'Firebase']
  },
  {
    name: 'Pizza or Not pizza',
    description: 'Take a picture and the program predicts if the picture contains pizza and show the confidence score',
    link: 'Nuttawut503/Pizza-Recognition',
    tags: ['Flutter', 'AI']
  },
  {
    name: 'Alternative-Go',
    description: 'My collection of Go files to practice coding in Go language',
    link: 'Nuttawut503/alternative-go',
    tags: ['Go', 'Algorithms', 'Design-patterns']
  },
  {
    name: 'Covid-Summary',
    description: 'Reading data of covid cases each days from the API and build an another API to summarize the total number of covid'
      + ' cases in a province and by their age range',
    link: 'Nuttawut503/covid-summary',
    tags: ['Go']
  },
  {
    name: 'Portfolio-website',
    description: 'This website\'s source code',
    link: 'Nuttawut503/Portfolio-website',
    tags: ['React']
  },
];

export function PortfolioTable() {
  const { theme } = useContext(ThemeContext);
  return <div className={`mx-auto ${ThemeColors.get(theme)?.secondary} px-8 py-5 rounded-lg`} style={{maxWidth: '800px'}}>
    <div className="break-words" style={{gridTemplateColumns: '1fr auto'}}>
      <p className="font-bold text-2xl">All public works and projects</p>
      {projects.map((project) => <div key={project.link} className="mt-3 text-lg">
          <a href={`https://github.com/${project.link}`} target="_blank" rel="noreferrer" className="text-blue-600">
            {project.name}{' '}<Link style={{fontSize: 14}}/>
          </a><br/>
          {project.description}<br/>
          <span className="text-gray-600">tags: {project.tags.join(' / ')}</span>
      </div>)}
    </div>
  </div>;
};
