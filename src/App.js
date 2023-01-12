import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import './App.css';
import MainHeader from './components/MainHeader';
import MainSection from './components/MainSection';
import React from 'react';


function App() {
  return (
    <div className="App">
      <NavBar />
      <MainHeader />
      <MainSection />
    </div>
  );
}
export default App;
