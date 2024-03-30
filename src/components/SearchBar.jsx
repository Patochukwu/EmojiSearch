import { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

export const SearchBar = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [newClass, setNewClass] = useState('');

  const fetchData = async (value) => {
    try {
      const response = await axios.get('https://emoji-api.com/emojis', {
        params: {
          access_key: 'b4678fd1781cfcd57f01ffafca680c0378c4b7bd',
          search: value,
        },
      });

      console.log(response.data);
      setResults(response.data);

      if (response.data.length === 1) {
        setNewClass('single');
      } else {
        setNewClass('');
      }

      if (handleCopy (results.character == 1))
      alert ('copied!');

    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleCopy = (character) => {
    navigator.clipboard.writeText(character);
    // alert('copied!');
    
  };

  return (

    <div>

      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="Search Emoji"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>

      <ul>
        {results.length > 0 &&
          results.map((result) => (
            <li className={'icon ' + newClass} key={result.slug}>
              <span onClick={() => handleCopy(result.character)} >{result.character}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
