import React, { useEffect, useState } from 'react';
import './AllShows.css';
import OneShow from './OneShow.js';
import HashLoader from 'react-spinners/HashLoader';
import { css } from '@emotion/core';

import ModalPrices from '../Modals/ModalPrices';
import ModalGallery from '../Modals/ModalGallery';

import Modal from 'react-modal';
import { ModalProvider, ModalConsumer } from '../Modals/ModalContext';
import ModalRoot from '../Modals/ModalRoot';

const override = css`
  display: block;
  margin-left: 50%;
  margin-right: 50%;
  border-color: black;
`;
const ModalAnimalOpen = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <ModalPrices />
    <br />

    <button className="category-item" onClick={onRequestClose}>
      close
    </button>
  </Modal>
);
const ModalGalleryOpen = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <ModalGallery />
    <br />
    <button className="category-item" onClick={onRequestClose}>
      close
    </button>
  </Modal>
);

export default function AllShows() {
  const [shows, setShows] = useState([]);
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
          <ModalProvider>
            <ModalRoot />
            <ModalConsumer>
              {({ showModal }) => (
                <React.Fragment>
                  <div className="individual-shows-group">
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}
                    >
                      <button
                        className="category-item"
                        onClick={() => showModal(ModalAnimalOpen)}
                      >
                        prices
                      </button>
                      <button
                        className="category-item"
                        onClick={() => showModal(ModalGalleryOpen)}
                      >
                        gallery
                      </button>
                    </div>
                    {shows.map((show, key) => (
                      <OneShow key={key} show={show} />
                    ))}
                  </div>
                </React.Fragment>
              )}
            </ModalConsumer>
          </ModalProvider>
        </div>
      )}
    </>
  );
}
