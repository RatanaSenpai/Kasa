// Importation des dépendances nécessaires à React, à notre composant Router et à notre fichier CSS
import React from 'react';
import Router from './router/Router';
import './styles/app.css';

// Définition du composant App
const App = () => {
  // retourne un élément JSX
  return (
    <div className="app-container">
      {/* composant Router */}
      <Router />
    </div>
  );
};
// Exportation du composant App afin qu'il puisse être utilisé ailleurs dans notre application
export default App;
