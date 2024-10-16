import React, { useState, useRef, useEffect } from "react";

export type LoadingBlocksProps = {
  numberOfBlocks: number;
  isStatic?: boolean;
  minWidth: number;
  maxWidth: number;
};

/**
 * Component to show loading indication on a page
 */

const LoadingBlocks: React.FC<LoadingBlocksProps> = (
  props: LoadingBlocksProps
) => {
  const [blocks, setBlocks] = useState<number[]>([]);

  useEffect(() => {
    // Generate random block widths
    const newBlocks = Array.from({ length: props.numberOfBlocks }, () =>
      Math.floor(
        Math.random() * (props.maxWidth - props.minWidth) + props.minWidth
      )
    );

    setBlocks(newBlocks);
  }, [props.numberOfBlocks]);

  return (
    <div className="basicui-loadingblocks">
      {blocks.map((width, index) => (
        <div
          key={index}
          className={`basicui-loadingblocks__block ${
            props.isStatic ? "" : "basicui-loadingblocks__block--loading"
          }`}
          style={{ width: `${width}%` }}
        />
      ))}
    </div>
  );
};

export default LoadingBlocks;
