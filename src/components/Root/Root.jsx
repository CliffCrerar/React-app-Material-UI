import React, {PureComponent} from 'react';
import {withTheme} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
//import PropTypes from 'prop-types';
//import { Test } from './Root.styles';

import './Root.styles.css'

class Root extends PureComponent {
	constructor ( props ) {
		super( props );

		this.state = {
			hasError: false,
		};
	}

	componentDidMount = () => {
		console.log( 'Home mounted' );
	}

	static getDerivedStateFromError( error ) {
		// getDerivedStateFromError -> Update state so the next render will show the fallback UI.
		return {hasError: true};
	}

	componentDidCatch( error, info ) {
		// You can also log the error to an error reporting service
	}

	// getDerivedStateFromProps(nextProps, prevState) {
	// 	console.log('Home getDerivedStateFromProps', nextProps, prevState);
	// }

	// getSnapshotBeforeUpdate(prevProps, prevState) {
	// 	console.log('Home getSnapshotBeforeUpdate', prevProps, prevState);
	// }

	componentDidUpdate = () => {
		console.log( 'Root did update' );
	}

	componentWillUnmount = () => {
		console.log( 'Root will unmount' );
	}

	render() {
		if ( this.state.hasError ) {
			return <h1>Something went wrong.</h1>;
		}
		return (
			<div className="HomeWrapper">
				<Paper className="heading">
					<h1 >Create React App integreted Material</h1>
					<div>
						<div>
							<img />
						</div>
						<div>
							<img />
						</div>
					</div>
				</Paper>

			</div>
		);
	}
}

Root.propTypes = {
	// bla: PropTypes.string,
};

Root.defaultProps = {
	// bla: 'test',
};

export default withTheme()( Root );
