'use client'
import style from './image-picker.module.css'
import {useRef, useState} from "react";
import Image from "next/image";

export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState()
    const imageInput = useRef();

    function handlePickClick() {
        imageInput.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            return
        }

        const fileReader = new FileReader()

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file)
    }

    return (
        <div className={style.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={style.controls}>
                <div className={style.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && <Image src={pickedImage}
                                           alt="Image selected by the user."
                                           fill/>}
                </div>
                <input type="file"
                       className={style.input}
                       id={name}
                       accept="image/png, image/jpeg"
                       name={name}
                       ref={imageInput}
                       onChange={handleImageChange}/>
                <button className={style.button}
                        type="button"
                        onClick={handlePickClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    )
}