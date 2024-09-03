import React, { useState } from 'react';

interface AlbumFormProps {
  onSubmit: (title: string) => void;
  initialTitle?: string;
}

const AlbumForm: React.FC<AlbumFormProps> = ({
  onSubmit,
  initialTitle = '',
}) => {
  const [title, setTitle] = useState(initialTitle);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Album Title"
        required
      />
      <button type="submit">Save Album</button>
    </form>
  );
};

export default AlbumForm;
