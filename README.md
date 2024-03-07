# React + Vite + Pnpm + Material Starter Template

:star: [![CI](https://github.com/lazarkulasevic/react-vite-pnpm-material-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/lazarkulasevic/react-vite-pnpm-material-starter/actions/workflows/ci.yml)
[![CD](https://github.com/lazarkulasevic/react-vite-pnpm-material-starter/actions/workflows/cd.yml/badge.svg)](https://github.com/lazarkulasevic/react-vite-pnpm-material-starter/actions/workflows/cd.yml)

## In short

Everything is in Typescript. [Material UI 5](https://mui.com/material-ui/getting-started/overview/) is configured and ready to use. Vite bundle chunking is in place and the build is optimized.

## Development

### Dev Environment

Install dependencies

```text
pnpm i
```

Run dev mode

```text
pnpm dev
```

Build for prod

```text
pnpm build
```

Further docs will follow.

### Shortcuts

Create new component:

```text
pnpm new:component
```

or a new page:

```text
pnpm new:page
```

> **Note for contributors**:
> If you wish to contribute with a new script, please follow the convention and keep it as simple as possible.

### Git Message

It is recommended to write commit messages using the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0-beta.2/).

### Commit message format

```text
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

An example of such message:

```text
fix(Get drive files): Caught Promise exception

We did not catch the promise exception thrown by the API call and therefore we could not show the error message to the user
```

The commit type `<type>` can take one of these value:
`fix:` a commit of this type patches a bug in your codebase and correlates with the patch version in semantic versioning
`feat:` a commit of this type introduces a new feature to the codebase and correlates with a minor version in semantic versioning.

`BREAKING CHANGE:` a commit that has the text BREAKING CHANGE: at the beginning of its optional body or footer section introduces a breaking API change and correlates with a major version in semantic versioning. A breaking change can be part of commits of any type (e.g., a `fix:`, `feat:` & `chore:` types would all be valid, in addition to any other type).

Other types like `chore:`, `docs:`, `style:`, `refactor:`, `test:` are recommended by the [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines). These types have no implicit effect on semantic versioning and are not part of the conventional commit specification.

It is also recommended to read [How to Write Good Commit Messages: A Practical Git Guide](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/).
