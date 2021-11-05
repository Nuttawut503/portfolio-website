import { Navbar } from './navbar';
import { Greeting } from './greeting';

export function Header() {
  return <div className="relative w-screen h-screen">
    <Navbar/>
    <Greeting/>
  </div>
};