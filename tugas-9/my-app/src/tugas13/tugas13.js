import React, {useState,useEffect} from "react"
import axios from 'axios';




const DaftarBuah =() =>{
    const [dataBuah, setDataBuah] = useState(null)
    const [input, setInput] = useState({name: "",price:"",weight:"" ,id: null})
  

    useEffect(() => {
        if (dataBuah === null){
          axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
          .then(res => {
            setDataBuah(res.data)
            console.log(res.data)
          })
        }
      }, [dataBuah]);

      const handleSubmit =(event) =>{
        // menahan submit
        event.preventDefault()
        if ( input.id === null){
            axios.post(`http://backendexample.sanbercloud.com/api/fruits/{ID_FRUIT}`, { name: input.name,price:input.price,weight:input.weight})
            .then(res => {
              var data = res.data
              setDataBuah([...dataBuah, {id: data.id, name: data.name,price: data.price,weight:data.weight}])
              setInput({id: null, name: "",price:"",weight:""})
            })
      
          }else{
      
            axios.put(`http://backendexample.sanbercloud.com/api/contestants/${input.id}`, { name: input.name,price:input.price,weight:input.weight})
            .then(res => {
              var newDataBuah = dataBuah.map(x => {
                if (x.id === input.id){
                  x.name = input.name
                  x.price = input.price
                  x.weight = input.weight
                }
                return x
              })
              setDataBuah(newDataBuah)
              setInput({id: null, name: "",price:"",weight:"" })
            })
          }
        }
      
      

        const deleteBuah = (event) =>{
            var idBuah= parseInt(event.target.value) 
            axios.delete(`http://backendexample.sanbercloud.com/api/fruits/{ID_FRUIT}/${idBuah}`)
            .then(res => {
              var newDataBuah = dataBuah.filter(x=> x.id !== idBuah)
              setDataBuah(newDataBuah)
            })
          }
 


const changeInputName = (event) =>{
  
  
    var value= event.target.value
    setInput({...input, name: value,price:value,weight:value})


  
}



















  const editForm = (event) =>{
    var idBuah= parseInt(event.target.value)
    var buah = dataBuah.find(x=> x.id === idBuah)

    setInput({id: idBuah, name: buah.name,price:buah.price,weight:buah.weight })

  }
  

  return(
  

    
      <>
        <div style={{width: "70vw", margin: "0 auto"}}>
        <h1 style={{textAlign: "center"}}>Daftar buah</h1>
        <table>
          <thead>
            <tr>

              <th>No</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>



          {

           


   dataBuah !== null && dataBuah.map((item, index)=>{
                    return(                    
                      <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.weight}</td>
                        <td>
                          <button value={item.id} style={{marginRight: "5px"}} onClick={editForm}>Edit</button>
                          <button value={item.id} onClick={deleteBuah}>Delete</button>
  
                      </td>
                    </tr>
                     )
                    })
                  }
    
      </tbody>
        </table>
        <br/>
        <br/>
        <form style={{textAlign: "center"}} onSubmit={handleSubmit}>
            <strong style={{marginRight: "10px"}}>Nama</strong>
            <input required type="text" value={input.name} onChange={changeInputName}/>
           
            <strong style={{marginRight: "10px"}}>price</strong>
            <input required type="text" value={input.name} onChange={changeInputName}/>
           
           
            <strong style={{marginRight: "10px"}}>weight</strong>
            <input required type="text" value={input.name} onChange={changeInputName}/>
          
            <button>Save</button>
            
        </form>
      </div>
    </>
  ) 
}


export default DaftarBuah
