import { View, Text, StyleSheet } from 'react-native'
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import fonts from '../../assets/fonts/fonts';
import colors from '../../theme/colors';

import { IComment } from '../../Types/models';


interface ICommentProps {
    comment: IComment;
}

const Comment = ({ comment }: ICommentProps) => {
    return (
        <View style={styles.comment}>
            <Text style={styles.commentText}>
                <Text style={styles.bold}>{comment.user.username}</Text> {comment.comment}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Text>
            <AntDesign
                name={'hearto'}
                size={24}
                style={styles.icon}
                color={colors.black}
            />
        </View>
    );
};

const styles = StyleSheet.create({

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
    },
    icon: {
        marginHorizontal: 5
    },

});


export default Comment