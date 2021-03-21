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
  <AppearIn 
    minutes={1} 
    seconds={20} 
    milliseconds={10}
    placeholder={(time) => <div>{`Will appear in ${time}ms`}</div>}
  >
    Hello after 1 minute, 20 seconds and 10 milliseconds
  </AppearIn>
);
```

### Props

| Name            | Type        | Required    |
|-----------------|:------------|:------------|
| `minutes`       | number      | no          |
| `seconds`       | number      | no          |
| `milliseconds`  | number      | no          |
| `placeholder`   | (time: number) => ReactNode | no          |



When nothing is provided, children will appear immediately.

### Demo 

Give it a try [here](https://dev.maroun-baydoun.com/react-appear-in/#demo).