// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint request-response-mime-type-oas2-error 1`] = `

validating openapi.yaml...
[1] openapi.yaml:1:1 at #/1

Mime type "multipart/form-data" is not allowed

 1 | swagger: '2.0'
   | ^^^^^^^^^^^^^^
 2 | info:
   | ^^^^^
 … | < 64 more lines >
67 |         description: 'string'
   |         ^^^^^^^^^^^^^^^^^^^^^
68 |

Error was generated by the request-mime-type rule.


[2] openapi.yaml:1:1 at #/1

Mime type "application/xml" is not allowed

 1 | swagger: '2.0'
   | ^^^^^^^^^^^^^^
 2 | info:
   | ^^^^^
 … | < 64 more lines >
67 |         description: 'string'
   |         ^^^^^^^^^^^^^^^^^^^^^
68 |

Error was generated by the response-mime-type rule.


[3] openapi.yaml:30:5 at #/paths/~1pet/post/0

Mime type "application/xml" is not allowed

28 | paths:
29 |   /pet:
30 |     post:
   |     ^^^^
31 |       tags:
32 |         - 'pet'

Error was generated by the request-mime-type rule.


[4] openapi.yaml:30:5 at #/paths/~1pet/post/0

Mime type "application/xml" is not allowed

28 | paths:
29 |   /pet:
30 |     post:
   |     ^^^^
31 |       tags:
32 |         - 'pet'

Error was generated by the response-mime-type rule.


openapi.yaml: validated in <test>ms

❌ Validation failed with 4 errors.
run \`redocly lint --generate-ignore-file\` to add all problems to the ignore file.


`;
