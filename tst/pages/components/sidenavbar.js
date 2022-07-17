import Nav from 'react-bootstrap/Nav';

function SideNavBar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column bg-light col-3" >
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}

export default SideNavBar;