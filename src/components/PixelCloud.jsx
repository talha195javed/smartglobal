import React from 'react';

function PixelCloud({ side }) {
  const blocks = Array.from({ length: 12 });
  return <div className={`pixels ${side}`}>{blocks.map((_, i) => <span key={i} />)}</div>;
}

export default PixelCloud;
