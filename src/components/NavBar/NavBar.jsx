import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles({
	root: {
		width: '20%',
		minHeight: '100%',
		border: '1px solid #ccc',
	},
	coloryPrimary: {
		backgroundColor: '#ccc'
	},
	p: {
		marginLeft: '80%'
	}
});

const NavBar = () => {
	const classes = useStyles();
	return (
		<div>
			<MenuList className={classes.root}>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</MenuList>
		</div>
	);
};

export default NavBar ;