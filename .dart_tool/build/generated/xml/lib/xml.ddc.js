define(['dart_sdk', 'packages/petitparser/src/core/actions/action', 'packages/xml/src/xml/builder'], function(dart_sdk, packages__petitparser__src__core__actions__action, packages__xml__src__xml__builder) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const token = packages__petitparser__src__core__actions__action.src__core__token;
  const exceptions = packages__xml__src__xml__builder.src__xml__utils__exceptions;
  const document = packages__xml__src__xml__builder.src__xml__nodes__document;
  const parser = packages__xml__src__xml__builder.src__xml__parser;
  const xml = Object.create(dart.library);
  const $_get = dartx._get;
  const CT = Object.create(null);
  xml.parse = function parse(input) {
    let result = xml._parser.parse(input);
    if (dart.test(result.isFailure)) {
      let position = token.Token.lineAndColumnOf(input, result.position);
      dart.throw(new exceptions.XmlParserException.new(result.message, position[$_get](0), position[$_get](1)));
    }
    return document.XmlDocument._check(result.value);
  };
  dart.defineLazy(xml, {
    /*xml._parser*/get _parser() {
      return new parser.XmlParserDefinition.new().build();
    }
  });
  dart.trackLibraries("packages/xml/xml", {
    "package:xml/xml.dart": xml
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["xml.dart"],"names":[],"mappings":";;;;;;;;;;;;6BA+DyB;AACjB,iBAAS,AAAQ,kBAAM,KAAK;AAClC,kBAAI,AAAO,MAAD;AACF,qBAAiB,4BAAgB,KAAK,EAAE,AAAO,MAAD;AACc,MAAlE,WAAM,sCAAmB,AAAO,MAAD,UAAU,AAAQ,QAAA,QAAC,IAAI,AAAQ,QAAA,QAAC;;AAEjE,uCAAO,AAAO,MAAD;EACf;;MAnBa,WAAO;YAAG,AAAsB","file":"xml.ddc.js"}');
  // Exports:
  return {
    xml: xml
  };
});

//# sourceMappingURL=xml.ddc.js.map
