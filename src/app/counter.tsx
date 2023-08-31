import { useState } from "@core";

interface CounterProps {
  initialValue: number;
}

export const Counter = ({ initialValue }: CounterProps) => {
  const [increment, value, current] = useState(initialValue);

  const onClick = () => {
    increment(current() + 1);
  };

  return <button onclick={onClick}> Click me {value} </button>;
};
