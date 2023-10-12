import { useState } from "react"
import { useEffect } from "react"
import ContactRow from "./ContactRow";
export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
   const [contact, setContact] = useState(null);


   useEffect(() => {
    async function fetchSelectedContact(){
        try{
            const response = await fetch( `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const result  = await response.json();
            setContact(result);
        }catch (err){
            console.error(err);
        }
    }
    fetchSelectedContact();
   }, [selectedContactId])


    return(
        <div>
        <h2>Contact Details</h2>
        {contact ? (
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{contact.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{contact.email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{contact.phone}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }