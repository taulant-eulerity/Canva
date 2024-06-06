import { mergeSort } from "../pages/creative/controller/style.controller";

export const getLastValue = (rgba) => {
    if (rgba) {
      return rgba.split("(").join(",").split(")").join(",").split(",").slice(1, -1);
    }
  };


  export function getFilter(filter) {
    return {
      filter,
      id: "a",
      sort: mergeSort([8,4,1,2,3,565,7,8,9,0,3,24,5,56])
    }
  }
