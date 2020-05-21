import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles({
	root: {
		width: '100%',
		maxHeight: '50px',
		position: 'absolute',
		bottom: 0,
		left: 0
	},
	coloryPrimary: {
		backgroundColor: '#ccc'
	},
	p: {
		marginLeft: '80%'
	}
});

const Footer = () => {
	const classes = useStyles();
	return (
		<div>
			<BottomNavigation className={`${classes.root} && ${classes.coloryPrimary}`}>
					<p className={classes.p}>Copyright © Exceed Team</p>
			</BottomNavigation>
		</div>
	);
};

export default Footer ;