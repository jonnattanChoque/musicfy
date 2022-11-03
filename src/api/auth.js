import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { errorHandler } from "./errohandler"

export class Auth {
    async registerUser(email, password) {
        try {
            const auth = getAuth();
            const result = await createUserWithEmailAndPassword(auth, email, password);
            return result;
        } catch (error) {
            errorHandler(error);
        }
    }

    async login(email, password) {
        try {
            const auth = getAuth();
            const result = await signInWithEmailAndPassword(auth, email, password);
            return result;
        } catch (error) {
            errorHandler(error);
        }
    }

    async logout() {
        try {
            const auth = getAuth();
            await signOut(auth);
        } catch (error) {
            errorHandler(error);
        }
    }
}

