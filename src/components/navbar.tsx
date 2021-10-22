import React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { ToggleThemeButton } from './toggleThemeButton';

export const Navbar: React.FC = () => {
  return <div className="flex justify-around">
    <p className="text-5xl font-bold">Portfolio</p>
    <div className="flex space-x-5">
      <ToggleThemeButton/>
      <a className="self-center" href="https://github.com/Nuttawut503">
        <GitHub sx={{fontSize: 36}}/>
      </a>
      <a className="self-center" href="https://linkedin.com/in/nuttawut-promsuk" target="_blank" rel="noreferrer">
        <LinkedIn sx={{fontSize: 36}}/>
      </a>
    </div>
  </div>;
};
