import React, { useState, useEffect } from 'react';
import { getUserAlbums, createAlbum, updateAlbum, deleteAlbum } from '../api';
import { useNavigate } from 'react-router-dom';

interface Album {
  id: number;
  title: string;
}

interface AlbumManagerProps {
  userId: number;
}

const AlbumManager: React.FC<AlbumManagerProps> = ({ userId }) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [newAlbumTitle, setNewAlbumTitle] = useState('');
  const [editAlbumId, setEditAlbumId] = useState<number | null>(null);
  const [editAlbumTitle, setEditAlbumTitle] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const data = await getUserAlbums(userId);
        setAlbums(data);
      } catch (error: any) {
        console.error('Failed to fetch albums: ', error.message);
      }
    };

    fetchAlbums();
  }, [userId]);

  const handleCreateAlbum = async () => {
    try {
      const newAlbum = await createAlbum(userId, newAlbumTitle);
      setAlbums([...albums, newAlbum]);
      setNewAlbumTitle('');
    } catch (error: any) {
      console.error('Failed to create album: ', error.message);
    }
  };

  const handleUpdateAlbum = async () => {
    if (editAlbumId === null) return;
    try {
      const updatedAlbum = await updateAlbum(editAlbumId, editAlbumTitle);
      setAlbums(
        albums.map((album) =>
          album.id === editAlbumId ? updatedAlbum : album,
        ),
      );
      setEditAlbumId(null);
      setEditAlbumTitle('');
    } catch (error: any) {
      console.error('Failed to update album: ', error.message);
    }
  };

  const handleDeleteAlbum = async (albumId: number) => {
    try {
      await deleteAlbum(albumId);
      setAlbums(albums.filter((album) => album.id !== albumId));
    } catch (error: any) {
      console.error('Failed to delete album: ', error.message);
    }
  };

  const handleUserClick = (albumId: number) => {
    navigate(`/albums/${albumId}/photos`);
  };

  return (
    <div>
      <h2>Manage Albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            {editAlbumId === album.id ? (
              <input
                type="text"
                value={editAlbumTitle}
                onChange={(e) => setEditAlbumTitle(e.target.value)}
              />
            ) : (
              <span onClick={() => handleUserClick(album.id)}>
                {album.title}
              </span>
            )}
            <button onClick={() => setEditAlbumId(album.id)}>Edit</button>
            <button onClick={() => handleDeleteAlbum(album.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="New Album Title"
        value={newAlbumTitle}
        onChange={(e) => setNewAlbumTitle(e.target.value)}
      />
      <button onClick={handleCreateAlbum}>Create Album</button>
      {editAlbumId && (
        <div>
          <button onClick={handleUpdateAlbum}>Update Album</button>
        </div>
      )}
    </div>
  );
};

export default AlbumManager;
