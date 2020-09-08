import React from 'react';
import logo from './logo.svg';
import './App.css';

import Form from '../src/tugas-9/tugas9';
import List from './tugas-10/cb';

import Clock from './tugas11/tugas-11';
import Time from './tugas11/time';
import DaftarBuah from './tugas12/tugas12';



function App() {
  return (
    <div>
   <header>
     

   <div>
   
      <Form />
    </div>
<div>
 
      <List />
    </div>

<div>
 <Clock/>
 <Time/>
</div>

<div>

  <DaftarBuah/>
</div>



      </header>
    </div>
  );
}

export default App;
