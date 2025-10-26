import { useState } from 'react';
import { ImageBackground, Platform, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import AppButton from '../../components/AppButton';

export default function landingPage() {
    const {width} = useWindowDimensions();
    const [isChoosingLang, setIsChoosingLang] = useState(false)
    const [chosenLanguage, setChosenLanguage] = useState("Ελληνικα")
    const backgroundSrc =
    Platform.OS === "web"
      ? require("../../assets/images/landingPage/desktop_16x9_2560x1440.png")
      //require("../assets/l/desktop_16x9_2560x1440.webp")
      : width > 768
      ? require("../../assets/images/landingPage/tablet_3x4_1536x2048.png")
      : require("../../assets/images/landingPage/mobile_9x16_1080x1920.png");
    console.log("background source: ", backgroundSrc)
    // create some language choice database which we can then

  return (
    <ImageBackground style={styles.container} source={backgroundSrc} resizeMode='cover'
     >
        <View style={styles.topBanner}>
            {/* this is where they choose the language of their application */}
            {!isChoosingLang? <AppButton style={styles.languageBtn} onPress={() => setIsChoosingLang(!isChoosingLang)} title={chosenLanguage}/> : <AppButton style={styles.languageBtn} onPress={() => setIsChoosingLang(!isChoosingLang)} title="Choose New Language"/> }

        </View>
        <View style={styles.titleContainer}>
                 <Text style={styles.title}>ΟΔΗΓος</Text>
                 <Text style={styles.title}>ενταξης</Text>
        </View>
        <View style={styles.sloganContainer}>
            <View style={{flex: 0.6}}>
            <Text style={{alignSelf:"flex-end", margin: 5, fontSize: 20, fontWeight: 600, color: "white"}}>Your integration guide in Greece</Text>

            </View>
            <View style={{flex: 0.4}}>
            <AppButton style={styles.sloganBtn} title="Live" />

            </View>
            {/* add an icon with AppButton later */}
        </View>
    <View style ={styles.btnContainer}>
      <AppButton style={styles.continueBtn} title="Continue" />
    </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    btnContainer: {
        width:"100%",
        flex: 0.4,
        // backgroundColor:"blue",
        justifyContent:"center",
        // alignItems: "center"
    },  
    container: {
        flex: 1,
        flexDirection: "column",
        minHeight: "100vh",
     
        // backgroundColor: "blue"
    },
    continueBtn: {
        borderRadius: 50,
        width: "20%",
        // height: "40%"
        height: 60,
        alignSelf:"center",
        // color: "blue",

    },
    languageBtn: {
        width: "20%",
        alignSelf: "flex-end",
        borderRadius: 25
    },
    slogan:{
        color: "white",
        fontWeight: 500,
        // width:"80%",
        
    },
    sloganBtn: {
        width: "15%",
        borderRadius: 50,
        flex:0.4,
        backgroundColor:"cyan",
        // alignSelf: "center"
    },
    sloganContainer: {
        // backgroundColor: "green",
        flex: 0.05,
        justifyContent: "center",
        alignItems:"center",
        flexDirection:"row"

    },
    title:{
        fontSize:  80,
        color: "white",
        fontWeight: "bold"
        // alignSelf: "center"
    },
    titleContainer: {
        // backgroundColor: "purple",
        flex: 0.4,
        justifyContent: "center",
        alignItems:"center"

    },
    topBanner: {
        // backgroundColor: "yellow",
        flex: 0.15,
        flexDirection: "row",
        padding: 15,
        alignItems: "center"
    },

})