import { Coffee, FLAVORS, FlavorName } from './FlavorMeter';

export type FlavorMetric = (c1: Coffee, c2: Coffee) => number;

export const euclidean: FlavorMetric = (c1, c2) => {
  const flavors = Object.keys(c1.flavorLevels) as FlavorName[];

  const squaredDifferences = flavors.map((flavor) =>
    Math.pow(c1.flavorLevels[flavor] - c2.flavorLevels[flavor], 2)
  );

  const sumOfSquaredDifferences = squaredDifferences.reduce(
    (previous, current) => previous + current
  );

  return Math.sqrt(sumOfSquaredDifferences);
};

export const pointwise: FlavorMetric = (c1, c2) =>
  FLAVORS.map((flavor) =>
    Math.abs(c1.flavorLevels[flavor] - c2.flavorLevels[flavor])
  ).reduce((a, b) => a + b);

export const FLAVOR_METRIC_RECORD = {
  Euclidean: euclidean,
  Pointwise: pointwise,
} as const;
