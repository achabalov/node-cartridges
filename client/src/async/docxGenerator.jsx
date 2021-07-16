import React from 'react';
import { useSelector } from 'react';

export const PostDocxGenerator = async (docx) => {
    const data = JSON.stringify(...docx);
    console.log(data);
    try {
        const response = await fetch('http://localhost:5000/api/generator', {   
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                data
            }
        }
        )
    } catch (err) {
        console.log(err);
    }
}
