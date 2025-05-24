// components/RootLayout.tsx
import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {StyleSheet, SafeAreaView} from 'react-native';

const RootLayout = ({children, title = ''}: {children: any; title: string}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Layout style={styles.container} level="1">
        {title ? (
          <Text category="h4" style={styles.title}>
            {title}
          </Text>
        ) : null}
        {children}
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 16,
  },
});

export default RootLayout;
