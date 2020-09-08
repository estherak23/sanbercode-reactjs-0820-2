import React, {Component} from 'react'




class Time extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 100,
      showTime: true
    }
  }


  tick() {
    this.setState({
      time: this.state.time - 1 
    });
  }




  componentDidMount(){
    this.timerID = setInterval(
        () => this.tick(),
        1000
      );
  }


componentDidUpdate(){
if (this.state.time === 0){
  
   
this.state.showTime = false



}
}


componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1 
    });
  }

 deleteTheTimer =() =>{
  this.setState({
    showTime:false
    
    } 
    )
 }

  render(){
    return(
        <>

        {this.state.showTime &&(
          
          <h1 style={{textAlign: "center"}}>hitung mundur:
            {this.state.time}
          </h1>


)}

        </>
        
      )
    }
  }
  
export default Time