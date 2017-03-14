import { GET_ALLOCATION } from "./types";

export const getAllocation = assetAllocation => ({
  type: GET_ALLOCATION,
  payload: assetAllocation
});
