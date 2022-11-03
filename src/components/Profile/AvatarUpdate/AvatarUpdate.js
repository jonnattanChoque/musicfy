import React, {useCallback, useState} from 'react'
import { Image } from 'semantic-ui-react'
import "./AvatarUpdate.scss";
import { defaultUser } from "../../../assets";
import { useDropzone } from 'react-dropzone';
import { User, Storage } from "../../../api";

const user = new User();
const storage = new Storage();

export function AvatarUpdate() {
    const { photoURL, uid } = user.getUser();
    const [avatar, setAvatar] = useState(photoURL || defaultUser);

    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        setAvatar(URL.createObjectURL(file));

        const response = await storage.uploadFile(file, "avatars", uid);
        const avatarUrl = await storage.getUrlFile(response.metadata.fullPath);
        await user.updateAvatarUser(avatarUrl);
        setAvatar(avatarUrl);
        alert("Avatar actualizado correctamente");
    }, [uid]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop
    });
        
    return (
        <div className='avatar-update' {...getRootProps()}>
            <input {...getInputProps()} />
            <Image src={avatar} />
        </div>
    )
}
