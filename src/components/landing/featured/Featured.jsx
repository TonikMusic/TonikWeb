import React from 'react';
import './Featured.css';
import featuredArtistList from '../../../data/dummy/featuredArtistList.json';

const Featured = () => (
  <div id="featured" className="landing_featured">
    <h3 className="landing_featured__title">Featured Artists</h3>
    <div className="landing_featured__artist_container">
      <section className="landing_featured__artist_cards">
        {featuredArtistList.map((artists) => (
          <article className="landing_featured__artist_card">
            <img src={artists.profile_img} alt="#" />
            <div className="landing_featured__artist_name">{artists.name}</div>
            {artists.genre.map((genres) => (
              <div className="landing_featured__artist_genre">{genres}</div>
            ))}
          </article>
        ))}
      </section>
    </div>
  </div>
);

export default Featured;
