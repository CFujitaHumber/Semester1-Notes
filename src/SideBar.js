/**
* @file Sidebar for subjects in website
* @author Carson Fujita
* @copyright Carson Fujita, 2025
*/
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

/**
 * Creates a left side sidebar for navigation of subject tabs
 * @returns 
 */
function SideBar() {
    //state of visibility of sidebar 
    const [show, setShow] = useState(false);

    //triggers for visibility based on click
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <span id="btn-sidebar" class="material-symbols-outlined">chevron_right</span>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideBar;