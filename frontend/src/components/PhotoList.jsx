import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, selectedTopic, numPhotos }) => {
  const filteredPhotos = selectedTopic 
    ? photos.filter(photo => photo.topicId === selectedTopic)
    : photos.slice(0, numPhotos);

  return (
    <div className="photo-list">
      {filteredPhotos.map((photo, index) => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;