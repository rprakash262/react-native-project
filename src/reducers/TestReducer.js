const INIT = 'TestReducer/INIT';

const defaultState = {
  test: 'TestReducer',
};

export const ACTIONS = {
  init: ({apiData}) => ({type: INIT, opts: apiData}),
};

const optsToState = apiData => {
  return {};
};

function TestReducer(state = defaultState, action) {
  switch (action.type) {
    case INIT:
      return Object.assign({}, state, optsToState(action.opts));
    default:
      return state;
  }
}

export default TestReducer;
