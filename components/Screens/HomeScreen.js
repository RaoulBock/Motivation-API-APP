import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity
} from "react-native";
import React from "react";
import Nav from "../Nav/Nav";
import { AppContext } from "../../context/AppProvider";
import Button from "../Button/Button";
import BottomNav from "../Nav/BottomNav";
import { APP_ICONS } from "../../context/settings";

const HomeScreen = () => {
  const { list, pageIndex, setPageIndex } = React.useContext(AppContext);

  const iconList = [
    {
      id: 1,
      icon: APP_ICONS.LEFT,
      onPress: () => setPageIndex(pageIndex - 1)
    },
    {
      id: 2,
      icon: APP_ICONS.RIGHT,
      onPress: () => setPageIndex(pageIndex + 1)
    }
  ];

  return (
    <View style={styles.outline}>
      <Nav />
      <View style={styles.view}>
        <View>
          <Text style={[styles.text, { color: "#eee" }]}>{list}</Text>
          <View style={styles.Likegrid}>
            <TouchableOpacity style={styles.btn}>
              <Text>{APP_ICONS.HEART}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.grid}>
          {iconList.map((e, i) => {
            return (
              <TouchableOpacity key={i} onPress={e.onPress}>
                <Text>{e.icon}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {/* <BottomNav /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#1a1e21"
  },
  text: {
    fontWeight: "500",
    color: "#404040",
    fontSize: 28,
    paddingHorizontal: 20
  },
  view: {
    flex: 1
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    flex: 1
  },
  Likegrid: {
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});
