import React from 'react';

var dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry",harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga",harga: 30000, berat: 500}
  ]

class List extends React.Component {
    render() {
      return (
      
     
        <table border="1px" className="listtabel">
            
            <thead>
        
            <tr >
        <th>name</th>
        <th>harga</th>
        <th>berat</th>
       </tr>


            </thead>
            <tbody>
          {dataHargaBuah .map(el=> {
            return (
              
                  <tr>
          <td>{el.nama}</td>
          <td>{el.harga}</td>
          <td>{el.berat / 1000}kg</td>
            </tr>
             
            )
          })}
          </tbody>
       </table>
      )
    }
  }

  export default List