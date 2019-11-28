import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { ScrollView, StyleSheet, View, TouchableWithoutFeedback  } from "react-native";
import { Text, Tile } from 'react-native-elements';
import { TopPicksScreenPics } from "../constants/Pics";

class TopPicksScreen extends React.Component {

  _displayDetailCard = (id) => {
    console.log("Display Card with id " + id)
    this.props.navigation.navigate("Card", { id: id})
  }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Text h2 h2Style={styles.h2Style}>
                        Top Picks
                    </Text>
                    <Text h4 h4Style={styles.h4Style}>
                        Featured profiles of the day, picked just for you
                    </Text>
                    <View style={styles.grid}>

                        {TopPicksScreenPics.map(({id, pic, title, caption }, i) => (
                          <TouchableWithoutFeedback onPress={() => displayDetailCard(id)}>
                            <Tile
                                imageSrc={pic}
                                activeOpacity={0.9}
                                title={title}
                                titleStyle={styles.title}
                                caption={caption}
                                captionStyle={styles.caption}
                                featured
                                key={title}
                            />
                            </TouchableWithoutFeedback>
                        ))}

                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    h2Style: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000',
    },
    h4Style: {
        textAlign: 'center',
        color: '#757575',
    },
    grid: {
        marginTop: 20,
        marginBottom: 20,
    },
    title: {
        position: 'absolute',
        left: 10,
        bottom: 50,
        backgroundColor: 'black',
        marginBottom: -2,
        padding: 10,
    },
    caption: {
        position: 'absolute',
        left: 10,
        bottom: 0,
        backgroundColor: 'black',
        marginTop: 10,
        padding: 10,
    },
});

export default TopPicksScreen;
