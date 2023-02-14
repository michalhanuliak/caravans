import * as R from "ramda";

export { default as debounce } from "lodash/debounce";
export { default as useUpdateEffect } from "react-use/lib/useUpdateEffect";
export { default as shortid } from "shortid";

export function areArraysEqual(arr1: unknown[], arr2: unknown[]) {
  return (
    R.length(arr1) === R.length(arr2) &&
    R.isEmpty(R.symmetricDifference(arr1, arr2))
  );
}
