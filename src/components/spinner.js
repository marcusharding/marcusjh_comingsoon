import React from 'react';
import '../styles/spinner.scss';

class Spinner extends React.Component {
    render() {
        return(
            <div className="spinnerContainer">
                <img alt="" className="spinner" src={require('../spinner.gif')}/>
            </div>
        );
    }
}

export default Spinner;