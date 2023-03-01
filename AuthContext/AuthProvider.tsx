
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, User, signOut, onAuthStateChanged, sendEmailVerification } from "firebase/auth"
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useMemo, useState, useEffect } from "react"
import { auth } from "../firebase";

interface AuthProviderProps {
  children: ReactNode
}

interface IAuth {
  user: User | null
  signInEP: (email: string, password: string) => Promise<void>
  signUpEP: (email: string, password: string) => Promise<void>
  signUpGoogle: () => Promise<void>
  logOut: () => Promise<void>
  loading: boolean
  error: string | null
}

const AuthContext = createContext<IAuth>({
  user: null,
  signInEP: async () => { },
  signUpEP: async () => { },
  signUpGoogle: async () => { },
  logOut: async () => { },
  loading: false,
  error: null
})

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  // const [initialLoading, setinitialLoading] = useState(true);

  //google provider object
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        // user logged in
        setUser(user)
        setloading(false)
      } else {
        // user not logged in
        setUser(null)
        setloading(true)
        // router.push("/login")
      }

    })
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [auth]);


  // signUp with Email and Password
  const signUpEP = async (email: string, password: string) => {
    setloading(true)
    
    await createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setUser(userCredential.user)
        // router.push("/dashboard")
        sendEmailVerification(userCredential.user)
      })
      .catch(err => console.log(err.message))
      .finally(() => setloading(false));
  }
  // sign In with Email and Password
  const signInEP = async (email: string, password: string) => {
    setloading(true)

    await signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setUser(userCredential.user)
        // router.push("/dashboard")
      })
      .catch(err => console.log(err.message))
      .finally(() => setloading(false));
  }

  // Signout the User
  const logOut = async () => {
    setloading(true)

    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch(error => alert(error.message))
      .finally(() => setloading(false));
  }

  //signUp with GOOGLE
  const signUpGoogle = async () => {
    setloading(true);


    await signInWithPopup(auth, provider)
      .then(userCredential => {
        setUser(userCredential.user)
        // router.push("/dashboard")
        sendEmailVerification(userCredential.user)
      })
      .catch(err => console.log(err.message))
      .finally(() => setloading(false));


  }

  const memoedVal = useMemo(
    () => ({
      user,
      signInEP,
      signUpEP,
      signUpGoogle,
      logOut,
      loading,
      error
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, loading, error])
  return (
    <AuthContext.Provider value={{
      user,
      signInEP,
      signUpEP,
      signUpGoogle,
      logOut,
      loading,
      error
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}
