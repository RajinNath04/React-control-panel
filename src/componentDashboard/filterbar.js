


import React, { Component } from 'react'

import { Accordion, Card, Button } from 'react-bootstrap'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from './Forms/form'

import './Forms/form.css'

class Filterbar extends Component {
    state = {
        show: true
    }

    handleClick = () => {

        if (document.getElementById("mycard")) {
            const id = document.getElementById("mycard");
            id.classList("rotate");
            console.log(id);
        }
    };

    componentDidMount() {
        var rotated = false;

        document.getElementById("cardheader").onclick = function () {
            var div = document.getElementById("buttonRotate"),
                deg = rotated ? 0 : 180;
            div.style.webkitTransform = "rotate(" + deg + "deg)";
            div.style.mozTransform = "rotate(" + deg + "deg)";
            div.style.msTransform = "rotate(" + deg + "deg)";
            div.style.oTransform = "rotate(" + deg + "deg)";
            div.style.transform = "rotate(" + deg + "deg)";
            rotated = !rotated;

        }
    }

    inputs(Dat, Loc, typ, ana) {
        this.props.cliked(Dat, Loc, typ, ana)
    }
    change(e) {
        window.location.reload();
    }
    render() {
        return (
            <div>
                <Accordion id="accor">
                    <Card>
                        <Accordion.Toggle
                            as={Button}
                            variant="warning"
                            eventKey="0"
                            style={{ float: "right", marginTop: "-5px" }}
                            show="false"


                        >
                            <Card.Header onClick={this.handleClick()} id="cardheader">
                                <div className="downbutton">Search</div>
                                <div className="iconee"><FontAwesomeIcon icon={faAngleDown} id="buttonRotate" /></div>
                            </Card.Header>

                        </Accordion.Toggle>

                        <Accordion.Collapse >
                            <Card.Body><Form INPUTS={(Dat, Loc, typ, ana) => this.inputs(Dat, Loc, typ, ana)} onChange={(e) => this.change(e)} /></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>)
    }
}

export default Filterbar