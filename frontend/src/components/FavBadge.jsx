import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ dark, setDark, ifFavPhotosExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert ={!!ifFavPhotosExist} selected={true} dark={dark}/>
      <div className='dark-mode' onClick={setDark}>
      </div>
    </div>
  )
};

export default FavBadge;