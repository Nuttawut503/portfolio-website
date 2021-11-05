import { useContext } from 'react';
import { ThemeColors, ThemeContext } from '../providers/theme';

interface CardContent {
  title: string;
  content: string[];
};

const cards: CardContent[] = [
  {
    title: 'ABOUT ME',
    content: ['I\'m interested in software development and now learning about Full Stack Development'
      + ' which includes Front-end, Back-end and DevOps too. I also like topics about Big Data and Microservices.'
      + ' I\'m trying to improve myself to be better and better.']
  },
  {
    title: 'Experienced Technologies',
    content: ['Go / Python / Java', 'Next.js / Nest / Flutter / Nx', 'MySQL / PostgreSQL / Firebase / Redis / GraphQL', 'ElasticSearch']
  },
  {
    title: 'Familiar Development Tools',
    content: ['Docker', 'WSL2', 'Visual Studio Code', 'Ansible']
  }
]

export function Cards() {
  return <div className="flex flex-wrap justify-center mb-16">
    {
      cards.map((card, i) => <Card key={i} card={card}/>)
    }
  </div>;
};

function Card({card}: {card: CardContent}) {
  const { theme } = useContext(ThemeContext);
  return <div className={`${ThemeColors.get(theme)?.secondary} px-8 py-5 rounded-lg m-5`} style={{width: '300px'}}>
    <div className="text-xl font-bold">{card.title}</div>
    <div className="mt-2 text-lg">{card.content.map((line, i) => <p key={i}>{line}</p>)}</div>
  </div>;
}
