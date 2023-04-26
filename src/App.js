import { Route, Routes } from 'react-router-dom';
import Navigation from './components/features/Navigation';
import Rockets from './components/features/rockets';
import Missions from './components/features/missions';
import Profile from './components/features/profile';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/one" element={<Missions />} />
        <Route path="/two" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
