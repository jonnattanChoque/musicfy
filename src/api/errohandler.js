import { FirebaseError } from "@firebase/util";

export function errorHandler(error) {
    console.log(error.code);
    var result = "";
    if (error instanceof FirebaseError) {
        switch (error.code) {
            case 'auth/wrong-password':
                result = 'Datos de usuario incorrectos';
                break;
            case 'auth/user-not-found':
                result = 'Datos de usuario incorrectos';
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