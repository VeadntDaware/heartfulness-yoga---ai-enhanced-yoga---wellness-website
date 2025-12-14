
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Instructors from './pages/Instructors';
import Pricing from './pages/Pricing';
import AIGuide from './pages/AIGuide';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/ai-guide" element={<AIGuide />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
