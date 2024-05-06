import React from 'react';
import { View, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../styles';

const ItemComponent = ({ image, title, price, oldPrice, description }) => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
                    <Text style={styles.newTag}>New</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.oldPrice}>${oldPrice}</Text>
                        <Text style={styles.price}>${price}</Text>
                    </View>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <View style={styles.topIcons}>
                        <Ionicons name="heart-outline" size={24} color="black" style={styles.icon} />
                    </View>
                    <View style={styles.bottomIcons}>
                        <Text style={styles.buyText}>Купити</Text>
                        <Ionicons name="cart-outline" size={24} color="black" style={styles.icon} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ItemComponent;
