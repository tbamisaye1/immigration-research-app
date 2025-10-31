import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../constants/colors";
function AppButton({
  title,
  onPress,
  style,
  colorPaletteName = "primary",
  textColor,
  fontWeight,
  fontSize,
}) {
  return (
    <View style={{ width: "100%", paddingHorizontal: 0 }}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: colors[colorPaletteName] },
          style,
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            styles.text,
            {
              color: textColor
                ? textColor
                : colorPaletteName == "primary"
                ? colors.primaryText
                : colors.secondaryText,
              fontWeight: fontWeight ? fontWeight : "bold",
              fontSize: fontSize ? fontSize : 18,
            },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 40,
    // padding: 15,
    // marginTop: 10,
    // marginBottom: 10,
    // height: 35,

    // marginLeft: 10,
    // marginRight: 10,
    // margin: 0,
  },
  text: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "blue",

    // backgroundColor: "blue",
    margin: 0,
  },
});

export default AppButton;
