import React from 'react';

// Datos mockeados de eventos
const events = [
  {
    id: 1,
    title: 'Obra de Teatro: Hamlet',
    image: 'https://via.placeholder.com/300x200',
    date: '2025-08-01',
    price: 1500,
  },
  {
    id: 2,
    title: 'Concierto de Rock',
    image: 'https://via.placeholder.com/300x200',
    date: '2025-08-15',
    price: 2500,
  },
  {
    id: 3,
    title: 'Festival de Danza',
    image: 'https://via.placeholder.com/300x200',
    date: '2025-09-10',
    price: 1800,
  },
];

function EventList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-gray-600 mt-1">Fecha: {event.date}</p>
            <p className="text-gray-600 mt-1">Precio: ${event.price}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Comprar Entradas
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventList;