import { React, useState } from 'react'
import '../component/groceries.css';
import { Form, FormControl, Button } from 'react-bootstrap';

const Groceries = () => {

    const [inputItem, setInputItem] = useState(" ");
    const [item, setItem] = useState([]);

    const searchBtn = () => {
        console.log('srch btn click');
        setItem((olditem) => {
            return [...olditem, inputItem]
        })
        setInputItem(" ");
    }
console.log('this is the output of btn', item)
    const inputFunc = (e) => {
        setInputItem(e.target.value);
    }
    return (
        <>
            <Form className="search">
                <FormControl
                    onChange={inputFunc}
                    type="search"
                    placeholder="Enter the item to add the Grocery"
                    className="searchBtn"
                    aria-label="Search"
                    value={inputItem}
                />
                <Button variant="outline-success" onClick={searchBtn}>Add Item</Button>
            </Form>
            
            <div className='groceryitem'>
                <header>
                    Groceries
                        <ol>
                        {item.map((itemvalue)=>{
                                return <li>
                                {itemvalue}
                            </li>
                            })}
                        </ol>
                </header>
                <header>
                Basket
                        <ul>
                            
                            
                        </ul>
                </header>
            </div>
            

        </>
    )
}

export default Groceries;
