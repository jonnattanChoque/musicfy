import { errorHandler } from "./errohandler";
import { v4 as uuidv4 } from "uuid";
import { setDoc, doc, collection, getDocs, getDoc, where, query } from "firebase/firestore";
import { db } from "../utils";

export class Album {
    collectionName = "albums";

    async getAlbums() {
        try {
            const querySnapshot = await getDocs(collection(db, this.collectionName));
            return querySnapshot.docs.map(doc => doc.data());
        } catch (error) {
            errorHandler(error);
        }
    }

    async getAlbum(id) {
        try {
            const docRef = doc(db, this.collectionName, id);
            const snapshot = await getDoc(docRef);
            return snapshot.data();
        } catch (error) {
            errorHandler(error);
        }
    }

    async createAlbum(name, image, artist) {
        try {
            const idAlbumt = uuidv4();
            const created_at = new Date();
            const data = {id: idAlbumt, image, name, created_at, artist};
            const ref = doc(db, this.collectionName, idAlbumt);
            await setDoc(ref, data);
        } catch (error) {
            errorHandler(error);
        }
    }

    async getAlbumsByArtist(artist) {
        try {
            const whereRef = where("artist", "==", artist);
            const queryRef = query(collection(db, this.collectionName), whereRef);
            const querySnapshot = await getDocs(queryRef);
            return querySnapshot.docs.map(doc => doc.data());
        } catch (error) {
            errorHandler(error);
        }
    }
}