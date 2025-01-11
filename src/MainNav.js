/**
* @file React Navigation for website
* @author Carson Fujita
* @copyright Carson Fujita 2025
*/

import { Container, Nav, Navbar, Button, Form, NavDropdown, Offcanvas } from "react-bootstrap";
import SideBar from "./SideBar";

/**
 * 
 * @param {boolean} isSubject If true the left side canvas will be able to be seen
 * @returns React MainNav
 */
function MainNav(isSubject = "false") {
    let expand = false; //false, sm, md, lg, xl , xxl{
    let offcanvasLeft = <></>
    if(isSubject == "true"){
        offcanvasLeft = <SideBar />
    }
    return (
        <>
            <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                <Container fluid>
                    {offcanvasLeft}
                    <Navbar.Brand href="#">Study Notes</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Subjects
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link id="btn-home" className="material-symbols-outlined" href="#action1">home</Nav.Link>
                                <Nav.Link href="#action2">JavaScript</Nav.Link>
                                <Nav.Link href="#action2">Algorithms</Nav.Link>
                                <Nav.Link href="#action2">Operating Systems</Nav.Link>
                                <Nav.Link href="#action2">Web Programmings</Nav.Link>
                                <Nav.Link href="#action2">Read and Write</Nav.Link>
                                <Nav.Link href="#action2">Database</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

// function MainNav() {
//     return (
//         <Navbar expand="lg" className="bg-body-tertiary">
//             <Nav id="nav">
//                 <Container id="mobile-nav" className="nav mobile">
//                     <a id="btn-home" class="material-symbols-outlined" href="./index.html">home</a>
//                     <a id="btn-menu" class="material-symbols-outlined">menu</a>
//                 </Container>
//                 <Container id="computer-nav" className="nav computer">
//                     <Nav.Link href="index.html">Home</Nav.Link>
//                     <Nav.Link href="../JavaScript/index.html">JavaScript</Nav.Link>
//                     <Nav.Link href="../Algorithms/index.html">Algorithms</Nav.Link>
//                     <Nav.Link href="../Operating-Systems/index.html">Operating Systems</Nav.Link>
//                     <Nav.Link href="">Web Programmings</Nav.Link>
//                     <Nav.Link href="">Read and Write</Nav.Link>
//                     <Nav.Link href="../Database/index.html">Database</Nav.Link>
//                 </Container>
//             </Nav>
//         </Navbar>
//     )
// }
export default MainNav;