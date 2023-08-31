type Value = string | number | Date;
type GetType<T extends Value> = T extends number ? number : T;
type SetFn<T extends Value> = (value: GetType<T>) => void;
type GetFn<T extends Value> = () => GetType<T>;

export const useState = <T extends Value>(initialValue?: T) => {
  const element = new Text(initialValue?.toLocaleString() ?? "");

  const update = (state: T) => {
    element.nodeValue = state.toLocaleString();
  };

  const value = () => {
    const state = element.nodeValue ?? "";
    return !isNaN(+state) ? +state : (state as GetType<T>);
  };

  return [update, element, value] as [SetFn<T>, Text, GetFn<T>];
};
