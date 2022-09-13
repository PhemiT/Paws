import type {NextPage} from "next";
import React, {useState, useRef, useEffect} from 'react';
import Navbar from '../components/Navbar';
import { BiCloudUpload } from "react-icons/bi";
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import UseAnimations from "react-useanimations";
import infinity from "react-useanimations";


const PostYourPet: NextPage = () => {
    /**** Variables and States  ****/
    const router = useRouter();
    const contentType = 'application/json';
    const initialInputValues = {
        name: "",
        caption: "",
    };
    const imageFile = useRef<File | any >(null);
    const [values, setValues] = useState(initialInputValues);
    const [fileName, setFileName] = useState("Select Pet Image");
    const [imageUrl, setImageUrl] = useState("initialState");
    const [routineComplete, setRoutineComplete] = useState(false);
    const [buttonText, setButtonText] = useState("Add to Gallery");
    const [countdown, setCountdown] = useState(10)
 
    /* useeffects */
    useEffect(() => {
        imageUrl !=="initialState" && 
        Promise.resolve()
        .then(postData)
        .then(() => {
            setRoutineComplete(true)
        })
        .then(refreshPage)
    }, [imageUrl])

    useEffect(() => {
        if (routineComplete) {
            const timer: any = countdown > 0 && setInterval(() => setCountdown(() => countdown-1), 1000);
            return () => clearInterval(timer);
        }
    }, [routineComplete, countdown])

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
    const refreshPage = () => {
        setTimeout(() => window.location.reload(), 10500)
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {name, value} = e.target as HTMLInputElement
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleImageChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        if (!target.files) return;
        imageFile.current = target.files[0]
        setFileName(target.files[0].name)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        Promise.resolve()
        .then(() => {
            setButtonText("Working on it....")
        })
        .then(uploadImage)
    }
    
    return (
        <div className="post__container">
            <Navbar />
            {routineComplete ? 
                <div className="routine-complete">
                    <h1 className="title">Done</h1>
                    <p className="refresh-text">
                        Page Refreshing in <span>{countdown}</span> Seconds...
                    </p>
                </div>
            :
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
                    autoComplete="off"
                     />
                    <input 
                    type="text" 
                    placeholder="Caption"
                    onChange={handleChange}
                    name="caption"
                    value={values.caption}
                    required
                    autoComplete="off"
                    />
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
                        {buttonText}
                    </motion.button>
                </form>
            </div>}
            {/* <div className="recent__uploads"></div> */}
            <span className="attribution">Created with ❤️ by <span className="my-name"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/phemi_t">Phemi</a></span></span>

        </div>
    )
}

export default PostYourPet