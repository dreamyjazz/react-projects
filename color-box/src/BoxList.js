import React, { Component } from 'react'
import Box from './Box'
import BoxForm from './BoxForm'
export default class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {boxes : [ {height : 100, width : 100, color : 'teal'}], }
        this.create = this.create.bind(this);
    }
    create(newBox){
        this.setState({
            boxes : [...this.state.boxes, newBox]
        })
    }
    delete(id){
        this.setState({
            boxes : this.state.boxes.filter(bx=>(bx.id !== id))
        })
    }
    render() {
        const bxs= this.state.boxes.map(bx=>( 
            <Box 
            key={bx.id} 
            id={bx.id} 
            height={bx.height} 
            width={bx.width} 
            backgroundColor = {bx.color}
            deleteBox={()=>(this.delete(bx.id))} 
            />
        ))
        return (
            <div>
                <h1>Color Boxes in here !</h1>
                <BoxForm createBox={this.create}/>
                {bxs}
            </div>
        )
    }
}
