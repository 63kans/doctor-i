import React, {Component} from 'react';
import './SearchBox.css';

class SearchBox extends Component {
   render() {
      return <div className="SearchBox">
         <form action="#">
            <input type="text"></input>
            <button type="submit"></button>
         </form>
      </div>
   }
}