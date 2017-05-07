import React, { Component } from 'react';
import { Button } from 'antd';
import AppBar from 'material-ui/AppBar';
import Layout from '../../modules/Layout';
class Edit extends Component {
  render() {
    return (
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <AppBar title="Edit" />
        <div>
          <Layout />
        </div>
      </div>
    );
  }
}

export default Edit;
