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
                                initialStyle={{opacity: 0, transform: 'translate(50%, 100%) skewX(0deg)skewY(0deg)'}}
                                transition='opacity 280ms linear, transform 420ms ease-in'
                                finalStyle={{opacity: 1, transform: 'translate(0%, 0%) skewX(0deg)skewY(-180deg)'}}>
                        {this.props.children}
                        </EasyTransition>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default App;
