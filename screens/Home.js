import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Text, ImageBackground } from 'react-native';
import { Block, theme } from 'galio-framework';
import moment from 'moment'
import { Images } from "../constants";
import Theme from "../constants/Theme";
const { width, height } = Dimensions.get('screen');

class Home extends React.Component {
  state = {
    time: new Date()
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date()
      })
    }, 1000);
  }

  render() {
    const { time } = this.state
    return (
      <Block flex center style={styles.home}>
        <ImageBackground
          source={Images.Background}
          style={styles.bgContainer}
          imageStyle={styles.Background}>
          <Text style={styles.timeCountdown}>
            {moment(time).format('HH:mm:ss')}
          </Text>
          <Text style={styles.timeCountdown}>
            {moment(time).format('DD-MM-YYYY')}
          </Text>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  countdown: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  bgContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
    justifyContent: 'center',
    paddingBottom: width - width / 2  
  },
  timeCountdown: {
    fontSize: 50,
    alignSelf: 'center',
    fontWeight: "800",
    color: Theme.COLORS.PRIMARY
  },
  Background: {
    width: width,
    height: height
  },
});

export default Home;
