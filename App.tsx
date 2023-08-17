import React from "react";
import { View, Text, Image } from 'react-native';
import colors from './src/theme/colors';
import fonts from "./src/assets/fonts/fonts";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from "react-native/types";
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';


const App = () => {
  return (
    <View style={styles.post}>


      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg" }} style={styles.profilePic} />
      </View>

      <Text style={styles.userName}>theophilus_yeager</Text>

      <Entypo name={"dots-three-horizontal"} size={16} style={styles.threeDots} />

      {/*Content*/}
      <Image source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg" }} style={styles.image} />


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
          <Text style={{ fontWeight: fonts.weight.bold }}>ebgaming23</Text> and{' '}
          <Text style={{ fontWeight: fonts.weight.bold }}>34 others</Text>
        </Text>

        {/* Post Descirption */}

        <Text style={styles.text} >
          <Text style={{ fontWeight: fonts.weight.bold }}>theophilus_yeager</Text> {' '}\Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, id animi quisquam, cumque similique tempore nisi sequi, tempora tenetur rem esse earum numquam dolore. Earum eligendi maxime sit enim natus.
        </Text>


        {/*Comments */}
        <Text>View all 4 comments</Text>
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

const styles = StyleSheet.create({
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

export default App;