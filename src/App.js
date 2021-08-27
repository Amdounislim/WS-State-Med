// import logo from './logo.svg';
// import './App.css';
// import Profile from './components/Profile';

// function App() {
//   return (
//     <div className="App">
//       <Profile description="hello" />
//       <Profile description={10} />
//       <Profile  />
//     </div>
//   );
// }

// export default App;




import React, { Component } from 'react'
import './App.css';
import Counter from './components/Counter';

export default class App extends Component {

  // constructor(props){
  //   super(props)
  //   this.state={
  //     title:"WS-State"
  //   }
  // }

  state = {
    title: "WS-State",
    nbr: 10,
    obj: {
      name: "Mohamed",
      email: "med@gmail.com"
    },
    arr: [1, 2, 3],
    count: 0
  }

  add=(x)=>{
    this.setState({
      arr:[...this.state.arr, x]
    })
  }


  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    if (this.state.count > 0) {

      this.setState({
        count: this.state.count - 1
      })
    }
    else {
      alert("mahah")
    }
  }




  render() {
    return (
      <div className="App">
        {/* <h1>{this.state.title}</h1>
        <p>{this.state.nbr}</p>
        <p>{this.state.obj.name}</p>
        <p>{this.state.obj.email}</p>
        <div>{this.state.arr.map(el => <h3>{el}</h3>)}</div>
        <div>
          <button onClick={this.increment}>+</button> */}
        {/* <span>{this.state.count}</span> */}
        {/* <Counter x={this.state.count} />
          <button onClick={this.decrement}>-</button>
        </div> */}

        <Counter add={this.add} />
        <div>{this.state.arr.map(el => <h3>{el}</h3>)}</div>
      </div>
    )
  }
}




