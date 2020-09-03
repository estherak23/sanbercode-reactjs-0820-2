import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
   <header>
<h1>form pembelian buah</h1>
<form>
<label for="nama"> <b>nama pelanggan:</b></label>
<input type="text" name="nama" id=""></input>
<br></br>
<br></br>
<label for="gender"><b>daftar item:</b></label>
<br></br>
<input type="checkbox" id="buah" name="buah" value=""></input>
<label for="buah">semangka</label>
<br></br>
<input type="checkbox" id="buah" name="buah" value=""></input>
<label for="buah">jeruk</label>
<br></br>

<input type="checkbox" id="buah" name="buah" value=""></input>
<label for="buah">nanas</label>
<br></br>
<input type="checkbox" id="buah" name="buah" value=""></input>
<label for="buah">salak</label>
<br></br>
<input type="checkbox" id="buah" name="buah" value=""></input>
<label for="buah">anggur</label>
<br></br>
<br></br>
<button type="submit" formaction="">kirim</button>

</form>
      </header>
    </div>
  );
}

export default App;
