import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data;
  } catch {
    throw new Error('Failed to fetch users.');
  }
};

export const getUserAlbums = async (userId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}/albums`);
    return response.data;
  } catch {
    throw new Error('Failed to fetch albums');
  }
};

export const getAlbumPhotos = async (albumId: number) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/albums/${albumId}/photos`,
    );
    return response.data;
  } catch {
    throw new Error('Failed to fetch photos');
  }
};

export const createAlbum = async (userId: number, albumTitle: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/albums`, {
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
    const response = await axios.put(`${API_BASE_URL}/albums/${albumId}`, {
      title: albumTitle,
    });
    return response.data;
  } catch {
    throw new Error('Failed to update album');
  }
};

export const deleteAlbum = async (albumId: number) => {
  try {
    await axios.delete(`${API_BASE_URL}/albums/${albumId}`);
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
    const response = await axios.post(`${API_BASE_URL}/photos`, {
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
    const response = await axios.put(`${API_BASE_URL}/photos/${photoId}`, {
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
    await axios.delete(`${API_BASE_URL}/photos/${photoId}`);
  } catch {
    throw new Error('Failed to delete photo');
  }
};
