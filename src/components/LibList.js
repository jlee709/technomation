import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibList extends Component {
  render() {
    return;
  }
}

const mapStateToProps = state => {
  console.log(state);
};

export default connect(mapStateToProps)(LibList);