import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import regeneratorRuntime from "regenerator-runtime";
import './form.css'
import Postview from "./postview";
const Form = () => {
    const [img, setimg] = useState("");
    const [Author, setauthor] = useState("");
    const [Location, setloc] = useState("");
    const [Description, setdes] = useState("");
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', img)
        formData.append('Author', Author)
        formData.append('Location', Location)
        formData.append('Description', Description);
        await fetch("https://instabackend-loo2.onrender.com/form", { method: 'post', body: formData }).then((res) => res.json()).then((data) => { console.log(data); }).catch((e) => console.log(e))
        navigate('/fetch')
    }
    return (
        <>
            <Postview />
            <center id="border" >
                <form  encType="multipart/form-data" onSubmit={handleSubmit}  className="formContainer">
                    <input type="file" name="file" accept='image/*' onChange={(e) => { setimg(e.target.files[0]) }} /> <br />
                    <div className="auth">
                        <input type="text" placeholder="Author" name="Author"  className="authorclass" onChange={(e) => { setauthor(e.target.value) }} /><br></br>
                        <input type="text" placeholder="Location" name="Location"  className="authorclass" onChange={(e) => { setloc(e.target.value) }} /><br></br>
                    </div>
                    <textarea name="Description"  className="textareaClass" placeholder="Description" cols="30" rows="5" onChange={(e) => { setdes(e.target.value) }}></textarea> <br />
                    <button type="submit">Post</button>
                </form>
            </center>
        </>
    )
}
/* "proxy":"https://insta-node.onrender.com/posts" */
export default Form;