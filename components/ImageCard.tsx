"use client";

import Image from 'next/image';

export const ImageCard = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg">
      <Image
        src="/images/Firefly (1).png"
        alt="Firefly image"
        width={500}
        height={300}
        className="w-full h-auto"
      />
    </div>
  );
};
