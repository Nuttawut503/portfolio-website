import React, { useContext } from 'react';
import { ThemeColors, ThemeContext } from '../providers/theme';

interface Project {
  name: string;
  description: string;
  link: string;
  tags: string[];
};

const projects: Project[] = [
  {
    name: 'LO Tracker (Front-end)',
    description: '(in progress, senior project) A website is to help teachers manage students progress in their class'
      + ' by keeping students score in each quizzes/questions during the semester. The website allows teachers to create PLOs, LOs'
      + ' and map those LOs to the PLOs and then map each questions to the LOs again. The website calculates progress score for each'
      + ' students and also the whole class and show the result as a dashboard. This project can help teachers tracking progress of'
      + ' students all over their time in the university.',
    link: 'NapatJamjan/capstone-frontend',
    tags: ['React', 'Apollo']
  },
  {
    name: 'LO Tracker (Back-end)',
    description: '(in progress, senior project) This is the backend part of LO Tracker website that is used to help teachers'
      + ' tracking progress of their students in the class and it is written by Go. We collect data in Postgresql and use JWT to check'
      + ' authorization and control access in the system. We use Redis to store token of users and Prisma to do version control for'
      + ' managing our database. We use Graphql as a middleware to read requests and response needed data to users',
    link: 'Nuttawut503/capstone-backend',
    tags: ['Go', 'Graphql', 'Postgresql', 'Prisma', 'Redis', 'JWT']
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
    name: 'Hello-Java',
    description: 'A simple code of OOP in Java',
    link: 'Nuttawut503/java-hello-oop',
    tags: ['Java']
  },
  {
    name: 'Portfolio-website',
    description: 'This website\'s source code',
    link: 'Nuttawut503/Portfolio-website',
    tags: ['React']
  },
];

export const PortfolioTable = () => {
  const { theme } = useContext(ThemeContext);
  return <div className={`mx-auto ${ThemeColors.get(theme)?.secondary} px-8 py-5 rounded-lg`} style={{maxWidth: '800px'}}>
    <div className="break-words" style={{gridTemplateColumns: '1fr auto'}}>
      <p className="font-bold text-xl">All public works and projects</p>
      {projects.map((project) => <div key={project.link} className="mt-3">
          <a href={`https://github.com/${project.link}`} target="_blank" rel="noreferrer" className="text-blue-600">{project.name}</a><br/>
          {project.description}<br/>
          <span className="text-gray-600">tags: {project.tags.join(' ')}</span>
      </div>)}
    </div>
  </div>;
};
