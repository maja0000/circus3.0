import React, { useEffect, useState } from 'react';
import './AllShows.css';
import OneShow from './OneShow.js';
import HashLoader from 'react-spinners/HashLoader';
import { css } from '@emotion/core';

const override = css`
  display: block;
  margin-left: 50%;
  margin-right: 50%;
  border-color: black;
`;

export default function AllShows() {
  const [shows, setShows] = useState([]);
  // const [selectedShows, setSelectedShows] = useState(shows);
  const [loading, setLoading] = useState(true);

  const handleFilterShows = (event) => {
    // console.log('selectedShows', selectedShows);
    setShows(shows.filter((show) => show.tag === event.target.value));
  };
  const handleSelectAllShows = () => {
    setShows(shows);
  };

  useEffect(() => {
    fetch('http://localhost:5000/shows')
      .then((res) => res.json())
      .then((res) => {
        setShows(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);

  return (
    <>
      {loading ? (
        <HashLoader
          css={override}
          color={'black'}
          size={50}
          loading={loading}
        />
      ) : (
        <div className="container">
          <div className="categories">
            <div className="categories-list">
              <span className="categories-header">CATEGORIES</span>
              <p className="categories-text">
                We offer multiple shows in different categories. We would like
                to know which of the shows do you like best! Let us know by
                clicking on the heart button!{' '}
              </p>
              <div className="categories-items">
                <button
                  className="category-item"
                  value="fire"
                  onClick={handleSelectAllShows}
                >
                  all
                </button>
                <button
                  value="fire"
                  className="category-item"
                  onClick={handleFilterShows}
                >
                  fire
                </button>
                <button
                  value="knifes"
                  className="category-item"
                  onClick={handleFilterShows}
                >
                  knifes
                </button>
                <button
                  value="animals"
                  className="category-item"
                  onClick={handleFilterShows}
                >
                  animals
                </button>
                <button
                  value="mime"
                  className="category-item"
                  onClick={handleFilterShows}
                >
                  pantomime
                </button>
              </div>
            </div>
          </div>
          <div className="individual-shows-group">
            {shows.map((show, key) => (
              <OneShow key={key} show={show} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
