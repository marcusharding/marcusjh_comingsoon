import React from 'react';

const Background = ({src, ...props} = {}) =>
  <div className="background" data-speed="0.01" data-revert="true" 
  style={Object.assign({backgroundImage: `url(${src})`})} {...props} />

export default Background;