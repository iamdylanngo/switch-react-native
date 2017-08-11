## Switch React Native
<p align="center">
    <img src ="http://oi57.tinypic.com/2rysl94.jpg" />
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
var Switch = require('switch-react-native');

var Application = React.createClass({
  render: function() {
    return (
      <View>
        <Switch 
          width={widthScreen}
          activeText={`activeText`}
          inActiveText={`inActiveText`}
          onValueChange={(value) => this._onPressSwitch(value)}
        />
      </View>
    );
  }
});
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
