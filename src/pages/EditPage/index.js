import React, { Component } from 'react';
import DiviceSimulator from 'react-device-simulator';
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducers from '../../reducers';
import Layout from '../../modules/LayoutModule';
// const reducers = combineReducers({
//   style: (s = { color: 'red' }, a) => {
//     if (a.type === 'hey') return { color: 'green' };
//     else return s;
//   },
// });

const store = createStore(reducers, { color: 'red' });
window.test = store;
class EditPage extends Component {
  render() {
    return (
      <DiviceSimulator>
        <Provider store={store}>
          <Layout />
        </Provider>
      </DiviceSimulator>
    );
  }
}

export default connect(state => state)(EditPage);

const Test = props => render(resume, props);

function render(node, props) {
  if (props.style.color === 'red')
    return React.createElement(node.tagName, { ...node.props }, node.children);
  return <div />;
}

const ConnectTest = connect(state => state)(Test);
const resume = {
  tagName: 'h1',
  props: {
    style: { color: 'red' },
  },
  children: ['hello', <div>hey<h1>hello</h1></div>],
};

const expressions = ['primary'];
const variables = {
  primary: 'red',
};
