import React from 'react';
import {View, Text} from 'react-native';

class TestScreen extends React.Component {
  render() {
    const {pageProps, pageActions} = this.props;

    const {test} = pageProps;

    return (
      <View>
        <Text>{test}</Text>
      </View>
    );
  }
}

export default TestScreen;
