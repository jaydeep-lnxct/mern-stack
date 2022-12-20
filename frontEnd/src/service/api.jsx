import axios from 'axios'

const api = "http://localhost:8080"



const addUser = (data) => {

   
        // fetch.post(`${api}/adduser`, { first: 'jaydeep', last: 123, third: true }, { headers: { 'Content-Type': 'application/json' } }).then(response => console.log(response)).catch(err => console.error(err))
    

        fetch(`${api}/adduser`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
             data
            })
           });
 
};

export default addUser;