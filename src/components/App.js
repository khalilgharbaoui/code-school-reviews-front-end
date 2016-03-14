import React from 'react';
import EasyTransition from 'react-easy-transition'
import Footer from './Footer';
import Navbar from './Navbar';
import '../stylesheets/components.scss';

class App extends React.Component {

    constructor() {
        super();

    }
    render() {
        return (
            <div>
                <Navbar />
                <EasyTransition
                    path={location.pathname}
                    initialStyle={{opacity: 0.3, transform: 'translate(80%,0%) rotateY(0deg) skewY(0deg) scale(0.6)'}}
                    transition='opacity linear 2300ms, transform ease-in-out 1800ms'
                    finalStyle={{opacity: 1, transform: 'translate(0%,0%) rotateY(-1440deg) skewY(0deg) scale(1)'}}>
                    <div className='container'>
                        {this.props.children}
                    </div>
                </EasyTransition>
                <Footer />
            </div>
        );
    }
}

export default App;
