import React, {Component} from "react"

class DaftarBuah extends Component{
  constructor(props){
    super(props)
    this.state = {
        daftarHargaBuah:  [
      {Name: "Semangka", Harga: 10000, Berat: 1000},
      {Name: "Anggur", Harga: 40000, Berat: 500},
      {Name: "Strawberry",Harga: 30000, Berat: 400},
      {Name: "Jeruk", Harga: 30000, Berat: 1000},
      {Name: "Mangga",Harga: 30000, Berat: 500}],
      inputNama: "",
      inputBerat:"",
      inputHarga:"",
      index: -1
    }
    // bind method if method using normal function
    this.submitForm = this.submitForm.bind(this);
    this.deleteBuah = this.deleteBuah.bind(this);

  }
  // method with normal function
  submitForm(event){
    event.preventDefault()
    var index = this.state.index
    if ( index === -1){
      this.setState({
        daftarHargaBuah : [...this.state.daftarHargaBuah,this.state.Name],
        daftarHargaBuah :[...this.state.daftarHargaBuah,this.state.inputBerat],
        inputNama: "",
        inputBerat:"",
        inputHarga:""
      })
    }else{
      var newdaftarHargaBuah = this.state.daftarHargaBuah
      newdaftarHargaBuah[index] = this.state.inputNama

      this.setState({
        daftarHargaBuah: [...newdaftarHargaBuah],
        inputNama: "",
        inputHarga:"",
        inputBerat:"",
        index: -1
      })
    }
  }

  deleteBuah(event){
    var index= event.target.value
    var newdaftarHargaBuah = this.state.daftarHargaBuah
    newdaftarHargaBuah.splice(index, 1)
    this.setState({
      daftarHargaBuah: [...newdaftarHargaBuah],
      inputNama: "",
        inputHarga:"",
        inputBerat:"",
      index: -1
    })
  }




  // method with arrow function
  changeNamaInput = (event) =>{
    var value = event.target.value
    this.setState({inputNama: value})
  }


  changeHargaInput = (event) =>{
    var value = event.target.value
    this.setState({inputHarga: value})
    
  }

  changeBeratInput = (event) =>{
    var value= event.target.value
    this.setState({inputBerat: value})
    
  }
  

  editForm = (event) =>{
    var index= event.target.value
    var nama = this.state.daftarHargaBuah[index]
    var harga = this.state.daftarHargaBuah[index]
    var berat = this.state.daftarHargaBuah[index]
    this.setState({
      inputNama: nama,
      inputHarga:harga,
      inputBerat:berat,
      index
    })

  }


  render(){
    return(
      <>
        <div style={{width: "70vw", margin: "0 auto"}}>
          <h1 style={{textAlign: "center"}}>Daftar Buah</h1>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                <th>aksi</th>
              </tr>
            </thead>
            <tbody>
                {
                  this.state.daftarHargaBuah.map((val, index)=>{
                    return(                    
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{val.Name}</td>
                        <td>{val.Harga}</td>
                        <td>{val.Berat}</td>
                        <td>
                          <button value={index} style={{marginRight: "5px"}} onClick={this.editForm}>Edit</button>
                          <button value={index} onClick={this.deleteBuah}>Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
          <br/>
          <br/>
          <form style={{textAlign: "center"}} onSubmit={this.submitForm}>
              <strong style={{marginRight: "10px"}}>Nama</strong>
              <input required type="text" value={this.state.inputNama} onChange={this.changeNamaInput}/>



              <strong style={{marginRight: "10px"}}>Harga</strong>
              <input required type="text" value={this.state.inputHarga} onChange={this.changeHargaInput}/>



              <strong style={{marginRight: "10px"}}>Berat</strong>
              <input required type="text" value={this.state.inputBerat} onChange={this.changeBeratInput}/>

              <button>Save</button>
          </form>
        </div>
      </>
    )
  }
}

export default DaftarBuah
