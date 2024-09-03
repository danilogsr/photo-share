import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PhotoForm from '../components/PhotoForm';
import { createPhoto, deletePhoto, getAlbumPhotos, updatePhoto } from '../api';

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}

const PhotoPage: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleCreatePhoto = async (title: string, url: string) => {
    await createPhoto(Number(albumId), title, url);
  };

  const handleUpdatePhoto = async (
    photoId: number,
    title: string,
    url: string,
  ) => {
    await updatePhoto(photoId, title, url);
  };

  const handleDeletePhoto = async (photoId: number) => {
    await deletePhoto(photoId);
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await getAlbumPhotos(Number(albumId));
        setPhotos(data);
      } catch (err) {
        setError('Failed to load photos');
      }
    };

    fetchPhotos();
  }, [albumId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Photos</h1>
      <PhotoForm onSubmit={handleCreatePhoto} />
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
            <button
              onClick={() =>
                handleUpdatePhoto(photo.id, 'New Title', 'New URL')
              }
            >
              Edit
            </button>
            <button onClick={() => handleDeletePhoto(photo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoPage;
