import React, { useEffect, useState } from 'react';
import './App.css';
import { EmailList } from './components/emaillist/emaillist.component';
import { SearchBar } from './components/searchbar/searchbar.component';
import { EmailContents } from './components/emailcontents/emailcontents.components';


function App() {
  const [emails, setEmails] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [clickedEmail, setClickedEmail] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await fetch("https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json");
      const emails = await response.json();
      setEmails(emails);
    };
    fetchEmails();
  }, []);

  useEffect(() => {
    let filtered = [];
    if(searchInput === ""){
      filtered = emails;
    } else {
      filtered = emails.filter(email =>
        email.subject.toLowerCase().includes(searchInput.toLowerCase())
        );
    }
    setFilteredEmails(filtered);
  }, [emails, searchInput]);

  const handleInput = e => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
  }

  const handleClick = (e) => {
    console.log(e);
    setClickedEmail(e);
  }

  return (
    <div className="App">
      <div className='column left'>
        <h2>Inbox</h2>
        <div className='inbox'></div>
        <h2>Trash</h2>
        <div className='inbox'></div>
      </div>

      <div className='column middle'>
        <SearchBar className='searchbar'
          placeholder="Search Emails"
          handleInput={handleInput}
        />
        <div className='emails'>
          <EmailList className="emaillist" emails={filteredEmails} handleClick={handleClick}/>
        </div>
      </div>

      <div className='column right'>
        <h2>Email Contents</h2>
        <EmailContents className="emailcontents" email ={clickedEmail}/>
      </div>

    </div>
  );
}

export default App;
