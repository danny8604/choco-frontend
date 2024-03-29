const usDollar = (dollars: number) => {
  return dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export default usDollar;
