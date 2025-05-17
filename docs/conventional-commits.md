# Commit Message Guidelines
This project uses the Conventional Commits Specification for standardized commit messages. This helps us automate changelog generation, facilitate semantic versioning, and maintain a clear, readable Git history.

All commit messages must adhere to the Conventional Commits specification. For full details on the structure, types, and usage of scopes, bodies, and footers, please refer to [the official specification](https://www.conventionalcommits.org):

We use Husky and Commitlint to automatically validate commit messages before they are committed.

[Husky](https://typicode.github.io/husky/): Manages Git hooks to run scripts at various stages of the Git workflow.

[Commitlint](https://commitlint.js.org/reference/configuration.html): Lints commit messages against the [Conventional Commits standard](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional).

To ensure the validation hooks are set up locally, simply run:

```shell
yarn
```
