import React, { Component } from 'react';
import { Button } from 'reactstrap';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <Button color="danger">Danger!</Button>
          <p>Salom</p>
    );
  }
}

export default Header;