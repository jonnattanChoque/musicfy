import { v4 as uuidv4 } from "uuid";
import { Main } from "./main";

export class Artist extends Main {
    
    constructor() {
        super();
        this.collectionName = "artists";
    }

    async getArtists() {
        return await this.getCollections();
    }

    async getArtist(id) {
        return await this.getCollection(id);
    }

    async createArtist(name, image) {
        const idArtist = uuidv4();
        const data = {id: idArtist, image, name};
        return await this.createCollection(idArtist, data);
    }

    async getLastArtist(limitItems= 20) {
        return await this.getLastCollections(limitItems);
    }
}