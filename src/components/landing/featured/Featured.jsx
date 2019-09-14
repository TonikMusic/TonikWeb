import React from 'react';
import './Featured.css';
import featuredArtistList from '../../../data/dummy/featuredArtistList.json';

const Featured = () => (
  <div id="featured" className="landing_featured">
    <h3 className="landing_featured__title">Featured Artists</h3>
    <div className="landing_featured__artists">
      <div className="landing_featured__row">
        <div className="landing_featured__column">
          {featuredArtistList.map((artist) => (
            <div className="landing_featured__card">
              <img src={artist.profile_img} alt="#" />
              <h2>{artist.name}</h2>
              {artist.genre.map((genres) => (
                <button type="button" className="landing_featured__artists_genres">
                  {genres}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Featured;
