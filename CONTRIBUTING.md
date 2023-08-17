# Contributing to QuestDB

The codebase of this project (`@questdb/sql-grammar`) is trivial, just arrays of strings:
* keywords like `select` or `from`
* functions like `count` or `format`
* constants like `true` and `false`

They represent keywords, functions and constants implemented and supported by QuestDB SQL grammar.

Therefore, it is highly likely that your desired contribution is
actually meant for the core QuestDB project. In such case, please refer to the [QuestDB contributing guide](https://github.com/questdb/questdb/blob/master/CONTRIBUTING.md)

Alternatively, you may be interested in the usage of this project:

* [QuestDB Web Console](https://github.com/questdb/ui/blob/ba6ef37e40933245d64d60c508379c8420d84b21/packages/web-console/src/scenes/Editor/Monaco/questdb-sql/language.ts#L5) uses this project to augment the syntax highlight and intellisense (autocomplete) of the SQL editor
* [grafana-datasource](https://github.com/questdb/grafana-datasource/blob/96190e0ad5647c5c8443482da81dc68707833474/src/utils/lang.ts#L2) project.

# Support

If you have any questions, please join our [Slack Channel](https://slack.questdb.io) and ask away! 
