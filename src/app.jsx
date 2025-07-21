import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Ticketera de Eventos</h1>
      </header>
      <main className="container mx-auto p-4">
        <h2 className="text-xl font-semibold">Bienvenido a la ticketera</h2>
        <p className="mt-2">Aquí podrás comprar entradas para tus eventos favoritos.</p>
      </main>
    </div>
  );
}

export default App;