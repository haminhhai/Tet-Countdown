import React from "react";
import {
  ScrollView,
  StyleSheet,
} from "react-native";
//galio
import { Block, Text, theme } from "galio-framework";
//argon
import {  argonTheme } from "../constants";
import {  Switch } from "../components";

class Setting extends React.Component {
  state = {
    "switch-1": true,
    "switch-2": false
  };

  toggleSwitch = switchId =>
    this.setState({ [switchId]: !this.state[switchId] });
  renderSwitches = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Âm thanh
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block
            row
            middle
            space="between"
            style={{ marginBottom: theme.SIZES.BASE }}
          >
            <Text size={14}>Nhạc nền</Text>
            <Switch
              value={this.state["switch-1"]}
              onValueChange={() => this.toggleSwitch("switch-1")}
            />
          </Block>
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex left>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {this.renderSwitches()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE
  },
});

export default Setting;
