const updateUI = async () => {
    try {
        const request = await fetch('/all');
        // Transform into JSON 
        const allData = await request.json()
        // updated data to DOM elements  
        document.getElementById('agreement').innerHTML = `Agreement of the article: ${allData.agreement}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${allData.subjectivity}`;
        document.getElementById('text').innerHTML = `Text: ${allData.text}`;

    }
    catch (error) {
        console.log("error", error);
    }
};

export { updateUI };