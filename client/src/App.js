import React, {useEffect, useState} from 'react';
import logo from "./logo.svg";
import "./App.css";
import Web3 from "web3";
import { TweetAbi } from './abi/TweetAbi';
const App = () => {
  const [ test, setTest ] = useState('');
  
  useEffect(()=> {
    async function getData () {
      const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
      console.log('**: ', web3)
      const accounts = await web3.eth.getAccounts();
      const tweetContract = new web3.eth.Contract(TweetAbi, accounts[0]);

      //console.log('# 1 #: ', await tweetContract.methods.insertTweet('Test Tweet 1').send({from: accounts[0]}))
      //console.log('# 2 #: ', await tweetContract.methods.tweets([1]).call()) 
      let data = 'It is raining today';
      let result = await tweetContract.methods.insertTweet(data);
      console.log('# DATA insert # : ', result);
      
      let getData = await tweetContract.methods.tweets(0).call();
      console.log('@ Get DATA @: ', getData)

      setTest(accounts)
    }
    getData();
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chain Id is   - - {test}
        </a>
      </header>
    </div>
  );
};

export default App;