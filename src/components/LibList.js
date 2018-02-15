import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

class LibList extends Component {

  componenetWillMount(){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });
    //creates the Data to be rendered in the list, great for large renders
    // Check official Docs to see example on this ListView
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(){

  }

  render() {
    console.log(this.props);
    return(
      <ListView 
      dataSource={this.dataSource}
      renderRow={this.renderRow}
      />
      );
  }
}

const mapStateToProps = state => {
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibList);