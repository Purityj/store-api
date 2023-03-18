// data will have all the data from the API
fetch("https://fakestoreapi.com/products").then((data) => {
    // console.log(data);
    // after getting the data, we need to convert it into JSON format
    return data.json(); //converted to object
    // objectData stores the converted data in JSON format
}).then((objectData) => {
    console.log(objectData[0].title);

    // to display the data on the webpage, you can either use forEach or map method. map method is used to create a new array with the results of calling a function for every array element.
    // forEach method is used to call a function for each element in an array.
    // values will have entire data present in the objectData (in the API). Using values we can access individual data. 
    let tableData="";
    // objectData.forEach((values) => {
    //     // console.log(values);
    //     tableData += `<tr>
    //     <td>${values.id}</td>
    //     <td>${values.title}</td>
    //     <td>${values.price}</td>
    //     <td>${values.description}</td>
    //     <td>${values.category}</td>
    //     <td>${values.image}</td>
    //     </tr>`
    // })
    objectData.map((values) =>{
        tableData += `<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"/></td>
      </tr>`;
    });

    document.getElementById("table_body").innerHTML = tableData;
}).catch((err) => {
    console.log(err)
})