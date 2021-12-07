import { Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import RecordsList from './components/RecordsList';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
            <Form />
        } />

        <Route path="/show" element={
          <RecordsList />
        } />
      </Routes>
    </div>
  );
}

export default App;
