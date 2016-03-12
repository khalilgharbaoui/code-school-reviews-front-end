import React from 'react';
import EasyTransition from 'react-easy-transition'
import Footer from './Footer';
import Navbar from './Navbar';
require('../stylesheets/Components.scss');

class App extends React.Component {

    constructor() {
        super();

    }
    render() {
        return (
            <div>
                <Navbar />
            <div className='container'>
                <EasyTransition
                    path={location.pathname}
                    initialStyle={{opacity: 0, transform: 'translate(99%, 1%)'}}
                    transition='opacity 1300ms ease-in-out, transform 1000ms ease-in-out'
                    finalStyle={{opacity: 1, transform: 'translate(0%, 0%)'}}>
                    {this.props.children}
                </EasyTransition>

            </div>
            <Footer />
            </div>


        );
    }
}

export default App;
