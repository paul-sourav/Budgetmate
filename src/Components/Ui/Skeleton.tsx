import React, {useEffect, useRef} from 'react';
import {Animated, StyleProp, StyleSheet, ViewStyle} from 'react-native';

const Skeleton = ({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 700,
          useNativeDriver: false,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 700,
          useNativeDriver: false,
        }),
      ]),
    );

    loop.start();

    return () => loop.stop();
  }, [animation]);

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#eeeeee', '#dddddd'],
  });

  return (
    <Animated.View style={[styles.container, {backgroundColor}, style]}>
      {children}
    </Animated.View>
  );
};

export default Skeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
    width: '100%',
    height: '100%',
  },
});
