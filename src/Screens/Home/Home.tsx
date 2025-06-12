import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {use, useEffect, useRef, useState} from 'react';
import {Button, Input, Text} from '@ui-kitten/components';
import RootLayout from '../../Components/Ui/RootLayout';
import RBSheet from 'react-native-raw-bottom-sheet';
import jsonData from '../../Json/ExpenseList.json';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import GlobalStyles from '../../Components/Global/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncKeys} from '../../Config/Common';
import firestore from '@react-native-firebase/firestore';

const Home = () => {
  const [description, setDiscription] = useState<string>('');
  const [category, setCategory] = useState<
    {label: string; icon: string; color: string} | undefined
  >(undefined);
  const [amount, setAmount] = useState<number>(0);
  const [attachement, setAttachment] = useState<any>('');
  const [userDetails, setUserDetails] = useState<any>(null);
  const [userID, setUserID] = useState<string>('');

  const bottomRef = useRef<any>(null);

  //*-----------------------FETCH USER DETAILS FROM ASYNC STORAGE-----------------------------
  useEffect(() => {
    const getUserData = async () => {
      const data = await AsyncStorage.getItem(AsyncKeys.USER_DETAILS);
      const userID = await AsyncStorage.getItem(AsyncKeys.USER_ID);
      setUserDetails(data ? JSON.parse(data) : null);
      setUserID(userID || '');
      return data ? JSON.parse(data) : null;
    };
    getUserData();
  }, []);

  const pressHandler = async () => {
    console.log(
      'all summary ---------',
      description,
      amount,
      category,
      attachement,
    );

    const collectionName = 'expense_details';
    const resposne = await firestore()
      .collection(collectionName)
      .doc(userID)
      .set({
        description,
        amount,
        category,
        attachement,
        userID,
        created: new Date().getTime(),
      });

    Alert.alert(
      'Expense Added Successfully',
      'Your expense has been added successfully.',
    );
    console.log('Response from firestore', resposne);
  };

  const ImagePickerHandler = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.3,
      includeBase64: true,
    });

    if (result.didCancel) {
      console.error('user cancel the media picker');
    } else if (result.assets) {
      console.log('result----------', result.assets[0].base64);
      setAttachment(result.assets[0].base64);
    }
  };

  const BottomSheet = () => {
    return (
      <RBSheet
        ref={bottomRef}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={Dimensions.get('window').height - 120}
        customStyles={{
          container: {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            paddingBottom: 30,
            paddingTop: 16,
          },
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.2)',
          },
          // draggableIcon: {
          //   backgroundColor: colors.primary,
          // },
        }}>
        <ScrollView style={{padding: 16}}>
          <Text category="h5">Category</Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              gap: 8,
            }}>
            {jsonData.expense.map((item, i) => (
              <TouchableOpacity
                onPress={() => {
                  setCategory(item);
                  bottomRef.current.close();
                }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 12,
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  padding: 6,
                  backgroundColor: '#fafafa',
                }}>
                <MaterialCommunityIcons
                  name={item.icon as any}
                  size={30}
                  color={item.color}
                />
                <Text style={{fontSize: 12}}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </RBSheet>
    );
  };

  return (
    <RootLayout title={`Welcome ${userDetails?.name || ''}`}>
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{paddingBottom: 32}}>
          <View style={{gap: 16}}>
            <Image
              style={{width: '100%', height: 200, resizeMode: 'contain'}}
              source={require('../../Assets/t.png')}
            />
            <Text category="h4">Expense Hub Toolkit</Text>

            <Input
              placeholder="Amount"
              keyboardType="numeric"
              value={amount as any}
              onChangeText={e => setAmount(Number(e))}
            />

            <Input
              value={description}
              placeholder={'Description'}
              onChangeText={(e: string) => setDiscription(e)}
            />

            <Button
              style={{justifyContent: 'space-between'}}
              onPress={() => bottomRef.current?.open()}
              status="basic"
              accessoryRight={() => (
                <Feather name="chevron-down" size={24} color={'#CFCFCF'} />
              )}>
              {category && (
                <MaterialCommunityIcons
                  name={category.icon as any}
                  size={30}
                  color={'black'}
                  style={{marginRight: 12}}
                />
              )}
              {category ? category?.label : 'Category'}
            </Button>

            <Button
              status="basic"
              style={{justifyContent: 'space-between', borderRadius: 8}}
              accessoryRight={() => <Ionicon name={'attach'} size={24} />}
              onPress={ImagePickerHandler}>
              Attachment
            </Button>

            {attachement && (
              <ImageBackground
                source={{uri: `data:image/jpg;base64,${attachement}`}}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 12,
                  overflow: 'hidden',
                  marginHorizontal: 8,
                  outlineColor: '#c0c0c0',
                  outlineStyle: 'dotted',
                  outlineWidth: 2,
                  outlineOffset: 2,
                }}>
                <View style={{backgroundColor: '#c21808', width: 16}}>
                  <Ionicon
                    name="close"
                    size={16}
                    color={'#fff'}
                    onPress={() => setAttachment('')}
                  />
                </View>
              </ImageBackground>
            )}

            <Button style={GlobalStyles.button} onPress={pressHandler}>
              Add Expense
            </Button>
          </View>
        </ScrollView>
      </View>
      <BottomSheet />
    </RootLayout>
  );
};

export default Home;

const styles = StyleSheet.create({});
