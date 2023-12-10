import { useState } from "react"
import { imageDb } from "../firebase/firebaseConfig"
import { ref, uploadBytes } from "firebase/storage";
import { v4  } from 'uuid';

export const Profile = () => {
    const [image, setImage] =useState("");
    const handleUpload = () => {
    const imgeRef = ref(imageDb, `files/${v4()}`);
    uploadBytes(imgeRef, image)
    }
  return (
    <div>
        <input type="file" onChange={e=>setImage(e.target.files[0])}/>
        <button onClick={handleUpload}>Upload</button>
    </div>
  
  )
}
