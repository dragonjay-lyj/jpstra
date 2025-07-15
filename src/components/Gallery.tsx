import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { ChevronDown, X, ArrowLeft, ArrowRight } from 'lucide-react';

// --- 类型定义 ---
export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  images: GalleryImage[];
}

// --- 动画 Variants ---
const lightboxVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

// --- 灯箱组件 (内部) ---
const Lightbox = ({
  category,
  activeIndex,
  direction,
  onClose,
  onNavigate,
}: {
  category: GalleryCategory;
  activeIndex: number;
  direction: number;
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}) => {
  const image = category.images[activeIndex];
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    if (offset.x > 100 || velocity.x > 500) {
      onNavigate('prev');
    } else if (offset.x < -100 || velocity.x < -500) {
      onNavigate('next');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onClick={onClose}
    >
      <AnimatePresence>
        {showControls && (
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-20" onClick={onClose} aria-label="关闭灯箱">
            <X size={32} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showControls && (
          <>
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors disabled:opacity-20 z-20"
              onClick={(e) => { e.stopPropagation(); onNavigate('prev'); }} disabled={activeIndex === 0} aria-label="上一张图片">
              <ArrowLeft size={40} />
            </motion.button>
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors disabled:opacity-20 z-20"
              onClick={(e) => { e.stopPropagation(); onNavigate('next'); }} disabled={activeIndex === category.images.length - 1} aria-label="下一张图片">
              <ArrowRight size={40} />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      <div className="relative w-full h-full flex items-center justify-center overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={activeIndex}
            src={image.src}
            alt={image.alt}
            custom={direction}
            variants={lightboxVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="absolute max-w-[90vw] max-h-[85vh] object-contain cursor-grab active:cursor-grabbing"
          />
        </AnimatePresence>
      </div>
      
      <AnimatePresence>
      {image.title && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-5 text-center text-white bg-black/50 px-4 py-2 rounded-lg pointer-events-none">
            {image.title}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- 分类区块组件 (内部, 使用 React.memo 优化) ---
const CategorySection = memo(({
  category,
  onImageClick,
}: {
  category: GalleryCategory;
  onImageClick: (categoryId: string, imageIndex: number) => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-ui-text-primary dark:text-dark-text-primary">{category.name}</h2>
          <div className="mt-1 h-1 w-16 bg-gradient-to-r from-brand-primary to-transparent"></div>
        </div>
        {category.images.length > 4 && (
          <button onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm font-semibold text-brand-primary bg-brand-primary/10 hover:bg-brand-primary/20 px-4 py-2 rounded-full transition-all duration-300"
            aria-expanded={isExpanded}>
            <span>{isExpanded ? '收起' : '展开'}</span>
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
              <ChevronDown size={20} />
            </motion.div>
          </button>
        )}
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {(isExpanded ? category.images : category.images.slice(0, 4)).map((image, index) => (
          <motion.div key={image.src} className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-lg shadow-black/10"
            onClick={() => onImageClick(category.id, index)} variants={itemVariants} layout="position">
            <img src={image.src} alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              {image.title && <h3 className="text-white font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.title}</h3>}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});

// --- 主画廊组件 (导出) ---
export const Gallery = ({ categories }: { categories: GalleryCategory[] }) => {
  const [[activeIndex, direction], setActiveState] = useState([0, 0]);
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | null>(null);

  if (!categories || categories.length === 0) {
    return <div className="text-center py-12 text-ui-text-secondary dark:text-dark-text-secondary">暂无图片可供展示。</div>;
  }

  const handleImageClick = (categoryId: string, imageIndex: number) => {
    setActiveCategory(categories.find(c => c.id === categoryId) || null);
    setActiveState([imageIndex, 0]);
  };

  const handleCloseLightbox = () => {
    setActiveCategory(null);
  };

  const handleNavigation = (navDirection: 'next' | 'prev') => {
    if (!activeCategory) return;
    const newDirection = navDirection === 'next' ? 1 : -1;
    const newIndex = (activeIndex + newDirection + activeCategory.images.length) % activeCategory.images.length;
    setActiveState([newIndex, newDirection]);
  };

  return (
    <div className="w-full">
      {categories.map(category => (
        <CategorySection key={category.id} category={category} onImageClick={handleImageClick} />
      ))}
      <AnimatePresence>
        {activeCategory && (
          <Lightbox category={activeCategory} activeIndex={activeIndex} direction={direction}
            onClose={handleCloseLightbox} onNavigate={handleNavigation} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;