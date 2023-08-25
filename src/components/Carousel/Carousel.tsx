import { View, Image, FlatList } from 'react-native';

interface ICarousel {
    images: string[],

}

const Carousel = ({ images }: ICarousel) => {
    return (
        <View>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={{ width: '100%', aspectRatio: 1 }} />
                )}
                horizontal={true}
                pagingEnabled
            />
            <View style={{ flexDirection: 'row' }}>
                <View style={{
                    width: 10,
                    aspectRatio: 1,
                    borderRadius: 5,
                    backgroundColor: 'red'
                }}
                />

                <View style={{
                    width: 10,
                    aspectRatio: 1,
                    borderRadius: 5,
                    backgroundColor: 'red'
                }} />
            </View>
        </View >
    )
}

export default Carousel