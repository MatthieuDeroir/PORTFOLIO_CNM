import React from 'react';

const ThemeContext = React.createContext({
    theme: 'light', // valeur par défaut
    toggleTheme: () => {} // fonction par défaut qui ne fait rien
});

export default ThemeContext;