import React from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class findComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            sku: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {

    }

    handleChange(event) {
        this.setState({ sku: event.target.value });
    }

    handleSubmit(event) {
        

        let encoded = window.btoa('TOKEN:123');
        let auth = 'Basic ' + encoded;

        fetch('http://localhost:3000/products',{
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': auth,
                'Credentials':'include'
    
            },
            body: JSON.stringify({
                sku: this.state.sku
            })
            
        })
        .then(response => response.json())
        .then(res   => {
            
            if (res && res.data) {
                this.setState({ products: [...this.state.products, ...res.data] })
            }
        })

        event.preventDefault();
    }

    renderProducts() {

        
        if (this.state.products.length > 0) {

            return this.state.products.map((val, key) => {
                return <div key={key} id="test"><label>{val.sku}</label>  <label>{val.descripcion}</label> </div>

            });
        }
        
    }

    render() {
        return (

            <div className="forms">
                
                <Form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <Form.Label >Ususario con autenticación</Form.Label>
                        <Form.Control onChange={this.handleChange} type="number" className="form-control" id="sku-auth" placeholder="Busqueda por SKU"></Form.Control>
                    </div>

                    <Button type="submit" className="btn btn-primary">Buscar</Button>
                </Form>
                <div className="products" id="products">

                    <label>Detalle de busquedas</label>
                    <div id="showProducts">
                    {this.renderProducts()}
                    </div>
                    
                </div>
                
            </div>
        );
    }
}
export default findComponent;