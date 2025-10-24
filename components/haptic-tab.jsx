import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';


/**
 * A tab button that adds soft haptic feedback on iOS when pressed.
 */
export function HapticTab(props) {
  return (
    <PlatformPressable
      {...props}
      onPressIn={(ev) => {
        if (process.env.EXPO_OS === 'ios') {
          // Add a soft haptic feedback when pressing down on the tabs.
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }

        // Call any provided onPressIn handler
        if (props.onPressIn) {
          props.onPressIn(ev);
        }
      }}
    />
  );
}
