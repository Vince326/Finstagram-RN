import { View, Image, FlatList } from 'react-native';
import { useState } from 'react';
import { useWindowDimensions } from 'react-native/types';
import colors from '../../theme/colors';

interface ICarousel {
    images: string[],

}

const Carousel = ({ images }: ICarousel) => {
    const { width } = useWindowDimensions();
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const viewabilityConfig = {
        itemsVisiblePercentThreshold: 51,

    }

    const onViewableItemsChanged = ({ viewableItems }) => {
        if (viewableItems > 0) {
            setActiveImageIndex(viewableItems[0].index);
        }
    };

    return (
        <View>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <Image source={{ uri: item }}
                        style={{ width: '100%', aspectRatio: 1 }} />
                )}
                horizontal={true}
                pagingEnabled
                onViewableItemsChanged={onViewableItemsChanged()}
            />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 0,
                width: '100%',
            }}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={{
                            width: 10,
                            aspectRatio: 1,
                            borderRadius: 5,
                            backgroundColor: activeImageIndex === index ? colors.primary : colors.white,
                            margin: 10,
                            marginHorizontal: 5
                        }}
                    />
                ))}
            </View>
        </View >
    )
}

export default Carousel