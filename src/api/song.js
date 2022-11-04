import { errorHandler } from "./errohandler";
import { v4 as uuidv4 } from "uuid";
import { setDoc, doc, collection, getDocs, getDoc, where, query, limit, orderBy } from "firebase/firestore";
import { db } from "../utils";
import { Main } from "./main";

export class Song extends Main {
    
    constructor() {
        super();
        this.collectionName = "songs";
    }

    async getSongs() {
        return await this.getCollections();
    }

    async getSong(id) {
        return await this.getCollection(id);
    }

    async createSong(name, file, album) {
        const idSong = uuidv4();
        const data = {id: idSong, file, name, album};
        return await this.createCollection(idSong, data);
    }

    async getSongsByAlbum(album) {
        return await this.getCollectionByItem("album", album);
    }

    async getLastSongs(limitItems= 20) {
        return await this.getLastCollections(limitItems);
    }
}
