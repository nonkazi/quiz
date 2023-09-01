import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import AddQuestion from './components/AddQuestion';
import Questionnaire from './components/Questionnaire';

const initializeData = () => {
  const initialData = {
    questions: [
      { id: 1, question: "HEY" },
      { id: 2, question: "HELLO" },
    ],
    answers: [],
  };

  if (!localStorage.getItem("quizData")) {
    localStorage.setItem("quizData", JSON.stringify(initialData));
  }
};

function App() {

  initializeData();

  return (
   <Router>
    <Layout>
      <Routes>
      
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-question" element={<AddQuestion />} />
          <Route path="/questions" element={<Questionnaire />} />
         
          
      </Routes>
      
    </Layout>
    </Router>
   
  );
}

export default App;
