import {Card} from 'react-bootstrap'
import React from 'react'

class SingleBook extends React.Component {

    state ={
        selected: false
    }
    render(){
        return(
    
    <>
   
        <div className="d-flex justify-content-center mt-3">
            
                <Card  onClick = {()=> this.setState ({selected: !this.state.selected})} style={{ border: this.state.selected ? '4px solid red' : 'none' }}>
                        <Card.Img variant="top" src={this.props.book.img} />
                        <Card.Body>
                            <Card.Title>{this.props.book.title}</Card.Title>
                        </Card.Body>
                    </Card>
        </div>
   </>
        )
}
}
export default SingleBook