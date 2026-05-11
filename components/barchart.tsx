"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";
import type { BarShapeProps } from "recharts/types/cartesian/Bar";

  
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

interface ChartBarActiveProps {
  chartData: { browser: string; visitors: number; fill: string }[];
  chartConfig: ChartConfig;
}
export const description = "A bar chart with an active bar";


 

export function ChartBarActive(props: ChartBarActiveProps) {
  return (
    <ChartContainer config={props.chartConfig}>
      <BarChart accessibilityLayer data={props.chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="browser"
          tickLine={false}
          tickMargin={0}
          axisLine={false}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar
          dataKey="visitors"
          strokeWidth={2}
          radius={8}
          shape={({ index, ...props }: BarShapeProps) => (
            <Rectangle {...props} />
          )}
        />
      </BarChart>
    </ChartContainer>
  );
}
