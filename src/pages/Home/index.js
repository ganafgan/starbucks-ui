import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import dataStarbuck from '../../assets/data/data'
import { CardPopular, FeaturedItems, Gap, Header, Search } from '../../components'
import { Colors } from '../../utils'

const Home = ({navigation}) => {

    const renderPopular = ({item}) => {
        return <CardPopular 
            name={item.name}
            img={item.image}
            onPress={() => navigation.navigate('Details')}
        />
    }

    const renderFeaturedItems = ({item}) => {
        return <FeaturedItems 
            name={item.name}
            img={item.image}
        />
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Header 
                    name='Beti'
                />
                <Search />
                <Gap height={30} />
                    <View style={styles.wrapper}>
                        <Text style={styles.headerText}>Popular</Text>
                    </View>
                    
                    <View>
                        <FlatList 
                            contentContainerStyle={styles.popular}
                            data={dataStarbuck}
                            keyExtractor={dataStarbuck => `${dataStarbuck.id}`}
                            horizontal
                            showsHorizontalScrollIndicator={false} 
                            renderItem={renderPopular}
                        />
                    </View>
                    <Gap height={20} />
                    <View style={styles.wrapper}>
                        <View style={styles.featuredItems}>
                            <Text style={styles.headerText}>Featured Items</Text>
                            <Text style={styles.subText}>See All</Text>
                        </View>
                    </View>
                    <Gap height={20} />
                    <View>
                        <FlatList 
                            contentContainerStyle={styles.featured}
                            data={dataStarbuck}
                            keyExtractor={dataStarbuck => `${dataStarbuck.id}`}
                            horizontal
                            showsHorizontalScrollIndicator={false} 
                            renderItem={renderFeaturedItems}
                        />
                    </View>
            </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    wrapper: {
        paddingHorizontal: 20
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.black,
       
    },
    popular: {
        paddingLeft: 20,
        paddingRight: 10
    },
    featuredItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    subText: {
        fontWeight: 'bold',
        color: Colors.black,
        fontSize: 12
    },
    featured: {
        paddingLeft: 20,
    }
})
