import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export class Auth {
    async registerUser(email, password) {
        try {
            const auth = getAuth();
            const result = await createUserWithEmailAndPassword(auth, email, password);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            const auth = getAuth();
            await auth.signOut();
        } catch (error) {
            throw error;
        }
    }
}

