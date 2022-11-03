import { FirebaseError } from "@firebase/util";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";

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

export function errorHandler(error) {
    console.log(error.code);
    var result = "";
    if (error instanceof FirebaseError) {
        switch (error.code) {
            case 'auth/wrong-password':
                result = 'Correo o contraseña incorrectos';
                break;
            case 'auth/user-not-found':
                result = 'Correo o contraseña incorrectos';
                break;
            case 'auth/network-request-failed':
                result = 'Error de conexión';
                break;
            default:
                result = 'Error desconocido, intente más tarde';
                break;
        }
        throw result;
    } else {
        throw error;
    }
}

