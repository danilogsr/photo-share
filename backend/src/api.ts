import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch {
    throw new Error('Failed to fetch users');
  }
};

export const getUserAlbums = async (userId: number) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}/albums`);
    return response.data;
  } catch {
    throw new Error('Failed to fetch albums');
  }
};

export const getAlbumPhotos = async (albumId: number) => {
  try {
    const response = await axios.get(`${API_URL}/albums/${albumId}/photos`);
    return response.data;
  } catch {
    throw new Error('Failed to fetch photos');
  }
};

export const createAlbum = async (userId: number, albumTitle: string) => {
  try {
    const response = await axios.post(`${API_URL}/albums`, {
      userId,
      title: albumTitle,
    });
    return response.data;
  } catch {
    throw new Error('Failed to create album');
  }
};

export const updateAlbum = async (albumId: number, albumTitle: string) => {
  try {
    const response = await axios.put(`${API_URL}/albums/${albumId}`, {
      title: albumTitle,
    });
    return response.data;
  } catch {
    throw new Error('Failed to update album');
  }
};

export const deleteAlbum = async (albumId: number) => {
  try {
    const response = await axios.delete(`${API_URL}/albums/${albumId}`);
    return response.status === 200;
  } catch {
    throw new Error('Failed to delete album');
  }
};
export const createPhoto = async (
  albumId: number,
  title: string,
  url: string,
) => {
  try {
    const response = await axios.post(`${API_URL}/photos`, {
      albumId,
      title,
      url,
    });
    return response.data;
  } catch {
    throw new Error('Failed to create photo');
  }
};

export const updatePhoto = async (
  photoId: number,
  title: string,
  url: string,
) => {
  try {
    const response = await axios.put(`${API_URL}/photos/${photoId}`, {
      title,
      url,
    });
    return response.data;
  } catch {
    throw new Error('Failed to update photo');
  }
};

export const deletePhoto = async (photoId: number) => {
  try {
    const response = await axios.delete(`${API_URL}/photos/${photoId}`);
    return response.status === 200;
  } catch {
    throw new Error('Failed to delete photo');
  }
};
