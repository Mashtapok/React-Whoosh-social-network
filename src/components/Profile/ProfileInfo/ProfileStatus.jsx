import React from 'react';
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    };
    enterDeactivateEditMode = (event) => {
        if (event.key === "Enter") {
            this.setState({
                editMode: false
            });
            this.props.updateUserStatus(this.state.status);
        }
    };
    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={s.statusBlock}>
                <div>
                    {this.state.editMode
                        ? <input onChange={this.onStatusChange} autoFocus={true}
                                 onBlur={this.deactivateEditMode} onKeyPress={this.enterDeactivateEditMode}
                                 type="text"
                                 value={this.state.status}/>
                        : <p onDoubleClick={this.activateEditMode}
                             className={s.status}>{this.props.status ||
                        <span className={s.no_current_status}>изменить статус</span>}</p>
                    }
                </div>
            </div>
        );
    }
}
;

export default ProfileStatus;