"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
class Switch extends React.Component {
    constructor(props) {
        super(props);
        this._animateSwitch = (value) => {
            react_native_1.Animated.timing(this.state.marginLeftAnim, {
                toValue: value ? 0 : this.state.offsetWidth,
                duration: this.props.time,
                easing: react_native_1.Easing.bezier(0.68, -0.55, 0.265, 1.55),
            }).start();
            this.setState({ value: value });
            console.log(this.state.value);
        };
        this._pressButtonLeft = () => {
            this._animateSwitch(true);
            this.props.onValueChange(true);
        };
        this._pressButtonRight = () => {
            this._animateSwitch(false);
            this.props.onValueChange(false);
        };
        this.state = {
            value: this.props.value ? this.props.value : true,
            marginLeftAnim: new react_native_1.Animated.Value(0),
            offsetWidth: this.props.width / 2,
            offsetHeight: this.props.height,
            activeText: this.props.activeText ? this.props.activeText : 'InActive Text',
            inActiveText: this.props.inActiveText ? this.props.inActiveText : 'Active Text',
        };
    }
    render() {
        let { marginLeftAnim } = this.state;
        let { activeStyle, backgroundStyle, activeTextStyle, inActiveTextStyle } = this.props;
        return (<react_native_1.View style={[
            styles.container,
            {
                width: this.props.width,
                height: this.props.height,
            },
            backgroundStyle,
        ]}>
        <react_native_1.TouchableOpacity onPressIn={this._pressButtonLeft} style={[styles.button, {
                width: this.state.offsetWidth,
                height: this.state.offsetHeight,
            }]}>
          {this.state.value ?
            <react_native_1.Text style={[styles.textActive, activeTextStyle]}>{this.state.activeText}</react_native_1.Text>
            :
                <react_native_1.Text style={[styles.textInActive, inActiveTextStyle]}>{this.state.activeText}</react_native_1.Text>}
        </react_native_1.TouchableOpacity>
        <react_native_1.TouchableOpacity onPressIn={this._pressButtonRight} style={[styles.button, {
                width: this.state.offsetWidth,
                height: this.state.offsetHeight,
            }]}>
          {this.state.value ?
            <react_native_1.Text style={[styles.textInActive, inActiveTextStyle]}>{this.state.inActiveText}</react_native_1.Text>
            :
                <react_native_1.Text style={[styles.textActive, activeTextStyle]}>{this.state.inActiveText}</react_native_1.Text>}
        </react_native_1.TouchableOpacity>
        <react_native_1.Animated.View style={[
            {
                marginLeft: marginLeftAnim,
                width: this.state.offsetWidth,
                height: this.state.offsetHeight,
            },
            styles.active,
            activeStyle,
        ]}/>
      </react_native_1.View>);
    }
}
exports.default = Switch;
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 2,
        shadowOpacity: 0.2,
        elevation: 5,
        position: 'relative',
        zIndex: 1,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        zIndex: 1,
    },
    textActive: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#215e79',
    },
    textInActive: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#215e79',
    },
    active: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dae6e8',
    },
});
