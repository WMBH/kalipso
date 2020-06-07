import React, { Component } from 'react';

class ProfileStatus extends Component {
	state = {
		editMode: false
	};

	editModeOn = () => {
		this.setState({ editMode: true });
	};

	editModeOff = () => {
		this.setState({ editMode: false });
	};

	render() {
		return (
			<div>
				{!this.state.editMode && (
					<div>
						<span onDoubleClick={this.editModeOn}>{this.props.status}</span>
					</div>
				)}
				{this.state.editMode && (
					<div>
						<input autoFocus={true} onBlur={this.editModeOff} value={this.props.status} />
					</div>
				)}
			</div>
		);
	}
}

export default ProfileStatus;
