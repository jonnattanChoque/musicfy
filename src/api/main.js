import { errorHandler } from "./errohandler";
import { v4 as uuidv4 } from "uuid";
import { setDoc, doc, collection, getDocs, getDoc, where, query, limit, orderBy } from "firebase/firestore";
import { db } from "../utils";

export class Main {
    collectionName = "";

    async getCollections() {
        try {
            const querySnapshot = await getDocs(collection(db, this.collectionName));
            return querySnapshot.docs.map(doc => doc.data());
        } catch (error) {
            errorHandler(error);
        }
    }

    async getCollection(id) {
        try {
            const docRef = doc(db, this.collectionName, id);
            const snapshot = await getDoc(docRef);
            return snapshot.data();
        } catch (error) {
            errorHandler(error);
        }
    }

    async createCollection(id, data) {
        try {
            const created_at = new Date();
            data.created_at = created_at;
            const ref = doc(db, this.collectionName, id);
            await setDoc(ref, data);
        } catch (error) {
            errorHandler(error);
        }
    }

    async getCollectionByItem(filter, item) {
        try {
            const whereRef = where(filter, "==", item);
            const queryRef = query(collection(db, this.collectionName), whereRef);
            const querySnapshot = await getDocs(queryRef);
            return querySnapshot.docs.map(doc => doc.data());
        } catch (error) {
            errorHandler(error);
        }
    }

    async getLastCollections(limitItems= 20) {
        try {
            const collectionRef = collection(db, this.collectionName);
            const limitRef = limit(limitItems);
            const orderByRef = orderBy("created_at", "desc");
            const queryRef = query(collectionRef, orderByRef, limitRef);
            const querySnapshot = await getDocs(queryRef);
            return querySnapshot.docs.map(doc => doc.data());
        } catch (error) {
            errorHandler(error);
        }
    }
}