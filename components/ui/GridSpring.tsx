import { useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { distance } from '@popmotion/popcorn';
import { skillSets } from '../../data';

interface SquareProps {
  active: { row: number; col: number };
  setActive: React.Dispatch<React.SetStateAction<{ row: number; col: number }>>;
  colIndex: number;
  rowIndex: number;
  x: any;
  y: any;
  skill: string;
}

const Square: React.FC<SquareProps> = ({ active, setActive, colIndex, rowIndex, x, y, skill }) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex }
  );
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5,
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      className='text-base font-["JetBrains_Mono"] capitalize px-3 py-2 text-[#1C2024] dark:text-[#EDEEF0] bg-[#E8E8EC] dark:bg-[#222225] rounded-[4px]'
      style={{
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
      }}
    >
      {skill}
    </motion.div>
  );
};

interface AppProps {
  type: string;
}

const App: React.FC<AppProps> = ({ type }) => {
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const skillSet = skillSets.find(set => set.type.toLowerCase() === type.toLowerCase());
  const skills = skillSet ? skillSet.skills : [];

  // Calculate grid dimensions
  const rows = Math.ceil(skills.length / 4);
  const grid = Array.from({ length: rows }, (_, rowIndex) => (
    Array.from({ length: Math.min(4, skills.length - rowIndex * 4) }, (_, colIndex) => rowIndex * 4 + colIndex)
  ));

  return (
    <motion.div
      animate={{ '--base-hue': 360 } as any}
      initial={{ '--base-hue': 0 } as any}
      transition={{ duration: 10, loop: Infinity, ease: 'linear' }}
      className='border border-[#9d9d9f] dark:border-[#35363A] bg-[#111113]/70 dark:bg-[#111113]/80 z-[2] rounded-[10px]'
    >
      <motion.div
        style={{
          perspective: 500,
        }}
        className='flex flex-row flex-wrap w-auto justify-center items-center p-4 gap-2'
      >
        {grid.flat().map(index => (
          <Square
            x={x}
            y={y}
            active={active}
            setActive={setActive}
            rowIndex={Math.floor(index / 4)}
            colIndex={index % 4}
            skill={skills[index]}
            key={index}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default App;
