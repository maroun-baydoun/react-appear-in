# react-appear-in

Make React components render sometime in the future.

```sh
npm install react-appear-in
```

```tsx
import AppearIn from "react-appear-in";

<AppearIn
  seconds={5}
  placeholder={(time) => <div>{`Will render in ${time}ms`}</div>}
>
  Hello after five seconds
</AppearIn>;
```

See the [full documentation](https://github.com/maroun-baydoun/react-appear-in#readme).
