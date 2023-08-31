import { useState } from "@core";
import { Counter } from "./counter";
import { Clock } from "./clock";

export const App = () => {
  const title = "Título";

  const [setValue, prop, value] = useState(0);

  setInterval(() => {
    setValue(value() + 1);
  }, 1000);

  return (
    <main>
      <h1>{title}</h1>

      <Clock />

      <h3>{prop}</h3>

      <Counter initialValue={0} />
    </main>
  );
};
