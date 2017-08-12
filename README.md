## Switch React Native
<p align="center">
    <img src ="https://media.giphy.com/media/l1J3Mu9PuIIl7wADK/giphy.gif" />
</p>

### Content
- [Installation](#installation)
- [Usage example](#usage-example)
- [Properties](#properties)
- [Events](#events)
- [Questions?](#questions)

### Installation
```bash
npm install switch-react-native
```
### Usage example
```javascript
import React, { Component } from 'react';
import { View } from 'react-native';
import Switch from 'switch-react-native';

class SwitchExample extends Component {
  render() {
    return (
      <View>
        <Switch
          width={150}
          activeText={`PDP`}
          inActiveText={`PRS`}
          textStyle={{ 
              fontSize: 14, 
              fontWeight: 'bold' 
            }}
          onValueChange={(value) => console.log(value) }
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
* `textStyle` (Object) - Style is object,
* `activeStyle` (Object) - Style is object,
* `backgroundStyle` (Object) - Style is object,

### Events
* `onValueChange`: This function is called when the switch is activated.

### License
MIT License

### Questions?
Feel free to [create an issue](https://github.com/jundat95/switch-react-native/issues)
