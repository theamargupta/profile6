import { createSelector } from 'reselect';

const selectDrop = state => state.drop;

export const selectDropHidden = createSelector(
  [selectDrop],
  drop => drop.hidden
);