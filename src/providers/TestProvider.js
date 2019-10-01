import React from 'react';
import {isEqual} from 'lodash';
import {connect} from 'react-redux';

import {ACTIONS} from '../reducers/TestReducer';

const initVars = ['apiData'];

class TestProvider extends React.Component {
  componentDidMount() {
    this.resetState(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const anyChanges = initVars.some(
      v => !isEqual(this.props[v], nextProps[v]),
    );

    if (anyChanges) {
      this.resetState(nextProps);
    }
  }

  resetState = props => {
    const initValues = {};

    for (let i = initVars.length - 1; i >= 0; i -= 1) {
      const key = initVars[i];
      initValues[key] = props[key];
    }

    this.props.dispatch(ACTIONS.init(initValues));
  };

  render() {
    const {children, workableWidth, isLoadingData, pageProps} = this.props;

    const pageActions = {};

    Object.entries(ACTIONS).forEach(([k, v]) => {
      pageActions[k] = (...args) => this.props.dispatch(v(...args));
    });

    const childProps = {
      workableWidth,
      isLoadingData,
      pageProps,
      pageActions,
    };

    return React.isValidElement(children)
      ? React.cloneElement(children, childProps) // element as children
      : React.createElement(children, childProps);
  }
}

const mapState = state => {
  const pageProps = Object.assign({}, state.test);

  return {
    apiData: {},
    pageProps,
  };
};

export default connect(mapState)(TestProvider);
