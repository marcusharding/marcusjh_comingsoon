import React from 'react';
import '../styles/spinner.scss';
import '../styles/glitch.sass';

class Spinner extends React.Component {
    render() {
        return(
            <div className="spinnerContainer">
                <img alt="" className="spinner" src={require('../spinner.gif')}/>
                <p className="text-bold glitch" data-speed="0">MARCUSJH</p>
            </div>
        );
    }
}

export default Spinner;