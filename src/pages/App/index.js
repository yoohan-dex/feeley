// @flow
import React, { Component } from 'react';
// import { Link, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import Checkbox from 'material-ui/Checkbox';
import { Button, Card, Row, Col, Menu } from 'antd';

import Layout from '../../modules/LayoutModule';
import { changeLocale } from '../../actions/language';

import Login from '../../modules/LayoutModule/Login';
import Register from '../../modules/LayoutModule/Register';
import LanguageButton from '../../modules/LayoutModule/LanguageButton';

import './index.css';
const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const siderItems = [
  { iconType: 'eye', message: 'index' },
  { iconType: 'file', message: 'template' },
  { iconType: 'area-chart', message: 'data' },
];

const headerItems = [
  { component: <Login /> },
  { component: <Register /> },
  { component: <LanguageButton /> },
];
class App extends Component {
  state = {
    count: 0,
  };
  props: { hey: () => void };
  componentDidMount() {
    console.log(this.props);
  }
  hey() {
    this.props.hey();
  }
  render() {
    return (
      <div className="background">
        <Layout headerItems={headerItems} siderItems={siderItems}>
          <Menu mode="horizontal" onClick={this.hey.bind(this)}>
            <Menu.Item>
              latest
            </Menu.Item>
            <Menu.Item>
              popular
            </Menu.Item>
          </Menu>
          <Row gutter={24} style={{ margin: '10px 5px' }}>
            <Col span={12}>
              <Card bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src="./images/resume.png" />
                </div>
                <div className="custom-card">
                  <Checkbox
                    checkedIcon={<ActionFavorite />}
                    uncheckedIcon={<ActionFavoriteBorder />}
                    style={styles.checkbox}
                  />
                  {' '}
                  <Button icon="heart">122</Button>
                  <Button icon="message">22</Button>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src="./images/resume.png" />
                </div>
                <div className="custom-card">
                  <h3>Europe Street beat</h3>
                  <p>www.instagram.com</p>
                </div>
              </Card>
            </Col>
          </Row>

        </Layout>
      </div>
    );
  }
}
export default withRouter(
  connect(
    state => state,
    dispatch => ({
      hey: () => dispatch(changeLocale('zh')),
    }),
  )(App),
);
