import React, { useState } from 'react';
import { useActualites } from './ActualitesContext';

const AddActualiteModal = ({ isOpen, onClose, onAddActualite }) => {
    const { newsList } = useActualites(); 
  
  const [newActualite, setNewActualite] = useState({
    id: newsList.length > 0 ? newsList[newsList.length - 1].id + 1 : 1,
    title: '',
    date: '',
    description: '',
  });

  if (!isOpen) return null;

  const handleAddActualite = () => {
    onAddActualite(newActualite);
    setNewActualite({ title: '', date: '', description: '' }); 
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Ajouter une Actualité</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Titre</label>
          <input
            type="text"
            value={newActualite.title}
            onChange={(e) => setNewActualite({ ...newActualite, title: e.target.value })}
            className="mt-2 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Date</label>
          <input
            type="date"
            value={newActualite.date}
            onChange={(e) => setNewActualite({ ...newActualite, date: e.target.value })}
            className="mt-2 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Description</label>
          <textarea
            value={newActualite.description}
            onChange={(e) => setNewActualite({ ...newActualite, description: e.target.value })}
            className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            rows="4"
          />
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Annuler
          </button>
          <button
            onClick={handleAddActualite}
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddActualiteModal;
