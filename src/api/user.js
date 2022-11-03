import { getAuth } from "firebase/auth";

export class User {
    getUser() {
        return getAuth().currentUser;
    }
}