
import './App.css';
import { EmployeeData } from './EmployeeData';
import { useState , useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [ data , setData ] = useState([]);
    const [ name , setName ] = useState(' ');
    const [ age , setAge ] = useState(0);
    const [ salary , setSalary ] = useState(0);


    useEffect( () => {
      setData(EmployeeData);
    });
    //console.log(data);


    const handleDelete = (id) => {
        //alert(id);
        if( id > 0 )
        {
          const dt = data.filter( item => item.id !== id);
          //console.log(dt);       
          setData(dt);
          //console.log(data);         
        }
        }

     const handleSave = (e) => {
           e.preventDefault();
           const dt = [...data];
           //console.log(dt);
           const newObject = {
            id: EmployeeData.length + 1,
            name: name,
            age: age,
            salary: salary
           }

           dt.push(newObject);
           setData(dt);                     
     } 
     console.log(data);
  
       
       
    

  return (

    <div className="App">

<div className="row mb-3 mt-3">
  <div className="col-md-3">
    <input type="text" className="form-control" placeholder="Name" aria-label="First name"  onChange={ (e) => setName(e.target.value) }/>
  </div>
  <div className="col-md-3">
    <input type="number" className="form-control" placeholder="Age" aria-label="Your age" onChange={ (e) => setAge(e.target.value) }/>
  </div>
  <div className="col-md-3">
    <input type="number" className="form-control" placeholder="Salary" aria-label="Your Salary" onChange={ (e) => setSalary(e.target.value) }/>
  </div>
  <div className="col-md-3">
  <button type="button" className="btn btn-primary" onClick={ (e) => handleSave(e)}>Save</button>
  <button type="button" className="btn btn-danger" >Clear</button>
  </div>
</div>

<table className="table table-success table-striped">
  <thead>   
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Salary</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody> 
    {
      data.map( (item , index) => {
        //console.log(index);
        return (
        <tr key={index}>
        <th scope="row">{item.id}</th>
        <td>{ item.name }</td>
        <td>{ item.age }</td>
        <td>{ item.salary }</td>
        <td>
        <button type="button" className="btn btn-primary">Edit</button>
        <button type="button" className="btn btn-danger" onClick={ () => handleDelete(item.id)}>Delete</button>
        </td>
        </tr>
        );
})
    }     
  </tbody>
</table>

    </div>
  );
}

export default App;
