import axios from "axios";
import { SWITCH_ROUTE } from "./types";

export const switchRoute = route => ({
  type: SWITCH_ROUTE,
  payload: route
});
