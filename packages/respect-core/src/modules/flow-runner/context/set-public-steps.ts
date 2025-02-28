import type { Step } from '../../../types';

export function getPublicSteps(steps: Step[]): Record<string, any> {
  const publicSteps = {} as Record<string, any>;

  for (const step of steps) {
    publicSteps[step.stepId] = {};
  }

  return publicSteps;
}
