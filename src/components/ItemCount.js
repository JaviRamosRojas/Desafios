import React, { useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';

const ItemCount = () => {

  const [num, setNum] = useState(0);

  const increment = () => {
    if (num < 13) {
      setNum(num + 1);
    } else {
      document.write('No existen más productos disponibles. No hay más stock.') 
  /*Acá quise llamar al modal que escribí al final del archivo, pero no supe como*/
    }
  }

  const decrement = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
    }
  }


  return (
    <div>
      <br />

      <ReactBootStrap.Container className="justify-content-md-center">
        <ReactBootStrap.Card className="text-center">
          <ReactBootStrap.Card.Header>Contador</ReactBootStrap.Card.Header>
          <ReactBootStrap.Card.Body>

            <ReactBootStrap.Card.Title>Zapatillas</ReactBootStrap.Card.Title>

            <ReactBootStrap.Card.Text>{num}</ReactBootStrap.Card.Text>

            <ReactBootStrap.Row>

              <ReactBootStrap.Col xs={6}>
                <ReactBootStrap.Button variant="success" onClick={increment}>
                  Sumar
                </ReactBootStrap.Button></ReactBootStrap.Col>

              <ReactBootStrap.Col xs={6}>
                <ReactBootStrap.Button variant="danger" onClick={decrement}>
                  Restar
                </ReactBootStrap.Button></ReactBootStrap.Col>


            </ReactBootStrap.Row>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>

      </ReactBootStrap.Container>
    </div>
  )
}

class Modal extends React.Component {

  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }

  changeModal(){
    this.setState({showModal: !this.state.showModal})
  }

  render() {
    return (
      <>
        <ReactBootStrap.Modal show={this.state.showModal}>
          <ReactBootStrap.Modal.Header closeButton>
            <ReactBootStrap.Modal.Title>Modal</ReactBootStrap.Modal.Title>
          </ReactBootStrap.Modal.Header>
          <ReactBootStrap.Modal.Body>Modal body content</ReactBootStrap.Modal.Body>
        </ReactBootStrap.Modal>
      </>
    )
  }
}

export default ItemCount;
