# @redocly/openapi-core

## 1.9.0

### Minor Changes

- Added new `no-required-schema-properties-undefined` rule to check if each required schema property is defined.

### Patch Changes

- Fixed an issue where `$ref`s ending in `#` (instead of `#/`) would break the application.

## 1.8.2

## 1.8.1

## 1.8.0

## 1.7.0

### Patch Changes

- Fix schema type of AsyncAPI operation tags
- Fixed a problem where the linter incorrectly returned an error for valid examples that contain references.

## 1.6.0

### Minor Changes

- Added the ability to use `$ref` in the Redocly config file. This ability allows users to split up big config files and maintain their constituent parts independently.

## 1.5.0

### Minor Changes

- Added new rule `array-parameter-serialization` to require that serialization parameters `style` and `explode` are present on array parameters.

## 1.4.1

### Patch Changes

- OpenAPI 3.1.x defaults to JSON Schema draft 2020-12 and the value of property names defined in `properties` was updated since OpenAPI 3.0.x and JSON Schema draft-04.

  In the new JSON Schema specification, each property value within a `properties` schema accepts a `boolean` or `object` schema.

  https://json-schema.org/draft/2020-12/json-schema-core#section-10.3.2.1

- Fixed incorrect browser detection by removing check for 'self' as Bun also exposes it by default.

## 1.4.0

### Minor Changes

- Added `recommended-strict` ruleset which uses the same rules as `recommended` but with the severity level set to `error` for all rules.

## 1.3.0

### Minor Changes

- Added the possibility to configure the linting severity level of the configuration file for all CLI commands.
  Redocly CLI will exit with an error if there are any issues with the configuration file, and the severity is set to `error`.

## 1.2.1

### Patch Changes

- Fixed an issue with nested refs in the `join` command.
- Fixed pattern for no-server-example.com rule to improve detection accuracy.
- Changed the report location for `pattern` and `notPattern` assertions to be more precise.
- Updated `unevaluatedItems` type definition to resolve either boolean or object schema per JSON Schema 2019-09 specification.
- Enhanced public API by small typescript typing fix and exporting new function `bundleFromString`.

## 1.2.0

### Minor Changes

- Added support for linting AsyncAPI v2 files, so that a wider range of API descriptions can use the Redocly linting workflow.

### Patch Changes

- Renamed API definition to API description for consistency.

## 1.1.0

### Minor Changes

- Added `ignoreCase` option for `tags-alphabetical` rule.

### Patch Changes

- Fixed an issue where the `--remove-unused-components` option removed used components that were referenced as child objects.
- Updated Redocly config validation.
- Fixed the location pointer when reporting on the `no-path-trailing-slash` rule.

## 1.0.2

## 1.0.1

### Patch Changes

- Fixed empty custom rules having severity in default rulesets.
