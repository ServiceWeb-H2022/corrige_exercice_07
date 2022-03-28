import React from 'react';
import EditBox from './EditBox'


class MiddleBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxTitle:'MiddleBox',
        }

    }

    handleChangeTitleFromChild = (newTitle) => {
        this.setState({boxTitle: newTitle});
    }

    handleChangeTitle = (event) => {
        this.setState({boxTitle: event.target.value})
    }

    render() {
        return (
            <div className='box'>
                <h2>{this.state.boxTitle}</h2>
                <div className='box_saisie box_saisie_middle'>
                    <label htmlFor='titreMiddleBox'>Titre Box </label>
                    <input
                        type="text"
                        id="titreMiddleBox"
                        name="titreMiddleBox"
                        value={this.state.boxTitle}
                        onChange={this.handleChangeTitle}
                    />
                </div>

                <EditBox 
                    titreMainBox={this.props.titreMainBox} 
                    titreMiddleBox={this.state.boxTitle}
                    changeMainBoxTitle={this.props.changeMainBoxTitle}
                    changeMiddleBoxTitle={this.handleChangeTitleFromChild}
                />
            </div>
        );
    }
}

export default MiddleBox;