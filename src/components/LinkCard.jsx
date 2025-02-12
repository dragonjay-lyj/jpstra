import { Card, CardHeader, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";

const LinkCard = ({ title, description, href }) => {
  return (
    <Link 
      href={href}
      className="block w-full transition-transform duration-300 hover:scale-[1.02]"
      color="foreground"
    >
      <Card 
        shadow="md" 
        radius="lg"
        isHoverable
        className="w-full bg-gradient-to-br dark:from-gray-900 dark:to-gray-800
                   border border-gray-200 dark:border-gray-700
                   transition-all duration-300 ease-in-out
                   hover:border-primary-500/50 dark:hover:border-primary-500/30
                   hover:shadow-lg hover:shadow-primary-500/10"
      >
        <CardHeader className="flex gap-3 px-6 pt-6">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-foreground/90 group-hover:text-primary-500
                         transition-colors duration-300">
              {title}
            </h3>
          </div>
        </CardHeader>
        
        <CardBody className="px-6 py-4">
          <p className="text-sm text-foreground/80 line-clamp-2
                      transition-colors duration-300">
            {description}
          </p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default LinkCard;