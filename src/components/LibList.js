import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';


class LibList extends Component {

  componenetWillMount(){
    const ds = new FlatList.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    
    this.DataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library){
    return <ListItem library={library} />;
  }

  render(){
    return(
      <FlatList 
      dataSource={this.dataSource} 
      renderRow={this.renderRow} />
    );
  }
}

const mapStateToProps = state => {
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibList);