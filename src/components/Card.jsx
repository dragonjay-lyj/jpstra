import { Card, CardHeader, CardBody } from "@heroui/card";

const ModernCard = ({ title, icon, children }) => {
  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-to-br 
                 dark:from-gray-900 dark:to-gray-800
                 border border-gray-200 dark:border-gray-700
                 transition-all duration-300 ease-out
                 hover:shadow-xl hover:shadow-primary-500/20
                 hover:border-primary-500/50 dark:hover:border-primary-500/30"
      shadow="sm"
      radius="lg"
      isHoverable
    >
      {/* 背景动效装饰 */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-500 ease-out
                      blur-xl -z-10" />
      
      <CardHeader className="flex items-center gap-3 px-6 pt-6">
        {icon && (
          <div className="p-2 rounded-xl bg-primary-500/10 dark:bg-primary-500/20
                         transform transition-transform duration-300 ease-out
                         group-hover:scale-110 group-hover:rotate-3">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold text-foreground/90
                     transition-colors duration-300
                     group-hover:text-primary-500">
          {title}
        </h3>
      </CardHeader>

      <CardBody className="px-6 py-4">
        <div className="text-foreground/80 prose dark:prose-invert
                      transition-colors duration-300">
          {children}
        </div>
      </CardBody>
    </Card>
  );
};

export default ModernCard;