export const getLastValue = (rgba) => {
    if (rgba) {
      return rgba.split("(").join(",").split(")").join(",").split(",").slice(1, -1);
    }
  };
