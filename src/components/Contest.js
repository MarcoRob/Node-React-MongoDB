//const React = require('react');

import React, { PropTypes } from 'react';

class Contest extends React.Component {

  componentDidMount() {
    this.props.fetchNames(this.props.nameIds);
  }

  render () {
    /*return (
      <div id='s' className='Content'>
        <div className='contest-description'>
             {this.props.description}
        </div>
        <div className='home-link link' onClick={this.props.contestListClick}>
          Contest Link
        </div>
      </div>
    );*/
    return (
      <div className="Contest">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Contest Description</h3>
          </div>
          <div className="panel-body">
            <div className="contest-description">
              {this.props.description}
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Proposed Names</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {this.props.nameIds.map(nameId =>
                <li key={nameId} className="list-group-item">{this.props.lookupName(nameId).name}</li>
              )}
            </ul>
          </div>
        </div>

        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Propose a New Name</h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="input-group">
                <input type="text" placeholder="New Name Here..." className="form-control" />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-info">Sumbit</button>
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className="home-link link"
             onClick={this.props.contestListClick}>
          Contest List
        </div>
      </div>
    );
  }
}

Contest.PropTypes = {
  description : PropTypes.string.isRequired,
  contestListClick : PropTypes.func.isRequired,
  fetchNames: PropTypes.func.isRequired,
  nameIds : PropTypes.array.isRequired,
  lookupName : PropTypes.func.isRequired
}

module.exports = Contest;
