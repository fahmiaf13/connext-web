import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, AuthErrorCodes, GoogleAuthProvider, signInWithPopup, browserLocalPersistence, setPersistence } from "firebase/auth";

interface userState {
  email: string;
  password: string;
  user: User;
}

type User = {
  id: string | null;
  email: string | null;
  displayName: string | null;
  profilePhoto: string | null;
};
export const useAuthStore = defineStore("storeAuth", {
  state: (): userState => {
    return {
      email: "",
      password: "",
      user: {} as User,
    };
  },
  persist: true,
  getters: {},
  actions: {
    init() {
      const router = useRouter();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.user.displayName = user.displayName;
          this.user.profilePhoto = user.photoURL;
          router.replace({ name: "Home" });
        } else {
          this.user = {} as User;
        }
      });
    },
    async signUp() {
      const router = useRouter();
      try {
        const response = await createUserWithEmailAndPassword(auth, this.email, this.password);
        if (response) {
          router.replace({ name: "Login" });
        }
      } catch (error) {
        console.log(error);
        console.log("error");
      }
    },
    async signIn() {
      const router = useRouter();
      try {
        const response = await signInWithEmailAndPassword(auth, this.email, this.password);
        if (response) {
          router.replace({ name: "Dashboard" });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async googleSignIn() {
      const router = useRouter();
      try {
        const provider = new GoogleAuthProvider();
        const response = await signInWithPopup(auth, provider);
        if (response) {
          router.replace({ name: "Dashboard" });
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async logOut() {
      const router = useRouter();
      await signOut(auth);
      window.location.reload();
      router.replace({ name: "Home" });
      this.email = "";
      this.password = "";
    },
  },
});
