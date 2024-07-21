import React from 'react';
import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledAppBar = styled(AppBar)`
  background: #111111;
`;

const StyledTypography = styled(Typography)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledTypography component={NavLink} to='/'>Praveshini</StyledTypography>
        <StyledTypography component={NavLink} to='/all'>All Users</StyledTypography>
        <StyledTypography component={NavLink} to='/add'>Add User</StyledTypography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
