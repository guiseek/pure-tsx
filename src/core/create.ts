type Fn<T> = (...params: unknown[]) => T;

export const create = <K extends keyof HTMLElementTagNameMap>(
  el: Fn<HTMLElement> | K,
  props: Record<string, PropertyKey> = {},
  ...nodes: (Text | HTMLElement)[]
) => {
  const node =
    typeof el === "string"
      ? Object.assign(document.createElement(el), props)
      : el(props);

  const build = (node: Node) => {
    return typeof node === "string" ? new Text(node) : node;
  };

  node.append(...nodes.map(build));
  return node;
};

(globalThis as any).create = create