## Switch React Native
<p align="center">
    <img src ="https://4.bp.blogspot.com/-DSIRFnI5sek/WY1DoD13mzI/AAAAAAAAO88/pAn_ACasiHUHO5Rot57L0KCtZDgkuWXbACLcBGAs/s320/Simulator%2BScreen%2BShot%2BAug%2B11%252C%2B2017%252C%2B11.41.50%2BAM.png" />
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
import {
  StyleSheet, View, 
} from 'react-native';
import Switch from 'switch-react-native';

class SwitchExample extends Component {

  render() {
    return (
      <View>
        <Switch
          width={widthScreen}
          activeText={`PDP`}
          inActiveText={`PRS`}
          textStyle={{ fontSize: 14, fontWeight: 'bold' }}
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
