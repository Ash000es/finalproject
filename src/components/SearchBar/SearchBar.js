import React from 'react'

class SearchBar extends Component {
    state = {  }
    render() { 
        return (  
            <div className='SearchBar-fields'>
            <input placeholder='Where?' />
            <input placeholder='When?' />
          </div>
          <div className='SearchBar-submit'>
            <a >Let's Go</a>
          </div>

        );
    }
}
 
export default SearchBar;