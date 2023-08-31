/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: JSX.Element
  }
}

declare const create

declare const app: HTMLDivElement