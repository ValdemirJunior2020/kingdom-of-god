import React from 'react';
import VerseOfTheDay from '../components/VerseOfTheDay';

const Home = () => {
  return (
    <div>
      <h1 className="fw-bold display-4 mb-3">Welcome</h1>
      <p className="fw-bold fs-5">
        This site is dedicated to the Gospel of the Kingdom of God — where Jesus reigns and we walk in His power as sons and daughters.
      </p>

      {/* ⬇️ Add large spacing here */}
      <div style={{ marginTop: '20rem' }}>
        <VerseOfTheDay />
      </div>
    </div>
  );
};

export default Home;
