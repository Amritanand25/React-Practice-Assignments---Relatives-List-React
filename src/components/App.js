import React, {Component, useState} from "react";
import '../styles/App.css';
import RelativesList from './RelativesList'

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <RelativesList />
            </div>
        )
    }
}


export default App;
