import React, { Component } from 'react'
import BoxList from './BoxList'
import { v4 as uuidv4 } from 'uuid';
export default class BoxForm extends Component {
    constructor(props){
        super(props);
        this.state = {height : '', width : '', color :''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name] : event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const newBxy = {...this.state, id : uuidv4()}
        this.props.createBox(newBxy);
        this.setState({
            height : '', width : '', color : ''
        });
    }
   
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="h">Height in pixels : </label>    
            <input onChange={this.handleChange} name="height" value={this.state.height} placeholder="Type the height" type="text"  id="h"></input>
            <label htmlFor="w">Width in pixels : </label>    
            <input onChange={this.handleChange} name="width" value={this.state.width} placeholder="Type the width " type="text"  id="w"></input>
            <label htmlFor="c">Color : </label>    
            <input onChange={this.handleChange} name="color" value={this.state.color} placeholder="Enter a valid color" type="text"  id="c"></input>
            <button >Create Box!</button>
                
            </form>        
            </div>
        )
    }
}
