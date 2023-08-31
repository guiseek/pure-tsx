import { useState } from "@core";

export const App = () => {
  const title = "Título";

  const [setValue, prop, value] = useState(0);

  setInterval(() => {
    setValue(value() + 1);
  }, 1000);

  return (
    <main>
      <h1>{title}</h1>

      <h2>{prop}</h2>
    </main>
  );
};
