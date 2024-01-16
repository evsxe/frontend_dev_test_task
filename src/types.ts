export interface LiquidStylesProps {
  height: number;
  width: number;
}

export type LiquidProps = LiquidStylesProps &
  {
    shape: string;
    metricName: string;
    percentage: number;
    color: string;
  };
