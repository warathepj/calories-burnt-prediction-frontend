import React, { useEffect, useState } from 'react';

function SeabornChart() {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/plot')
      .then(res => res.json())
      .then(data => setImgSrc(`data:image/png;base64,${data.image}`))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {imgSrc ? (
        <img src={imgSrc} alt="Seaborn Chart" />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
}

export default SeabornChart;
