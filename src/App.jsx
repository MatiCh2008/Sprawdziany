import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react'

function App() {
  const [types, setTypes] = useState([
    "",
    "Powieść",
    "Kryminał",
    "Fantastyka",
    "Biografia"
  ])

  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [type, setType] = useState()
  
  const onClick = (event) => {
    console.log("tytul: ", title, "; autor: ", author, "; gatunek: ", type)
  }

  const onTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const onAuthorChange = (event) => {
    setAuthor(event.target.value)    
  }  

  const onTypeChange = (event) => {
      setType(event.target.value)  
  }    

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="bookTitle">Tytuł książki</label>
          <input type="text" className="form-control" id="bookTitle" onChange={onTitleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="bookAuthor">Autor książki</label>
          <input type="text" className="form-control" id="bookAuthor" onChange={onAuthorChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="bookType">Gatunek</label>
          <select className="form-control" id="bookType" onChange={onTypeChange}>
            {types.map(type => <option key={type}>{type}</option>)}
          </select>
        </div>        
        <button type="button" className="btn btn-primary" onClick={onClick}>Dodaj</button>
      </form>
    </div>
  )
}

export default App
