import * as React from 'react';
export interface SwitchProps {
    width: number;
    height: number;
    time?: number;
    value?: boolean;
    backgroundStyle?: any;
    onValueChange: any;
    activeText?: string;
    inActiveText?: string;
    activeTextStyle?: any;
    inActiveTextStyle?: any;
    activeStyle?: string;
}
export interface SwitchState {
    value: boolean;
    marginLeftAnim: any;
    offsetWidth: number;
    offsetHeight: number;
    activeText: string;
    inActiveText: string;
}
export default class Switch extends React.Component<SwitchProps, SwitchState> {
    constructor(props: SwitchProps);
    _animateSwitch: (value: boolean) => void;
    _pressButtonLeft: () => void;
    _pressButtonRight: () => void;
    render(): JSX.Element;
}
