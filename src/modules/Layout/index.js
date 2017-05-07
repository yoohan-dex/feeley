// @flow
import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Options from '../Options';
import EditorPanel from '../EditorPanel';
type Props = {
  rightPanel: React.Component<*>,
  leftTopPanel: React.Component<*>,
  leftBottomPanel: React.Component<*>,
};

const getHeight = () => window.innerHeight;

class LayoutModule extends Component<any, Props, any> {
  props: Props;
  render() {
    return (
      <Row style={{ height: getHeight() - 64 }}>
        <Col
          lg={12}
          md={10}
          sm={8}
          xs={24}
          style={{ height: '100%' }}
          span={12}
        >
          <Row style={{ height: '50%' }}>
            <Options />
          </Row>
          <Row style={{ height: '50%' }}>
            <EditorPanel />
          </Row>
        </Col>
        <Col lg={12} md={14} sm={16} xs={24}>2</Col>
      </Row>
    );
  }
}

export default LayoutModule;
