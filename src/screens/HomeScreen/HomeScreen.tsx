import { FlatList } from 'react-native';
import FeedPost from '../../components/FeedPost';
import posts from '../../assets/data/posts.json';

const HomeScreen = () => {
    return (
        <FlatList
            data={posts}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <FeedPost post={item} />}

        />

    );
};



export default HomeScreen;
