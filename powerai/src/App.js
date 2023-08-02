import Chat  from './components/Chat';
import './App.css';
import { PdfSummarizer } from './components/PdfSummarizer';
import { Audio } from './components/Audio';
import {NoteState} from './context/NoteState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import { Logout } from './components/Logout';
import Noteitem from './components/NoteItem';
import { api } from './components/api';
import Footer from './components/Footer';

import { PreviousChat } from './components/PreviousChat';
import Signup from './components/Signup';
import Grid from './components/grid'
import styled from 'styled-components';
function App() {
  const NavbarContainer = styled.div`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
const WebsiteName = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  cursor: default;
`;

  return (
    <>
    <div style={{ minHeight: '94vh'}}>
      <NavbarContainer >
      <WebsiteName href="/">POWERAI</WebsiteName>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/chat">Chat</NavItem>
      <NavItem href="/login">Login</NavItem>
      
    </NavbarContainer>
    <br/>
    <br/><br/>
      <Routes>
      <Route path="/" element={<Grid/>} />
        <Route exact path="/chat" element={<Chat/>} />
        <Route path="/audio" element={<Audio/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/noteitem" element={<Noteitem/>} />
        <Route path="/pdfsummarizer" element={<PdfSummarizer/>} />
        <Route path="/previouschat" element={<PreviousChat/>} />z
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </div>
      <Footer/>
      
    </>
  );
}

export default App;
