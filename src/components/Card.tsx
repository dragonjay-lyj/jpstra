// CardComponent.tsx
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';

interface CardComponentProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, children, footer }) => {
  return (
    <Card
      shadow="md"
      radius="lg"
      isHoverable
      isPressable
      classNames={{
        base: 'transition-transform duration-300 hover:scale-105',
        header: 'bg-gray-50 text-gray-900 px-6 py-4',
        body: 'px-6 py-4',
        footer: 'bg-gray-100 text-gray-600 px-6 py-4',
      }}
    >
      <CardHeader>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardBody>{children}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default CardComponent;