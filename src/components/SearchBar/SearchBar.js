import React from 'react'

class SearchBar extends Component {
    state = {  }
    render() { 
        return (  
            <div className='SearchBar-fields'>
            <input placeholder='Search Businesses' />
            <input placeholder='Where?' />
          </div>
          <div className='SearchBar-submit'>
            <a >Let's Go</a>
          </div>

        );
    }
}
 
export default SearchBar;