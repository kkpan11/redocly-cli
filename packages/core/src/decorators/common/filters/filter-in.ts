import { checkIfMatchByStrategy, filter } from './filter-helper.js';

import type { Oas2Decorator, Oas3Decorator } from '../../../visitors.js';

const DEFAULT_STRATEGY = 'any';

export const FilterIn: Oas3Decorator | Oas2Decorator = ({ property, value, matchStrategy }) => {
  const strategy = matchStrategy || DEFAULT_STRATEGY;
  const filterInCriteria = (item: any) =>
    item?.[property] && !checkIfMatchByStrategy(item?.[property], value, strategy);

  return {
    any: {
      enter: (node, ctx) => {
        filter(node, ctx, filterInCriteria);
      },
    },
  };
};
