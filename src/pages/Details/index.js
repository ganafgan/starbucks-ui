import React, { useRef } from 'react'
import { 
    Animated,
    Dimensions, 
    StyleSheet,
    Text, 
    TouchableOpacity, 
    View 
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import dataStarbuck from '../../assets/data/data'
import { Gap } from '../../components'
import { Colors } from '../../utils'

const {width} = Dimensions.get('window')

const Details = () => {

    const scrollX = useRef(new Animated.Value(0)).current

    const RenderSlider = ({item, index, scrollX}) => {

        const translateX = scrollX.interpolate({
            inputRange: [(index - 1) * width, index * width, (index + 1) * width],
            outputRange: [-width/2, 0, width/2 ]
        })

        const scale = scrollX.interpolate({
            inputRange: [(index -1) * width, index * width, (index + 1) * width],
            outputRange: [.8, 1.2, .8]
        })

        return (
            <View style={{width}}>
                <View style={styles.slider}>
                    <View style={styles.wrapperSlider}>
                        <Text style={styles.sliderText}>{item.name}</Text>
                        <View style={styles.rating}>
                            <Octicons name='star' size={15} style={styles.star}/>
                            <Octicons name='star' size={15} style={styles.star}/>
                            <Octicons name='star' size={15} style={styles.star}/>
                            <Octicons name='star' size={15} style={styles.star}/>
                            <Octicons name='star' size={15} style={styles.star}/>
                        </View>
                    </View>
                    <Animated.Image source={item.image} style={[styles.sliderImage,{
                        transform: [
                            {
                                translateX
                            },
                            {
                                scale
                            }
                        ]
                    }]}/>
                </View>
                {/* <View
                    style={{
                        marginTop: -100,
                        width: 150,
                        height: 150,
                        borderRadius: 150,
                        backgroundColor: 'yellow',
                        alignSelf: 'center',
                        transform: [{rotateX: '75deg'}],
                        
                    }}
                    /> */}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Gap height={20} />
            <View style={styles.wrapperHeader}>
                <TouchableOpacity style={styles.backButton}>
                    <Feather name='chevron-left' size={24} />
                </TouchableOpacity>
                <View style={styles.cartButton}>
                    <MaterialIcons name='shopping-cart' size={24} style={{color: Colors.primary}} />
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>3</Text>
                    </View>
                </View>
            </View>
            <View>
                <Animated.FlatList
                    data={dataStarbuck}
                    keyExtractor={dataStarbuck => `${dataStarbuck.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    snapToInterval={width}
                    scrollEventThrottle={16}
                    decelerationRate={0}
                    contentContainerStyle={{
                        alignItems: 'center',
                    }}
                    renderItem={({item, index}) => 
                        <RenderSlider item={item} index={index} scrollX={scrollX} />}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: scrollX,
                                    }
                                }
                            }
                        ],
                        {
                            useNativeDriver: true
                        }
                    )}
                />
            </View>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.white,
       
    },
    wrapperHeader: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    backButton: {
        height: 40,
        width: 40,
        borderRadius: 40/2,
        backgroundColor: Colors.backgroundCard,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    cartButton: {
        flexDirection: 'row'
    },
    badge: {
        height: 18,
        width: 18,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    badgeText: {
        color: Colors.white,
        fontSize: 12
    },
    slider: {
        alignItems: 'center',
    },
    wrapperSlider: {
        alignItems: 'center'
    },
    sliderText: {
        fontWeight: 'bold',
        fontSize: 23,
        color: Colors.black,
        textAlign: 'center',
        width: width/2
    },
    rating: {
        flexDirection: 'row'
    },
    star: {
        color: 'yellow',
        marginRight: 2
    },
    sliderImage: {
        width: '100%',
        height: width / 1.5,
        resizeMode: 'contain',
        marginVertical: 50
    }
})
 