import React, { createContext, useState, useContext } from 'react';

const ActualitesContext = createContext();

export const useActualites = () => {
  return useContext(ActualitesContext);
};

export const ActualitesProvider = ({ children }) => {
  const [newsList, setNewsList] = useState([
    {
      id: 1,
      title: 'Nouvelle fonctionnalité lancée',
      date: '2024-12-19',
      description: 'Découvrez notre nouvelle fonctionnalité pour une meilleure gestion des utilisateurs.',
    },
    {
      id: 2,
      title: 'Mise à jour du système',
      date: '2024-12-18',
      description: 'Notre système a été mis à jour avec des améliorations de sécurité et de performance.',
    },
    {
      id: 3,
      title: 'Lancement de notre nouvelle application mobile',
      date: '2024-12-17',
      description: 'Téléchargez notre application mobile pour une expérience plus fluide et rapide.',
    },
    {
      id: 4,
      title: 'Événement à venir',
      date: '2024-12-20',
      description: 'Rejoignez-nous pour un événement exclusif où nous présenterons nos projets futurs.',
    },
  ]);

  const addActualite = (newActualite) => {
    setNewsList([newActualite, ...newsList]);
  };

  return (
    <ActualitesContext.Provider value={{ newsList, addActualite }}>
      {children}
    </ActualitesContext.Provider>
  );
};
