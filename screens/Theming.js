import React from "react";
import {
  ScrollView,
} from "react-native";
import { Block, Text } from "galio-framework";

class Theming extends React.Component {

  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          <Text>
            Thay đổi màu giao diện
          </Text>
        </ScrollView>
      </Block>
    );
  }
}


export default Theming;
