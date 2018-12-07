## React Appear In
##### Make react components appear sometime in the future

[![npm version](https://badge.fury.io/js/react-appear-in.svg)](https://badge.fury.io/js/react-appear-in)

### Install

``` 
npm install react-appear-in 
```

### Usage

```tsx
import AppearIn from 'react-appear-in';

const MyAwesomeComponent = () => (
  <AppearIn minutes={1} seconds={20} milliseconds={10}>
    Hello in 1 minute, 20 seconds and 10 milliseconds
  </AppearIn>
);
```

### Props

| Name            | Type        | Required    |
|-----------------|:------------|:------------|
| `minutes`       | number      | no          |
| `seconds`       | number      | no          |
| `milliseconds`  | number      | no          |

When nothing is provided, children will appear immediately.