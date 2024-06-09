import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  text-align: center;
  padding: 20px;
  animation: ${fadeIn} 2s ease-in;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #2c3e50;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #34495e;
`;

const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const DataItem = styled.div`
  background: #ecf0f1;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  margin: 10px;
  padding: 20px;
  width: 200px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setData(response.data.slice(0, 10)))  // Limiting to 10 items
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      <Title>Welcome to Ayatana Coorg</Title>
      <Subtitle>Experience the luxury amidst nature.</Subtitle>
      <DataContainer>
        {data.map(item => (
          <DataItem key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </DataItem>
        ))}
      </DataContainer>
    </Container>
  );
};

export default Home;
