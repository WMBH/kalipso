import React, { Component } from 'react';

class ProfileStatus extends Component {
	state = {
		editMode: false,
		status: this.props.status
	};

	editModeOn = () => {
		this.setState({ editMode: true });
	};

	editModeOff = () => {
		this.setState({ editMode: false });
		this.props.updateUserStatus(this.state.status);
	};

	onStatusChange = (e) => {
		this.setState({ status: e.currentTarget.value });
	};

	render() {
		return (
			<div>
				{!this.state.editMode && (
					<div>
						<span onDoubleClick={this.editModeOn}>{this.props.status || 'Your status is empty'}</span>
					</div>
				)}
				{this.state.editMode && (
					<div>
						<input
							autoFocus={true}
							onBlur={this.editModeOff}
							value={this.state.status}
							onChange={this.onStatusChange}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default ProfileStatus;
