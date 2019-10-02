const INIT = 'TestReducer/INIT';
const TEST_FUN = 'TestReducer/TEST_FUN';

const defaultState = {
  test: 'TestReducer',
};

export const ACTIONS = {
  init: ({apiData}) => ({type: INIT, opts: apiData}),
  testFun: () => ({type: TEST_FUN}),
};

const optsToState = apiData => {
  return {};
};

function TestReducer(state = defaultState, action) {
  switch (action.type) {
    case INIT:
      return Object.assign({}, state, optsToState(action.opts));
    case TEST_FUN:
      return Object.assign({}, state, {
        test: 'TestReducer Chnaged',
      });
    default:
      return state;
  }
}

export default TestReducer;
