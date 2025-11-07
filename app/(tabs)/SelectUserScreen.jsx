// SelectUserScreen.js
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function SelectUserScreen({ onSelectUser = () => {}, }) {
    const navigation = useNavigation()
    console.log("navigation: ", navigation)

    const onAddUser  = () => {navigation.navigate('CreateProfile')}

    const BASE = "https://api.dicebear.com/9.x/avataaars/png?size=128";

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <Text style={styles.title}>Select user</Text>

      {/* User Row */}
      <TouchableOpacity style={styles.userRow} activeOpacity={0.8} onPress={onSelectUser}>
        {/* Avatar / Icon placeholder — replace with your icon */}
        <View style={styles.avatar}>
         <Image
                 source={{ uri: `${BASE}&seed=${encodeURIComponent("carlos")}` }}
                 style={styles.avatarImg}
               />
        </View>

        <Text style={styles.userName}>Pola</Text>
      </TouchableOpacity>

      {/* Add User Button */}
      <TouchableOpacity style={styles.addButton} activeOpacity={0.9} onPress={() => {navigation.navigate("CreateProfile")}}>
        <Text style={styles.addButtonText}>Add User</Text>
      </TouchableOpacity>

      {/* Spacer to push content up a bit */}
      <View style={{ height: 24 }} />
    </View>
  );
}

const AVATAR_SIZE = 54;


const BLUE = '#244E93';   // adjust if you want it darker/lighter
const WHITE = '#FFFFFF';

const styles = StyleSheet.create({
    avatarImg: {
    width: AVATAR_SIZE - 6,
    height: AVATAR_SIZE - 6,
    borderRadius: (AVATAR_SIZE - 6) / 2,
  },
  container: {
    flex: 1,
    backgroundColor: BLUE,
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  title: {
    color: WHITE,
    fontSize: 24,
    // fontWeight: '700',
    marginTop: 16,
    marginBottom: 28,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.25)', // placeholder bg
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  userName: {
    color: WHITE,
    fontSize: 18,
    fontWeight: '700',
  },
  addButton: {
    backgroundColor: WHITE,
    borderRadius: 28,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginTop: 8,
    // Wide pill look
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  addButtonText: {
    color: BLUE,
    fontSize: 18,
    fontWeight: '700',
  },
});
