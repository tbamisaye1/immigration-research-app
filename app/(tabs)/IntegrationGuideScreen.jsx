// IntegrationGuideScreen.js
import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const BLUE = "#204ECF";
const BLUE_DARK = "#183fa9";
const CARD_BG = "rgba(255,255,255,0.12)";
const TILE_BG = "rgba(255,255,255,0.96)";
const TILE_RING = "#E6ECFF";
const TEXT_ON_BLUE = "#F8FAFF";
const TEXT_DARK = "#0b1b3a";

function Tile({ title, emoji, full, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[styles.tile, full && styles.tileFull]}
      accessibilityRole="button"
      accessibilityLabel={title}
    >
      <View style={styles.emojiWrap}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
      <Text numberOfLines={2} style={styles.tileText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default function IntegrationGuideScreen({ navigation }) {
  const go = (route) => {
    // hook these up to real routes when ready
    // navigation.navigate(route)
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Οδηγός Ένταξης</Text>
            <Text style={styles.greeting}>Γεια, Δημήτρης 👋</Text>
          </View>

          <TouchableOpacity style={styles.langPill}>
            <Text style={styles.langPillText}>Γλώσσα</Text>
          </TouchableOpacity>
        </View>

        {/* Big card */}
        <View style={styles.card}>
          <Text style={styles.cardHeading}>
            Integration Guide • Οδηγός Ένταξης
          </Text>

          <View style={styles.grid}>
            <Tile title={"Η άφιξή\nσας"} emoji={"🧭"} onPress={() => go("Arrival")} />
            <Tile
              title={"Η Ελλάδα\nμε μια ματιά"}
              emoji={"🇬🇷"}
              onPress={() => go("GreeceAtGlance")}
            />
            <Tile
              title={"Δικαιώματα\n& υποχρεώσεις"}
              emoji={"⚖️"}
              onPress={() => go("Rights")}
            />
            <Tile
              title={"Εργασία\nστην Ελλάδα"}
              emoji={"💼"}
              onPress={() => go("Work")}
            />
            <Tile
              title={"Στέγαση"}
              emoji={"🏠"}
              full
              onPress={() => go("Housing")}
            />
          </View>
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: BLUE },
  scroll: { padding: 20 },
  headerRow: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  title: {
    color: TEXT_ON_BLUE,
    fontSize: 34,
    fontWeight: "900",
    letterSpacing: 0.2,
    textAlign: "center",
  },
  greeting: { color: TEXT_ON_BLUE, opacity: 0.9, marginTop: 6, fontSize: 18, textAlign: "center" },
  langPill: {
    backgroundColor: "rgba(255,255,255,0.22)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
  },
  langPillText: { color: TEXT_ON_BLUE, fontWeight: "700" },

  card: {
    backgroundColor: CARD_BG,
    borderRadius: 24,
    padding: 16,
    paddingBottom: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    // subtle shadow/glass effect
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
  },
  cardHeading: {
    color: TEXT_ON_BLUE,
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 12,
    opacity: 0.95,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  tile: {
    width: "48%",
    backgroundColor: TILE_BG,
    borderRadius: 22,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#EEF2FF",
    shadowColor: "#0b1b3a",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  tileFull: {
    width: "100%",
    paddingVertical: 22,
  },
  emojiWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F7FF",
    borderWidth: 2,
    borderColor: TILE_RING,
    marginBottom: 10,
    alignSelf: "center",
  },
  emoji: { fontSize: 28 },
  tileText: {
    textAlign: "center",
    color: TEXT_DARK,
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 26,
  },
});
