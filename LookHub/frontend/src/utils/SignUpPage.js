// // SignUpPage.js
// import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { getFirestore, doc, setDoc } from 'firebase/firestore';

// const auth = getAuth();
// const db = getFirestore();

// const handleSignUp = async (email, password, username) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;
    

//     await updateProfile(user, { displayName: username });

//     await setDoc(doc(db, 'users', user.uid), {
//       username: username,
//       email: email,
//     });

//   } catch (error) {
//     console.error('Error signing up:', error);
//   }
// };

// SignUpPage.js
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const auth = getAuth();
const db = getFirestore();

const handleSignUp = async (email, password, username) => {
  try {
    // You can add validation checks before proceeding (e.g., checkValidData)

    // Creating user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update the profile with username
    await updateProfile(user, { displayName: username });

    // Store user data in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      username: username,
      email: email,
    });

    console.log('User signed up successfully');
    
  } catch (error) {
    // Show error message or handle it
    console.error('Error signing up:', error.message);
    return error.message; // or handle this error in a user-friendly way
  }
};
