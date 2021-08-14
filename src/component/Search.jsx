// import React from 'react';
// import { useState } from 'react';
// import { FormControl, Form, Button } from 'react-bootstrap';
// import '../App.css';

// const Search = (props) => {

//     const [item, setItem] = useState(' ');
//     const [showitem, setShowItem] = useState([]);

//     const searchBtn = () => {
//         setShowItem((oldItem)=>{
//             return [...oldItem, item]
//         })
//             setItem(" ");
        
    
//         console.log('you click');
//     }

//     const btnonChange = (e) => {
//         console.log(e.target.value);
//         setItem(e.target.value)
//         console.log('this btn change')
//     }
//     return (
//         <div>
//             <Form className="search">
//                 <FormControl
//                     onChange={btnonChange}
//                     type="search"
//                     placeholder="Enter the item to add the Grocery"
//                     className="searchBtn"
//                     aria-label="Search"
//                     value={item}
//                 />
//                 <Button variant="outline-success" onClick={searchBtn}>Search</Button>
//             </Form>
//             <h2>{showitem}</h2>
//         </div>
//     )
// }

// export default Search;
