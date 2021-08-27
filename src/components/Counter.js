import React, { Component } from 'react'

export default class Counter extends Component {

    state={
        myInput:""
    }

    handelChange=(e)=>{
        this.setState({
            myInput: e.target.value
        })
    }

    render() {
         
        return (

            <div>
                {/* <h1>{this.props.x}</h1> */}
                <input type="text" onChange={this.handelChange} />
                <button onClick={()=>this.props.add(this.state.myInput)} >ADD</button>
            </div>
        )
    }
}
