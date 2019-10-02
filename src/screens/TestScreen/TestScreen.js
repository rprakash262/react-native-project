import React from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';

import {TestContext} from '../../providers/TestProvider';

class TestScreen extends React.Component {
  static contextType = TestContext;

  componentDidMount() {
    axios
      .get('users/test')
      .then(res => {
        console.log({res: res.data.msg});
      })
      .catch(err => {
        console.log({err});
      });
  }

  render() {
    const {test, testFun} = this.context;

    return (
      <View>
        <Text>{test}</Text>
        <Button title="Press" onPress={testFun} />
      </View>
    );
  }
}

export default TestScreen;
