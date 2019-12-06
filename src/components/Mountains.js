import React from 'react';

const Mountains = ({src, ...props} = {}) =>
  <div className="mountains" data-speed="0.02" 
  style={Object.assign({backgroundImage: `url(${src})`})} {...props} />

export default Mountains;