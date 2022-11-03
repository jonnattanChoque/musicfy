import { getAuth, updateProfile, updateEmail, updatePassword, 
    EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { errorHandler } from "./errohandler"

export class User {
    getUser() {
        return getAuth().currentUser;
    }

    updateAvatarUser(urlAvatar) {
        try {
            const auth = getAuth();
            return updateProfile(auth.currentUser, {
                photoURL: urlAvatar
            });
        } catch(error) {
            errorHandler(error);
        }
    }

    async updateProfileName(displayName) {
        try {
            const auth = getAuth();
            return await updateProfile(auth.currentUser, {
                displayName: displayName
            });
        } catch(error) {
            errorHandler(error);
        }
    }

    async updateProfileEmail(password, newEmail) {
        try {
            const auth = getAuth();
            const credential = EmailAuthProvider.credential(auth.currentUser.email, password);
            await reauthenticateWithCredential(auth.currentUser, credential);
            await updateEmail(auth.currentUser, newEmail);
        } catch(error) {
            errorHandler(error);
        }
    }

    async updateProfilePassword(password, newPassword) {
        try {
            const auth = getAuth();
            const credential = EmailAuthProvider.credential(auth.currentUser.email, password);
            await reauthenticateWithCredential(auth.currentUser, credential);
            await updatePassword(auth.currentUser, newPassword);
        } catch(error) {
            errorHandler(error);
        }
    }
}