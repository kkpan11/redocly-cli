// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint assertions-ref-required-error 1`] = `

validating openapi.yaml...
[1] openapi.yaml:12:3 at #/paths/~1pets

PathItems should have refs

10 |   - url: http://petstore.swagger.io/v1
11 | paths:
12 |   /pets:
   |   ^^^^^
13 |     get:
14 |       summary: List all pets

Error was generated by the rule/ref-required-no-property rule.


[2] openapi.yaml:38:15 at #/paths/~1pets/get/responses/200/content/application~1json/schema

Response MediaType schema should have a ref

36 | content:
37 |   application/json:
38 |     schema:
   |     ^^^^^^
39 |       properties:
40 |         id:

Error was generated by the rule/ref-required rule.


[3] components/paths/Owners.yaml:24:11 at #/get/responses/200/content/application~1json/schema

Response MediaType schema should have a ref

22 | content:
23 |   application/json:
24 |     schema:
   |     ^^^^^^
25 |       properties:
26 |         id:

Error was generated by the rule/ref-required rule.


openapi.yaml: validated in <test>ms

❌ Validation failed with 3 errors.
run \`redocly lint --generate-ignore-file\` to add all problems to the ignore file.


`;
