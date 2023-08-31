import { useState } from "@core";

export const Clock = () => {
  const [update, value] = useState(new Date());

  setInterval(() => {
    update(new Date());
  }, 1000);

  return <h2>{value}</h2>;
};
