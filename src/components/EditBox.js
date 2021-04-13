import React from 'react';


class EditBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxTitle:'EditBox',
        }
    }

    handleChangeTitle = (event) => {
        this.setState({boxTitle: event.target.value});
    }

    handleMainBoxTitleChange = (event) => {
        this.props.changeMainBoxTitle(event.target.value);
    }

    handleMiddleBoxTitleChange = (event) => {
        this.props.changeMiddleBoxTitle(event.target.value);
    }

    render() {
        return (
            <div className='box'>
                <h3>{this.state.boxTitle}</h3>
                <p>composant EditBox</p>

                    ­<label htmlFor='titreMainBox'>Titre MainBox </label>
                    <input
                        type="text"
                        id="titreMainBox"
                        name="titreMainBox"
                        value={this.props.titreMainBox}
                        onChange={this.handleMainBoxTitleChange}
                    />
                    <br/>
­                    <label htmlFor='titreMiddleBox'>Titre MiddleBox </label>
                    <input
                        type="text"
                        id="titreMiddleBox"
                        name="titreMiddleBox"
                        value={this.props.titreMiddleBox}
                        onChange={this.handleMiddleBoxTitleChange}
                    />
                    <br/>
­                    <label htmlFor='boxTitle'>Titre EditBox </label>
                    <input
                        type="text"
                        id="boxTitle"
                        name="boxTitle"
                        value={this.state.boxTitle}
                        onChange={this.handleChangeTitle}
                    />
            </div>
        );
    }
}

export default EditBox;