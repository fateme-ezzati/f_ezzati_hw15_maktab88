const serverUrl = 'http://localhost:3000/api/product/all';

const search = async () => {
    const element = $('#search_val').val().trim()
    console.log(element)


    try {
        const response = await axios.get(serverUrl);

        console.log(response);

        for (index = 0; index < response.length; ++index) {
            
            // .search("blue")
        }


        // refresh page
        // setTimeout(() => {
        // 	location.reload();
        // }, 1000);

    } catch (error) {
        console.log(error);
    }
}

// function search(source, name) {
//     var results = [];
//     var index;
//     var entry;

//     name = name.toUpperCase();
//     for (index = 0; index < source.length; ++index) {
//         entry = source[index];
//         if (entry && entry.name && entry.name.toUpperCase().indexOf(name) !== -1) {
//             results.push(entry);
//         }
//     }

//     return results;
// }