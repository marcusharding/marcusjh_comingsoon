import React from 'react';

const Trees = ({src, ...props} = {}) =>
  <div className="trees" data-speed="0.01"
  style={Object.assign({backgroundImage: `url(${src})`})} {...props} />

export default Trees;
