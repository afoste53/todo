import app from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    // initialize app w/ config
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  async register(name, email, password) {
    let newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    await newUser.user.updateProfile({ displayName: name });
    return newUser;
  }

  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    await this.auth.signOut();
  }
}

const firebase = new Firebase();
export default firebase;
