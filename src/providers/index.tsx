import React, { cloneElement } from 'react';
import { ThemeProvider } from './theme';

const ProviderComposer: React.FC<{
  contexts: Array<any>
}> = ({ contexts, children }) => {
  return contexts.reduce((kids, parent) => cloneElement(parent, { children: kids }), children);
};

export const ContextProvider: React.FC = ({children}) => {
  return (
    <ProviderComposer contexts={[<ThemeProvider/>]}>
      {children}
    </ProviderComposer>
  );
};
