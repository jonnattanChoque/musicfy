import { errorHandler } from "./errohandler";
import { v4 as uuidv4 } from "uuid";
import { setDoc, doc, collection, getDocs, getDoc, where, query } from "firebase/firestore";
import { db } from "../utils";

export class Song {
    collectionName = "songs";

    async getSongs() {
        try {
            const querySnapshot = await getDocs(collection(db, this.collectionName));
            return querySnapshot.docs.map(doc => doc.data());
        } catch (error) {
            errorHandler(error);
        }
    }

    async getSong(id) {
        try {
            const docRef = doc(db, this.collectionName, id);
            const snapshot = await getDoc(docRef);
            return snapshot.data();
        } catch (error) {
            errorHandler(error);
        }
    }

    async createSong(name, file, album) {
        try {
            const idSong = uuidv4();
            const created_at = new Date();
            const data = {id: idSong, file, name, created_at, album};
            const ref = doc(db, this.collectionName, idSong);
            await setDoc(ref, data);
        } catch (error) {
            errorHandler(error);
        }
    }

    async getSongsByAlbum(album) {
        try {
            const whereRef = where("album", "==", album);
            const queryRef = query(collection(db, this.collectionName), whereRef);
            const querySnapshot = await getDocs(queryRef);
            return querySnapshot.docs.map(doc => doc.data());
        } catch (error) {
            errorHandler(error);
        }
    }
}
