import React, { useState } from 'react'
function Crud(){
    const list=[
        {
            id:1,
            name:"john",
            age:24

    },
    {
        id:2,
        name:"max",
        age:23
    }
]
const [lists ,setList]=useState(list);
const [edit,setEdit]=useState();
 
    return(
        <div className='Table'>

            <AddList setList={setList}/>
            <form onSubmit={handleUpdate}>
            <table>
                <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EDIT & DELETE</th>
                </tr>

                
                {
                 lists.map((e)=>(
                    edit=== e.id? <Edit current={e} lists={lists} setList={setList}/>:
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>
                            <button className='btn-edit' onClick={()=>btnEdit(e.id)}>Edit</button>
                            <button className='btn-delete' onClick={()=>btnDelete(e.id)}>Delete</button>
                        </td>
                    </tr>
                 ))
                }
            </table>
            </form>

        </div>

    )
    function handleUpdate(e){
            e.preventDefault();
            setEdit();

    }
    function btnEdit(id){
        setEdit(id);
    }


    function btnDelete(id){
      const newList= lists.filter((li)=>li.id!=id)
      setList(newList)

    }
}
function Edit({current,lists,setList}){
    function handleInput(e){
        const newList=lists.map(li=>(
            li.id === current.id ? {...li,[e.target.name] : e.target.value}:li
        ))
        setList(newList)
    }
    return(
        <tr>
            <td>{current.id}</td>
            <td><input type='text' name='name' onChange={handleInput} value={current.name}/></td>
            <td><input type='text' name='age'  onChange={handleInput} value={current.age}/></td>
            <td><button type='submit'>Update</button></td>

        </tr>
    )
}

function AddList({setList}){

    function random(){
        return(
            parseInt(Math.random()*100)
        )
    }

    function handleSubmit(event){
        event.preventDefault();
        const name=event.target.elements.name.value;
        const age=event.target.elements.age.value;

        const newList={
            id:random(),
            name,
            age
        }
        setList((prevlist)=>{
            return prevlist.concat(newList)
        })


    }
    return(
        <div>
            <form  className='addform' onSubmit={handleSubmit}>
                <input type='text' name='name' className='form-name' placeholder='Enter Your Name'/><br />
                <input type='text' name='age' className='form-age' placeholder='Enter Your age'/>
                <button type='submit' className='form-btn'>Add</button>
            </form>

        </div>
    )
}


export default Crud

