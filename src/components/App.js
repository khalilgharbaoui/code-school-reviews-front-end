import React from 'react';
import CodeschoolList from './CodeschoolList';
import '../stylesheets/_bootstrap.scss';


class App extends React.Component {

    render() {
        return (
            <div className="container">
                <h1>Hello World!</h1>
                <CodeschoolList />
            </div>
        );
    }
}

export default App;
