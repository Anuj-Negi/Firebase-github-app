import React from 'react'
import {Container} from "reactstrap"



const Footer = () => {
    return (
        <div>
            <Container
            fluid
            tag="footer"
            className="text-center bg-info text-white text-uppercase fixed-bottom p-3"
            >
                Anuj Github search App with firebase
            </Container>
        </div>
    )
}

export default Footer;
