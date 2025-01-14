# fumadocs-typescript

## 2.0.0

### Major Changes

- f75287d: **Introduce `fumadocs-docgen` package.**

  Offer a better authoring experience for advanced use cases.

  - Move `remark-dynamic-content` and `remark-install` plugins to the new package `fumadocs-docgen`.
  - Support Typescript generator by default

  **Usage**

  Add the `remarkDocGen` plugin to your remark plugins.

  ```ts
  import { remarkDocGen, fileGenerator } from "fumadocs-docgen";

  remark().use(remarkDocGen, { generators: [fileGenerator()] });
  ```

  Generate docs with code blocks.

  ````mdx
  ```json doc-gen:<generator>
  {
    // options
  }
  ```
  ````

  **Migrate**

  For `remarkDynamicContent`, enable `fileGenerator` and use this syntax:

  ````mdx
  ```json doc-gen:file
  {
    "file": "./path/to/my-file.txt"
  }
  ```
  ````

  For `remarkInstall`, it remains the same:

  ```ts
  import { remarkInstall } from "fumadocs-docgen";
  ```

## 1.0.2

### Patch Changes

- 77b5b70: Fix compatibility problems with Typescript 5.4.3

## 1.0.1

### Patch Changes

- f4aa6b6: Ignore fields marked with `@internal` tag

## 1.0.0

### Major Changes

- 321d1e1f: Support markdown in type description

### Minor Changes

- 722c2d6e: Support generating MDX files
