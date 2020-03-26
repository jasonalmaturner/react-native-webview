import React, {Component} from 'react';
import {Image, View} from 'react-native';

import WebView from 'react-native-webview';

const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>Uploads</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #ccc;
      }
    </style>
  </head>
  <body>
    <p>
      <label for="any-file">Any gif input</label>
      <br/>
      <input name="any-file">
    </p>
  </body>
</html>
`;

type Props = {};
type State = {};

export default class KeyboardGifs extends Component<Props, State> {
  state = {
    imageSource: null
  };

  render() {
    const {imageSource} = this.state;
    console.log(imageSource);
    return (
      <View>
        <View style={{ height: 60 }}>
          <WebView
            source={{html: HTML}}
            automaticallyAdjustContentInsets={false}
            onCommitContent={(event) => {
              this.setState({imageSource: event.nativeEvent.contentUri});
            }}
          />
        </View>
        {imageSource && <Image style={{height: 100, width: 100}} source={{uri: imageSource}} />}
      </View>
    );
  }
}
