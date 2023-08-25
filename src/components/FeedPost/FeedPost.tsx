import React from "react";
import { View, Text, Image, Pressable } from 'react-native';
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
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';

interface IFeedPost {
    post: IPost;
}



const FeedPost = ({ post }: IFeedPost) => {

    //Sets the State for the Description Expansion on post
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    const toggleDescriptionExpanded = () => {
        setIsDescriptionExpanded((existingValue) => { return !existingValue });

        setIsDescriptionExpanded((existingValue) => { return !existingValue });

    };

    //Sets the state for if like button is pressed
    const [isPostLiked, setIsPostLiked] = useState(false);

    const toggleLikeButton = () => {
        setIsPostLiked((existingValue) => { return !existingValue });

        //setIsPostLiked((existingValue) => { return !existingValue });
    }

    let content = null;

    if (post.image) {
        content = (<Image source={{ uri: post.image }} style={styles.image} />
        );

    } else if (post.images) {
        content = (<Carousel images={post.images} />)
    }


    return (
        <View style={styles.post}>


            {/* Header */}
            <View style={styles.header}>
                <Image source={{ uri: post.user.image }} style={styles.profilePic} />
            </View>

            <Text style={styles.userName}>{post.user.username}</Text>

            <Entypo name={"dots-three-horizontal"} size={16} style={styles.threeDots} />

            {/*Content*/}
            <DoublePressable onDoublePress={toggleLikeButton}>
                {content}
            </DoublePressable>

            {/* Footer */}
            <View style={styles.footer}>
                <View style={styles.iconContainer}>
                    <Pressable onPress={toggleLikeButton}>
                        <AntDesign
                            name={isPostLiked ? 'heart' : 'hearto'}
                            size={24}
                            style={styles.icon}
                            color={isPostLiked ? colors.accent : colors.black}
                        />
                    </Pressable>

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
                <Text onPress={toggleDescriptionExpanded}>{isDescriptionExpanded ? 'less' : 'more'} </Text>


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