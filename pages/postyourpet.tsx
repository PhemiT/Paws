import type {NextPage} from "next";
import {useState} from 'react';
import Navbar from '../components/Navbar'
import { BiCloudUpload } from "react-icons/bi"
import { useRouter } from 'next/router'


const PostYourPet: NextPage = () => {
    const router = useRouter()
    const [fileName, setFileName] = useState("Select Pet Image");
    const contentType = 'application/json'
    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [data, setData] = useState({
        imageName: "",
        imageLink: ""
    })

    /**** POST TO MONGODB  ****/
    const postData = async () => {
          const res = await fetch('/api/images', {
            method: 'POST',
            headers: {
              Accept: contentType,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                image_url: imageUrl
            }),
          })
      }

    const handleChange = (e: any) => {
        const target = e.target
        const value = target.value 
        setName(value)
        console.log(name)
    }

    const handleImageChange = (e:any) => {
        setFileName(e.target.files[0].name)
        setImageUrl(e.target.files[0].name)
        console.log(imageUrl)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(name, imageUrl)
        setData({
            imageName: name,
            imageLink: imageUrl
        })
        postData()
    }
    
    return (
        <div className="post__container">
            <Navbar />
            <div className="post__container--form">
                <h1 className="title">Post your Cuties</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Pet's Name"
                    onChange={handleChange} />
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
            <span className="attribution">Created with ❤️ by Phemi</span>

        </div>
    )
}

export default PostYourPet