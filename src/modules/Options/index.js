import React, { Component } from 'react';
import { Tabs, Icon, Menu, Row, Col, Slider } from 'antd';

const { TabPane } = Tabs;
const { Item } = Menu;
function formatter(value) {
  return `${value}%`;
}
class Options extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="2">
          <TabPane tab="Global" key="1">
            <Row>
              <Col span={10}>
                <Menu
                  style={{
                    height: (window.innerHeight - 64) / 2 - 50,
                    overflow: 'auto',
                    paddingRight: 10,
                  }}
                >
                  <Item>hello</Item>
                  <Item>hello</Item>
                  <Item>hello</Item>
                  <Item>hello</Item>
                  <Item>hello</Item>
                  <Item>hello</Item>
                  <Item>hello</Item>
                  <Item>hello</Item>
                  <Item>hello</Item>
                  <Item>hello</Item>
                  <Item>hello</Item>
                  <Item>hello</Item>
                  <Item>hello</Item>
                  <Item>hello</Item>
                  <Item>hello</Item>
                  <Item>hello</Item>

                </Menu>
              </Col>
              <Col span={14}>
                <div>
                  <Slider tipFormatter={formatter} />
                  <Slider tipFormatter={null} />
                </div>
              </Col>
            </Row>

          </TabPane>
          <TabPane tab="Private" key="2">
            Private
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Options;
