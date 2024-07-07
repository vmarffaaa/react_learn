import React from 'react';
import {IFormPost} from "../models/IFormPost";
import {useForm} from "react-hook-form";
import styles from "./FormComponent.module.css"

const FormComponent = () => {
    let {register, handleSubmit, formState: {errors, isValid}
    } = useForm<IFormPost>({
        mode: 'all'
    });

    let customHandler = (data: IFormPost) => {
        console.log('start sending')
        console.log(data);
        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: data.title,
                body: data.body,
                userId: data.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        console.log('sending over')
    };

    return (
        <div>
            <form className={styles.form_body} onSubmit={handleSubmit(customHandler)}>
                <h1 className={styles.title}>Send-Post Form</h1>
               <div className={styles.label}>
                <label className={styles.block}>
                    <h2>Title</h2>
                    <input type="text" {...register('title', {
                        required: true,
                        minLength: {value: 10, message: 'your post title is too small'},
                        maxLength: {value: 50, message: 'your post title is too big'}
                    })}/>
                    {errors.title && <div className={styles.errors}>{errors.title.message}</div>}
                </label>
                <label className={styles.block}>
                    <h2>Post body</h2>
                    <input type="text" {...register('body', {
                        required: true,
                        minLength: {value: 15, message: 'your post text is too small'},
                        maxLength: {value: 200, message: 'your post text is too big'}
                    })}/>
                    {errors.body && <div className={styles.errors}>{errors.body.message}</div>}
                </label>
                <label className={styles.block}>
                    <h2>UserId</h2>
                    <input type="number" {...register('userId', {
                        required: true,
                        valueAsNumber: true,
                        min: {value: 1, message: 'the userId value can only be positive'},
                    })}/>
                    {errors.userId && <div className={styles.errors}>{errors.userId.message}</div>}
                </label>
               </div>
                <button className={styles.send_button} disabled={!isValid}>Send post</button>
            </form>
        </div>
)
    ;
};

export default FormComponent;