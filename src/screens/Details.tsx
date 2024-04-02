import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({ route }: DetailsProps) => {

    const { product } = route.params

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: product.imageUrl }} style={styles.image} />
                </View>
                <View>
                    <Text style={styles.name}>{product?.name}</Text>

                    <View style={[styles.rowContainer, styles.ratingContainer]}>
                        <View style={styles.rating}>
                            <Text style={styles.ratingText}>{product?.rating} ⭐</Text>
                        </View>
                        <Text style={styles.ratingCount}>({product?.ratingCount.toLocaleString()})</Text>
                    </View>

                    <View style={[styles.rowContainer, styles.priceContainer]}>
                        <Text style={styles.originalPrice}>₹ {product.originalPrice.toLocaleString()}</Text>
                        <Text style={styles.discountPrice}>₹ {product.discountPrice.toLocaleString()}</Text>
                        <Text style={styles.offerPercentage}>% {product.offerPercentage} off</Text>
                    </View>
                    {
                        product.tags.map((tag, index) => (
                            <View key={index} style={styles.badge}>
                                <Text style={styles.tagBadge}>{tag}</Text>
                            </View>
                        ))
                    }

                    <View style={styles.btnContainer}>
                        <Pressable>
                            <Text style={styles.addToCart}>Add to cart</Text>
                        </Pressable>
                        <Pressable>
                            <Text style={styles.buyNow}>Buy now</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        backgroundColor: '#FFFFFF',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 450,
        resizeMode: 'contain',
    },
    rowContainer: {
        flexDirection: 'row',
    },
    name: {
        marginBottom: 4,

        fontSize: 20,
        fontWeight: '500',
    },
    ratingContainer: {
        marginVertical: 12,
    },
    priceContainer: {
        paddingVertical: 12,
        paddingHorizontal: 12,

        marginBottom: 12,

        borderRadius: 6,
        backgroundColor: '#deffeb',
    },
    rating: {
        marginRight: 4,

        borderRadius: 4,
        paddingHorizontal: 8,
        justifyContent: 'center',
        backgroundColor: '#008c00',
    },
    ratingText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    ratingCount: {
        fontSize: 14,
        color: '#878787',
    },
    originalPrice: {
        fontSize: 18,
        fontWeight: '600',
        marginRight: 8,

        color: 'rgba(0, 0, 0, 0.5)',
        textDecorationLine: 'line-through',
    },
    discountPrice: {
        fontSize: 18,
        color: '#000000',
        fontWeight: '600',
    },
    offerPercentage: {
        fontSize: 17,
        fontWeight: '600',
        color: '#4bb550',

        marginRight: 8,
    },
    badge: {
        margin: 2,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    tagBadge: {
        paddingVertical: 2,
        paddingHorizontal: 4,

        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.5)',

        color: 'rgba(0, 0, 0, 0.8)',
    },
    addToCart: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginVertical: 15,
        // marginHorizontal: 12,
        borderRadius: 6,
        backgroundColor: '#10d9e7',
        width: 170,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    buyNow: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginVertical: 15,
        // marginHorizontal: 12,
        borderRadius: 6,
        backgroundColor: '#f7bf09',
        width: 170,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});