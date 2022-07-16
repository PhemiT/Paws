import type {NextPage} from "next";
import React, {useState} from 'react';
import Navbar from '../components/Navbar'
import { BiCloudUpload } from "react-icons/bi"
import { useRouter } from 'next/router'


const PostYourPet: NextPage = () => {
    const router = useRouter()
    const contentType = 'application/json'
    const [fileName, setFileName] = useState("Select Pet Image");
    const [captionValue, setCaptionValue] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [image, setImage] = useState<File | any>(null)

    /**** POST TO MONGODB  ****/
    const postData = async () => {
          const res = await fetch('/api/images', {
            method: 'POST',
            headers: {
              Accept: contentType,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: captionValue,
                image_url: imageUrl
            }),
          })
      }

      const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "pawsapp")
        data.append("cloud_name", "dyc5lca0t")
        fetch("https://api.cloudinary.com/v1_1/dyc5lca0t/image/upload", {
            method:"post",
            body: data
        })
        .then(resp => resp.json())
        .then(data => {
            setImageUrl(data.url)
        })
        .catch(err => console.log(err))
      }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        setCaptionValue(target.value)
        console.log(captionValue)
        
    }

    const handleImageChange = (e:React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        if (target.files) {
            setFileName(target.files[0].name)
            setImage(target.files[0])
        }
        /* console.log(imageUrl) */
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(captionValue, imageUrl)
        uploadImage()
        // Allow enough time for image to upload
        setTimeout(postData, 5000)
        /* postData() */

        // Clear inputs
        setFileName("Select Pet Image")
        setCaptionValue("")
    }
    
    return (
        <div className="post__container">
            <Navbar />
            <div className="post__container--form">
                <h1 className="title">Post your Cutie(s)</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Caption"
                    onChange={handleChange}
                    value={captionValue}
                    required />
                    <label htmlFor="image-file-input">
                        <BiCloudUpload />
                        <p>{fileName}</p>
                    </label><br />
                    <input 
                    type="file" 
                    id="image-file-input" 
                    name="image-file-input" 
                    accept="image/png, image/jpeg"
                    required 
                    onChange={handleImageChange}/>
                    <button type="submit">Add to Gallery</button>
                </form>
            </div>
            {/* <div className="recent__uploads"></div> */}
            <span className="attribution">Created with ❤️ by <span className="my-name"><a href="https://twitter.com/phemi_t">Phemi</a></span></span>

        </div>
    )
}

export default PostYourPet