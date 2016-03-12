import React from 'react';
import EasyTransition from 'react-easy-transition'
import '../stylesheets/_bootstrap.scss';

class App extends React.Component {

    constructor() {
        super();

    }
    render() {
        return (<EasyTransition
    path={location.pathname}
    initialStyle={{opacity: 0, transform: 'translate(-2%, -99%)'}}
    transition='opacity 1200ms ease-in-out, transform 1200ms ease-in-out'
    finalStyle={{opacity: 1, transform: 'translate(0, 0)'}}
>
            <div className='container'>
                {this.props.children}
            </div>
            </EasyTransition>
        );
    }
}

export default App;
