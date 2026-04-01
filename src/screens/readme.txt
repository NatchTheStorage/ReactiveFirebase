The screens directory is where you should put all your application screens or pages. Each screen should have its own directory with the following files:

index.js: This will export default screenName to shortened import path
styles.ts: The styles for the screen.
helper.ts: Utility function like any business or state management fuction can be put here. For example, function which returns `buttonColor` based on status. Ideally, you should try to write as little as possible logic into your component file. This will make your code more abstract and testable
screenName.tsx: The TypeScript file for the screen. In this file you will define your UI.
screenName.test.tsx: The test file for the screen.

import { interpolate, SharedValue, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

import colors from '../../constants/colors';

export default function useAnimated() {

  const animated: SharedValue<number> = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(animated?.value ?? 0, [0, 1], [0, 0.5]),
            backgroundColor: colors.black,
        };
    }, [animated]);

    return {
        animated,
        animatedStyle,
    };
}