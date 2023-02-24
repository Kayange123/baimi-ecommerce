export const getLocalStorage = (name) => {
  if (typeof window !== "undefined") {
    const storage = localStorage.getItem(name);
    if (storage) return JSON.parse(storage);
    if (name === "cartItems") return [];
    return 0;
  }
};
