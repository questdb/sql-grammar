# @questdb/sql-grammar

<a href="https://www.npmjs.com/package/@questdb/sql-grammar">
  <img src="https://img.shields.io/npm/v/@questdb/sql-grammar.svg?style=flat"
        alt="NPM Version">
</a>

This repository contains an NPM package with list of keywords, functions and constants supported by QuestDB.
It is used to build enrich frontend applications to support QuestDB's grammar.

<div align="center">
  <a href="http://questdb.io">
    <img src=".github/structure.png" width="400" />
  </a>
</div>

## Install

With npm:

```sh
npm install @questdb/sql-grammar
```

or with yarn:

```sh
yarn add @questdb/sql-grammar
```

## Usage

Import the package and use the exported values:

```js
import { dataTypes, functions, keywords, constants } from "@questdb/sql-grammar"
```

These values are useful when configuring some text editor to enable QuestDB syntax highlighting and autocomplete.
For example, the [QuestDB Web Console](https://github.com/questdb/ui/blob/ba6ef37e40933245d64d60c508379c8420d84b21/packages/web-console/src/scenes/Editor/Monaco/questdb-sql/language.ts#L5) is using values exported by this project to augment the autocomplete and syntax highlight of the Monaco text editor.

## Other QuestDB Resources

Complete references are available in the
[Documentation](https://questdb.io/docs/introduction/).

### Get started

- [Docker](https://questdb.io/docs/get-started/docker/)
- [Binaries](https://questdb.io/docs/get-started/binaries/)
- [Homebrew](https://questdb.io/docs/get-started/homebrew/)

### Develop

- [Connect](https://questdb.io/docs/develop/connect/)
- [Insert data](https://questdb.io/docs/develop/insert-data/)
- [Query data](https://questdb.io/docs/develop/query-data/)
- [Authenticate](https://questdb.io/docs/develop/authenticate/)

### Concepts

- [SQL extensions](https://questdb.io/docs/concept/sql-extensions/)
- [Storage model](https://questdb.io/docs/concept/storage-model/)
- [Partitions](https://questdb.io/docs/concept/partitions/)
- [Designated timestamp](https://questdb.io/docs/concept/designated-timestamp/)

### Support
- [Slack Channel](https://slack.questdb.io)

### Roadmap

[Our roadmap is here](https://github.com/orgs/questdb/projects/2)

## Contribute

QuestDB is an open source project and contributions are always welcome!

Feel free to contribute to this project by forking the repository and submitting
pull requests. Please make sure you have read our [contributing guide](./CONTRIBUTING.md).

If you would like to contribute to QuestDB code database, see core [contributing guide](https://github.com/questdb/questdb/blob/master/CONTRIBUTING.md)
