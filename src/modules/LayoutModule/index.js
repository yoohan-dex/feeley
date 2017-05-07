// @flow
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

import { FormattedMessage } from 'react-intl';
const { Header, Sider, Content } = Layout;

import messages from './messages';
import s from './styles';
import './styles.css';
const { Item } = Menu;

import Auth from './AuthSwitch';
import Logo from '../../components/Logo';

type SiderItems = {
  iconType: string,
  message: string,
}[];

type HeaderItems = {
  component: React.Component<*>,
}[];

type Props = {
  children: Component<*>,
  locale: string,
  push: (url: string) => void,
  goBack: () => void,
  changeLocale: (locale: string) => void,
  siderItems: SiderItems,
  headerItems: HeaderItems,
};

type State = {
  coll: boolean,
};

class LayoutModule extends Component<any, Props, State> {
  state: State;
  props: Props;
  state = { coll: false };
  render() {
    const { headerItems, siderItems } = this.props;
    return (
      <div style={{ height: '100%', position: 'absolute', width: '100%' }}>
        <Layout style={{ height: '100%' }}>
          <Header style={s.header}>
            <div>
              <Logo />
            </div>
            <Menu mode="horizontal" style={s.menu}>
              {headerItems &&
                headerItems.map((item, i) => (
                  <Item key={`header-item-${i}`} style={s.item}>
                    {item.component}
                  </Item>
                ))}
              <Auth />
            </Menu>
          </Header>
          <Layout>
            {siderItems &&
              <Sider
                width={150}
                collapsible
                defaultCollapsed={false}
                breakpoint="md"
                onCollapse={(collapsed: boolean) =>
                  this.setState({ coll: collapsed })}
              >
                <Menu>
                  {siderItems.map((item, i) => (
                    <Item key={`sider-item-${i}`}>
                      <Icon className="icon" type={item.iconType} />
                      {!this.state.coll &&
                        <FormattedMessage {...messages[item.message]} />}
                    </Item>
                  ))}
                </Menu>
              </Sider>}

            <Layout style={{ height: '100%' }}>
              {this.props.children}
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default LayoutModule;
