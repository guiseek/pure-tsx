type GetType<T> = T extends number ? number : string;
type SetFn<T> = (value: GetType<T>) => void;
type GetFn<T> = () => GetType<T>;

export const useState = <T extends string | number>(value?: T) => {
  const prop = new Text(value?.toLocaleString() ?? "");

  const setValue = (value: T) => {
    prop.nodeValue = value.toLocaleString();
  };

  const getValue = () => {
    const value = prop.nodeValue ?? "";
    return !isNaN(+value) ? +value : value;
  };

  return [setValue, prop, getValue] as [SetFn<T>, Text, GetFn<T>];
};
