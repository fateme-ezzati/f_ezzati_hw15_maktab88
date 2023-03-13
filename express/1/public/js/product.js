// const serverUrl = "http://localhost:3000/api/product";
const serverUrl = window.location.href;

const getProductInfo = async url => {
    try {
        const response = await axios.get(
            url + "/" + title
        );

        console.log(response);


        // refresh page
        // setTimeout(() => {
        // 	location.reload();
        // }, 1000);

    } catch (error) {
        console.log(error);
    }
};

getProductInfo(serverUrl)

console.log("url:",window.location.href)