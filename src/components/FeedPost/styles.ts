import { StyleSheet } from "react-native/types";
import fonts from "../../assets/fonts/fonts";
import colors from "../../theme/colors";

export default StyleSheet.create({
    post: {

    },

    footer: {
        padding: 10

    },

    image: {
        width: '100%',
        aspectRatio: 1
    },

    header: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },

    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,

    },

    userName: {
        fontWeight: fonts.weight.bold,
        color: colors.black
    },

    threeDots: {
        marginLeft: 'auto'
    },

    iconContainer: {
        flexDirection: 'row',
        marginBottom: 5
    },

    icon: {
        marginHorizontal: 5
    },
    text: {
        color: colors.black,
        lineHeight: 18
    },

    bold: {
        fontWeight: fonts.weight.bold
    },

    comment: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    commentText: {
        color: colors.black,
        flex: 1
    }
});