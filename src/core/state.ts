type Value = string | number | Date;
type GetType<T extends Value> = T extends number ? number : T;
type SetFn<T extends Value> = (value: GetType<T>) => void;
type GetFn<T extends Value> = () => GetType<T>;

export const useState = <T extends Value>(value?: T) => {
  const prop = new Text(value?.toLocaleString() ?? "");

  const setValue = (value: T) => {
    prop.nodeValue = value.toLocaleString();
  };

  const getValue = () => {
    const value = prop.nodeValue ?? "";
    return !isNaN(+value) ? +value : (value as GetType<T>);
  };

  return [setValue, prop, getValue] as [SetFn<T>, Text, GetFn<T>];
};
