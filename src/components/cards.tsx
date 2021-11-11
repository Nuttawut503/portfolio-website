import { useContext } from 'react';
import { ThemeColors, ThemeContext } from '../providers/theme';
import { AccountBox, TravelExplore, Computer } from '@mui/icons-material';

interface CardContent {
  logo: (fontSize: number) => JSX.Element;
  title: string;
  content: string[];
};

const cards: CardContent[] = [
  {
    logo: (fontSize: number) => <AccountBox sx={{fontSize}}/>,
    title: 'ABOUT ME',
    content: ['I\'m interested in software development and now learning about Full Stack Development'
      + ' which includes Front-end, Back-end and DevOps too. I also like topics about Big Data and Microservices.'
      + ' I\'m trying to improve myself to be better and better.']
  },
  {
    logo: (fontSize: number) => <TravelExplore sx={{fontSize}}/>,
    title: 'Experienced Technologies',
    content: ['Go / Python / Java', 'Next.js / Nest / Flutter / Nx', 'MySQL / PostgreSQL', 'Firebase / Redis', 'REST / GraphQL', 'Elasticsearch']
  },
  {
    logo: (fontSize: number) => <Computer sx={{fontSize}}/>,
    title: 'Familiar Development Tools',
    content: ['WSL2', 'Visual Studio Code', 'Docker','Ansible']
  }
]

export function Cards() {
  return <div className="flex flex-wrap justify-center mb-16">
    {cards.map((card, i) => <Card key={i} card={card}/>)}
  </div>;
};

function Card({card}: {card: CardContent}) {
  const { theme } = useContext(ThemeContext);
  return <div className={`${ThemeColors.get(theme)?.secondary} px-8 py-5 rounded-lg shadow-md m-5 hover:scale-110 transform transition-all`} style={{width: '300px'}}>
    <div className="flex justify-center mb-3">{card.logo(72)}</div>
    <div className="flex justify-center text-xl font-bold">{card.title}</div>
    <div className="flex items-center flex-col mt-2 text-lg">{card.content.map((line, i) => <p key={i}>{line}</p>)}</div>
  </div>;
}
