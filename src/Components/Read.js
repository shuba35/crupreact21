import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react'
import View from "./View"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './style.css';
import Popup from './Popup';



export default function Read() {
    
    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
}
const [APIData, setAPIData] = useState([]);
useEffect(() => {
    axios.get(`https://615178d84a5f22001701d216.mockapi.io/fakeData`)
    .then((response) => {
        setAPIData(response.data);
    })
}, [])
const onDelete = (id) => {
    axios.delete(`https://615178d84a5f22001701d216.mockapi.io/fakeData/${id}`)
 .then(() => {
    getData();
})
}
  const getData = () => {
    axios.get(`https://615178d84a5f22001701d216.mockapi.io/fakeData`)
        .then((getData) => {
             setAPIData(getData.data);
         })
        }
        
        const [isOpen, setIsOpen] = useState(false);

        const togglePopup = () => {
          setIsOpen(!isOpen);
        }
const [id] = useState(null);
    const [firstName] = useState('');
    const [lastName] = useState('');
    const [checkbox] = useState(false);

const updateAPIData = () => {
    axios.put(`https://615178d84a5f22001701d216.mockapi.io/fakeData/${id}`, {
        firstName,
        lastName
      
    })
}
    return (
       
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.HeaderCell>Update</Table.HeaderCell>           

                <Table.Body>
  {APIData.map((data) => {
     return (
       <Table.Row>
          <Table.Cell>{data.firstName}</Table.Cell>
           <Table.Cell>{data.lastName}</Table.Cell>
           <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                 <Link to='/update'><Table.Cell>              
                          
                  
                         
                  <span><FontAwesomeIcon icon='edit' size="2x" color="grey" onClick={() => setData(data)}/></span>  
                                                    
                   {isOpen && <Popup content={<><Read></Read> </>} handleClose={togglePopup}/>}
                                               
                </Table.Cell> </Link>
               
                 <Link to="/View"><span><FontAwesomeIcon icon='eye' size="2x" color="grey" onClick={() => setData(data)}/></span></Link>  
                    
                                
                 <Table.Cell>
                        <span><FontAwesomeIcon icon='trash' size="2x" color="grey" onClick={() => onDelete(data.id)}/></span>                   
                  </Table.Cell>  
                  <Table.Cell>
                 <input type="button" value="Popup" onClick={togglePopup} />    
                  {isOpen && <Popup 
                        content={ <View data={id}/>}    
                        handleClose={togglePopup}  
                  />}      
                        </Table.Cell>                
                </Table.Row>
              )})}
              </Table.Body>
            </Table>           
            </div> 
    )
}     
     
        
    
