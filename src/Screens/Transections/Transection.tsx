import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Card, Text} from '@ui-kitten/components';
import {transactions} from '../../Json/TransectionList.json';
import RootLayout from '../../Components/Ui/RootLayout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Transection = () => {
  return (
    <RootLayout title="">
      <ScrollView>
        <View style={{gap: 10, padding: 10}}>
          <Text category="h3">Transections</Text>
          {transactions.map((transection, index) => (
            <View key={index} style={styles.mainContainer}>
              {/* Accent Bar */}
              <View
                style={{
                  width: 6,
                  height: '100%',
                  borderRadius: 6,
                  backgroundColor: transection.category.color,
                  marginRight: 12,
                }}
              />
              {/* Main Content */}
              <View style={{flex: 1}}>
                <Text category="p2" style={{color: '#adb5bd', marginBottom: 2}}>
                  {new Date(transection.date).toDateString()}
                </Text>
                <Text
                  category="h5"
                  style={{fontWeight: 'bold', color: '#212529'}}>
                  ${transection.amount}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 6,
                  }}>
                  <MaterialCommunityIcons
                    name={transection.category.icon as any}
                    size={26}
                    color={transection.category.color}
                    style={{marginRight: 8}}
                  />
                  <Text category="s1" style={{color: '#495057'}}>
                    {transection.category.label}
                  </Text>
                  {transection.attachment && (
                    <MaterialCommunityIcons
                      name="paperclip"
                      size={18}
                      color="#868e96"
                      style={{marginLeft: 10}}
                    />
                  )}
                </View>
              </View>
              {/* Attachment Preview */}
              {transection.attachment && (
                <Image
                  source={{uri: transection.attachment}}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    marginLeft: 10,
                    borderWidth: 1,
                    borderColor: '#dee2e6',
                  }}
                />
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </RootLayout>
  );
};

export default Transection;

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 14,
    backgroundColor: '#fff',
    flex: 1,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 6,
  },
});
