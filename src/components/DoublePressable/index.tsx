import { View, Text, Pressable } from 'react-native'
import React, { Children } from 'react';
import { ReactNode } from 'react';

interface IDoublePressable {
    onDoublePress?: () => void;
    children: ReactNode;
}

const DoublePressable = ({ onDoublePress = () => { }, children }: IDoublePressable) => {
    let lastTap = 0;
    const doublePress = () => {
        const now = Date.now(); //Returns timestamp of when it's happening
        if (now - lastTap < 1000) {
            onDoublePress();
        }

        lastTap = now;
    };


    return (
        <Pressable onPress={doublePress}>
            {children}
        </Pressable>
    )
}

export default DoublePressable;