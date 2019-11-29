import React from 'react'
import { Platform, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Tile } from 'react-native-elements'
import Layout from '../constants/Layout'

const BOTTOM_BAR_HEIGHT = !Platform.isPad ? 29 : 49; // found from https://stackoverflow.com/a/50318831/6141587

export const Card = ({ id, pic, title, caption }) => (


    <View>
    <Tile
        imageSrc={pic}
        imageContainerStyle={styles.imageContainer}
        activeOpacity={0.9}
        title={title}
        titleStyle={styles.title}
        caption={caption}
        captionStyle={styles.caption}
        containerStyle={styles.container}
        featured
    />
    </View>

);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imageContainer: {
        width: Layout.window.width - 30,
        height: Layout.window.height - BOTTOM_BAR_HEIGHT * 6,
        borderRadius: 20,
        overflow: 'hidden', // this does magic
    },
    title: {
        position: 'absolute',
        left: 10,
        bottom: 30,
    },
    caption: {
        position: 'absolute',
        left: 10,
        bottom: 10,
    },
    favorite_container: {
      alignItems: 'center', // Alignement des components enfants sur l'axe secondaire, X ici
    },
    favorite_image: {
      width: 40,
      height: 40
    }
});
