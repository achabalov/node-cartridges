import React from 'react';
import { useSelector } from 'react';

export const PostDocxGenerator = async ({docx}) => {
    console.log(docx);
    try {

        const response = await fetch('http://localhost:5000/api/asyn', {   
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: docx
        }
        )
    } catch (err) {
        console.log(err);
    }
}
