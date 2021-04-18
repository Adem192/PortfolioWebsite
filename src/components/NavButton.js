import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';

const NavButton = ({ to, text, iconClassName, ...rest }) => {
  const inner = (
    <NavItem {...rest}>
      {iconClassName && <i className={iconClassName} style={{marginRight: '7px'}}></i>}
      {text}
    </NavItem>
  );

  if (to) {
    return (
      <LinkContainer to={to}>
        {inner}
      </LinkContainer>
    );
  }

  return inner;
};

export default NavButton;
