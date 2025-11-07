// PrivacyIntroScreen.js
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const primary = "#204ECF"; // deep blue close to the mock
const textDark = "#0b1b3a";
const textMuted = "#334155";
const pillBg = "#EDF2FF";
const border = "#C7D2FE";

export default function PrivacyIntroScreen({ navigation }) {
  const [isConsented, setIsConsented] = useState(false);

  const handleContinue = () => {
    // TODO: navigate to the next screen in your flow
    // navigation.navigate("NextScreen");
  };

  const handleLanguage = () => {
    // TODO: open language selector
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Top row with Language pill */}
        <View style={styles.topRow}>
          <TouchableOpacity onPress={handleLanguage} accessibilityRole="button" style={styles.langPill}>
            <Text style={styles.langText}>Γλώσσα</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scroll}>
          {/* Avatar */}
          <Image
            source={{
              uri:
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=240&q=80&auto=format&fit=crop",
            }}
            style={styles.avatar}
            accessibilityIgnoresInvertColors
            accessibilityLabel="Προφίλ"
          />

          {/* Name */}
          <Text style={styles.name}>Δημήτρης</Text>

          {/* Title */}
          <Text style={styles.title}>Το απόρρητό σας</Text>

          {/* Body copy */}
          <Text style={styles.body}>
            Ορισμένα τμήματα της εφαρμογής απαιτούν πληροφορίες για εσάς. Αυτό είναι προαιρετικό – παρέχετε
            προσωπικά δεδομένα μόνο όπου είναι απαραίτητα. Μπορείτε να δείτε άλλες ενότητες χωρίς πρόσθετες
            πληροφορίες.
          </Text>

          {/* "Understood" pill */}
          <TouchableOpacity style={styles.consentBtn} accessibilityRole="button" accessibilityLabel="Κατάλαβα" onPress={() => setIsConsented(!isConsented)} >
            {isConsented ? <Ionicons name="checkmark-circle" size={22} color={primary} /> : <MaterialIcons name="radio-button-unchecked" size={22} color={primary} />}
            <Text style={styles.consentText}>Κατάλαβα</Text>
          </TouchableOpacity>

          {/* Continue button */}
          <TouchableOpacity
            style={styles.cta}
            onPress={handleContinue}
            accessibilityRole="button"
            accessibilityLabel="Συνέχεια"
          >
            <Text style={styles.ctaText}>Συνέχεια</Text>
          </TouchableOpacity>

          {/* iOS home bar spacer look */}
          <View style={styles.spacer} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, paddingHorizontal: 24 },
  topRow: { alignItems: "flex-end", marginTop: 8 },
  langPill: {
    backgroundColor: pillBg,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 22,
  },
  langText: { color: primary, fontWeight: "700", fontSize: 16 },
  scroll: { alignItems: "center", paddingBottom: 48 },
  avatar: {
    width: 116,
    height: 116,
    borderRadius: 58,
    marginTop: 16,
    marginBottom: 10,
  },
  name: { fontSize: 28, fontWeight: "800", color: primary, marginBottom: 6 },
  title: { fontSize: 34, fontWeight: "800", color: primary, textAlign: "center", marginBottom: 16 },
  body: {
    fontSize: 18,
    lineHeight: 28,
    color: textMuted,
    textAlign: "center",
    marginTop: 8,
  },
  consentBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 2,
    borderColor: border,
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 16,
    marginTop: 28,
  },
  consentText: { fontSize: 20, fontWeight: "800", color: textDark },
  cta: {
    width: "100%",
    backgroundColor: primary,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 18,
  },
  ctaText: { color: "#fff", fontSize: 22, fontWeight: "900" },
  spacer: { height: 24 },
});
