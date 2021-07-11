import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { computed, onMounted, ref } from 'vue';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDpN8XleReWXI7bOCxJqPXuqjmVzhffFwg',
  authDomain: 'speind.firebaseapp.com',
  projectId: 'speind',
  storageBucket: 'speind.appspot.com',
  messagingSenderId: '586326479872',
  appId: '1:586326479872:web:508e5747795e6f974974e5',
});

const auth = firebase.auth();
const firestore = firebaseApp.firestore();

/* eslint no-return-assign: "error" */
function useAuth() {
  const user = ref(null);
  const unsubscribe = auth.onAuthStateChanged((userData) => (user.value = userData));

  const isLogin = computed(() => user.value !== null);

  const signInGoogle = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(googleProvider);
  };

  const signOut = async () => auth.signOut();

  return {
    user, isLogin, signInGoogle, signOut, unsubscribe,
  };
}

const PostsComments = {
  async load(id) {
    const posts = firestore.collection('posts');
    const dataCommentsRaw = (await posts.doc(id).collection('comments').get()).docs;
    const res = dataCommentsRaw.map((_comments) => ({
      ..._comments.data(),
      createdAt: new Date(_comments.data().createdAt.toDate()).toLocaleString('id-ID', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
      }),
    }));
    return res;
  },

  async add(id, data) {
    const posts = firestore.collection('posts');
    await posts.doc(id).collection('comments').add({
      ...data,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  },
};


export {
  useAuth, PostsComments,
};
