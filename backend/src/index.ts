import express from 'express';
import cors from 'cors';
import {
  createAlbum,
  createPhoto,
  deleteAlbum,
  deletePhoto,
  getAlbumPhotos,
  getUserAlbums,
  getUsers,
  updateAlbum,
  updatePhoto,
} from './api';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', async (_, res) => {
  try {
    const data = await getUsers();
    res.json(data);
  } catch {
    res.status(500).send('error fetching users');
  }
});

app.get('/users/:userId/albums', async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await getUserAlbums(Number(userId));
    res.json(data);
  } catch {
    res.status(500).send('error fetching albums');
  }
});

app.get('/albums/:albumId/photos', async (req, res) => {
  try {
    const { albumId } = req.params;
    const data = await getAlbumPhotos(Number(albumId));
    res.json(data);
  } catch {
    res.status(500).send('error fetching photos');
  }
});

app.post('/albums', async (req, res) => {
  try {
    const { userId, albumTitle } = req.body;
    const data = await createAlbum(userId, albumTitle);
    res.json(data);
  } catch {
    res.status(500).send('error creating album');
  }
});

app.put('/albums/:albumId', async (req, res) => {
  try {
    const { albumId } = req.params;
    const { albumTitle } = req.body;
    const data = await updateAlbum(Number(albumId), albumTitle);
    res.json(data);
  } catch {
    res.status(500).send('error updating album');
  }
});

app.delete('/albums/:albumId', async (req, res) => {
  try {
    const { albumId } = req.params;
    const success = await deleteAlbum(Number(albumId));

    if (success) {
      res.status(200);
    } else {
      res.status(500).send('error deleting album');
    }
  } catch {
    res.status(500).send('error deleting album');
  }
});

app.post('/photos', async (req, res) => {
  try {
    const { albumId, title, url } = req.body;
    const data = await createPhoto(albumId, title, url);
    res.json(data);
  } catch {
    res.status(500).send('error creating photo');
  }
});

app.put('/photos/:photoId', async (req, res) => {
  try {
    const { photoId } = req.params;
    const { title, url } = req.body;
    const data = await updatePhoto(Number(photoId), title, url);
    res.json(data);
  } catch {
    res.status(500).send('error updating photo');
  }
});

app.delete('/photos/:photoId', async (req, res) => {
  try {
    const { photoId } = req.params;
    const success = await deletePhoto(Number(photoId));

    if (success) {
      res.status(200);
    } else {
      res.status(500).send('error deleting photo');
    }
  } catch {
    res.status(500).send('error deleting photo');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
