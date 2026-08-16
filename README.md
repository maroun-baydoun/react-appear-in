# React Appear In

Make React components render sometime in the future.

[![npm version](https://badge.fury.io/js/react-appear-in.svg)](https://badge.fury.io/js/react-appear-in)

## Install

```sh
npm install react-appear-in
```

## Usage

```tsx
import AppearIn from "react-appear-in";

const MyAwesomeComponent = () => (
  <AppearIn
    minutes={1}
    seconds={20}
    milliseconds={10}
    placeholder={(time) => <div>{`Will render in ${time}ms`}</div>}
  >
    Hello after 1 minute, 20 seconds and 10 milliseconds
  </AppearIn>
);
```

## Props

| Name           | Type                        | Required |
| -------------- | --------------------------- | -------- |
| `minutes`      | number                      | no       |
| `seconds`      | number                      | no       |
| `milliseconds` | number                      | no       |
| `onAppear`     | (time: number) => void      | no       |
| `placeholder`  | (time: number) => ReactNode | no       |

When nothing is provided, children render immediately.

## Demo

Try it in the [live demo](https://dev.maroun-baydoun.com/react-appear-in/).

## Development

This repository is a pnpm workspace with three packages:

- `packages/react-appear-in` — the publishable library.
- `apps/demo` — the Vite and Tailwind demo app.
- `packages/test` — the Vitest test package.

Install dependencies and run the checks with:

```sh
pnpm install
pnpm test
pnpm build
pnpm demo
```
