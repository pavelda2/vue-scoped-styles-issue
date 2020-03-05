### Bug reproduction

Run **built** application:
```
yarn global add serve
yarn install
yarn build
serve dist
```

Steps to reproduce bug:
1. Click "red" link first (OK, show red box)
1. Then click "base" link (OK, show gray box)
1. Click "red" link again (WRONG, show gray box)