// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint assertions-severity-override 1`] = `

validating openapi.yaml...
[1] openapi.yaml:3:3 at #/info/description

rule/test-description failed because the Info description didn't meet the assertions: Should be defined

1 | openapi: 3.1.0
2 | info:
3 |   title: Test API
  |   ^^^^^^^^^^^^^^^
4 |   version: 1.0.0
  |   ^^^^^^^^^^^^^^
5 |

Error was generated by the rule/test-description rule.


[2] openapi.yaml:3:3 at #/info/license

rule/test-license failed because the Info license didn't meet the assertions: Should be defined

1 | openapi: 3.1.0
2 | info:
3 |   title: Test API
  |   ^^^^^^^^^^^^^^^
4 |   version: 1.0.0
  |   ^^^^^^^^^^^^^^
5 |

Warning was generated by the rule/test-license rule.


openapi.yaml: validated in <test>ms

❌ Validation failed with 1 error and 1 warning.
run \`redocly lint --generate-ignore-file\` to add all problems to the ignore file.


`;
