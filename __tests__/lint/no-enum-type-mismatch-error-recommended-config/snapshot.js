// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint no-enum-type-mismatch-error-recommended-config 1`] = `

validating /openapi.yaml...
[1] openapi.yaml:1:1 at #/openapi

Servers must be present.

1 | openapi: 3.0.0
  | ^^^^^^^
2 | info:
3 |   title: Petstore API

Error was generated by the no-empty-servers rule.


[2] openapi.yaml:10:5 at #/paths/~1v1~1pets~1{petId}/get/summary

Operation object should contain \`summary\` field.

 8 | paths:
 9 |   /v1/pets/{petId}:
10 |     get:
   |     ^^^
11 |       operationId: getPet
12 |       parameters:

Error was generated by the operation-summary rule.


[3] openapi.yaml:45:17 at #/components/schemas/Pet/properties/status/enum

Expected type \`array\` but got \`string\`.

43 | status:
44 |   type: string
45 |   enum: string
   |         ^^^^^^
46 |

Error was generated by the struct rule.


[4] openapi.yaml:2:1 at #/info

Info object should contain \`license\` field.

1 | openapi: 3.0.0
2 | info:
  | ^^^^
3 |   title: Petstore API
4 |   version: 1.0.0

Warning was generated by the info-license rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 3 errors and 1 warning.
run \`redocly lint --generate-ignore-file\` to add all problems to the ignore file.


`;
