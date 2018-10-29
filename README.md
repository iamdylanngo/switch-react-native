## Switch React Native

<p align="center">
    <img src ="https://media.giphy.com/media/EP7FFmBKLhfq3n8pLo/giphy.gif" />
</p>

### Content
- [Switch React Native](#switch-react-native)
  - [Content](#content)
  - [Installation](#installation)
  - [Usage example](#usage-example)
  - [Properties](#properties)
  - [Events](#events)
  - [License](#license)
  - [Questions?](#questions)

### Installation
```bash
npm install switch-react-native
```
### Usage example
```javascript
import React, { Component } from 'react';
import { View } from 'react-native';
import { Switch } from 'switch-react-native';

class SwitchExample extends Component {
  render() {
    return (
      <View>
        <Switch
          height={40}
          width={300}
          activeText={`Active Text`}
          inActiveText={`InActive Text`}
          onValueChange={(value: any) => console.log(value)}
        />
      </View>
    );
  }
}
```
### Properties
* `width` (Number) - Initial switch state (default: 150),
* `height` (Number) - Initial switch state (default: 50),
* `time` (Number) - Initial switch state (default: 200 mms),
* `value` (Bool) - Initial switch state (default: false),
* `activeText` (String) - String activeText,
* `inActiveText` (String) - String inActiveText,
* `activeTextStyle` (Object) - Style is object,
* `inActiveTextStyle` (Object) - Style is object,
* `activeStyle` (Object) - Style is object,
* `backgroundStyle` (Object) - Style is object,

### Events
* `onValueChange`: This function is called when the switch is activated.

### License
MIT License

### Questions?
Feel free to [create an issue](https://github.com/jundat95/switch-react-native/issues)
