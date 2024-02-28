'use client'
import style from './image-picker.module.css'
import {useRef} from "react";

export default function ImagePicker({label, name}) {
    const imageInput = useRef();

    function handlePickClick() {
        imageInput.current.click();
    }

    return (
        <div className={style.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={style.controls}>
                <input type="file"
                       className={style.input}
                       id={name}
                       accept="image/png, image/jpeg"
                       name={name}
                       ref={imageInput}/>
                <button className={style.button}
                        type="button"
                        onClick={handlePickClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    )
}