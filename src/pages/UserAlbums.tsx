import React from 'react';
import AlbumManager from '../components/AlbumManager';
import { useParams } from 'react-router-dom';

const UserAlbums: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  if (!userId) return <div>No user Id found in URL.</div>;
  return (
    <div>
      <h1>User Albums</h1>
      <AlbumManager userId={Number(userId)} />
    </div>
  );
};

export default UserAlbums;
