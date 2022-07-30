import type {NextPage} from "next";
import React, {useState, useRef, useEffect} from 'react';
import Navbar from '../components/Navbar';
import { BiCloudUpload } from "react-icons/bi";
import { useRouter } from 'next/router';
import { motion } from "framer-motion";


const PostYourPet: NextPage = () => {
    /**** Variables and States  ****/
    const router = useRouter();
    const contentType = 'application/json';
    const initialInputValues = {
        name: "",
        caption: "",
    };
    const imageFile = useRef<File | any >("No File Selected");
    const [values, setValues] = useState(initialInputValues);
    const [fileName, setFileName] = useState("Select Pet Image");
    const [imageUrl, setImageUrl] = useState("initialState");
 
    /* useeffects */
    useEffect(() => {
        imageUrl !=="initialState" && 
        Promise.resolve()
        .then(postData)
        .then(clearInputs)
    }, [imageUrl])

    /* Functions */
    /*  */
    /*  */
    /* Fucntions */


    /**** POST TO MONGODB  ****/
    const postData = async () => {
        console.log(values.name,values.caption, imageUrl)
          const res = await fetch('/api/images', {
            method: 'POST',
            headers: {
              Accept: contentType,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: values.name,
                caption: values.caption,
                image_url: imageUrl
            }),
          })
      }

      /**** UPLOAD TO CLOUDINARY  ****/ 
      const uploadImage = () => {
        const data = new FormData()
        data.append("file", imageFile.current)
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

      /**** Pretty Descriptive :) ****/
      const clearInputs = () => {
        setFileName("Select Pet Image")
        setValues(initialInputValues)
        setImageUrl("initialState")
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {name, value} = e.target as HTMLInputElement
        setValues({
            ...values,
            [name]: value,
        })

        console.log(values.caption, values.name)
    }

    const handleImageChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        imageFile.current = target.files[0]
        setFileName(target.files[0].name)
        
        console.log(imageFile.current, fileName)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        uploadImage()
    }
    
    return (
        <div className="post__container">
            <Navbar />
            <div className="post__container--form">
                <h1 className="title">Post your Cutie(s)</h1>
                <p className="renderP">{imageUrl}</p>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    placeholder="What is your Beauty's Name?"
                    onChange={handleChange}
                    name="name"
                    value={values.name}
                    required
                     />
                    <input 
                    type="text" 
                    placeholder="Caption"
                    onChange={handleChange}
                    name="caption"
                    value={values.caption}
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
                    <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.80 }}
                    >
                        Add to Gallery
                    </motion.button>
                </form>
            </div>
            {/* <div className="recent__uploads"></div> */}
            <span className="attribution">Created with ❤️ by <span className="my-name"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/phemi_t">Phemi</a></span></span>

        </div>
    )
}

export default PostYourPet