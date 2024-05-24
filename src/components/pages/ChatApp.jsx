import React, { useState, useEffect, useRef } from 'react';
import {
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Paper,
  Box,
  AppBar,
  Toolbar,
  Container,
  CssBaseline,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [nickname, setNickname] = useState('');
  const stompClientRef = useRef(null);

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/ws');
    const client = Stomp.over(socket);

    client.connect({}, () => {
      console.log('Connected to server');
      stompClientRef.current = client;
      client.subscribe('/topic/messages', (message) => {
        const receivedMessage = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
      });
    }, (error) => {
      console.error('Connection error', error);
    });

    return () => {
      if (stompClientRef.current !== null) {
        stompClientRef.current.disconnect(() => {
          console.log('Disconnected from server');
        });
      }
    };
  }, []);

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = () => {
    if (message.trim() && stompClientRef.current) {
      const chatMessage = {
        nickname,
        content: message,
      };

      stompClientRef.current.send('/app/chat', {}, JSON.stringify(chatMessage));
      setMessage('');
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Chat Application
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Paper style={{ padding: '1rem' }}>
          <Box style={{ height: '60vh', overflowY: 'auto', marginBottom: '1rem' }}>
            <List>
              {messages.map((msg, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>{msg.nickname.charAt(0).toUpperCase()}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography variant="subtitle1">{msg.nickname}</Typography>}
                    secondary={msg.content}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box display="flex" alignItems="center">
            <TextField
              placeholder="Enter your nickname"
              value={nickname}
              onChange={handleNicknameChange}
              variant="outlined"
              margin="dense"
              style={{ marginRight: '1rem' }}
            />
            <TextField
              placeholder="Type a message"
              value={message}
              onChange={handleMessageChange}
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <IconButton
              color="primary"
              onClick={sendMessage}
              disabled={!message.trim() || !stompClientRef.current}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default ChatApp;
