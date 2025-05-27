import {StyleSheet, Text, View} from 'react-native';
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
const Signup = () => {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [monthly, setMonthly] = useState<string>('');
  const [dailyBudget, setDailyBudget] = useState<string>('');

  // ... your other imports

  const SignInHandler = async () => {
    const auth = getAuth();
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (res.user) {
      const collection = 'user_details';
      const response = await firestore()
        .collection(collection)
        .add({
          name: name,
          email: email,
          age: Number(age),
          montly_budget: Number(monthly),
          daily_budget: Number(dailyBudget),
          created: firestore.FieldValue.serverTimestamp(),
        });
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
          next={next}
          monthly={monthly}
          setMontly={setMonthly}
          setDailyBudget={setDailyBudget}
          dailyBudget={dailyBudget}
        />
      )}
    </RootLayout>
  );
};

export default Signup;

const styles = StyleSheet.create({});
