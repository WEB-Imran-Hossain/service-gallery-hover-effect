import React from 'react';
import ServiceGallery from './components/ServiceGallery';

function App() {
  return (
    <div className="App">
      <header className="text-center p-10">
        <h1 className="text-3xl font-bold">Our Services</h1>
      </header>
      <ServiceGallery />
    </div>
  );
}

export default App;
