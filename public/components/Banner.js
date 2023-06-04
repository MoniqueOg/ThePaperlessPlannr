import React from 'react';

const Banner = () => {
  const bannerData = {
    title: 'The Paperless Planner',
    description: 'Find beautiful digital planners to organize your life.',
    ctaText: 'Explore Planners',
    ctaUrl: '/products',
    bannerImage: 'banner-image.jpg'
  };

  return (
    <section className="banner">
      <div className="banner-image" style={{backgroundImage: `url(${bannerData.bannerImage})`}}></div>
      <div className="banner-content">
        <h1>{bannerData.title}</h1>
        <p>{bannerData.description}</p>
        <a href={bannerData.ctaUrl} className="cta-button">{bannerData.ctaText}</a>
      </div>
    </section>
  );
};

export default Banner;