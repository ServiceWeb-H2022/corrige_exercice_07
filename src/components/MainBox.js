import React from 'react';
import MiddleBox from './MiddleBox'


class MainBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxTitle: 'MainBox',
        }

    }

    handleChangeTitleFromChild = (newTitle) => this.setState({boxTitle: newTitle});
    handleChangeTitle = (event) => this.setState({boxTitle: event.target.value});

    render() {
        return (
            
            <div className='box'>
                <h1>{this.state.boxTitle}</h1>
                <div className='box_saisie box_saisie_main'>
                    <label htmlFor='titreMainBox'>Titre Box </label>
                    <input
                        type="text"
                        id="titreMainBox"
                        name="titreMainBox"
                        value={this.state.boxTitle}
                        onChange={this.handleChangeTitle}
                    />
                </div>

                <MiddleBox 
                    titreMainBox={this.state.boxTitle}
                    changeMainBoxTitle={this.handleChangeTitleFromChild}
                    />
                
            </div>
        );
    }
}

export default MainBox;