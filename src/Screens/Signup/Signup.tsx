import {Alert, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useState} from 'react';
import Name from './Components/Name';
import Age from './Components/Age';
import Email from './Components/Email';
import Password from './Components/Password';
import EntBudget from './Components/EntBudget';
import RootLayout from '../../Components/Ui/RootLayout';
import {
  createUserWithEmailAndPassword,
  getAuth,
} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {RouteName, AsyncKeys} from '../../Config/Common';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Signup = ({navigation}: {navigation: any}) => {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [monthly, setMonthly] = useState<string>('');
  const [dailyBudget, setDailyBudget] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // ... your other imports

  const SignInHandler = async () => {
    const auth = getAuth();
    setIsLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (res.user) {
        const userUid = res.user.uid; // Get the UID of the newly created user
        const collectionName = 'user_details';

        const Response: any = await firestore()
          .collection(collectionName)
          .doc(userUid) // Use the user's UID as the document ID
          .set({
            name: name,
            email: email,
            age: Number(age),
            montly_budget: Number(monthly),
            daily_budget: Number(dailyBudget),
            created: firestore.FieldValue.serverTimestamp(),
          });

        console.log(
          'User details added to Firestore with UID as document ID:',
          userUid,
        );

        console.log('Account created successfully:', Response);
        ToastAndroid.showWithGravity(
          'Account created successfully',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );

        AsyncStorage.setItem(AsyncKeys.USER_DETAILS, JSON.stringify(Response));
        setIsLoading(false);
        navigation.navigate(RouteName.BOTTOM);
      }
    } catch (error: any) {
      setIsLoading(false);
      console.error('Error during sign-in or Firestore operation:', error);
      // Handle specific errors, e.g., email already in use, weak password
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      } else {
        Alert.alert('An error occurred during sign-in. Please try again.');
      }
    }
  };
  const next = () => {
    setStep(prev => prev + 1);
  };

  const prev = () => {
    setStep(prev => (prev !== 1 ? prev - 1 : 1));
  };
  return (
    <RootLayout title="Welcome to BudgetMate">
      {step === 1 && <Name next={next} name={name} setName={setName} />}
      {step === 2 && <Age next={next} age={age} setAge={setAge} />}
      {step === 3 && <Email next={next} email={email} setEmail={setEmail} />}
      {step === 4 && (
        <Password next={next} password={password} setPassword={setPassword} />
      )}
      {step === 5 && (
        <EntBudget
          signup={SignInHandler}
          monthly={monthly}
          setMontly={setMonthly}
          setDailyBudget={setDailyBudget}
          dailyBudget={dailyBudget}
          loading={isLoading}
        />
      )}
      <StepIndicator step={step} />
    </RootLayout>
  );
};

const StepIndicator = ({step}: {step: number}) => {
  return (
    <View
      style={{
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 250,

        flexDirection: 'row',
      }}>
      {[1, 2, 3, 4, 5].map(item => (
        <View
          style={{
            width: 20,
            justifyContent: 'center',
            alignItems: 'center',
            height: 20,
            borderRadius: 12,
            backgroundColor: step == item ? '#FD7451' : '#ffd1c1',
          }}>
          {step == item && <Text>{step}</Text>}
        </View>
      ))}
    </View>
  );
};

export default Signup;
