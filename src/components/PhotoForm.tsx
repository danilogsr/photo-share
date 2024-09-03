import React, { useState } from 'react';

interface PhotoFormProps {
  onSubmit: (title: string, url: string) => void;
  initialTitle?: string;
  initialUrl?: string;
}

const PhotoForm: React.FC<PhotoFormProps> = ({
  onSubmit,
  initialTitle = '',
  initialUrl = '',
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [url, setUrl] = useState(initialUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, url);
    setTitle('');
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Photo Title"
        required
      />
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Photo URL"
        required
      />
      <button type="submit">Save Photo</button>
    </form>
  );
};

export default PhotoForm;
