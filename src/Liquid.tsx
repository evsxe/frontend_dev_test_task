
import React, { createRef, useMemo } from 'react';
import { styled } from '@superset-ui/core';
import { Liquid as AntvLiquid } from '@ant-design/plots';

import { LiquidProps, LiquidStylesProps } from './types';
const Styles = styled.div<LiquidStylesProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

export default function Liquid(props: LiquidProps) {
  const { shape, color, percentage, height, width } = props;

  const rootElem = createRef<HTMLDivElement>();

  const config = useMemo(() => ({
      percent: percentage,
      outline: {
        border: 2,
        distance: 4,
      },
      shape,
      color,
      wave: {
        length: 128,
      },
      width,
      height,
      autoFit: false,
    }),
    [height, width, percentage, shape, color],
  );

  return (
    <Styles
      ref={rootElem}
      height={height}
      width={width}
    >
      <AntvLiquid {...config} />
    </Styles>
  );
}
