# S1M-Turbo-Svelte-Monorepo

This Turborepo monorepository features my mono repo boilerplate based on turbo, svelte kit, TypeScript, ESLint, Prettier, and Playwright for e2e testing. This setup provides a complete development environment with shared packages, type safety, code quality tools, and testing capabilities to help you run and deploy apps as quickly as possible.

This repo shows Vercel deployment configuration with an example website hosted at [turbo-svelte-starter.simonphum.in](https://turbo-svelte-starter.simonphum.in).

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `cms`: a [Sanity](https://sanity.io) CMS app
- `website`: a [Svelte-kit](https://kit.svelte.dev/) website app with e2e testing using [Playwright](https://playwright.dev/)
- `data`: a TypeScript and Sanity data library shared with the `website` web app
- `ui`: a stub Svelte component library (Bits UI) shared with the `website` web app
- `utils`: a utility package for helper functions and common utilities
- `eslint-config`: `eslint` configurations (includes `eslint-plugin-svelte` and `eslint-config-prettier`)
- `typescript-config`: `typescript` configurations

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Add new apps or packages

#### Add new apps

Create a new folder within the apps folder and run:

```sh
pnpm dlx sv create
```

#### Add new packages

Refer to this guide by the Turborepo team:

[Create an internal package](https://turborepo.com/docs/crafting-your-repository/creating-an-internal-package)

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
