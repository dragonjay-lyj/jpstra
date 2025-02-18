// LinkCard.tsx
import React from 'react';
import { Card, CardBody, CardFooter } from '@heroui/card';
import { Link } from '@heroui/link';

interface LinkCardProps {
  title: string;
  href: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, href }) => {
  return (
    <Card
      shadow="md"
      radius="lg"
      isHoverable
      isPressable
      classNames={{
        base: 'transition-transform duration-300 hover:scale-105',
      }}
    >
      <CardBody className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </CardBody>
      <CardFooter className="p-4 bg-gray-100">
        <Link
          href={href}
          color="primary"
          underline="hover"
          isExternal
          className="text-blue-600 hover:text-blue-800"
        >
          Visit
        </Link>
      </CardFooter>
    </Card>
  );
};

export default LinkCard;