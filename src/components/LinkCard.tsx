import { Card, CardBody } from '@heroui/card';
import { Link } from '@heroui/link';

const LinkCard = ({ title, href }) => {
  return (
    <Card 
      shadow="lg" 
      radius="lg" 
      isHoverable 
      isPressable 
      classNames={{
        base: "transition-shadow duration-300 ease-in-out hover:shadow-xl",
        body: "p-4 flex items-center justify-between space-x-4"
      }}
    >
      <CardBody>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h2>
        </div>
        <Link 
          size="md" 
          color="primary" 
          underline="hover" 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          showAnchorIcon 
          className="mt-2 text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
        >
          Visit Link
        </Link>
      </CardBody>
    </Card>
  );
};

export default LinkCard;