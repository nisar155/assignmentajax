var text = document.getElementById('text');
function ajax(){
    console.log("Button Clicked");
    // step 1
    var xhttp = new XMLHttpRequest();

    // step 2
    // xhttp.open("GET","content.txt",true);
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);

    
    // step 3
    xhttp.send();

    // step 4
    xhttp.onreadystatechange = function(){
        if((this.readyState == 4)&&(this.readyState == 200));
        // console.log(this.response)
        var data=JSON.parse(this.response)
        // text.innerHTML=Name:${data[1].name} Age:${data[1].age}
        let output = '<table><tr><th>Name</th><th>Username</th><th>Email</th><th>City</th></tr>';
        for(let i=0;i<data.length;i++){
            console.log(data[i])
            output += `<tr>
                    <td>${data[i].name}</td>
                    <td>${data[i].username}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].address.city}</td>
                </tr>`;
        }
            output += '</table>';
        text.innerHTML = output;

        
 
}


}