// @flow
import React from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { goBack, replace } from 'react-router-redux';
import './styles.css';

type Props = {
  children: React.Component<*>,
  title: string,
  match: { url: string, isExact: boolean },
  onOk: Function,
  onCancel: Function,
  goBack: () => void,
  replace: (url: string) => void,
  history: {
    length: number,
  },
};

const ModelWithRoute = (props: Props) => {
  const {
    title,
    history,
    children,
    goBack,
    match,
    onCancel,
    onOk,
    replace,
  } = props;
  console.log('history', props);
  return (
    <Modal
      footer={null}
      title={title}
      wrapClassName="vertical-center-modal"
      visible={match.isExact}
      onCancel={() => {
        onCancel && onCancel();
        if (history.length > 2) {
          goBack();
        } else {
          replace('/');
        }
      }}
      onOk={onOk}
    >
      {children}
    </Modal>
  );
};

export default withRouter(
  connect(undefined, dispatch => ({
    goBack: () => dispatch(goBack()),
    replace: (url: string) => dispatch(replace(url)),
  }))(ModelWithRoute),
);
