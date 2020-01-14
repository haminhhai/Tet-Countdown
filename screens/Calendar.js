import React from "react";
import { ScrollView, Dimensions } from "react-native";
import { Block, Text} from "galio-framework";

const { width, height } = Dimensions.get("screen");

class Calendar extends React.Component {
  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          <Text>
            Hiển thị lịch vạn niên
          </Text>
        </ScrollView>
      </Block>
    );
  }
}


export default Calendar;