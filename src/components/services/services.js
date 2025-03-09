import React from 'react';
import { Card } from './card';

export const Services = () => {
  const serviceList = [
    "1",
    "2",
    "3"
  ];

  return (
    <div className="container flex justify-center items-center min-h-screen">
      <Card 
        title="Virtual Assistant"
        imageUrl='https://aristosourcing.com/wp-content/uploads/2021/10/personal-assistant-blog.jpg'
        list={['item 1', 'item 2', 'item 3']}
      /> 
      <Card 
        title="Virtual Assistant"
        imageUrl='https://aristosourcing.com/wp-content/uploads/2021/10/personal-assistant-blog.jpg'
        list={['item 4', 'item 5', 'item 6']}
      />
      <Card 
        title="Virtual Assistant"
        imageUrl='https://aristosourcing.com/wp-content/uploads/2021/10/personal-assistant-blog.jpg'
        list={['item 7', 'item 8', 'item 9']}
      />

    </div>
  );
};