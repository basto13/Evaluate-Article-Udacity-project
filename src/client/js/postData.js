// client's side function to post data 
const postData = async (url = '', data = {}) => {
    try {
        console.log(url, data);
        const response = await fetch(url, {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const newData = await response.json();
        return newData;
    }
    catch (error) {
        console.log("error", error);
    }
};

export { postData };