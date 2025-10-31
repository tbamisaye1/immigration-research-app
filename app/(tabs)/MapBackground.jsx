// MapScreen.tsx
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Platform, StyleSheet, View } from 'react-native';




const LAT = 37.9838;
const LNG =  23.7275;

export default function MapBackground() {
  const isWeb = Platform.OS === 'web';
 

  if (isWeb) {
    const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 37.9, // change this to your desired latitude
  lng: 23.5, // change this to your desired longitude
};

const options = {
  disableDefaultUI: true,
  gestureHandling: "greedy",
  styles: [
    {
      featureType: "all",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      stylers: [{ visibility: "off" }],
    },
     {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#0b3d91" }], // soft blue water
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#3366cc" }], // dark blue-gray land
    },
  ],
};

    // WEB VERSION: iframe, no react-native-maps at all
    return (
      <View style={styles.container}>
        <View style={StyleSheet.absoluteFill}>
           <LoadScript googleMapsApiKey="AIzaSyBUKypkhSr1_MtCtq1SRfiPQlRn2Ks9Src">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7.4}
        options={options}
      />
    </LoadScript>
        </View>

        {/* Foreground content */}
        {/* <View style={styles.overlay}>
          <View style={styles.card}>
            <Text style={styles.title}>Nearby Places</Text>
            <Text style={styles.subtitle}>
              This panel sits over the Google Map. Put buttons, lists, search here.
            </Text>
          </View>
        </View> */}
      </View>
    );
  }

  // NATIVE VERSION: require react-native-maps only here
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const MapView = require('react-native-maps').default;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { Marker, PROVIDER_GOOGLE } = require('react-native-maps');

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: LAT,
          longitude: LNG,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{ latitude: LAT, longitude: LNG }}
          title="New York"
          description="Hello from NYC!"
        />
      </MapView>

      {/* Foreground content */}
      {/* <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Nearby Places</Text>
          <Text style={styles.subtitle}>
            This panel sits over the Google Map. Put buttons, lists, search here.
          </Text>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 4,
  },
  subtitle: {
    color: '#444',
  },
});
