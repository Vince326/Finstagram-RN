import { TextStyle } from "react-native/types";

const size = {
    xsSize: 10,
    smSize: 12,
    primarySize: 14,
    mdSize: 16,
    lgSize: 20,
    xlSize: 24,
    xxlSize: 30

};

const weight: { [key: string]: TextStyle["fontWeight"] } = {
    full: '900',
    bold: 'bold',
    normal: 'normal',
    thin: '400',

}

export default { size, weight };