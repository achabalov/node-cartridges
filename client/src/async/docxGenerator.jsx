export async function PostDocxGenerator (docx){
    const data = JSON.stringify(...docx);
    try {
        await fetch('http://localhost:5000/api/generator', {   
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data
        }
        )
    } catch (err) {
        console.log(err);
    }
}

export async function GetDocxGenerator(branch){
    try {
        const response = await fetch('http://localhost:5000/api/generator');
        if(response.status === 200) {
            const blob = await response.blob()
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = `${branch} заявка`;
            document.querySelector('.App').append(link);
            link.click();
            link.remove()
        }
    } catch(err) {
        console.log(err);
    }
}
