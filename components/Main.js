'use client';
import classes from './Main.module.css';
import Image from 'next/image';

import ToggleButton from './ToggleButton';
import Header from './Header';
import NavBar from './NavBar';

import { useState } from 'react';

const Main = () => {
  const [gallery, setGallery] = useState(1);
  const [showNav, setShowNav] = useState(false);

  const prevHandler = () => {
    setGallery((prev) => {
      if (prev === 1) {
        return 3;
      }
      return prev - 1;
    });
  };

  const nextHandler = () => {
    setGallery((prev) => {
      if (prev === 3) {
        return 1;
      }
      return prev + 1;
    });
  };

  const toggleNavHandler = () => {
    setShowNav((prev) => !prev);
  };

  const mainImgSrc = `/images/desktop-image-hero-${gallery}.jpg`;

  return (
    <>
      {showNav && <NavBar onClick={toggleNavHandler} />}
      <div className={classes.main}>
        <div className={classes['main-img-container']}>
          <Image
            src={mainImgSrc}
            width="2000"
            height="1000"
            alt="image"
            className={classes.img}
          />
          <Header onClick={toggleNavHandler} />
        </div>

        <div className={classes['main-section']}>
          <div className={classes['text-section']}>
            <h1>Discover innovative ways to decorate</h1>
            <p>
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you have.
            </p>
            <div className={classes['shop-now-container']}>
              <h3>shop now</h3>
              <Image
                src="/images/icon-arrow.svg"
                width={50}
                height={15}
                alt="arrow icon"
              />
            </div>
          </div>
          <div className={classes['btn-container']}>
            <ToggleButton icon="left" onClick={prevHandler} />
            <ToggleButton icon="right" onClick={nextHandler} />
          </div>
        </div>

        <div className={classes['about-dark-container']}>
          <Image
            src="/images/image-about-dark.jpg"
            width={400}
            height={300}
            alt="about image dark"
            className={classes.img}
          />
        </div>
        <div className={classes['about-section']}>
          <h2>about our furniture</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture piece you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <div className={classes['about-light-container']}>
          <Image
            src="/images/image-about-light.jpg"
            width={400}
            height={300}
            alt="about image light"
            className={classes.img}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
