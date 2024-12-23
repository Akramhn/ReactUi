import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useActualites } from './ActualitesContext'; 
import AddActualiteModal from './AddActualiteModal';

const ListActualitites = () => {
  const { newsList, addActualite } = useActualites(); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddActualite = (newActualite) => {
    addActualite(newActualite);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Actualités</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-600"
      >
        <span className="text-3xl">+</span>
      </button>

      <div className="space-y-6">
        {newsList.map((news) => (
          <div key={news.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-indigo-500">{news.title}</h2>
            <p className="text-gray-500 text-sm mt-2">{news.date}</p>
            {/* Update Link to include the parent route path */}
            <Link to={`/actualite/${news.id}`} className="text-indigo-500 hover:underline mt-4 block">
  Read more...
</Link>


          </div>
        ))}
      </div>

      <AddActualiteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddActualite={handleAddActualite}
      />
    </div>
  );
};

export default ListActualitites;
