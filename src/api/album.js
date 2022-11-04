import { v4 as uuidv4 } from "uuid";
import {Main} from "./main";

export class Album extends Main {
    
    constructor() {
        super();
        this.collectionName = "albums";
    }

    async getAlbums() {
        return await this.getCollections();
    }

    async getAlbum(id) {
        return await this.getCollection(id);
    }

    async createAlbum(name, image, artist) {
        const idAlbumt = uuidv4();
        const data = {id: idAlbumt, image, name, artist};
        return await this.createCollection(idAlbumt, data);
    }

    async getAlbumsByArtist(artist) {
        return await this.getCollectionByItem("artist", artist);
    }

    async getLastAlbums(limitItems= 20) {
        return await this.getLastCollections(limitItems);
    }
}