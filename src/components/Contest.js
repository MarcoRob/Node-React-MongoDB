//const React = require('react');

import React, { PropTypes } from 'react';

class Contest extends React.Component {

  render () {
    return (
      <div className='Content'>
        {this.props.description}
      </div>
    );
  }
}

Contest.PropTypes = {
  description : PropTypes.string.isRequired
}

module.exports = Contest;
