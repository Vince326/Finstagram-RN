import React from "react";
import { View, Text, Image } from 'react-native';
import { useState } from "react";
import colors from '../../theme/colors';
import fonts from "../../assets/fonts/fonts";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from "react-native/types";
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Comment from "../Comment/Comment";
import styles from './styles';
import { IPost } from '../../Types/models';

interface IFeedPost {
    post: IPost;
}



const FeedPost = ({ post }: IFeedPost) => {

    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    const toggleDesciptionExpanded = () => {
        setIsDescriptionExpanded(!isDescriptionExpanded);
    };


    return (
        <View style={styles.post}>


            {/* Header */}
            <View style={styles.header}>
                <Image source={{ uri: post.user.image }} style={styles.profilePic} />
            </View>

            <Text style={styles.userName}>{post.user.username}</Text>

            <Entypo name={"dots-three-horizontal"} size={16} style={styles.threeDots} />

            {/*Content*/}
            <Image source={{ uri: post.image }} style={styles.image} />


            {/* Footer */}
            <View style={styles.footer}>
                <View style={styles.iconContainer}>
                    <AntDesign
                        name={'hearto'}
                        size={24}
                        style={styles.icon}
                        color={colors.black}
                    />

                    <Ionicons name='chatbubble-outline' size={24} color={colors.black}
                        style={styles.icon} />
                    <Feather name="send" size={24} style={styles.icon} color={colors.black} />

                    <Feather name="bookmark" size={24} style={styles.icon} color={colors.black}
                    />

                </View>


                {/* Likes */}
                <Text style={styles.text}>

                    Liked by{' '}
                    <Text style={styles.bold}>lgrinevicius</Text> and{' '}
                    <Text style={styles.bold}>{post.nofLikes}</Text>
                </Text>

                {/* Post Descirption */}

                <Text style={styles.text} >
                    <Text style={styles.bold}>{post.description}
                        numberofLines={isDescriptionExpanded ? 0 : 3}</Text> {' '}{post.description}
                </Text>
                <Text onPress={{ toggleDesciptionExpanded }}>{isDescriptionExpanded ? 'less' : 'more'} </Text>


                {/*Comments */}
                <Text>View {post.nofComments}</Text>
                {post.comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                ))}



                {/* Posted Date */}
                <Text> January 4, 2023</Text>

            </View>

        </View >
    );
};




export default FeedPost;