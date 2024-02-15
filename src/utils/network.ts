export const networkPrefixToId = (prefix: string) => {
  switch (prefix) {
    case "eth":
      return 1;
    case "sep":
      return 11155111;
    default:
      throw new Error(`network prefix ${prefix} not supported`);
  }
};

export const networkIdToPrefix = (id: number) => {
  switch (id) {
    case 1:
      return "eth";
    case 11155111:
      return "sep";
    default:
      throw new Error(`network ID ${id} not supported`);
  }
};
