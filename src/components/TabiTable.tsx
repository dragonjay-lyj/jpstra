import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@heroui/table";
import { Image } from "@heroui/image";

const ModernTable = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <Table
        aria-label="Example table with custom cells"
        className="transition-all duration-300 ease-in-out"
      >
        <TableHeader>
          <TableColumn>Image</TableColumn>
          <TableColumn>Description</TableColumn>
        </TableHeader>
        
        <TableBody>
          <TableRow key="1" className="group hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
            <TableCell>
              <div className="relative w-[280px] overflow-hidden rounded-lg transform hover:scale-105 transition duration-300">
                <Image
                  src="https://ik.imagekit.io/dgfwhfvkn/tabi/w_tabi_1_waifu2x_noise3_scale4x_HQIl3diK4.avif?updatedAt=1739365098318"
                  alt="Kimono"
                  className="w-full h-auto object-cover shadow-lg"
                  loading="lazy"
                  width={280}
                  height={216}
                />
              </div>
            </TableCell>
            
            <TableCell>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 
                   transform transition-all duration-300 ease-in-out
                   hover:text-gray-900 dark:hover:text-gray-100">
                  原本的穿法是，先穿上褌或衬裤等覆盖下半身的内衣，然后再穿足袋。如果穿着贴身襦袢或下摆衬裙，也要在穿足袋之后进行。因为如果后穿足袋，可能会导致衣物松散。至少要在穿长襦袢之前先穿好足袋。
                  <br /><br />
                  穿足袋时，要像左图所示，将穿足袋的那只脚立起，身体半蹲。盘腿坐着穿足袋并不是正确的姿势。
                </p>
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="2" className="group hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
            <TableCell>
              <div className="relative w-[280px] overflow-hidden rounded-lg transform hover:scale-105 transition duration-300">
                <Image
                  src="https://ik.imagekit.io/dgfwhfvkn/tabi/w_tabi_2_waifu2x_noise3_scale4x_yaeSwNrUa.avif?updatedAt=1739366964877"
                  alt="Kimono"
                  className="w-full h-auto object-cover shadow-lg"
                  loading="lazy"
                  width={280}
                  height={216}
                />
              </div>
            </TableCell>
            
            <TableCell>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 
                   transform transition-all duration-300 ease-in-out
                   hover:text-gray-900 dark:hover:text-gray-100">
                  穿足袋时，要像左图所示，先将足袋向外折回约一半，然后覆盖在脚上，用双手向前拉，确保脚尖完全伸到足袋的深处。接着将折回的部分恢复原状，包裹住脚跟。
                </p>
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="3" className="group hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
            <TableCell>
              <div className="relative w-[280px] overflow-hidden rounded-lg transform hover:scale-105 transition duration-300">
                <Image
                  src="https://ik.imagekit.io/dgfwhfvkn/tabi/w_tabi_3_waifu2x_noise3_scale4x__NKUgYQHD.avif?updatedAt=1739367159858"
                  alt="Kimono"
                  className="w-full h-auto object-cover shadow-lg"
                  loading="lazy"
                  width={280}
                  height={216}
                />
              </div>
            </TableCell>
            
            <TableCell>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 
                   transform transition-all duration-300 ease-in-out
                   hover:text-gray-900 dark:hover:text-gray-100">
                  小钩必须从下往上依次挂在挂线上。挂线通常有两根，但挂小钩时，朝向内侧的那根是备用线。将小钩挂在外侧的挂线上才是正确的位置，这时的大小才是准确的尺寸。选择足袋尺寸时，一定要挂在外侧的挂线上进行选择。如果小钩难以挂上，可以抓住脚踝向外或向内扭转后再挂。顺便一提，脱足袋时可以随意脱下。
                </p>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ModernTable;
