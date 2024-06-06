export const getLastValue = (rgba) => {
    if (rgba) {
      return rgba.split("(").join(",").split(")").join(",").split(",").slice(1, -1);
    }
  };


  export function getFilter(filter) {
    return {
      filter,
      id: "a"
    }
  }
