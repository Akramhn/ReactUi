import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useActualites } from './ActualitesContext'; 

const ActualiteDetails = () => {
  const { id } = useParams();
  const { newsList } = useActualites();
  const navigate = useNavigate(); // Hook to navigate programmatically

  const news = newsList.find((item) => item.id === parseInt(id));

  if (!news) {
    return <div>Actualité not found!</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{news.title}</h1>
      <p className="text-gray-500 text-sm">{news.date}</p>
      <p className="text-gray-700 mt-6">{news.description}</p>

      <button
        onClick={() => navigate("/actualite")} 
        className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
      >
        Retour
      </button>
    </div>
  );
};

export default ActualiteDetails;
