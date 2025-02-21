import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';

const CustomCard = ({ title, children }) => {
  return (
    <Card 
      shadow="lg" 
      radius="lg" 
      isHoverable 
      isPressable 
      disableAnimation={false}
      classNames={{
        base: "transition-shadow duration-300 ease-in-out hover:shadow-xl bg-white dark:bg-gray-800",
        header: "p-4 bg-blue-500 dark:bg-blue-900 text-white font-bold",
        body: "p-4",
        footer: "p-4 bg-gray-100 dark:bg-gray-700"
      }}
    >
      <CardHeader>
        {title}
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
      <CardFooter>
        {/* Footer content can be added here if needed */}
      </CardFooter>
    </Card>
  );
};

export default CustomCard;