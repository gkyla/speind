import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { computed, onMounted, ref } from 'vue';

firebase.initializeApp({
  apiKey: 'AIzaSyDpN8XleReWXI7bOCxJqPXuqjmVzhffFwg',
  authDomain: 'speind.firebaseapp.com',
  projectId: 'speind',
  storageBucket: 'speind.appspot.com',
  messagingSenderId: '586326479872',
  appId: '1:586326479872:web:508e5747795e6f974974e5',
});

const auth = firebase.auth();

function useAuth() {
  const user = ref(null);
  const unsubscribe = auth.onAuthStateChanged((userData) => {
    user.value = userData;
  });
  onMounted(unsubscribe);

  const isLogin = computed(() => user.value !== null);

  const signInGoogle = async () => {
    const googleProvider = firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(googleProvider);
  };

  const signOut = () => auth.signOut();

  return {
    user, isLogin, signInGoogle, signOut,
  };
}


return { useAuth };
