import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";

export class Storage {
    async uploadFile(file, folder, nameFile) {
        try {
            const storage = getStorage();
            const storageRef = ref(storage, `${folder}/${nameFile}`);
            return await uploadBytes(storageRef, file);
        } catch(error) {
            throw error;
        }
    }

    async getUrlFile(pathFile) {
        try {
            const storage = getStorage();
            const storageRef = ref(storage, pathFile);
            return await getDownloadURL(storageRef);
        } catch(error) {
            throw error;
        }
    }
}