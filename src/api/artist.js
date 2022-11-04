import { errorHandler } from "./errohandler";
import { v4 as uuidv4 } from "uuid";
import { setDoc, doc, collection, getDocs, getDoc } from "firebase/firestore";
import { db } from "../utils";

export class Artist {
    collectionName = "artists";

    async getArtists() {
        try {
            const querySnapshot = await getDocs(collection(db, this.collectionName));
            return querySnapshot.docs.map(doc => doc.data());
        } catch (error) {
            errorHandler(error);
        }
    }

    async getArtist(id) {
        try {
            const docRef = doc(db, this.collectionName, id);
            const snapshot = await getDoc(docRef);
            return snapshot.data();
        } catch (error) {
            errorHandler(error);
        }
    }

    async createArtist(name, image) {
        try {
            const idArtist = uuidv4();
            const created_at = new Date();
            const data = {id: idArtist, image, name, created_at};
            const ref = doc(db, this.collectionName, idArtist);
            await setDoc(ref, data);
        } catch (error) {
            errorHandler(error);
        }
    }
}