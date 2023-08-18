import React from "react";
import { View, Text, Image } from 'react-native';
import colors from '../../theme/colors';
import fonts from "../../assets/fonts/fonts";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from "react-native/types";
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';


const FeedPost = ({ post }) => {
    return (
        <View style={styles.post}>


            {/* Header */}
            <View style={styles.header}>
                <Image source={{ uri: post.user.image }} style={styles.profilePic} />
            </View>

            <Text style={styles.userName}>{post.user.userName}</Text>

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
                    <Text style={styles.bold}>{post.description}</Text> {' '}{post.user.comment}
                </Text>


                {/*Comments */}
                <Text>View {post.nofComments}</Text>
                <View style={styles.comment}>
                    <Text style={styles.commentText}>
                        <Text style={styles.bold}>theophilus_yeager</Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </Text>
                    <AntDesign
                        name={'hearto'}
                        size={24}
                        style={styles.icon}
                        color={colors.black}
                    />
                </View>

                {/* Posted Date */}
                <Text> January 4, 2023</Text>

            </View>

        </View >
    );
};




export default FeedPost;