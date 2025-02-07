import React from 'react'
import { SafeAreaView, Text, TextInput, Button, Image} from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'
import { StyleSheet } from 'react-native'
import OverlayLabel  from '../components/OverlayLabel'
import { connect } from 'react-redux'
import { actions } from '../Store/Reducers/actions.js'



class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userOk:'test',
      passOk:'test',
      user:'',
      pass:'',
      isLoggin:false,
      card: undefined
    }
  }

  componentDidUpdate() {
    console.log("likedCards : ")
    console.log(this.props.likedCards)
    console.log("Card : ")
    console.log(this.state.card)
  }

  _toggleFavorite() {
    const action = { type: "TOGGLE_LIKE", value: this.state.card }
    this.props.dispatch(action)
  }

  verifLog() {

    if(this.state.user == this.state.userOk && this.state.pass == this.state.passOk){
      this.setState({isLoggin:true})
    }
  }


  render() {

    let {isLoggin} = this.state;
      if(isLoggin){
      const { cardIndex } = this.props;
      return (
          <SafeAreaView style={styles.container}>
              <Swiper
                    ref={swiper => {
                      this.swiper = swiper;
                    }}
                      cards={HomeScreenPics}
                      renderCard={Card}
                      infinite //looping cards infinitely
                      backgroundColor="white"
                      cardHorizontalMargin={0}
                      stackSize={2} //number of cards shown in background
                      cardIndex={cardIndex}
                      onSwipedRight = {(CardData, CardIndex) => {this.setState({card:this.swiper["props"]["cards"][CardData]}),this._toggleFavorite(),console.log(CardIndex), console.log(this.state.card)}}
                      animateOverlayLabelsOpacity
                      overlayLabels={{
                        left: {
                          title: 'NOPE',
                          element: <OverlayLabel label="NOPE" color="#E5566D" />,
                          style: {
                            wrapper: styles.overlayWrapper,
                          },
                        },
                        right: {
                          title: 'FAVORITE',
                          element: <OverlayLabel label="FAVORITE" color="#4CCC93" />,
                          style: {
                            wrapper: {
                              ...styles.overlayWrapper,
                              alignItems: 'flex-start',
                              marginLeft: 30,
                            },
                          },
                        },
                      }}
                  />
          </SafeAreaView>

      )
    }else{
      return(
        <SafeAreaView style={styles.container}>
        <Image
          source={require('../images/swipemyboss-mini.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textinput}
          placeholder='Username'
          onChangeText={(user) => this.setState({user})}
        />
        <TextInput
          style={styles.textinput}
          placeholder='Password'
          onChangeText={(pass) => this.setState({pass})}
        />
        <Button title='Login'onPress={() => this.verifLog()}/>
        </SafeAreaView>

      )

    }

  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      marginTop:20,
      alignItems: 'center',
    },
    textinput: {
      width:200,
      marginLeft: 5,
      marginRight: 5,
      marginTop:5,
      marginBottom: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    },
    image: {
      height: 250,
      width: 250,
      marginTop:20
    },
});


const mapStateToProps = (state) => {
  return {
    likedCards: state.likedCards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}


  export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
