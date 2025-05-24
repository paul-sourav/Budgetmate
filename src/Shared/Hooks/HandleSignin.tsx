import {getAuth, signInWithEmailAndPassword} from '@react-native-firebase/auth';

const HandleSignin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password,
    );
    const user = userCredential.user;
    console.log('User signed in:', user);
    return user;
  } catch (error: any) {
    console.error('Signin error:', error.message);
    throw error; // Optional: rethrow to handle in component
  }
};

export default HandleSignin;
