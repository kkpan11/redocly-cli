// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint assertions-max-length-string-error 1`] = `

validating openapi.yaml...
[1] openapi.yaml:9:16 at #/info/description

Info description should be maximum 10 chars length

 7 |   url: http://example.xyz
 8 | title: Example OpenAPI 3 definition.
 9 | description: Example description
   |              ^^^^^^^^^^^^^^^^^^^
10 | version: '1.0'
11 | contact:

Error was generated by the rule/description-max-length rule.


openapi.yaml: validated in <test>ms

❌ Validation failed with 1 error.
run \`redocly lint --generate-ignore-file\` to add all problems to the ignore file.


`;
