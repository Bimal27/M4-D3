
import React from "react"
import SingleBook from "./Singlebook"
import { Col,Container,Row ,Form} from "react-bootstrap"
import books from '../data/fantasy.json'

class BookList extends React.Component{
    state = {
        searchQuery: ''
    }
    render(){
        return(
    <Container>
        <Row>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Search</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter your query"
            value ={this.state.searchQuery}
            onChange={e => this.setState({searchQuery: e.target.value})}
             />
            </Form.Group>
            </Col>
        </Row>
        <Row>
            {
              this.props.books.filter(book => book.title.toLowerCase().includes(this.state.searchQuery)).map(book =>
                   <Col xs={3}>
                   <SingleBook book= {book}/>
                   </Col>
               )

            }
              
            
        </Row>
    </Container>
        )
}
}
export default BookList