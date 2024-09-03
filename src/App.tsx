import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhotoPage from './pages/PhotosPage';
import UserAlbums from './pages/UserAlbums';
import UserList from './pages/UserList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:userId/albums" element={<UserAlbums />} />
        <Route path="/albums/:albumId/photos" element={<PhotoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
