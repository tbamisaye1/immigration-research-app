import { useState } from 'react';
import { Platform, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import AppButton from '../../components/AppButton';
import MapBackground from './MapBackground';

export default function LandingPage() {
  const { width } = useWindowDimensions();
  const [isChoosingLang, setIsChoosingLang] = useState(false);
  const [chosenLanguage, setChosenLanguage] = useState("Ελληνικα");

  const backgroundSrc =
    Platform.OS === "web"
      ? require("../../assets/images/landingPage/desktop_16x9_2560x1440.png")
      : width > 768
      ? require("../../assets/images/landingPage/tablet_3x4_1536x2048.png")
      : require("../../assets/images/landingPage/mobile_9x16_1080x1920.png");

  return (
    <View style={styles.root}>
      {/* 1. background map */}
      <MapBackground />

      {/* 2. foreground content */}
      <View style={styles.container}>
        <View style={styles.topBanner}>
          {!isChoosingLang ? (
            <AppButton
              style={styles.languageBtn}
              onPress={() => setIsChoosingLang((p) => !p)}
              title={chosenLanguage}
            />
          ) : (
            <AppButton
              style={styles.languageBtn}
              onPress={() => setIsChoosingLang((p) => !p)}
              title="Choose New Language"
            />
          )}
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>ΟΔΗΓος</Text>
          <Text style={styles.title}>ενταξης</Text>
        </View>

        <View style={styles.sloganContainer}>
          <View style={{ flex: 0.6 }}>
            <Text
              style={{
                alignSelf: "flex-end",
                margin: 5,
                fontSize: 20,
                fontWeight: 600,
                color: "white",
              }}
            >
              Your integration guide in Greece
            </Text>
          </View>
          <View style={{ flex: 0.4 }}>
            <AppButton style={styles.sloganBtn} title="Live" />
          </View>
        </View>

        <View style={styles.btnContainer}>
          <AppButton style={styles.continueBtn} title="Continue" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // this sits at the very top and lets the map fill the screen
  root: {
    flex: 1,
  },
  // this is now the "overlay" layer
  container: {
    ...StyleSheet.absoluteFillObject,   // makes it cover the MapBackground
    flexDirection: "column",
    minHeight: "100vh",                 //  for web
  },
  btnContainer: {
    width: "100%",
    flex: 0.4,
    justifyContent: "center",
  },
  continueBtn: {
    borderRadius: 50,
    width: "20%",
    height: 60,
    alignSelf: "center",
  },
  languageBtn: {
    width: "20%",
    alignSelf: "flex-end",
    borderRadius: 25,
  },
  sloganBtn: {
    width: "15%",
    borderRadius: 50,
    flex: 0.4,
    backgroundColor: "cyan",
  },
  sloganContainer: {
    flex: 0.05,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 80,
    color: "white",
    fontWeight: "bold",
  },
  titleContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  topBanner: {
    flex: 0.15,
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
});
