# NextCss

Run `nx storybook ui` and it should start the dev server. However, if you go back to the previous commit it'll fail.

```shell
git checkout HEAD^
nx storybook ui
```

This was the result of an Nx 15.9.2 workspace with a lib generated with `@nrwl/next:lib` and `@nrwl/react:storybook-configuration --generateStories --no-interactive`, that was migrate to the latest locally published version.
