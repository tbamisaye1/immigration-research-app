import { useRouter } from 'expo-router';
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SEEDS } from "../../components/avatars";

const CHARACTER_SEEDS = Array.from({ length: 36 }, (_, i) => `character-${i+1}`);
const TEST_CHARACTER_SEEDS = [
  {
    library: "adventurer",
    seed: ""
  }

]
// you can replace with your own names if you want them to be human-like

const DICEBEAR_BASE =
  "https://api.dicebear.com/9.x/adventurer/png?size=128&backgroundColor=transparent";

  const BASE = "https://api.dicebear.com/9.x/avataaars/png?size=128";


export default function CreateProfileScreen() {
  const [name, setName] = useState("");
  const [selectedSeed, setSelectedSeed] = useState(null);
  const [selectedId, setSelectedId] = useState(null)
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* top bar */}
        <View style={styles.topBar}>
          <TouchableOpacity>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.label}>Type your name</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Enter username"
              value={name}
              onChangeText={setName}
            />
          </View>

          <Text style={[styles.label, { marginTop: 28 }]}>
            Select a character
          </Text>

 <View style={styles.avatarsWrapper}>
  {SEEDS.map((seed) => (
    
    <TouchableOpacity key={seed} style={[styles.avatar, selectedSeed === seed && styles.avatarSelected]} onPress={() => setSelectedSeed(seed)}>
      <Image
        source={{ uri: `${BASE}&seed=${encodeURIComponent(seed)}` }}
        style={styles.avatarImg}
      />
    </TouchableOpacity>
  ))}
</View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            style={[
              styles.nextButton,
              !(name && selectedSeed) && { opacity: 0.4 },
            ]}
            disabled={!(name && selectedSeed)}
            onPress={() => {
              // here you'd pass name + selectedSeed to the next screen
              //Set User information to database
              //Update Local user data
              router.push('/PrivacyIntroScreen')
              // e.g. navigation.navigate("Next", { name, avatarSeed: selectedSeed });
            }}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const AVATAR_SIZE = 54;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  backText: {
    fontSize: 20,
    color: "#245FA5",
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  label: {
    fontSize: 18,
    color: "#245FA5",
    fontWeight: "600",
    marginBottom: 10,
  },
  inputWrapper: {
    backgroundColor: "#F3F5F7",
    borderRadius: 999,
    paddingHorizontal: 18,
    height: 52,
    justifyContent: "center",
  },
  input: {
    fontSize: 16,
  },
  avatarsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: "#F5F5F5",
    marginRight: 12,
    marginBottom: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarSelected: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#245FA5",
  },
  avatarImg: {
    width: AVATAR_SIZE - 6,
    height: AVATAR_SIZE - 6,
    borderRadius: (AVATAR_SIZE - 6) / 2,
  },
  footer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  nextButton: {
    backgroundColor: "blue",
    height: 56,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
