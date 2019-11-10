define(['dart_sdk', 'packages/petitparser/src/core/actions/action', 'packages/petitparser/petitparser', 'packages/collection/src/canonicalized_map'], function(dart_sdk, packages__petitparser__src__core__actions__action, packages__petitparser__petitparser, packages__collection__src__canonicalized_map) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const parser = packages__petitparser__src__core__actions__action.src__core__parser;
  const result = packages__petitparser__src__core__actions__action.src__core__contexts__result;
  const context = packages__petitparser__src__core__actions__action.src__core__contexts__context;
  const char = packages__petitparser__src__core__actions__action.src__core__characters__char;
  const token$ = packages__petitparser__src__core__actions__action.src__core__token;
  const any = packages__petitparser__src__core__actions__action.src__core__predicates__any;
  const whitespace = packages__petitparser__src__core__actions__action.src__core__characters__whitespace;
  const pattern = packages__petitparser__petitparser.src__core__characters__pattern;
  const digit = packages__petitparser__petitparser.src__core__characters__digit;
  const word = packages__petitparser__petitparser.src__core__characters__word;
  const string = packages__petitparser__petitparser.src__core__predicates__string;
  const grammar = packages__petitparser__petitparser.src__core__definition__grammar;
  const wrappers = packages__collection__src__canonicalized_map.src__wrappers;
  const builder = Object.create(dart.library);
  const transformer = Object.create(dart.library);
  const visitor = Object.create(dart.library);
  const visitable = Object.create(dart.library);
  const name$ = Object.create(dart.library);
  const writable = Object.create(dart.library);
  const writer = Object.create(dart.library);
  const token = Object.create(dart.library);
  const entities = Object.create(dart.library);
  const attribute_type = Object.create(dart.library);
  const text$ = Object.create(dart.library);
  const node_type = Object.create(dart.library);
  const data = Object.create(dart.library);
  const node$ = Object.create(dart.library);
  const normalizer = Object.create(dart.library);
  const element = Object.create(dart.library);
  const node_list = Object.create(dart.library);
  const owned = Object.create(dart.library);
  const exceptions = Object.create(dart.library);
  const named = Object.create(dart.library);
  const attribute$ = Object.create(dart.library);
  const name_matcher = Object.create(dart.library);
  const parent = Object.create(dart.library);
  const document_fragment = Object.create(dart.library);
  const document = Object.create(dart.library);
  const doctype = Object.create(dart.library);
  const cdata = Object.create(dart.library);
  const preceding = Object.create(dart.library);
  const following = Object.create(dart.library);
  const descendants = Object.create(dart.library);
  const ancestors = Object.create(dart.library);
  const processing = Object.create(dart.library);
  const comment = Object.create(dart.library);
  const pretty_writer = Object.create(dart.library);
  const simple_name = Object.create(dart.library);
  const prefix_name = Object.create(dart.library);
  const grammar$ = Object.create(dart.library);
  const production = Object.create(dart.library);
  const parser$ = Object.create(dart.library);
  const $last = dartx.last;
  const $isNotEmpty = dartx.isNotEmpty;
  const $removeLast = dartx.removeLast;
  const $toString = dartx.toString;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $firstWhere = dartx.firstWhere;
  const $remove = dartx.remove;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $any = dartx.any;
  const $values = dartx.values;
  const $_set = dartx._set;
  const $lastWhere = dartx.lastWhere;
  const $isEmpty = dartx.isEmpty;
  const $indexOf = dartx.indexOf;
  const $substring = dartx.substring;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $codeUnitAt = dartx.codeUnitAt;
  const $replaceAllMapped = dartx.replaceAllMapped;
  const $first = dartx.first;
  const $where = dartx.where;
  const $map = dartx.map;
  const $join = dartx.join;
  const $length = dartx.length;
  const $removeAt = dartx.removeAt;
  const $whereType = dartx.whereType;
  const $addAll = dartx.addAll;
  const $contains = dartx.contains;
  const $iterator = dartx.iterator;
  const $clear = dartx.clear;
  const $reversed = dartx.reversed;
  const $sublist = dartx.sublist;
  const $trim = dartx.trim;
  let ListOfXmlNodeBuilder = () => (ListOfXmlNodeBuilder = dart.constFn(core.List$(builder.XmlNodeBuilder)))();
  let XmlAttributeTobool = () => (XmlAttributeTobool = dart.constFn(dart.fnType(core.bool, [attribute$.XmlAttribute])))();
  let StringAndNamespaceDataToNull = () => (StringAndNamespaceDataToNull = dart.constFn(dart.fnType(core.Null, [core.String, builder.NamespaceData])))();
  let XmlNodeBuilderTobool = () => (XmlNodeBuilderTobool = dart.constFn(dart.fnType(core.bool, [builder.XmlNodeBuilder])))();
  let NamespaceDataTobool = () => (NamespaceDataTobool = dart.constFn(dart.fnType(core.bool, [builder.NamespaceData])))();
  let VoidTobottom = () => (VoidTobottom = dart.constFn(dart.fnType(dart.bottom, [])))();
  let IdentityMapOfString$NamespaceData = () => (IdentityMapOfString$NamespaceData = dart.constFn(_js_helper.IdentityMap$(core.String, builder.NamespaceData)))();
  let JSArrayOfXmlNode = () => (JSArrayOfXmlNode = dart.constFn(_interceptors.JSArray$(node$.XmlNode)))();
  let JSArrayOfXmlAttribute = () => (JSArrayOfXmlAttribute = dart.constFn(_interceptors.JSArray$(attribute$.XmlAttribute)))();
  let JSArrayOfParser = () => (JSArrayOfParser = dart.constFn(_interceptors.JSArray$(parser.Parser)))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let LinkedMapOfXmlAttributeType$String = () => (LinkedMapOfXmlAttributeType$String = dart.constFn(_js_helper.LinkedMap$(attribute_type.XmlAttributeType, core.String)))();
  let LinkedMapOfXmlAttributeType$Pattern = () => (LinkedMapOfXmlAttributeType$Pattern = dart.constFn(_js_helper.LinkedMap$(attribute_type.XmlAttributeType, core.Pattern)))();
  let LinkedMapOfXmlAttributeType$MatchToString = () => (LinkedMapOfXmlAttributeType$MatchToString = dart.constFn(_js_helper.LinkedMap$(attribute_type.XmlAttributeType, MatchToString())))();
  let XmlNodeTobool = () => (XmlNodeTobool = dart.constFn(dart.fnType(core.bool, [node$.XmlNode])))();
  let XmlNodeToString = () => (XmlNodeToString = dart.constFn(dart.fnType(core.String, [node$.XmlNode])))();
  let XmlNodeListOfXmlAttribute = () => (XmlNodeListOfXmlAttribute = dart.constFn(node_list.XmlNodeList$(attribute$.XmlAttribute)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let XmlNodeListOfXmlNode = () => (XmlNodeListOfXmlNode = dart.constFn(node_list.XmlNodeList$(node$.XmlNode)))();
  let XmlNamedTobool = () => (XmlNamedTobool = dart.constFn(dart.fnType(core.bool, [named.XmlNamed])))();
  let dynamicToList = () => (dynamicToList = dart.constFn(dart.fnType(core.List, [dart.dynamic])))();
  let IterableOfXmlNode = () => (IterableOfXmlNode = dart.constFn(core.Iterable$(node$.XmlNode)))();
  let ListOfXmlAttribute = () => (ListOfXmlAttribute = dart.constFn(core.List$(attribute$.XmlAttribute)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(core.String, core.String, []);
    },
    get C1() {
      return C1 = dart.fn(entities._textReplace, MatchToString());
    },
    get C2() {
      return C2 = dart.constMap(core.String, core.String, ["lt", "<", "gt", ">", "amp", "&", "apos", "'", "quot", "\"", "Aacute", "Á", "aacute", "á", "Acirc", "Â", "acirc", "â", "acute", "´", "AElig", "Æ", "aelig", "æ", "Agrave", "À", "agrave", "à", "alefsym", "ℵ", "Alpha", "Α", "alpha", "α", "and", "∧", "ang", "∠", "Aring", "Å", "aring", "å", "asymp", "≈", "Atilde", "Ã", "atilde", "ã", "Auml", "Ä", "auml", "ä", "bdquo", "„", "Beta", "Β", "beta", "β", "brvbar", "¦", "bull", "•", "cap", "∩", "Ccedil", "Ç", "ccedil", "ç", "cedil", "¸", "cent", "¢", "Chi", "Χ", "chi", "χ", "circ", "ˆ", "clubs", "♣", "cong", "≅", "copy", "©", "crarr", "↵", "cup", "∪", "curren", "¤", "dagger", "†", "Dagger", "‡", "darr", "↓", "dArr", "⇓", "deg", "°", "Delta", "Δ", "delta", "δ", "diams", "♦", "divide", "÷", "Eacute", "É", "eacute", "é", "Ecirc", "Ê", "ecirc", "ê", "Egrave", "È", "egrave", "è", "empty", "∅", "emsp", " ", "ensp", " ", "Epsilon", "Ε", "epsilon", "ε", "equiv", "≡", "Eta", "Η", "eta", "η", "ETH", "Ð", "eth", "ð", "Euml", "Ë", "euml", "ë", "euro", "€", "exist", "∃", "fnof", "ƒ", "forall", "∀", "frac12", "½", "frac14", "¼", "frac34", "¾", "frasl", "⁄", "Gamma", "Γ", "gamma", "γ", "ge", "≥", "harr", "↔", "hArr", "⇔", "hearts", "♥", "hellip", "…", "Iacute", "Í", "iacute", "í", "Icirc", "Î", "icirc", "î", "iexcl", "¡", "Igrave", "Ì", "igrave", "ì", "image", "ℑ", "infin", "∞", "int", "∫", "Iota", "Ι", "iota", "ι", "iquest", "¿", "isin", "∈", "Iuml", "Ï", "iuml", "ï", "Kappa", "Κ", "kappa", "κ", "Lambda", "Λ", "lambda", "λ", "lang", "〈", "laquo", "«", "larr", "←", "lArr", "⇐", "lceil", "⌈", "ldquo", "“", "le", "≤", "lfloor", "⌊", "lowast", "∗", "loz", "◊", "lrm", "‎", "lsaquo", "‹", "lsquo", "‘", "macr", "¯", "mdash", "—", "micro", "µ", "middot", "·", "minus", "−", "Mu", "Μ", "mu", "μ", "nabla", "∇", "nbsp", " ", "ndash", "–", "ne", "≠", "ni", "∋", "not", "¬", "notin", "∉", "nsub", "⊄", "Ntilde", "Ñ", "ntilde", "ñ", "Nu", "Ν", "nu", "ν", "Oacute", "Ó", "oacute", "ó", "Ocirc", "Ô", "ocirc", "ô", "OElig", "Œ", "oelig", "œ", "Ograve", "Ò", "ograve", "ò", "oline", "‾", "Omega", "Ω", "omega", "ω", "Omicron", "Ο", "omicron", "ο", "oplus", "⊕", "or", "∨", "ordf", "ª", "ordm", "º", "Oslash", "Ø", "oslash", "ø", "Otilde", "Õ", "otilde", "õ", "otimes", "⊗", "Ouml", "Ö", "ouml", "ö", "para", "¶", "part", "∂", "permil", "‰", "perp", "⊥", "Phi", "Φ", "phi", "φ", "Pi", "Π", "pi", "π", "piv", "ϖ", "plusmn", "±", "pound", "£", "prime", "′", "Prime", "″", "prod", "∏", "prop", "∝", "Psi", "Ψ", "psi", "ψ", "radic", "√", "rang", "〉", "raquo", "»", "rarr", "→", "rArr", "⇒", "rceil", "⌉", "rdquo", "”", "real", "ℜ", "reg", "®", "rfloor", "⌋", "Rho", "Ρ", "rho", "ρ", "rlm", "‏", "rsaquo", "›", "rsquo", "’", "sbquo", "‚", "Scaron", "Š", "scaron", "š", "sdot", "⋅", "sect", "§", "shy", "­", "Sigma", "Σ", "sigma", "σ", "sigmaf", "ς", "sim", "∼", "spades", "♠", "sub", "⊂", "sube", "⊆", "sum", "∑", "sup", "⊃", "sup1", "¹", "sup2", "²", "sup3", "³", "supe", "⊇", "szlig", "ß", "Tau", "Τ", "tau", "τ", "there4", "∴", "Theta", "Θ", "theta", "θ", "thetasym", "ϑ", "thinsp", " ", "THORN", "Þ", "thorn", "þ", "tilde", "˜", "times", "×", "trade", "™", "Uacute", "Ú", "uacute", "ú", "uarr", "↑", "uArr", "⇑", "Ucirc", "Û", "ucirc", "û", "Ugrave", "Ù", "ugrave", "ù", "uml", "¨", "upsih", "ϒ", "Upsilon", "Υ", "upsilon", "υ", "Uuml", "Ü", "uuml", "ü", "weierp", "℘", "Xi", "Ξ", "xi", "ξ", "Yacute", "Ý", "yacute", "ý", "yen", "¥", "yuml", "ÿ", "Yuml", "Ÿ", "Zeta", "Ζ", "zeta", "ζ", "zwj", "‍", "zwnj", "‌"]);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: attribute_type.XmlAttributeType.prototype,
        [_name$]: "XmlAttributeType.SINGLE_QUOTE",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: attribute_type.XmlAttributeType.prototype,
        [_name$]: "XmlAttributeType.DOUBLE_QUOTE",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.constList([C3 || CT.C3, C4 || CT.C4], attribute_type.XmlAttributeType);
    },
    get C6() {
      return C6 = dart.constList([], node$.XmlNode);
    },
    get C7() {
      return C7 = dart.constList([], attribute$.XmlAttribute);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$0]: "XmlNodeType.ELEMENT",
        index: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$0]: "XmlNodeType.ATTRIBUTE",
        index: 1
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$0]: "XmlNodeType.TEXT",
        index: 2
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$0]: "XmlNodeType.CDATA",
        index: 3
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$0]: "XmlNodeType.PROCESSING",
        index: 4
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$0]: "XmlNodeType.COMMENT",
        index: 5
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$0]: "XmlNodeType.DOCUMENT",
        index: 6
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$0]: "XmlNodeType.DOCUMENT_FRAGMENT",
        index: 7
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: node_type.XmlNodeType.prototype,
        [_name$0]: "XmlNodeType.DOCUMENT_TYPE",
        index: 8
      });
    },
    get C17() {
      return C17 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], node_type.XmlNodeType);
    },
    get C18() {
      return C18 = dart.constSet(node_type.XmlNodeType, [C11 || CT.C11, C13 || CT.C13, C8 || CT.C8, C12 || CT.C12, C10 || CT.C10]);
    },
    get C19() {
      return C19 = dart.constSet(node_type.XmlNodeType, [C9 || CT.C9]);
    },
    get C20() {
      return C20 = dart.constSet(node_type.XmlNodeType, [C11 || CT.C11, C13 || CT.C13, C16 || CT.C16, C8 || CT.C8, C12 || CT.C12, C10 || CT.C10]);
    }
  });
  const _stack = dart.privateName(builder, "_stack");
  let C0;
  const _insert = dart.privateName(builder, "_insert");
  const _buildName = dart.privateName(builder, "_buildName");
  const _lookup = dart.privateName(builder, "_lookup");
  const XmlBuilder_optimizeNamespaces = dart.privateName(builder, "XmlBuilder.optimizeNamespaces");
  builder.XmlBuilder = class XmlBuilder extends core.Object {
    get optimizeNamespaces() {
      return this[optimizeNamespaces$];
    }
    set optimizeNamespaces(value) {
      super.optimizeNamespaces = value;
    }
    text(text) {
      let children = this[_stack][$last].children;
      if (dart.test(children[$isNotEmpty]) && text$.XmlText.is(children[$last])) {
        let previous = children[$removeLast]();
        children[$add](new text$.XmlText.new(dart.str(previous.text) + dart.str(dart.toString(text))));
      } else {
        children[$add](new text$.XmlText.new(dart.toString(text)));
      }
    }
    cdata(text) {
      this[_stack][$last].children[$add](new cdata.XmlCDATA.new(dart.toString(text)));
    }
    processing(target, text) {
      this[_stack][$last].children[$add](new processing.XmlProcessing.new(target, dart.toString(text)));
    }
    comment(text) {
      this[_stack][$last].children[$add](new comment.XmlComment.new(dart.toString(text)));
    }
    element(name, opts) {
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      let namespaces = opts && 'namespaces' in opts ? opts.namespaces : C0 || CT.C0;
      let attributes = opts && 'attributes' in opts ? opts.attributes : C0 || CT.C0;
      let isSelfClosing = opts && 'isSelfClosing' in opts ? opts.isSelfClosing : true;
      let nest = opts && 'nest' in opts ? opts.nest : null;
      let element = new builder.XmlElementBuilder.new();
      this[_stack][$add](element);
      namespaces[$forEach](dart.bind(this, 'namespace'));
      attributes[$forEach](dart.bind(this, 'attribute'));
      if (nest != null) {
        this[_insert](nest);
      }
      element.name = this[_buildName](name, namespace);
      element.isSelfClosing = isSelfClosing;
      if (dart.test(this.optimizeNamespaces)) {
        element.namespaces[$forEach](dart.fn((uri, meta) => {
          if (!dart.test(meta.used)) {
            let name = meta.name;
            let attribute = element.attributes[$firstWhere](dart.fn(attribute => dart.equals(attribute.name, name), XmlAttributeTobool()));
            element.attributes[$remove](attribute);
          }
        }, StringAndNamespaceDataToNull()));
      }
      this[_stack][$removeLast]();
      this[_stack][$last].children[$add](element.build());
    }
    attribute(name, value, opts) {
      let t0;
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      let attributeType = opts && 'attributeType' in opts ? opts.attributeType : null;
      let attribute = new attribute$.XmlAttribute.new(this[_buildName](name, namespace), dart.toString(value), (t0 = attributeType, t0 == null ? attribute_type.XmlAttributeType.DOUBLE_QUOTE : t0));
      this[_stack][$last].attributes[$add](attribute);
    }
    namespace(uri, prefix) {
      if (prefix === void 0) prefix = null;
      if (prefix === "xmlns" || prefix === "xml") {
        dart.throw(new core.ArgumentError.new("The \"" + dart.str(prefix) + "\" prefix cannot be bound."));
      }
      if (dart.test(this.optimizeNamespaces) && dart.test(this[_stack][$any](dart.fn(builder => dart.test(builder.namespaces[$containsKey](uri)) && builder.namespaces[$_get](uri).prefix == prefix, XmlNodeBuilderTobool())))) {
        return;
      }
      if (dart.test(this[_stack][$last].namespaces[$values][$any](dart.fn(meta => meta.prefix == prefix, NamespaceDataTobool())))) {
        dart.throw(new core.ArgumentError.new("The \"" + dart.str(prefix) + "\" prefix conflicts with existing binding."));
      }
      let meta = new builder.NamespaceData.new(prefix, false);
      this[_stack][$last].attributes[$add](new attribute$.XmlAttribute.new(meta.name, uri, attribute_type.XmlAttributeType.DOUBLE_QUOTE));
      this[_stack][$last].namespaces[$_set](uri, meta);
    }
    build() {
      return this[_stack][$last].build();
    }
    [_buildName](name, uri) {
      if (uri != null && uri[$isNotEmpty]) {
        let meta = this[_lookup](uri);
        meta.used = true;
        return name$.XmlName.new(name, meta.prefix);
      } else {
        return name$.XmlName.fromString(name);
      }
    }
    [_lookup](uri) {
      let builder = this[_stack][$lastWhere](dart.fn(builder => builder.namespaces[$containsKey](uri), XmlNodeBuilderTobool()), {orElse: dart.fn(() => dart.throw(new core.ArgumentError.new("Undefined namespace: " + dart.str(uri))), VoidTobottom())});
      return builder.namespaces[$_get](uri);
    }
    [_insert](value) {
      if (core.Function.is(value)) {
        dart.dcall(value, []);
      } else if (core.Iterable.is(value)) {
        value[$forEach](dart.bind(this, _insert));
      } else if (node$.XmlNode.is(value)) {
        if (text$.XmlText.is(value)) {
          this.text(value.text);
        } else if (attribute$.XmlAttribute.is(value)) {
          this[_stack][$last].attributes[$add](transformer.XmlTransformer.defaultInstance.visit(attribute$.XmlAttribute, value));
        } else if (document_fragment.XmlDocumentFragment.is(value)) {
          value.children.forEach(dart.bind(this, _insert));
        } else if (element.XmlElement.is(value) || data.XmlData.is(value)) {
          this[_stack][$last].children[$add](transformer.XmlTransformer.defaultInstance.visit(node$.XmlNode, value));
        } else {
          dart.throw(new core.ArgumentError.new("Unable to add element of type " + dart.str(value.nodeType)));
        }
      } else {
        this.text(dart.toString(value));
      }
    }
  };
  (builder.XmlBuilder.new = function(opts) {
    let optimizeNamespaces = opts && 'optimizeNamespaces' in opts ? opts.optimizeNamespaces : false;
    this[_stack] = ListOfXmlNodeBuilder().from([new builder.XmlDocumentBuilder.new()]);
    this[optimizeNamespaces$] = optimizeNamespaces;
    ;
  }).prototype = builder.XmlBuilder.prototype;
  dart.addTypeTests(builder.XmlBuilder);
  const optimizeNamespaces$ = XmlBuilder_optimizeNamespaces;
  dart.setMethodSignature(builder.XmlBuilder, () => ({
    __proto__: dart.getMethods(builder.XmlBuilder.__proto__),
    text: dart.fnType(dart.void, [core.Object]),
    cdata: dart.fnType(dart.void, [core.Object]),
    processing: dart.fnType(dart.void, [core.String, core.Object]),
    comment: dart.fnType(dart.void, [core.Object]),
    element: dart.fnType(dart.void, [core.String], {attributes: core.Map$(core.String, core.String), isSelfClosing: core.bool, namespace: core.String, namespaces: core.Map$(core.String, core.String), nest: core.Object}),
    attribute: dart.fnType(dart.void, [core.String, core.Object], {attributeType: attribute_type.XmlAttributeType, namespace: core.String}),
    namespace: dart.fnType(dart.void, [core.String], [core.String]),
    build: dart.fnType(node$.XmlNode, []),
    [_buildName]: dart.fnType(name$.XmlName, [core.String, core.String]),
    [_lookup]: dart.fnType(builder.NamespaceData, [core.String]),
    [_insert]: dart.fnType(dart.void, [core.Object])
  }));
  dart.setLibraryUri(builder.XmlBuilder, "package:xml/src/xml/builder.dart");
  dart.setFieldSignature(builder.XmlBuilder, () => ({
    __proto__: dart.getFields(builder.XmlBuilder.__proto__),
    optimizeNamespaces: dart.finalFieldType(core.bool),
    [_stack]: dart.finalFieldType(core.List$(builder.XmlNodeBuilder))
  }));
  const NamespaceData_prefix = dart.privateName(builder, "NamespaceData.prefix");
  const NamespaceData_used = dart.privateName(builder, "NamespaceData.used");
  builder.NamespaceData = class NamespaceData extends core.Object {
    get prefix() {
      return this[prefix$];
    }
    set prefix(value) {
      super.prefix = value;
    }
    get used() {
      return this[used$];
    }
    set used(value) {
      this[used$] = value;
    }
    get name() {
      return this.prefix == null || this.prefix[$isEmpty] ? name$.XmlName.new("xmlns") : name$.XmlName.new(this.prefix, "xmlns");
    }
  };
  (builder.NamespaceData.new = function(prefix, used) {
    if (used === void 0) used = false;
    this[prefix$] = prefix;
    this[used$] = used;
    ;
  }).prototype = builder.NamespaceData.prototype;
  dart.addTypeTests(builder.NamespaceData);
  const prefix$ = NamespaceData_prefix;
  const used$ = NamespaceData_used;
  dart.setGetterSignature(builder.NamespaceData, () => ({
    __proto__: dart.getGetters(builder.NamespaceData.__proto__),
    name: name$.XmlName
  }));
  dart.setLibraryUri(builder.NamespaceData, "package:xml/src/xml/builder.dart");
  dart.setFieldSignature(builder.NamespaceData, () => ({
    __proto__: dart.getFields(builder.NamespaceData.__proto__),
    prefix: dart.finalFieldType(core.String),
    used: dart.fieldType(core.bool)
  }));
  builder.XmlNodeBuilder = class XmlNodeBuilder extends core.Object {};
  (builder.XmlNodeBuilder.new = function() {
    ;
  }).prototype = builder.XmlNodeBuilder.prototype;
  dart.addTypeTests(builder.XmlNodeBuilder);
  dart.setLibraryUri(builder.XmlNodeBuilder, "package:xml/src/xml/builder.dart");
  const XmlDocumentBuilder_namespaces = dart.privateName(builder, "XmlDocumentBuilder.namespaces");
  const XmlDocumentBuilder_children = dart.privateName(builder, "XmlDocumentBuilder.children");
  builder.XmlDocumentBuilder = class XmlDocumentBuilder extends builder.XmlNodeBuilder {
    get namespaces() {
      return this[namespaces];
    }
    set namespaces(value) {
      super.namespaces = value;
    }
    get children() {
      return this[children];
    }
    set children(value) {
      super.children = value;
    }
    get attributes() {
      dart.throw(new core.ArgumentError.new("Unable to define attributes at the document level."));
    }
    build() {
      return new document.XmlDocument.new(this.children);
    }
  };
  (builder.XmlDocumentBuilder.new = function() {
    this[namespaces] = new (IdentityMapOfString$NamespaceData()).from([name$.xmlUri, name$.xmlData]);
    this[children] = JSArrayOfXmlNode().of([]);
    ;
  }).prototype = builder.XmlDocumentBuilder.prototype;
  dart.addTypeTests(builder.XmlDocumentBuilder);
  const namespaces = XmlDocumentBuilder_namespaces;
  const children = XmlDocumentBuilder_children;
  dart.setMethodSignature(builder.XmlDocumentBuilder, () => ({
    __proto__: dart.getMethods(builder.XmlDocumentBuilder.__proto__),
    build: dart.fnType(node$.XmlNode, [])
  }));
  dart.setGetterSignature(builder.XmlDocumentBuilder, () => ({
    __proto__: dart.getGetters(builder.XmlDocumentBuilder.__proto__),
    attributes: core.List$(attribute$.XmlAttribute)
  }));
  dart.setLibraryUri(builder.XmlDocumentBuilder, "package:xml/src/xml/builder.dart");
  dart.setFieldSignature(builder.XmlDocumentBuilder, () => ({
    __proto__: dart.getFields(builder.XmlDocumentBuilder.__proto__),
    namespaces: dart.finalFieldType(core.Map$(core.String, builder.NamespaceData)),
    children: dart.finalFieldType(core.List$(node$.XmlNode))
  }));
  const XmlElementBuilder_namespaces = dart.privateName(builder, "XmlElementBuilder.namespaces");
  const XmlElementBuilder_attributes = dart.privateName(builder, "XmlElementBuilder.attributes");
  const XmlElementBuilder_children = dart.privateName(builder, "XmlElementBuilder.children");
  const XmlElementBuilder_isSelfClosing = dart.privateName(builder, "XmlElementBuilder.isSelfClosing");
  const XmlElementBuilder_name = dart.privateName(builder, "XmlElementBuilder.name");
  builder.XmlElementBuilder = class XmlElementBuilder extends builder.XmlNodeBuilder {
    get namespaces() {
      return this[namespaces$];
    }
    set namespaces(value) {
      super.namespaces = value;
    }
    get attributes() {
      return this[attributes];
    }
    set attributes(value) {
      super.attributes = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get isSelfClosing() {
      return this[isSelfClosing];
    }
    set isSelfClosing(value) {
      this[isSelfClosing] = value;
    }
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    build() {
      return new element.XmlElement.new(this.name, this.attributes, this.children, this.isSelfClosing);
    }
  };
  (builder.XmlElementBuilder.new = function() {
    this[namespaces$] = new (IdentityMapOfString$NamespaceData()).new();
    this[attributes] = JSArrayOfXmlAttribute().of([]);
    this[children$] = JSArrayOfXmlNode().of([]);
    this[isSelfClosing] = true;
    this[name] = null;
    ;
  }).prototype = builder.XmlElementBuilder.prototype;
  dart.addTypeTests(builder.XmlElementBuilder);
  const namespaces$ = XmlElementBuilder_namespaces;
  const attributes = XmlElementBuilder_attributes;
  const children$ = XmlElementBuilder_children;
  const isSelfClosing = XmlElementBuilder_isSelfClosing;
  const name = XmlElementBuilder_name;
  dart.setMethodSignature(builder.XmlElementBuilder, () => ({
    __proto__: dart.getMethods(builder.XmlElementBuilder.__proto__),
    build: dart.fnType(node$.XmlNode, [])
  }));
  dart.setLibraryUri(builder.XmlElementBuilder, "package:xml/src/xml/builder.dart");
  dart.setFieldSignature(builder.XmlElementBuilder, () => ({
    __proto__: dart.getFields(builder.XmlElementBuilder.__proto__),
    namespaces: dart.finalFieldType(core.Map$(core.String, builder.NamespaceData)),
    attributes: dart.finalFieldType(core.List$(attribute$.XmlAttribute)),
    children: dart.finalFieldType(core.List$(node$.XmlNode)),
    isSelfClosing: dart.fieldType(core.bool),
    name: dart.fieldType(name$.XmlName)
  }));
  visitor.XmlVisitor = class XmlVisitor extends core.Object {};
  visitor.XmlVisitor[dart.mixinOn] = Object => class XmlVisitor extends Object {
    visit(T, visitable) {
      return T._check(visitable.accept(this));
    }
    visitName(name) {
      return null;
    }
    visitAttribute(node) {
      return null;
    }
    visitDocument(node) {
      return null;
    }
    visitDocumentFragment(node) {
      return null;
    }
    visitElement(node) {
      return null;
    }
    visitCDATA(node) {
      return null;
    }
    visitComment(node) {
      return null;
    }
    visitDoctype(node) {
      return null;
    }
    visitProcessing(node) {
      return null;
    }
    visitText(node) {
      return null;
    }
  };
  (visitor.XmlVisitor[dart.mixinNew] = function() {
  }).prototype = visitor.XmlVisitor.prototype;
  dart.addTypeTests(visitor.XmlVisitor);
  visitor.XmlVisitor[dart.implements] = () => [core.Object];
  dart.setMethodSignature(visitor.XmlVisitor, () => ({
    __proto__: dart.getMethods(visitor.XmlVisitor.__proto__),
    visit: dart.gFnType(T => [T, [visitable.XmlVisitable]]),
    visitName: dart.fnType(dart.dynamic, [name$.XmlName]),
    visitAttribute: dart.fnType(dart.dynamic, [attribute$.XmlAttribute]),
    visitDocument: dart.fnType(dart.dynamic, [document.XmlDocument]),
    visitDocumentFragment: dart.fnType(dart.dynamic, [document_fragment.XmlDocumentFragment]),
    visitElement: dart.fnType(dart.dynamic, [element.XmlElement]),
    visitCDATA: dart.fnType(dart.dynamic, [cdata.XmlCDATA]),
    visitComment: dart.fnType(dart.dynamic, [comment.XmlComment]),
    visitDoctype: dart.fnType(dart.dynamic, [doctype.XmlDoctype]),
    visitProcessing: dart.fnType(dart.dynamic, [processing.XmlProcessing]),
    visitText: dart.fnType(dart.dynamic, [text$.XmlText])
  }));
  dart.setLibraryUri(visitor.XmlVisitor, "package:xml/src/xml/visitors/visitor.dart");
  const Object_XmlVisitor$36 = class Object_XmlVisitor extends core.Object {};
  (Object_XmlVisitor$36.new = function() {
  }).prototype = Object_XmlVisitor$36.prototype;
  dart.applyMixin(Object_XmlVisitor$36, visitor.XmlVisitor);
  transformer.XmlTransformer = class XmlTransformer extends Object_XmlVisitor$36 {
    visitAttribute(node) {
      return new attribute$.XmlAttribute.new(this.visit(name$.XmlName, node.name), node.value, node.attributeType);
    }
    visitCDATA(node) {
      return new cdata.XmlCDATA.new(node.text);
    }
    visitComment(node) {
      return new comment.XmlComment.new(node.text);
    }
    visitDoctype(node) {
      return new doctype.XmlDoctype.new(node.text);
    }
    visitDocument(node) {
      return new document.XmlDocument.new(node.children.map(node$.XmlNode, dart.gbind(dart.bind(this, 'visit'), node$.XmlNode)));
    }
    visitDocumentFragment(node) {
      return new document_fragment.XmlDocumentFragment.new(node.children.map(node$.XmlNode, dart.gbind(dart.bind(this, 'visit'), node$.XmlNode)));
    }
    visitElement(node) {
      return new element.XmlElement.new(this.visit(name$.XmlName, node.name), node.attributes.map(attribute$.XmlAttribute, dart.gbind(dart.bind(this, 'visit'), attribute$.XmlAttribute)), node.children.map(node$.XmlNode, dart.gbind(dart.bind(this, 'visit'), node$.XmlNode)), node.isSelfClosing);
    }
    visitName(name) {
      return name$.XmlName.fromString(name.qualified);
    }
    visitProcessing(node) {
      return new processing.XmlProcessing.new(node.target, node.text);
    }
    visitText(node) {
      return new text$.XmlText.new(node.text);
    }
  };
  (transformer.XmlTransformer.new = function() {
    ;
  }).prototype = transformer.XmlTransformer.prototype;
  dart.addTypeTests(transformer.XmlTransformer);
  dart.setMethodSignature(transformer.XmlTransformer, () => ({
    __proto__: dart.getMethods(transformer.XmlTransformer.__proto__),
    visitAttribute: dart.fnType(attribute$.XmlAttribute, [attribute$.XmlAttribute]),
    visitCDATA: dart.fnType(cdata.XmlCDATA, [cdata.XmlCDATA]),
    visitComment: dart.fnType(comment.XmlComment, [comment.XmlComment]),
    visitDoctype: dart.fnType(doctype.XmlDoctype, [doctype.XmlDoctype]),
    visitDocument: dart.fnType(document.XmlDocument, [document.XmlDocument]),
    visitDocumentFragment: dart.fnType(document_fragment.XmlDocumentFragment, [document_fragment.XmlDocumentFragment]),
    visitElement: dart.fnType(element.XmlElement, [element.XmlElement]),
    visitName: dart.fnType(name$.XmlName, [name$.XmlName]),
    visitProcessing: dart.fnType(processing.XmlProcessing, [processing.XmlProcessing]),
    visitText: dart.fnType(text$.XmlText, [text$.XmlText])
  }));
  dart.setLibraryUri(transformer.XmlTransformer, "package:xml/src/xml/visitors/transformer.dart");
  dart.defineLazy(transformer.XmlTransformer, {
    /*transformer.XmlTransformer.defaultInstance*/get defaultInstance() {
      return new transformer.XmlTransformer.new();
    }
  });
  visitable.XmlVisitable = class XmlVisitable extends core.Object {};
  visitable.XmlVisitable[dart.mixinOn] = Object => class XmlVisitable extends Object {};
  (visitable.XmlVisitable[dart.mixinNew] = function() {
  }).prototype = visitable.XmlVisitable.prototype;
  dart.addTypeTests(visitable.XmlVisitable);
  visitable.XmlVisitable[dart.implements] = () => [core.Object];
  dart.setLibraryUri(visitable.XmlVisitable, "package:xml/src/xml/visitors/visitable.dart");
  writable.XmlWritable = class XmlWritable extends core.Object {};
  writable.XmlWritable[dart.mixinOn] = Object => {
    class XmlWritable extends Object {
      writeTo(buffer) {
        new writer.XmlWriter.new(buffer).visit(dart.dynamic, this);
      }
      writePrettyTo(buffer, level, indent) {
        new pretty_writer.XmlPrettyWriter.new(buffer, level, indent).visit(dart.dynamic, this);
      }
      toString() {
        return this.toXmlString();
      }
      toXmlString(opts) {
        let pretty = opts && 'pretty' in opts ? opts.pretty : false;
        let indent = opts && 'indent' in opts ? opts.indent : "  ";
        let buffer = new core.StringBuffer.new();
        if (dart.test(pretty)) {
          this.writePrettyTo(buffer, 0, indent);
        } else {
          this.writeTo(buffer);
        }
        return buffer.toString();
      }
    }
    dart.defineExtensionMethods(XmlWritable, ['toString']);
    return XmlWritable;
  };
  (writable.XmlWritable[dart.mixinNew] = function() {
  }).prototype = writable.XmlWritable.prototype;
  dart.addTypeTests(writable.XmlWritable);
  writable.XmlWritable[dart.implements] = () => [visitable.XmlVisitable, core.Object];
  dart.setMethodSignature(writable.XmlWritable, () => ({
    __proto__: dart.getMethods(writable.XmlWritable.__proto__),
    writeTo: dart.fnType(dart.void, [core.StringBuffer]),
    writePrettyTo: dart.fnType(dart.void, [core.StringBuffer, core.int, core.String]),
    toXmlString: dart.fnType(core.String, [], {indent: core.String, pretty: core.bool})
  }));
  dart.setLibraryUri(writable.XmlWritable, "package:xml/src/xml/utils/writable.dart");
  const _parent = dart.privateName(owned, "_parent");
  owned.XmlOwned = class XmlOwned extends core.Object {};
  owned.XmlOwned[dart.mixinOn] = Object => class XmlOwned extends Object {
    get parent() {
      return this[_parent];
    }
    get root() {
      return node$.XmlNode._check(dart.test(this.hasParent) ? this.parent.root : this);
    }
    get hasParent() {
      return this.parent != null;
    }
    attachParent(parent) {
      exceptions.XmlParentException.checkNoParent(this);
      this[_parent] = parent;
    }
    detachParent(parent) {
      this[_parent] = null;
    }
  };
  (owned.XmlOwned[dart.mixinNew] = function() {
    this[_parent] = null;
  }).prototype = owned.XmlOwned.prototype;
  dart.addTypeTests(owned.XmlOwned);
  owned.XmlOwned[dart.implements] = () => [core.Object];
  dart.setMethodSignature(owned.XmlOwned, () => ({
    __proto__: dart.getMethods(owned.XmlOwned.__proto__),
    attachParent: dart.fnType(dart.void, [node$.XmlNode]),
    detachParent: dart.fnType(dart.void, [node$.XmlNode])
  }));
  dart.setGetterSignature(owned.XmlOwned, () => ({
    __proto__: dart.getGetters(owned.XmlOwned.__proto__),
    parent: node$.XmlNode,
    root: node$.XmlNode,
    hasParent: core.bool
  }));
  dart.setLibraryUri(owned.XmlOwned, "package:xml/src/xml/utils/owned.dart");
  dart.setFieldSignature(owned.XmlOwned, () => ({
    __proto__: dart.getFields(owned.XmlOwned.__proto__),
    [_parent]: dart.fieldType(node$.XmlNode)
  }));
  const Object_XmlVisitable$36 = class Object_XmlVisitable extends core.Object {};
  (Object_XmlVisitable$36.new = function() {
  }).prototype = Object_XmlVisitable$36.prototype;
  dart.applyMixin(Object_XmlVisitable$36, visitable.XmlVisitable);
  const Object_XmlWritable$36 = class Object_XmlWritable extends Object_XmlVisitable$36 {};
  (Object_XmlWritable$36.new = function() {
  }).prototype = Object_XmlWritable$36.prototype;
  dart.applyMixin(Object_XmlWritable$36, writable.XmlWritable);
  const Object_XmlOwned$36 = class Object_XmlOwned extends Object_XmlWritable$36 {};
  (Object_XmlOwned$36.new = function() {
    owned.XmlOwned[dart.mixinNew].call(this);
  }).prototype = Object_XmlOwned$36.prototype;
  dart.applyMixin(Object_XmlOwned$36, owned.XmlOwned);
  name$.XmlName = class XmlName extends Object_XmlOwned$36 {
    static new(local, prefix) {
      if (prefix === void 0) prefix = null;
      return prefix == null || prefix[$isEmpty] ? new simple_name.XmlSimpleName.new(local) : new prefix_name.XmlPrefixName.new(prefix, local, dart.str(prefix) + ":" + dart.str(local));
    }
    static fromString(qualified) {
      let index = qualified[$indexOf](":");
      if (index > 0) {
        let prefix = qualified[$substring](0, index);
        let local = qualified[$substring](index + 1);
        return new prefix_name.XmlPrefixName.new(prefix, local, qualified);
      } else {
        return new simple_name.XmlSimpleName.new(qualified);
      }
    }
    accept(visitor) {
      return visitor.visitName(this);
    }
    _equals(other) {
      if (other == null) return false;
      return name$.XmlName.is(other) && other.local == this.local && other.namespaceUri == this.namespaceUri;
    }
    get hashCode() {
      return dart.hashCode(this.qualified);
    }
  };
  (name$.XmlName.internal = function() {
    name$.XmlName.__proto__.new.call(this);
    ;
  }).prototype = name$.XmlName.prototype;
  dart.addTypeTests(name$.XmlName);
  dart.setMethodSignature(name$.XmlName, () => ({
    __proto__: dart.getMethods(name$.XmlName.__proto__),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(name$.XmlName, "package:xml/src/xml/utils/name.dart");
  dart.defineExtensionMethods(name$.XmlName, ['_equals']);
  dart.defineExtensionAccessors(name$.XmlName, ['hashCode']);
  dart.defineLazy(name$, {
    /*name$.xml*/get xml() {
      return "xml";
    },
    /*name$.xmlUri*/get xmlUri() {
      return "http://www.w3.org/XML/1998/namespace";
    },
    /*name$.xmlns*/get xmlns() {
      return "xmlns";
    },
    /*name$.xmlData*/get xmlData() {
      return new builder.NamespaceData.new("xml", true);
    }
  });
  const XmlWriter_buffer = dart.privateName(writer, "XmlWriter.buffer");
  const Object_XmlVisitor$36$ = class Object_XmlVisitor extends core.Object {};
  (Object_XmlVisitor$36$.new = function() {
  }).prototype = Object_XmlVisitor$36$.prototype;
  dart.applyMixin(Object_XmlVisitor$36$, visitor.XmlVisitor);
  writer.XmlWriter = class XmlWriter extends Object_XmlVisitor$36$ {
    get buffer() {
      return this[buffer$];
    }
    set buffer(value) {
      super.buffer = value;
    }
    visitAttribute(node) {
      this.visit(dart.dynamic, node.name);
      this.buffer.write("=");
      this.buffer.write(entities.encodeXmlAttributeValueWithQuotes(node.value, node.attributeType));
    }
    visitCDATA(node) {
      this.buffer.write("<![CDATA[");
      this.buffer.write(node.text);
      this.buffer.write("]]>");
    }
    visitComment(node) {
      this.buffer.write("<!--");
      this.buffer.write(node.text);
      this.buffer.write("-->");
    }
    visitDoctype(node) {
      this.buffer.write("<!DOCTYPE");
      this.buffer.write(" ");
      this.buffer.write(node.text);
      this.buffer.write(">");
    }
    visitDocument(node) {
      this.writeChildren(node);
    }
    visitDocumentFragment(node) {
      this.buffer.write("#document-fragment");
    }
    visitElement(node) {
      this.buffer.write("<");
      this.visit(dart.dynamic, node.name);
      this.writeAttributes(node);
      if (dart.test(node.children.isEmpty) && dart.test(node.isSelfClosing)) {
        this.buffer.write("/>");
      } else {
        this.buffer.write(">");
        this.writeChildren(node);
        this.buffer.write("</");
        this.visit(dart.dynamic, node.name);
        this.buffer.write(">");
      }
    }
    visitName(name) {
      this.buffer.write(name.qualified);
    }
    visitProcessing(node) {
      this.buffer.write("<?");
      this.buffer.write(node.target);
      if (node.text[$isNotEmpty]) {
        this.buffer.write(" ");
        this.buffer.write(node.text);
      }
      this.buffer.write("?>");
    }
    visitText(node) {
      this.buffer.write(entities.encodeXmlText(node.text));
    }
    writeAttributes(node) {
      for (let attribute of node.attributes) {
        this.buffer.write(" ");
        this.visit(dart.dynamic, attribute);
      }
    }
    writeChildren(node) {
      node.children[$forEach](dart.gbind(dart.bind(this, 'visit'), dart.dynamic));
    }
  };
  (writer.XmlWriter.new = function(buffer) {
    this[buffer$] = buffer;
    ;
  }).prototype = writer.XmlWriter.prototype;
  dart.addTypeTests(writer.XmlWriter);
  const buffer$ = XmlWriter_buffer;
  dart.setMethodSignature(writer.XmlWriter, () => ({
    __proto__: dart.getMethods(writer.XmlWriter.__proto__),
    visitAttribute: dart.fnType(dart.void, [attribute$.XmlAttribute]),
    visitCDATA: dart.fnType(dart.void, [cdata.XmlCDATA]),
    visitComment: dart.fnType(dart.void, [comment.XmlComment]),
    visitDoctype: dart.fnType(dart.void, [doctype.XmlDoctype]),
    visitDocument: dart.fnType(dart.void, [document.XmlDocument]),
    visitDocumentFragment: dart.fnType(dart.void, [document_fragment.XmlDocumentFragment]),
    visitElement: dart.fnType(dart.void, [element.XmlElement]),
    visitName: dart.fnType(dart.void, [name$.XmlName]),
    visitProcessing: dart.fnType(dart.void, [processing.XmlProcessing]),
    visitText: dart.fnType(dart.void, [text$.XmlText]),
    writeAttributes: dart.fnType(dart.void, [node$.XmlNode]),
    writeChildren: dart.fnType(dart.void, [node$.XmlNode])
  }));
  dart.setLibraryUri(writer.XmlWriter, "package:xml/src/xml/visitors/writer.dart");
  dart.setFieldSignature(writer.XmlWriter, () => ({
    __proto__: dart.getFields(writer.XmlWriter.__proto__),
    buffer: dart.finalFieldType(core.StringBuffer)
  }));
  token.XmlToken = class XmlToken extends core.Object {};
  (token.XmlToken.new = function() {
    ;
  }).prototype = token.XmlToken.prototype;
  dart.addTypeTests(token.XmlToken);
  dart.setLibraryUri(token.XmlToken, "package:xml/src/xml/utils/token.dart");
  dart.defineLazy(token.XmlToken, {
    /*token.XmlToken.doubleQuote*/get doubleQuote() {
      return "\"";
    },
    /*token.XmlToken.singleQuote*/get singleQuote() {
      return "'";
    },
    /*token.XmlToken.equals*/get equals() {
      return "=";
    },
    /*token.XmlToken.namespace*/get namespace() {
      return ":";
    },
    /*token.XmlToken.whitespace*/get whitespace() {
      return " ";
    },
    /*token.XmlToken.openComment*/get openComment() {
      return "<!--";
    },
    /*token.XmlToken.closeComment*/get closeComment() {
      return "-->";
    },
    /*token.XmlToken.openCDATA*/get openCDATA() {
      return "<![CDATA[";
    },
    /*token.XmlToken.closeCDATA*/get closeCDATA() {
      return "]]>";
    },
    /*token.XmlToken.openElement*/get openElement() {
      return "<";
    },
    /*token.XmlToken.closeElement*/get closeElement() {
      return ">";
    },
    /*token.XmlToken.openEndElement*/get openEndElement() {
      return "</";
    },
    /*token.XmlToken.closeEndElement*/get closeEndElement() {
      return "/>";
    },
    /*token.XmlToken.openDoctype*/get openDoctype() {
      return "<!DOCTYPE";
    },
    /*token.XmlToken.closeDoctype*/get closeDoctype() {
      return ">";
    },
    /*token.XmlToken.openDoctypeBlock*/get openDoctypeBlock() {
      return "[";
    },
    /*token.XmlToken.closeDoctypeBlock*/get closeDoctypeBlock() {
      return "]";
    },
    /*token.XmlToken.openProcessing*/get openProcessing() {
      return "<?";
    },
    /*token.XmlToken.closeProcessing*/get closeProcessing() {
      return "?>";
    }
  });
  const _stopper = dart.privateName(entities, "_stopper");
  const _stopperCode = dart.privateName(entities, "_stopperCode");
  const _minLength = dart.privateName(entities, "_minLength");
  entities.XmlCharacterDataParser = class XmlCharacterDataParser extends parser.Parser$(core.String) {
    parseOn(context) {
      let input = context.buffer;
      let length = input.length;
      let output = new core.StringBuffer.new();
      let position = context.position;
      let start = position;
      while (dart.notNull(position) < length) {
        let value = input[$codeUnitAt](position);
        if (value === this[_stopperCode]) {
          break;
        } else if (value === 38) {
          let result = entities._entity.parseOn(context.success(core.Null, null, position));
          if (dart.test(result.isSuccess) && result.value != null) {
            output.write(input[$substring](start, position));
            output.write(result.value);
            position = result.position;
            start = position;
          } else {
            position = dart.notNull(position) + 1;
          }
        } else {
          position = dart.notNull(position) + 1;
        }
      }
      output.write(input[$substring](start, position));
      return dart.notNull(output.length) < dart.notNull(this[_minLength]) ? context.failure(core.String, "Unable to parse chracter data.") : context.success(core.String, output.toString(), position);
    }
    fastParseOn(buffer, position) {
      let start = position;
      let length = buffer.length;
      while (dart.notNull(position) < length) {
        let value = buffer[$codeUnitAt](position);
        if (value === this[_stopperCode]) {
          break;
        } else {
          position = dart.notNull(position) + 1;
        }
      }
      return dart.notNull(position) - dart.notNull(start) < dart.notNull(this[_minLength]) ? -1 : position;
    }
    get children() {
      return JSArrayOfParser().of([entities._entity]);
    }
    copy() {
      return new entities.XmlCharacterDataParser.new(this[_stopper], this[_minLength]);
    }
    hasEqualProperties(other) {
      entities.XmlCharacterDataParser._check(other);
      return dart.test(super.hasEqualProperties(other)) && this[_stopper] == other[_stopper] && this[_minLength] == other[_minLength];
    }
  };
  (entities.XmlCharacterDataParser.new = function(stopper, minLength) {
    this[_stopper] = stopper;
    this[_stopperCode] = stopper[$codeUnitAt](0);
    this[_minLength] = minLength;
    entities.XmlCharacterDataParser.__proto__.new.call(this);
    ;
  }).prototype = entities.XmlCharacterDataParser.prototype;
  dart.addTypeTests(entities.XmlCharacterDataParser);
  dart.setMethodSignature(entities.XmlCharacterDataParser, () => ({
    __proto__: dart.getMethods(entities.XmlCharacterDataParser.__proto__),
    parseOn: dart.fnType(result.Result$(core.String), [context.Context]),
    copy: dart.fnType(entities.XmlCharacterDataParser, [])
  }));
  dart.setLibraryUri(entities.XmlCharacterDataParser, "package:xml/src/xml/utils/entities.dart");
  dart.setFieldSignature(entities.XmlCharacterDataParser, () => ({
    __proto__: dart.getFields(entities.XmlCharacterDataParser.__proto__),
    [_stopper]: dart.finalFieldType(core.String),
    [_stopperCode]: dart.finalFieldType(core.int),
    [_minLength]: dart.finalFieldType(core.int)
  }));
  let C1;
  entities.encodeXmlText = function encodeXmlText(input) {
    return input[$replaceAllMapped](entities._textPattern, C1 || CT.C1);
  };
  entities._textReplace = function _textReplace(match) {
    switch (match.group(0)) {
      case "<":
      {
        return "&lt;";
      }
      case "&":
      {
        return "&amp;";
      }
      case "]]>":
      {
        return "]]&gt;";
      }
      default:
      {
        dart.throw(new core.AssertionError.new());
      }
    }
  };
  entities.encodeXmlAttributeValue = function encodeXmlAttributeValue(input, attributeType) {
    return input[$replaceAllMapped](entities._attributePattern[$_get](attributeType), entities._attributeReplace[$_get](attributeType));
  };
  entities.encodeXmlAttributeValueWithQuotes = function encodeXmlAttributeValueWithQuotes(input, attributeType) {
    let quote = entities.attributeQuote[$_get](attributeType);
    let buffer = new core.StringBuffer.new();
    buffer.write(quote);
    buffer.write(entities.encodeXmlAttributeValue(input, attributeType));
    buffer.write(quote);
    return buffer.toString();
  };
  let C2;
  dart.defineLazy(entities, {
    /*entities._entityHex*/get _entityHex() {
      return pattern.pattern("xX").seq(pattern.pattern("A-Fa-f0-9").plus().flatten("Expected hexadecimal character reference").map(dart.dynamic, dart.fn(value => core.String.fromCharCode(core.int.parse(value, {radix: 16})), StringToString()))).pick(core.String, 1);
    },
    /*entities._entityDigit*/get _entityDigit() {
      return char.char("#").seq(entities._entityHex.or(digit.digit().plus().flatten("Expected decimal character reference").map(dart.dynamic, dart.fn(value => core.String.fromCharCode(core.int.parse(value)), StringToString())))).pick(core.String, 1);
    },
    /*entities._entity*/get _entity() {
      return char.char("&").seq(entities._entityDigit.or(word.word().plus().flatten("Expected named character reference").map(dart.dynamic, dart.fn(value => entities.entityToChar[$_get](value), StringToString())))).seq(char.char(";")).pick(core.String, 1);
    },
    /*entities.entityToChar*/get entityToChar() {
      return C2 || CT.C2;
    },
    /*entities._textPattern*/get _textPattern() {
      return core.RegExp.new("[&<]|]]>");
    },
    /*entities.attributeQuote*/get attributeQuote() {
      return new (LinkedMapOfXmlAttributeType$String()).from([attribute_type.XmlAttributeType.SINGLE_QUOTE, "'", attribute_type.XmlAttributeType.DOUBLE_QUOTE, "\""]);
    },
    /*entities._attributePattern*/get _attributePattern() {
      return new (LinkedMapOfXmlAttributeType$Pattern()).from([attribute_type.XmlAttributeType.SINGLE_QUOTE, core.RegExp.new("['&<\\n\\r\\t]"), attribute_type.XmlAttributeType.DOUBLE_QUOTE, core.RegExp.new("[\"&<\\n\\r\\t]")]);
    },
    /*entities._attributeReplace*/get _attributeReplace() {
      return new (LinkedMapOfXmlAttributeType$MatchToString()).from([attribute_type.XmlAttributeType.SINGLE_QUOTE, dart.fn(match => {
          switch (match.group(0)) {
            case "'":
            {
              return "&apos;";
            }
            case "&":
            {
              return "&amp;";
            }
            case "<":
            {
              return "&lt;";
            }
            case "\n":
            {
              return "&#xA;";
            }
            case "\r":
            {
              return "&#xD;";
            }
            case "\t":
            {
              return "&#x9;";
            }
            default:
            {
              dart.throw(new core.AssertionError.new());
            }
          }
        }, MatchToString()), attribute_type.XmlAttributeType.DOUBLE_QUOTE, dart.fn(match => {
          switch (match.group(0)) {
            case "\"":
            {
              return "&quot;";
            }
            case "&":
            {
              return "&amp;";
            }
            case "<":
            {
              return "&lt;";
            }
            case "\n":
            {
              return "&#xA;";
            }
            case "\r":
            {
              return "&#xD;";
            }
            case "\t":
            {
              return "&#x9;";
            }
            default:
            {
              dart.throw(new core.AssertionError.new());
            }
          }
        }, MatchToString())]);
    }
  });
  const _name$ = dart.privateName(attribute_type, "_name");
  let C3;
  let C4;
  let C5;
  attribute_type.XmlAttributeType = class XmlAttributeType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (attribute_type.XmlAttributeType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = attribute_type.XmlAttributeType.prototype;
  dart.addTypeTests(attribute_type.XmlAttributeType);
  dart.setLibraryUri(attribute_type.XmlAttributeType, "package:xml/src/xml/utils/attribute_type.dart");
  dart.setFieldSignature(attribute_type.XmlAttributeType, () => ({
    __proto__: dart.getFields(attribute_type.XmlAttributeType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(attribute_type.XmlAttributeType, ['toString']);
  attribute_type.XmlAttributeType.SINGLE_QUOTE = C3 || CT.C3;
  attribute_type.XmlAttributeType.DOUBLE_QUOTE = C4 || CT.C4;
  attribute_type.XmlAttributeType.values = C5 || CT.C5;
  const _text = dart.privateName(data, "_text");
  let C6;
  let C7;
  const Object_XmlVisitable$36$ = class Object_XmlVisitable extends core.Object {};
  (Object_XmlVisitable$36$.new = function() {
  }).prototype = Object_XmlVisitable$36$.prototype;
  dart.applyMixin(Object_XmlVisitable$36$, visitable.XmlVisitable);
  const Object_XmlWritable$36$ = class Object_XmlWritable extends Object_XmlVisitable$36$ {};
  (Object_XmlWritable$36$.new = function() {
  }).prototype = Object_XmlWritable$36$.prototype;
  dart.applyMixin(Object_XmlWritable$36$, writable.XmlWritable);
  const Object_XmlOwned$36$ = class Object_XmlOwned extends Object_XmlWritable$36$ {};
  (Object_XmlOwned$36$.new = function() {
    owned.XmlOwned[dart.mixinNew].call(this);
  }).prototype = Object_XmlOwned$36$.prototype;
  dart.applyMixin(Object_XmlOwned$36$, owned.XmlOwned);
  node$.XmlNode = class XmlNode extends Object_XmlOwned$36$ {
    get children() {
      return C6 || CT.C6;
    }
    get attributes() {
      return C7 || CT.C7;
    }
    get preceding() {
      return new preceding.XmlPrecedingIterable.new(this);
    }
    get descendants() {
      return new descendants.XmlDescendantsIterable.new(this);
    }
    get following() {
      return new following.XmlFollowingIterable.new(this);
    }
    get ancestors() {
      return new ancestors.XmlAncestorsIterable.new(this);
    }
    get document() {
      return this.parent == null ? null : this.parent.document;
    }
    get depth() {
      return this.parent == null ? 0 : dart.notNull(this.parent.depth) + 1;
    }
    get firstChild() {
      return dart.test(this.children[$isEmpty]) ? null : this.children[$first];
    }
    get lastChild() {
      return dart.test(this.children[$isEmpty]) ? null : this.children[$last];
    }
    get text() {
      return this.descendants[$where](dart.fn(node => text$.XmlText.is(node) || cdata.XmlCDATA.is(node), XmlNodeTobool()))[$map](core.String, dart.fn(node => node.text, XmlNodeToString()))[$join]();
    }
    get nextSibling() {
      if (this.parent != null) {
        let siblings = this.parent.children;
        for (let i = 0; i < dart.notNull(siblings[$length]) - 1; i = i + 1) {
          if (dart.equals(siblings[$_get](i), this)) {
            return siblings[$_get](i + 1);
          }
        }
      }
      return null;
    }
    get previousSibling() {
      if (this.parent != null) {
        let siblings = this.parent.children;
        for (let i = dart.notNull(siblings[$length]) - 1; i > 0; i = i - 1) {
          if (dart.equals(siblings[$_get](i), this)) {
            return siblings[$_get](i - 1);
          }
        }
      }
      return null;
    }
    copy() {
      return transformer.XmlTransformer.defaultInstance.visit(node$.XmlNode, this);
    }
    normalize() {
      return normalizer.XmlNormalizer.defaultInstance.visit(dart.void, this);
    }
  };
  (node$.XmlNode.new = function() {
    node$.XmlNode.__proto__.new.call(this);
    ;
  }).prototype = node$.XmlNode.prototype;
  dart.addTypeTests(node$.XmlNode);
  dart.setMethodSignature(node$.XmlNode, () => ({
    __proto__: dart.getMethods(node$.XmlNode.__proto__),
    copy: dart.fnType(node$.XmlNode, []),
    normalize: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(node$.XmlNode, () => ({
    __proto__: dart.getGetters(node$.XmlNode.__proto__),
    children: core.List$(node$.XmlNode),
    attributes: core.List$(attribute$.XmlAttribute),
    preceding: core.Iterable$(node$.XmlNode),
    descendants: core.Iterable$(node$.XmlNode),
    following: core.Iterable$(node$.XmlNode),
    ancestors: core.Iterable$(node$.XmlNode),
    document: document.XmlDocument,
    depth: core.int,
    firstChild: node$.XmlNode,
    lastChild: node$.XmlNode,
    text: core.String,
    nextSibling: node$.XmlNode,
    previousSibling: node$.XmlNode
  }));
  dart.setLibraryUri(node$.XmlNode, "package:xml/src/xml/nodes/node.dart");
  data.XmlData = class XmlData extends node$.XmlNode {
    get text() {
      return this[_text];
    }
    set text(text) {
      core.ArgumentError.checkNotNull(text, "text");
      this[_text] = text;
    }
  };
  (data.XmlData.new = function(text) {
    this[_text] = null;
    data.XmlData.__proto__.new.call(this);
    this.text = text;
  }).prototype = data.XmlData.prototype;
  dart.addTypeTests(data.XmlData);
  dart.setSetterSignature(data.XmlData, () => ({
    __proto__: dart.getSetters(data.XmlData.__proto__),
    text: core.String
  }));
  dart.setLibraryUri(data.XmlData, "package:xml/src/xml/nodes/data.dart");
  dart.setFieldSignature(data.XmlData, () => ({
    __proto__: dart.getFields(data.XmlData.__proto__),
    [_text]: dart.fieldType(core.String)
  }));
  text$.XmlText = class XmlText extends data.XmlData {
    get nodeType() {
      return node_type.XmlNodeType.TEXT;
    }
    accept(visitor) {
      return visitor.visitText(this);
    }
  };
  (text$.XmlText.new = function(text) {
    text$.XmlText.__proto__.new.call(this, text);
    ;
  }).prototype = text$.XmlText.prototype;
  dart.addTypeTests(text$.XmlText);
  dart.setMethodSignature(text$.XmlText, () => ({
    __proto__: dart.getMethods(text$.XmlText.__proto__),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(text$.XmlText, () => ({
    __proto__: dart.getGetters(text$.XmlText.__proto__),
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(text$.XmlText, "package:xml/src/xml/nodes/text.dart");
  const _name$0 = dart.privateName(node_type, "_name");
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C15;
  let C16;
  let C17;
  node_type.XmlNodeType = class XmlNodeType extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (node_type.XmlNodeType.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = node_type.XmlNodeType.prototype;
  dart.addTypeTests(node_type.XmlNodeType);
  dart.setLibraryUri(node_type.XmlNodeType, "package:xml/src/xml/utils/node_type.dart");
  dart.setFieldSignature(node_type.XmlNodeType, () => ({
    __proto__: dart.getFields(node_type.XmlNodeType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(node_type.XmlNodeType, ['toString']);
  node_type.XmlNodeType.ELEMENT = C8 || CT.C8;
  node_type.XmlNodeType.ATTRIBUTE = C9 || CT.C9;
  node_type.XmlNodeType.TEXT = C10 || CT.C10;
  node_type.XmlNodeType.CDATA = C11 || CT.C11;
  node_type.XmlNodeType.PROCESSING = C12 || CT.C12;
  node_type.XmlNodeType.COMMENT = C13 || CT.C13;
  node_type.XmlNodeType.DOCUMENT = C14 || CT.C14;
  node_type.XmlNodeType.DOCUMENT_FRAGMENT = C15 || CT.C15;
  node_type.XmlNodeType.DOCUMENT_TYPE = C16 || CT.C16;
  node_type.XmlNodeType.values = C17 || CT.C17;
  const _normalize = dart.privateName(normalizer, "_normalize");
  const _removeEmpty = dart.privateName(normalizer, "_removeEmpty");
  const _mergeAdjacent = dart.privateName(normalizer, "_mergeAdjacent");
  const Object_XmlVisitor$36$0 = class Object_XmlVisitor extends core.Object {};
  (Object_XmlVisitor$36$0.new = function() {
  }).prototype = Object_XmlVisitor$36$0.prototype;
  dart.applyMixin(Object_XmlVisitor$36$0, visitor.XmlVisitor);
  normalizer.XmlNormalizer = class XmlNormalizer extends Object_XmlVisitor$36$0 {
    visitDocument(node) {
      return this[_normalize](node.children);
    }
    visitDocumentFragment(node) {
      return this[_normalize](node.children);
    }
    visitElement(node) {
      return this[_normalize](node.children);
    }
    [_normalize](children) {
      this[_removeEmpty](children);
      this[_mergeAdjacent](children);
      children[$forEach](dart.gbind(dart.bind(this, 'visit'), dart.dynamic));
    }
    [_removeEmpty](children) {
      for (let i = 0; i < dart.notNull(children[$length]);) {
        let node = children[$_get](i);
        if (dart.equals(node.nodeType, node_type.XmlNodeType.TEXT) && node.text[$isEmpty]) {
          children[$removeAt](i);
        } else {
          i = i + 1;
        }
      }
    }
    [_mergeAdjacent](children) {
      let t0;
      let previousText = null;
      for (let i = 0; i < dart.notNull(children[$length]);) {
        let node = children[$_get](i);
        if (dart.equals(node.nodeType, node_type.XmlNodeType.TEXT)) {
          if (previousText == null) {
            previousText = text$.XmlText._check(node);
            i = i + 1;
          } else {
            t0 = previousText;
            t0.text = dart.notNull(t0.text) + dart.notNull(node.text);
            children[$removeAt](i);
          }
        } else {
          previousText = null;
          i = i + 1;
        }
      }
    }
  };
  (normalizer.XmlNormalizer.new = function() {
    ;
  }).prototype = normalizer.XmlNormalizer.prototype;
  dart.addTypeTests(normalizer.XmlNormalizer);
  dart.setMethodSignature(normalizer.XmlNormalizer, () => ({
    __proto__: dart.getMethods(normalizer.XmlNormalizer.__proto__),
    visitDocument: dart.fnType(dart.void, [document.XmlDocument]),
    visitDocumentFragment: dart.fnType(dart.void, [document_fragment.XmlDocumentFragment]),
    visitElement: dart.fnType(dart.void, [element.XmlElement]),
    [_normalize]: dart.fnType(dart.void, [core.List$(node$.XmlNode)]),
    [_removeEmpty]: dart.fnType(dart.void, [core.List$(node$.XmlNode)]),
    [_mergeAdjacent]: dart.fnType(dart.void, [core.List$(node$.XmlNode)])
  }));
  dart.setLibraryUri(normalizer.XmlNormalizer, "package:xml/src/xml/visitors/normalizer.dart");
  dart.defineLazy(normalizer.XmlNormalizer, {
    /*normalizer.XmlNormalizer.defaultInstance*/get defaultInstance() {
      return new normalizer.XmlNormalizer.new();
    }
  });
  const _filterElements = dart.privateName(parent, "_filterElements");
  const XmlParent_children = dart.privateName(parent, "XmlParent.children");
  parent.XmlParent = class XmlParent extends node$.XmlNode {
    get children() {
      return this[children$0];
    }
    set children(value) {
      super.children = value;
    }
    findElements(name, opts) {
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      return this[_filterElements](this.children, name, namespace);
    }
    findAllElements(name, opts) {
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      return this[_filterElements](this.descendants, name, namespace);
    }
    [_filterElements](iterable, name, namespace) {
      let matcher = name_matcher.createNameMatcher(name, namespace);
      return iterable[$whereType](element.XmlElement)[$where](matcher);
    }
  };
  (parent.XmlParent.new = function(supportedChildrenTypes, childrenIterable) {
    this[children$0] = new (XmlNodeListOfXmlNode()).new(supportedChildrenTypes);
    parent.XmlParent.__proto__.new.call(this);
    this.children.attachParent(this);
    this.children.addAll(childrenIterable);
  }).prototype = parent.XmlParent.prototype;
  dart.addTypeTests(parent.XmlParent);
  const children$0 = XmlParent_children;
  dart.setMethodSignature(parent.XmlParent, () => ({
    __proto__: dart.getMethods(parent.XmlParent.__proto__),
    findElements: dart.fnType(core.Iterable$(element.XmlElement), [core.String], {namespace: core.String}),
    findAllElements: dart.fnType(core.Iterable$(element.XmlElement), [core.String], {namespace: core.String}),
    [_filterElements]: dart.fnType(core.Iterable$(element.XmlElement), [core.Iterable$(node$.XmlNode), core.String, core.String])
  }));
  dart.setLibraryUri(parent.XmlParent, "package:xml/src/xml/nodes/parent.dart");
  dart.setFieldSignature(parent.XmlParent, () => ({
    __proto__: dart.getFields(parent.XmlParent.__proto__),
    children: dart.finalFieldType(node_list.XmlNodeList$(node$.XmlNode))
  }));
  const XmlElement_name = dart.privateName(element, "XmlElement.name");
  const XmlElement_attributes = dart.privateName(element, "XmlElement.attributes");
  const XmlElement_isSelfClosing = dart.privateName(element, "XmlElement.isSelfClosing");
  element.XmlElement = class XmlElement extends parent.XmlParent {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get attributes() {
      return this[attributes$];
    }
    set attributes(value) {
      super.attributes = value;
    }
    get isSelfClosing() {
      return this[isSelfClosing$];
    }
    set isSelfClosing(value) {
      this[isSelfClosing$] = value;
    }
    getAttribute(name, opts) {
      let t0;
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      t0 = this.getAttributeNode(name, {namespace: namespace});
      return t0 == null ? null : t0.value;
    }
    getAttributeNode(name, opts) {
      let namespace = opts && 'namespace' in opts ? opts.namespace : null;
      return this.attributes.firstWhere(name_matcher.createNameMatcher(name, namespace), {orElse: dart.fn(() => null, VoidToNull())});
    }
    get nodeType() {
      return node_type.XmlNodeType.ELEMENT;
    }
    accept(visitor) {
      return visitor.visitElement(this);
    }
  };
  (element.XmlElement.new = function(name, attributesIterable, children, isSelfClosing) {
    if (attributesIterable === void 0) attributesIterable = C7 || CT.C7;
    if (children === void 0) children = C6 || CT.C6;
    if (isSelfClosing === void 0) isSelfClosing = true;
    this[name$0] = name;
    this[isSelfClosing$] = isSelfClosing;
    this[attributes$] = new (XmlNodeListOfXmlAttribute()).new(element.attributeNodeTypes);
    element.XmlElement.__proto__.new.call(this, element.childrenNodeTypes, children);
    this.name.attachParent(this);
    this.attributes.attachParent(this);
    this.attributes.addAll(attributesIterable);
  }).prototype = element.XmlElement.prototype;
  dart.addTypeTests(element.XmlElement);
  const name$0 = XmlElement_name;
  const attributes$ = XmlElement_attributes;
  const isSelfClosing$ = XmlElement_isSelfClosing;
  element.XmlElement[dart.implements] = () => [named.XmlNamed];
  dart.setMethodSignature(element.XmlElement, () => ({
    __proto__: dart.getMethods(element.XmlElement.__proto__),
    getAttribute: dart.fnType(core.String, [core.String], {namespace: core.String}),
    getAttributeNode: dart.fnType(attribute$.XmlAttribute, [core.String], {namespace: core.String}),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(element.XmlElement, () => ({
    __proto__: dart.getGetters(element.XmlElement.__proto__),
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(element.XmlElement, "package:xml/src/xml/nodes/element.dart");
  dart.setFieldSignature(element.XmlElement, () => ({
    __proto__: dart.getFields(element.XmlElement.__proto__),
    name: dart.finalFieldType(name$.XmlName),
    attributes: dart.finalFieldType(node_list.XmlNodeList$(attribute$.XmlAttribute)),
    isSelfClosing: dart.fieldType(core.bool)
  }));
  let C18;
  let C19;
  dart.defineLazy(element, {
    /*element.childrenNodeTypes*/get childrenNodeTypes() {
      return C18 || CT.C18;
    },
    /*element.attributeNodeTypes*/get attributeNodeTypes() {
      return C19 || CT.C19;
    }
  });
  const _expandFragment = dart.privateName(node_list, "_expandFragment");
  const _expandNodes = dart.privateName(node_list, "_expandNodes");
  const _is_XmlNodeList_default = Symbol('_is_XmlNodeList_default');
  const XmlNodeList_validNodeTypes = dart.privateName(node_list, "XmlNodeList.validNodeTypes");
  node_list.XmlNodeList$ = dart.generic(E => {
    let JSArrayOfE = () => (JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let ETobool = () => (ETobool = dart.constFn(dart.fnType(core.bool, [E])))();
    let XmlNodeToE = () => (XmlNodeToE = dart.constFn(dart.fnType(E, [node$.XmlNode])))();
    const DelegatingList_XmlOwned$36 = class DelegatingList_XmlOwned extends wrappers.DelegatingList$(E) {};
    (DelegatingList_XmlOwned$36.new = function(base) {
      owned.XmlOwned[dart.mixinNew].call(this);
      DelegatingList_XmlOwned$36.__proto__.new.call(this, base);
    }).prototype = DelegatingList_XmlOwned$36.prototype;
    dart.applyMixin(DelegatingList_XmlOwned$36, owned.XmlOwned);
    class XmlNodeList extends DelegatingList_XmlOwned$36 {
      get validNodeTypes() {
        return this[validNodeTypes$];
      }
      set validNodeTypes(value) {
        super.validNodeTypes = value;
      }
      _set(index, value$) {
        let value = value$;
        E._check(value);
        exceptions.XmlNodeTypeException.checkNotNull(value);
        core.RangeError.checkValidIndex(index, this);
        exceptions.XmlNodeTypeException.checkValidType(value, this.validNodeTypes);
        exceptions.XmlParentException.checkNoParent(value);
        this._get(index).detachParent(this.parent);
        super._set(index, value);
        value.attachParent(this.parent);
        return value$;
      }
      set length(length) {
        return dart.throw(new core.UnsupportedError.new("Unsupported length change of node list."));
      }
      get length() {
        return super.length;
      }
      add(value) {
        E._check(value);
        exceptions.XmlNodeTypeException.checkNotNull(value);
        if (dart.equals(value.nodeType, node_type.XmlNodeType.DOCUMENT_FRAGMENT)) {
          this.addAll(this[_expandFragment](value));
        } else {
          exceptions.XmlNodeTypeException.checkValidType(value, this.validNodeTypes);
          exceptions.XmlParentException.checkNoParent(value);
          super.add(value);
          value.attachParent(this.parent);
        }
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        let expanded = this[_expandNodes](iterable);
        super.addAll(expanded);
        for (let node of expanded) {
          node.attachParent(this.parent);
        }
      }
      remove(value) {
        let removed = super.remove(value);
        if (dart.test(removed)) {
          let node = E._check(value);
          node.detachParent(this.parent);
        }
        return removed;
      }
      removeWhere(test) {
        super.removeWhere(dart.fn(node => {
          let remove = test(node);
          if (dart.test(remove)) {
            node.detachParent(this.parent);
          }
          return remove;
        }, ETobool()));
      }
      retainWhere(test) {
        super.retainWhere(dart.fn(node => {
          let retain = test(node);
          if (!dart.test(retain)) {
            node.detachParent(this.parent);
          }
          return retain;
        }, ETobool()));
      }
      clear() {
        for (let node of this) {
          node.detachParent(this.parent);
        }
        super.clear();
      }
      removeLast() {
        let node = super.removeLast();
        node.detachParent(this.parent);
        return node;
      }
      removeRange(start, end) {
        core.RangeError.checkValidRange(start, end, this.length);
        for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          this._get(i).detachParent(this.parent);
        }
        super.removeRange(start, end);
      }
      fillRange(start, end, fillValue) {
        if (fillValue === void 0) fillValue = null;
        E._check(fillValue);
        return dart.throw(new core.UnsupportedError.new("Unsupported range filling of node list."));
      }
      setRange(start, end, iterable, skipCount) {
        IterableOfE()._check(iterable);
        if (skipCount === void 0) skipCount = 0;
        core.RangeError.checkValidRange(start, end, this.length);
        let expanded = this[_expandNodes](iterable);
        for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          this._get(i).detachParent(this.parent);
        }
        super.setRange(start, end, expanded, skipCount);
        for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          this._get(i).attachParent(this.parent);
        }
      }
      replaceRange(start, end, iterable) {
        IterableOfE()._check(iterable);
        core.RangeError.checkValidRange(start, end, this.length);
        let expanded = this[_expandNodes](iterable);
        for (let i = start; dart.notNull(i) < dart.notNull(end); i = dart.notNull(i) + 1) {
          this._get(i).detachParent(this.parent);
        }
        super.replaceRange(start, end, expanded);
        for (let node of expanded) {
          node.attachParent(this.parent);
        }
      }
      setAll(index, iterable) {
        IterableOfE()._check(iterable);
        return dart.throw(new core.UnimplementedError.new());
      }
      insert(index, element) {
        E._check(element);
        exceptions.XmlNodeTypeException.checkNotNull(element);
        if (dart.equals(element.nodeType, node_type.XmlNodeType.DOCUMENT_FRAGMENT)) {
          this.insertAll(index, this[_expandFragment](element));
        } else {
          exceptions.XmlNodeTypeException.checkValidType(element, this.validNodeTypes);
          exceptions.XmlParentException.checkNoParent(element);
          super.insert(index, element);
          element.attachParent(this.parent);
        }
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        let expanded = this[_expandNodes](iterable);
        super.insertAll(index, expanded);
        for (let node of expanded) {
          node.attachParent(this.parent);
        }
      }
      removeAt(index) {
        core.RangeError.checkValidIndex(index, this);
        this._get(index).detachParent(this.parent);
        return super.removeAt(index);
      }
      [_expandFragment](fragment) {
        return fragment.children[$map](E, dart.fn(node => {
          exceptions.XmlNodeTypeException.checkValidType(node, this.validNodeTypes);
          return E._check(node.copy());
        }, XmlNodeToE()));
      }
      [_expandNodes](iterable) {
        let expanded = JSArrayOfE().of([]);
        for (let node of iterable) {
          exceptions.XmlNodeTypeException.checkNotNull(node);
          if (dart.equals(node.nodeType, node_type.XmlNodeType.DOCUMENT_FRAGMENT)) {
            expanded[$addAll](this[_expandFragment](node));
          } else {
            exceptions.XmlNodeTypeException.checkValidType(node, this.validNodeTypes);
            exceptions.XmlParentException.checkNoParent(node);
            expanded[$add](node);
          }
        }
        return expanded;
      }
    }
    (XmlNodeList.new = function(validNodeTypes) {
      this[validNodeTypes$] = validNodeTypes;
      XmlNodeList.__proto__.new.call(this, JSArrayOfE().of([]));
      ;
    }).prototype = XmlNodeList.prototype;
    dart.addTypeTests(XmlNodeList);
    XmlNodeList.prototype[_is_XmlNodeList_default] = true;
    const validNodeTypes$ = XmlNodeList_validNodeTypes;
    dart.setMethodSignature(XmlNodeList, () => ({
      __proto__: dart.getMethods(XmlNodeList.__proto__),
      [_expandFragment]: dart.fnType(core.Iterable$(E), [E]),
      [_expandNodes]: dart.fnType(core.Iterable$(E), [core.Iterable$(E)])
    }));
    dart.setLibraryUri(XmlNodeList, "package:xml/src/xml/utils/node_list.dart");
    dart.setFieldSignature(XmlNodeList, () => ({
      __proto__: dart.getFields(XmlNodeList.__proto__),
      validNodeTypes: dart.finalFieldType(core.Set$(node_type.XmlNodeType))
    }));
    dart.defineExtensionMethods(XmlNodeList, [
      '_set',
      'add',
      'addAll',
      'remove',
      'removeWhere',
      'retainWhere',
      'clear',
      'removeLast',
      'removeRange',
      'fillRange',
      'setRange',
      'replaceRange',
      'setAll',
      'insert',
      'insertAll',
      'removeAt'
    ]);
    dart.defineExtensionAccessors(XmlNodeList, ['length']);
    return XmlNodeList;
  });
  node_list.XmlNodeList = node_list.XmlNodeList$();
  dart.addTypeTests(node_list.XmlNodeList, _is_XmlNodeList_default);
  const XmlException_message = dart.privateName(exceptions, "XmlException.message");
  exceptions.XmlException = class XmlException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      let t0;
      t0 = this.message;
      return t0 == null ? super[$toString]() : t0;
    }
  };
  (exceptions.XmlException.new = function(message) {
    if (message === void 0) message = null;
    this[message$] = message;
    ;
  }).prototype = exceptions.XmlException.prototype;
  dart.addTypeTests(exceptions.XmlException);
  const message$ = XmlException_message;
  exceptions.XmlException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(exceptions.XmlException, "package:xml/src/xml/utils/exceptions.dart");
  dart.setFieldSignature(exceptions.XmlException, () => ({
    __proto__: dart.getFields(exceptions.XmlException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(exceptions.XmlException, ['toString']);
  const XmlParserException_line = dart.privateName(exceptions, "XmlParserException.line");
  const XmlParserException_column = dart.privateName(exceptions, "XmlParserException.column");
  exceptions.XmlParserException = class XmlParserException extends exceptions.XmlException {
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
    }
    toString() {
      return dart.str(super.toString()) + " at " + dart.str(this.line) + ":" + dart.str(this.column);
    }
  };
  (exceptions.XmlParserException.new = function(message, line, column) {
    this[line$] = line;
    this[column$] = column;
    exceptions.XmlParserException.__proto__.new.call(this, message);
    ;
  }).prototype = exceptions.XmlParserException.prototype;
  dart.addTypeTests(exceptions.XmlParserException);
  const line$ = XmlParserException_line;
  const column$ = XmlParserException_column;
  dart.setLibraryUri(exceptions.XmlParserException, "package:xml/src/xml/utils/exceptions.dart");
  dart.setFieldSignature(exceptions.XmlParserException, () => ({
    __proto__: dart.getFields(exceptions.XmlParserException.__proto__),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(exceptions.XmlParserException, ['toString']);
  exceptions.XmlNodeTypeException = class XmlNodeTypeException extends exceptions.XmlException {
    static checkNotNull(node) {
      if (node == null) {
        dart.throw(new exceptions.XmlNodeTypeException.new("Node must not be null."));
      }
    }
    static checkValidType(node, types) {
      if (!dart.test(types[$contains](node.nodeType))) {
        dart.throw(new exceptions.XmlNodeTypeException.new("Expected node of type: " + dart.str(types)));
      }
    }
  };
  (exceptions.XmlNodeTypeException.new = function(message) {
    exceptions.XmlNodeTypeException.__proto__.new.call(this, message);
    ;
  }).prototype = exceptions.XmlNodeTypeException.prototype;
  dart.addTypeTests(exceptions.XmlNodeTypeException);
  dart.setLibraryUri(exceptions.XmlNodeTypeException, "package:xml/src/xml/utils/exceptions.dart");
  exceptions.XmlParentException = class XmlParentException extends exceptions.XmlException {
    static checkNoParent(owned) {
      if (dart.test(owned.hasParent)) {
        dart.throw(new exceptions.XmlParentException.new("Node already has a parent, copy or remove it first: " + dart.str(owned)));
      }
    }
  };
  (exceptions.XmlParentException.new = function(message) {
    exceptions.XmlParentException.__proto__.new.call(this, message);
    ;
  }).prototype = exceptions.XmlParentException.prototype;
  dart.addTypeTests(exceptions.XmlParentException);
  dart.setLibraryUri(exceptions.XmlParentException, "package:xml/src/xml/utils/exceptions.dart");
  exceptions.XmlTagException = class XmlTagException extends exceptions.XmlException {};
  (exceptions.XmlTagException.new = function(message) {
    exceptions.XmlTagException.__proto__.new.call(this, message);
    ;
  }).prototype = exceptions.XmlTagException.prototype;
  dart.addTypeTests(exceptions.XmlTagException);
  dart.setLibraryUri(exceptions.XmlTagException, "package:xml/src/xml/utils/exceptions.dart");
  named.XmlNamed = class XmlNamed extends core.Object {};
  (named.XmlNamed.new = function() {
    ;
  }).prototype = named.XmlNamed.prototype;
  dart.addTypeTests(named.XmlNamed);
  dart.setLibraryUri(named.XmlNamed, "package:xml/src/xml/utils/named.dart");
  const _value = dart.privateName(attribute$, "_value");
  const XmlAttribute_name = dart.privateName(attribute$, "XmlAttribute.name");
  const XmlAttribute_attributeType = dart.privateName(attribute$, "XmlAttribute.attributeType");
  attribute$.XmlAttribute = class XmlAttribute extends node$.XmlNode {
    get name() {
      return this[name$1];
    }
    set name(value) {
      super.name = value;
    }
    get attributeType() {
      return this[attributeType$];
    }
    set attributeType(value) {
      super.attributeType = value;
    }
    get value() {
      return this[_value];
    }
    set value(value) {
      core.ArgumentError.checkNotNull(value, "value");
      this[_value] = value;
    }
    get nodeType() {
      return node_type.XmlNodeType.ATTRIBUTE;
    }
    accept(visitor) {
      return visitor.visitAttribute(this);
    }
  };
  (attribute$.XmlAttribute.new = function(name, value, attributeType) {
    if (attributeType === void 0) attributeType = C4 || CT.C4;
    this[_value] = null;
    this[name$1] = name;
    this[attributeType$] = attributeType;
    attribute$.XmlAttribute.__proto__.new.call(this);
    this.name.attachParent(this);
    this.value = value;
  }).prototype = attribute$.XmlAttribute.prototype;
  dart.addTypeTests(attribute$.XmlAttribute);
  const name$1 = XmlAttribute_name;
  const attributeType$ = XmlAttribute_attributeType;
  attribute$.XmlAttribute[dart.implements] = () => [named.XmlNamed];
  dart.setMethodSignature(attribute$.XmlAttribute, () => ({
    __proto__: dart.getMethods(attribute$.XmlAttribute.__proto__),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(attribute$.XmlAttribute, () => ({
    __proto__: dart.getGetters(attribute$.XmlAttribute.__proto__),
    value: core.String,
    nodeType: node_type.XmlNodeType
  }));
  dart.setSetterSignature(attribute$.XmlAttribute, () => ({
    __proto__: dart.getSetters(attribute$.XmlAttribute.__proto__),
    value: core.String
  }));
  dart.setLibraryUri(attribute$.XmlAttribute, "package:xml/src/xml/nodes/attribute.dart");
  dart.setFieldSignature(attribute$.XmlAttribute, () => ({
    __proto__: dart.getFields(attribute$.XmlAttribute.__proto__),
    name: dart.finalFieldType(name$.XmlName),
    [_value]: dart.fieldType(core.String),
    attributeType: dart.finalFieldType(attribute_type.XmlAttributeType)
  }));
  name_matcher.createNameMatcher = function createNameMatcher(name, namespace) {
    if (name == null) {
      dart.throw(new core.ArgumentError.new("Illegal name matcher."));
    } else if (name === "*") {
      if (namespace == null || namespace === "*") {
        return dart.fn(named => true, XmlNamedTobool());
      } else {
        return dart.fn(named => named.name.namespaceUri == namespace, XmlNamedTobool());
      }
    } else {
      if (namespace == null) {
        return dart.fn(named => named.name.qualified == name, XmlNamedTobool());
      } else if (namespace === "*") {
        return dart.fn(named => named.name.local == name, XmlNamedTobool());
      } else {
        return dart.fn(named => named.name.local == name && named.name.namespaceUri == namespace, XmlNamedTobool());
      }
    }
  };
  document_fragment.XmlDocumentFragment = class XmlDocumentFragment extends parent.XmlParent {
    get document() {
      return null;
    }
    get text() {
      return null;
    }
    get nodeType() {
      return node_type.XmlNodeType.DOCUMENT_FRAGMENT;
    }
    accept(visitor) {
      return visitor.visitDocumentFragment(this);
    }
  };
  (document_fragment.XmlDocumentFragment.new = function(children) {
    if (children === void 0) children = C6 || CT.C6;
    document_fragment.XmlDocumentFragment.__proto__.new.call(this, document_fragment.childrenNodeTypes, children);
    ;
  }).prototype = document_fragment.XmlDocumentFragment.prototype;
  dart.addTypeTests(document_fragment.XmlDocumentFragment);
  dart.setMethodSignature(document_fragment.XmlDocumentFragment, () => ({
    __proto__: dart.getMethods(document_fragment.XmlDocumentFragment.__proto__),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(document_fragment.XmlDocumentFragment, () => ({
    __proto__: dart.getGetters(document_fragment.XmlDocumentFragment.__proto__),
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(document_fragment.XmlDocumentFragment, "package:xml/src/xml/nodes/document_fragment.dart");
  let C20;
  dart.defineLazy(document_fragment, {
    /*document_fragment.childrenNodeTypes*/get childrenNodeTypes() {
      return C20 || CT.C20;
    }
  });
  document.XmlDocument = class XmlDocument extends parent.XmlParent {
    get doctypeElement() {
      return doctype.XmlDoctype._check(this.children.firstWhere(dart.fn(node => doctype.XmlDoctype.is(node), XmlNodeTobool()), {orElse: dart.fn(() => null, VoidToNull())}));
    }
    get rootElement() {
      return element.XmlElement._check(this.children.firstWhere(dart.fn(node => element.XmlElement.is(node), XmlNodeTobool()), {orElse: dart.fn(() => dart.throw(new core.StateError.new("Empty XML document")), VoidTobottom())}));
    }
    get document() {
      return this;
    }
    get text() {
      return null;
    }
    get nodeType() {
      return node_type.XmlNodeType.DOCUMENT;
    }
    accept(visitor) {
      return visitor.visitDocument(this);
    }
  };
  (document.XmlDocument.new = function(children) {
    if (children === void 0) children = C6 || CT.C6;
    document.XmlDocument.__proto__.new.call(this, document.childrenNodeTypes, children);
    ;
  }).prototype = document.XmlDocument.prototype;
  dart.addTypeTests(document.XmlDocument);
  dart.setMethodSignature(document.XmlDocument, () => ({
    __proto__: dart.getMethods(document.XmlDocument.__proto__),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(document.XmlDocument, () => ({
    __proto__: dart.getGetters(document.XmlDocument.__proto__),
    doctypeElement: doctype.XmlDoctype,
    rootElement: element.XmlElement,
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(document.XmlDocument, "package:xml/src/xml/nodes/document.dart");
  dart.defineLazy(document, {
    /*document.childrenNodeTypes*/get childrenNodeTypes() {
      return C20 || CT.C20;
    }
  });
  doctype.XmlDoctype = class XmlDoctype extends data.XmlData {
    get nodeType() {
      return node_type.XmlNodeType.DOCUMENT_TYPE;
    }
    accept(visitor) {
      return visitor.visitDoctype(this);
    }
  };
  (doctype.XmlDoctype.new = function(text) {
    doctype.XmlDoctype.__proto__.new.call(this, text);
    ;
  }).prototype = doctype.XmlDoctype.prototype;
  dart.addTypeTests(doctype.XmlDoctype);
  dart.setMethodSignature(doctype.XmlDoctype, () => ({
    __proto__: dart.getMethods(doctype.XmlDoctype.__proto__),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(doctype.XmlDoctype, () => ({
    __proto__: dart.getGetters(doctype.XmlDoctype.__proto__),
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(doctype.XmlDoctype, "package:xml/src/xml/nodes/doctype.dart");
  cdata.XmlCDATA = class XmlCDATA extends data.XmlData {
    get nodeType() {
      return node_type.XmlNodeType.CDATA;
    }
    accept(visitor) {
      return visitor.visitCDATA(this);
    }
  };
  (cdata.XmlCDATA.new = function(text) {
    cdata.XmlCDATA.__proto__.new.call(this, text);
    ;
  }).prototype = cdata.XmlCDATA.prototype;
  dart.addTypeTests(cdata.XmlCDATA);
  dart.setMethodSignature(cdata.XmlCDATA, () => ({
    __proto__: dart.getMethods(cdata.XmlCDATA.__proto__),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(cdata.XmlCDATA, () => ({
    __proto__: dart.getGetters(cdata.XmlCDATA.__proto__),
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(cdata.XmlCDATA, "package:xml/src/xml/nodes/cdata.dart");
  const XmlPrecedingIterable_start = dart.privateName(preceding, "XmlPrecedingIterable.start");
  preceding.XmlPrecedingIterable = class XmlPrecedingIterable extends collection.IterableBase$(node$.XmlNode) {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get iterator() {
      return new preceding.XmlPrecedingIterator.new(this.start);
    }
  };
  (preceding.XmlPrecedingIterable.new = function(start) {
    this[start$] = start;
    preceding.XmlPrecedingIterable.__proto__.new.call(this);
    ;
  }).prototype = preceding.XmlPrecedingIterable.prototype;
  dart.addTypeTests(preceding.XmlPrecedingIterable);
  const start$ = XmlPrecedingIterable_start;
  dart.setGetterSignature(preceding.XmlPrecedingIterable, () => ({
    __proto__: dart.getGetters(preceding.XmlPrecedingIterable.__proto__),
    iterator: core.Iterator$(node$.XmlNode),
    [$iterator]: core.Iterator$(node$.XmlNode)
  }));
  dart.setLibraryUri(preceding.XmlPrecedingIterable, "package:xml/src/xml/iterators/preceding.dart");
  dart.setFieldSignature(preceding.XmlPrecedingIterable, () => ({
    __proto__: dart.getFields(preceding.XmlPrecedingIterable.__proto__),
    start: dart.finalFieldType(node$.XmlNode)
  }));
  dart.defineExtensionAccessors(preceding.XmlPrecedingIterable, ['iterator']);
  const XmlPrecedingIterator_start = dart.privateName(preceding, "XmlPrecedingIterator.start");
  const XmlPrecedingIterator_todo = dart.privateName(preceding, "XmlPrecedingIterator.todo");
  const XmlPrecedingIterator_current = dart.privateName(preceding, "XmlPrecedingIterator.current");
  preceding.XmlPrecedingIterator = class XmlPrecedingIterator extends core.Iterator$(node$.XmlNode) {
    get start() {
      return this[start$0];
    }
    set start(value) {
      super.start = value;
    }
    get todo() {
      return this[todo];
    }
    set todo(value) {
      super.todo = value;
    }
    get current() {
      return this[current];
    }
    set current(value) {
      this[current] = value;
    }
    moveNext() {
      if (dart.test(this.todo[$isEmpty])) {
        this.current = null;
        return false;
      } else {
        this.current = this.todo[$removeLast]();
        if (this.current == this.start) {
          this.current = null;
          this.todo[$clear]();
          return false;
        }
        this.todo[$addAll](this.current.children[$reversed]);
        this.todo[$addAll](this.current.attributes[$reversed]);
        return true;
      }
    }
  };
  (preceding.XmlPrecedingIterator.new = function(start) {
    this[todo] = JSArrayOfXmlNode().of([]);
    this[current] = null;
    this[start$0] = start;
    this.todo[$add](this.start.root);
  }).prototype = preceding.XmlPrecedingIterator.prototype;
  dart.addTypeTests(preceding.XmlPrecedingIterator);
  const start$0 = XmlPrecedingIterator_start;
  const todo = XmlPrecedingIterator_todo;
  const current = XmlPrecedingIterator_current;
  dart.setMethodSignature(preceding.XmlPrecedingIterator, () => ({
    __proto__: dart.getMethods(preceding.XmlPrecedingIterator.__proto__),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(preceding.XmlPrecedingIterator, "package:xml/src/xml/iterators/preceding.dart");
  dart.setFieldSignature(preceding.XmlPrecedingIterator, () => ({
    __proto__: dart.getFields(preceding.XmlPrecedingIterator.__proto__),
    start: dart.finalFieldType(node$.XmlNode),
    todo: dart.finalFieldType(core.List$(node$.XmlNode)),
    current: dart.fieldType(node$.XmlNode)
  }));
  const XmlFollowingIterable_start = dart.privateName(following, "XmlFollowingIterable.start");
  following.XmlFollowingIterable = class XmlFollowingIterable extends collection.IterableBase$(node$.XmlNode) {
    get start() {
      return this[start$1];
    }
    set start(value) {
      super.start = value;
    }
    get iterator() {
      return new following.XmlFollowingIterator.new(this.start);
    }
  };
  (following.XmlFollowingIterable.new = function(start) {
    this[start$1] = start;
    following.XmlFollowingIterable.__proto__.new.call(this);
    ;
  }).prototype = following.XmlFollowingIterable.prototype;
  dart.addTypeTests(following.XmlFollowingIterable);
  const start$1 = XmlFollowingIterable_start;
  dart.setGetterSignature(following.XmlFollowingIterable, () => ({
    __proto__: dart.getGetters(following.XmlFollowingIterable.__proto__),
    iterator: core.Iterator$(node$.XmlNode),
    [$iterator]: core.Iterator$(node$.XmlNode)
  }));
  dart.setLibraryUri(following.XmlFollowingIterable, "package:xml/src/xml/iterators/following.dart");
  dart.setFieldSignature(following.XmlFollowingIterable, () => ({
    __proto__: dart.getFields(following.XmlFollowingIterable.__proto__),
    start: dart.finalFieldType(node$.XmlNode)
  }));
  dart.defineExtensionAccessors(following.XmlFollowingIterable, ['iterator']);
  const XmlFollowingIterator_todo = dart.privateName(following, "XmlFollowingIterator.todo");
  const XmlFollowingIterator_current = dart.privateName(following, "XmlFollowingIterator.current");
  following.XmlFollowingIterator = class XmlFollowingIterator extends core.Iterator$(node$.XmlNode) {
    get todo() {
      return this[todo$];
    }
    set todo(value) {
      super.todo = value;
    }
    get current() {
      return this[current$];
    }
    set current(value) {
      this[current$] = value;
    }
    moveNext() {
      if (dart.test(this.todo[$isEmpty])) {
        this.current = null;
        return false;
      } else {
        this.current = this.todo[$removeLast]();
        this.todo[$addAll](this.current.children[$reversed]);
        this.todo[$addAll](this.current.attributes[$reversed]);
        return true;
      }
    }
  };
  (following.XmlFollowingIterator.new = function(start) {
    this[todo$] = JSArrayOfXmlNode().of([]);
    this[current$] = null;
    let following = JSArrayOfXmlNode().of([]);
    for (let parent = start.parent, child = start; parent != null; parent = parent.parent, child = child.parent) {
      if (attribute$.XmlAttribute.is(child)) {
        let attributesIndex = parent.attributes[$indexOf](child);
        following[$addAll](parent.attributes[$sublist](dart.notNull(attributesIndex) + 1));
        following[$addAll](parent.children);
      } else {
        let childrenIndex = parent.children[$indexOf](child);
        following[$addAll](parent.children[$sublist](dart.notNull(childrenIndex) + 1));
      }
    }
    this.todo[$addAll](following[$reversed]);
  }).prototype = following.XmlFollowingIterator.prototype;
  dart.addTypeTests(following.XmlFollowingIterator);
  const todo$ = XmlFollowingIterator_todo;
  const current$ = XmlFollowingIterator_current;
  dart.setMethodSignature(following.XmlFollowingIterator, () => ({
    __proto__: dart.getMethods(following.XmlFollowingIterator.__proto__),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(following.XmlFollowingIterator, "package:xml/src/xml/iterators/following.dart");
  dart.setFieldSignature(following.XmlFollowingIterator, () => ({
    __proto__: dart.getFields(following.XmlFollowingIterator.__proto__),
    todo: dart.finalFieldType(core.List$(node$.XmlNode)),
    current: dart.fieldType(node$.XmlNode)
  }));
  const XmlDescendantsIterable_start = dart.privateName(descendants, "XmlDescendantsIterable.start");
  descendants.XmlDescendantsIterable = class XmlDescendantsIterable extends collection.IterableBase$(node$.XmlNode) {
    get start() {
      return this[start$2];
    }
    set start(value) {
      super.start = value;
    }
    get iterator() {
      return new descendants.XmlDescendantsIterator.new(this.start);
    }
  };
  (descendants.XmlDescendantsIterable.new = function(start) {
    this[start$2] = start;
    descendants.XmlDescendantsIterable.__proto__.new.call(this);
    ;
  }).prototype = descendants.XmlDescendantsIterable.prototype;
  dart.addTypeTests(descendants.XmlDescendantsIterable);
  const start$2 = XmlDescendantsIterable_start;
  dart.setGetterSignature(descendants.XmlDescendantsIterable, () => ({
    __proto__: dart.getGetters(descendants.XmlDescendantsIterable.__proto__),
    iterator: core.Iterator$(node$.XmlNode),
    [$iterator]: core.Iterator$(node$.XmlNode)
  }));
  dart.setLibraryUri(descendants.XmlDescendantsIterable, "package:xml/src/xml/iterators/descendants.dart");
  dart.setFieldSignature(descendants.XmlDescendantsIterable, () => ({
    __proto__: dart.getFields(descendants.XmlDescendantsIterable.__proto__),
    start: dart.finalFieldType(node$.XmlNode)
  }));
  dart.defineExtensionAccessors(descendants.XmlDescendantsIterable, ['iterator']);
  const XmlDescendantsIterator_todo = dart.privateName(descendants, "XmlDescendantsIterator.todo");
  const XmlDescendantsIterator_current = dart.privateName(descendants, "XmlDescendantsIterator.current");
  descendants.XmlDescendantsIterator = class XmlDescendantsIterator extends core.Iterator$(node$.XmlNode) {
    get todo() {
      return this[todo$0];
    }
    set todo(value) {
      super.todo = value;
    }
    get current() {
      return this[current$0];
    }
    set current(value) {
      this[current$0] = value;
    }
    push(node) {
      this.todo[$addAll](node.children[$reversed]);
      this.todo[$addAll](node.attributes[$reversed]);
    }
    moveNext() {
      if (dart.test(this.todo[$isEmpty])) {
        this.current = null;
        return false;
      } else {
        this.current = this.todo[$removeLast]();
        this.push(this.current);
        return true;
      }
    }
  };
  (descendants.XmlDescendantsIterator.new = function(start) {
    this[todo$0] = JSArrayOfXmlNode().of([]);
    this[current$0] = null;
    this.push(start);
  }).prototype = descendants.XmlDescendantsIterator.prototype;
  dart.addTypeTests(descendants.XmlDescendantsIterator);
  const todo$0 = XmlDescendantsIterator_todo;
  const current$0 = XmlDescendantsIterator_current;
  dart.setMethodSignature(descendants.XmlDescendantsIterator, () => ({
    __proto__: dart.getMethods(descendants.XmlDescendantsIterator.__proto__),
    push: dart.fnType(dart.void, [node$.XmlNode]),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(descendants.XmlDescendantsIterator, "package:xml/src/xml/iterators/descendants.dart");
  dart.setFieldSignature(descendants.XmlDescendantsIterator, () => ({
    __proto__: dart.getFields(descendants.XmlDescendantsIterator.__proto__),
    todo: dart.finalFieldType(core.List$(node$.XmlNode)),
    current: dart.fieldType(node$.XmlNode)
  }));
  const XmlAncestorsIterable_start = dart.privateName(ancestors, "XmlAncestorsIterable.start");
  ancestors.XmlAncestorsIterable = class XmlAncestorsIterable extends collection.IterableBase$(node$.XmlNode) {
    get start() {
      return this[start$3];
    }
    set start(value) {
      super.start = value;
    }
    get iterator() {
      return new ancestors.XmlAncestorsIterator.new(this.start);
    }
  };
  (ancestors.XmlAncestorsIterable.new = function(start) {
    this[start$3] = start;
    ancestors.XmlAncestorsIterable.__proto__.new.call(this);
    ;
  }).prototype = ancestors.XmlAncestorsIterable.prototype;
  dart.addTypeTests(ancestors.XmlAncestorsIterable);
  const start$3 = XmlAncestorsIterable_start;
  dart.setGetterSignature(ancestors.XmlAncestorsIterable, () => ({
    __proto__: dart.getGetters(ancestors.XmlAncestorsIterable.__proto__),
    iterator: core.Iterator$(node$.XmlNode),
    [$iterator]: core.Iterator$(node$.XmlNode)
  }));
  dart.setLibraryUri(ancestors.XmlAncestorsIterable, "package:xml/src/xml/iterators/ancestors.dart");
  dart.setFieldSignature(ancestors.XmlAncestorsIterable, () => ({
    __proto__: dart.getFields(ancestors.XmlAncestorsIterable.__proto__),
    start: dart.finalFieldType(node$.XmlNode)
  }));
  dart.defineExtensionAccessors(ancestors.XmlAncestorsIterable, ['iterator']);
  const XmlAncestorsIterator_current = dart.privateName(ancestors, "XmlAncestorsIterator.current");
  ancestors.XmlAncestorsIterator = class XmlAncestorsIterator extends core.Iterator$(node$.XmlNode) {
    get current() {
      return this[current$1];
    }
    set current(value) {
      this[current$1] = value;
    }
    moveNext() {
      if (this.current != null) {
        this.current = this.current.parent;
      }
      return this.current != null;
    }
  };
  (ancestors.XmlAncestorsIterator.new = function(current) {
    this[current$1] = current;
    ;
  }).prototype = ancestors.XmlAncestorsIterator.prototype;
  dart.addTypeTests(ancestors.XmlAncestorsIterator);
  const current$1 = XmlAncestorsIterator_current;
  dart.setMethodSignature(ancestors.XmlAncestorsIterator, () => ({
    __proto__: dart.getMethods(ancestors.XmlAncestorsIterator.__proto__),
    moveNext: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(ancestors.XmlAncestorsIterator, "package:xml/src/xml/iterators/ancestors.dart");
  dart.setFieldSignature(ancestors.XmlAncestorsIterator, () => ({
    __proto__: dart.getFields(ancestors.XmlAncestorsIterator.__proto__),
    current: dart.fieldType(node$.XmlNode)
  }));
  const XmlProcessing_target = dart.privateName(processing, "XmlProcessing.target");
  processing.XmlProcessing = class XmlProcessing extends data.XmlData {
    get target() {
      return this[target$];
    }
    set target(value) {
      super.target = value;
    }
    get nodeType() {
      return node_type.XmlNodeType.PROCESSING;
    }
    accept(visitor) {
      return visitor.visitProcessing(this);
    }
  };
  (processing.XmlProcessing.new = function(target, text) {
    this[target$] = target;
    processing.XmlProcessing.__proto__.new.call(this, text);
    ;
  }).prototype = processing.XmlProcessing.prototype;
  dart.addTypeTests(processing.XmlProcessing);
  const target$ = XmlProcessing_target;
  dart.setMethodSignature(processing.XmlProcessing, () => ({
    __proto__: dart.getMethods(processing.XmlProcessing.__proto__),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(processing.XmlProcessing, () => ({
    __proto__: dart.getGetters(processing.XmlProcessing.__proto__),
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(processing.XmlProcessing, "package:xml/src/xml/nodes/processing.dart");
  dart.setFieldSignature(processing.XmlProcessing, () => ({
    __proto__: dart.getFields(processing.XmlProcessing.__proto__),
    target: dart.finalFieldType(core.String)
  }));
  comment.XmlComment = class XmlComment extends data.XmlData {
    get nodeType() {
      return node_type.XmlNodeType.COMMENT;
    }
    accept(visitor) {
      return visitor.visitComment(this);
    }
  };
  (comment.XmlComment.new = function(text) {
    comment.XmlComment.__proto__.new.call(this, text);
    ;
  }).prototype = comment.XmlComment.prototype;
  dart.addTypeTests(comment.XmlComment);
  dart.setMethodSignature(comment.XmlComment, () => ({
    __proto__: dart.getMethods(comment.XmlComment.__proto__),
    accept: dart.fnType(dart.dynamic, [visitor.XmlVisitor])
  }));
  dart.setGetterSignature(comment.XmlComment, () => ({
    __proto__: dart.getGetters(comment.XmlComment.__proto__),
    nodeType: node_type.XmlNodeType
  }));
  dart.setLibraryUri(comment.XmlComment, "package:xml/src/xml/nodes/comment.dart");
  const XmlPrettyWriter_level = dart.privateName(pretty_writer, "XmlPrettyWriter.level");
  const XmlPrettyWriter_indent = dart.privateName(pretty_writer, "XmlPrettyWriter.indent");
  pretty_writer.XmlPrettyWriter = class XmlPrettyWriter extends writer.XmlWriter {
    get level() {
      return this[level$];
    }
    set level(value) {
      this[level$] = value;
    }
    get indent() {
      return this[indent$];
    }
    set indent(value) {
      super.indent = value;
    }
    visitCDATA(node) {
      this.newLine();
      super.visitCDATA(node);
    }
    visitComment(node) {
      this.newLine();
      super.visitComment(node);
    }
    visitDoctype(node) {
      this.newLine();
      super.visitDoctype(node);
    }
    visitElement(node) {
      this.newLine();
      this.buffer.write("<");
      this.visit(dart.dynamic, node.name);
      this.writeAttributes(node);
      if (dart.test(node.children.isEmpty) && dart.test(node.isSelfClosing)) {
        this.buffer.write("/>");
      } else {
        this.buffer.write(">");
        this.level = dart.notNull(this.level) + 1;
        this.writeChildren(node);
        this.level = dart.notNull(this.level) - 1;
        if (!dart.test(node.children.every(dart.fn(each => text$.XmlText.is(each), XmlNodeTobool())))) {
          this.newLine();
        }
        this.buffer.write("</");
        this.visit(dart.dynamic, node.name);
        this.buffer.write(">");
      }
    }
    visitProcessing(node) {
      this.newLine();
      super.visitProcessing(node);
    }
    visitText(node) {
      if (node.text[$trim]()[$isNotEmpty]) {
        super.visitText(node);
      }
    }
    newLine() {
      if (dart.test(this.buffer.isNotEmpty)) {
        this.buffer.writeln();
      }
      for (let i = 0; i < dart.notNull(this.level); i = i + 1) {
        this.buffer.write(this.indent);
      }
    }
  };
  (pretty_writer.XmlPrettyWriter.new = function(buffer, level, indent) {
    this[level$] = 0;
    this[level$] = level;
    this[indent$] = indent;
    pretty_writer.XmlPrettyWriter.__proto__.new.call(this, core.StringBuffer._check(buffer));
    ;
  }).prototype = pretty_writer.XmlPrettyWriter.prototype;
  dart.addTypeTests(pretty_writer.XmlPrettyWriter);
  const level$ = XmlPrettyWriter_level;
  const indent$ = XmlPrettyWriter_indent;
  dart.setMethodSignature(pretty_writer.XmlPrettyWriter, () => ({
    __proto__: dart.getMethods(pretty_writer.XmlPrettyWriter.__proto__),
    newLine: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(pretty_writer.XmlPrettyWriter, "package:xml/src/xml/visitors/pretty_writer.dart");
  dart.setFieldSignature(pretty_writer.XmlPrettyWriter, () => ({
    __proto__: dart.getFields(pretty_writer.XmlPrettyWriter.__proto__),
    level: dart.fieldType(core.int),
    indent: dart.finalFieldType(core.String)
  }));
  const XmlSimpleName_local = dart.privateName(simple_name, "XmlSimpleName.local");
  simple_name.XmlSimpleName = class XmlSimpleName extends name$.XmlName {
    get local() {
      return this[local$];
    }
    set local(value) {
      super.local = value;
    }
    get prefix() {
      return null;
    }
    get qualified() {
      return this.local;
    }
    get namespaceUri() {
      for (let node = this.parent; node != null; node = node.parent) {
        for (let attribute of node.attributes) {
          if (attribute.name.prefix == null && attribute.name.local === "xmlns") {
            return attribute.value;
          }
        }
      }
      return null;
    }
  };
  (simple_name.XmlSimpleName.new = function(local) {
    this[local$] = local;
    simple_name.XmlSimpleName.__proto__.internal.call(this);
    ;
  }).prototype = simple_name.XmlSimpleName.prototype;
  dart.addTypeTests(simple_name.XmlSimpleName);
  const local$ = XmlSimpleName_local;
  dart.setGetterSignature(simple_name.XmlSimpleName, () => ({
    __proto__: dart.getGetters(simple_name.XmlSimpleName.__proto__),
    prefix: core.String,
    qualified: core.String,
    namespaceUri: core.String
  }));
  dart.setLibraryUri(simple_name.XmlSimpleName, "package:xml/src/xml/utils/simple_name.dart");
  dart.setFieldSignature(simple_name.XmlSimpleName, () => ({
    __proto__: dart.getFields(simple_name.XmlSimpleName.__proto__),
    local: dart.finalFieldType(core.String)
  }));
  const XmlPrefixName_prefix = dart.privateName(prefix_name, "XmlPrefixName.prefix");
  const XmlPrefixName_local = dart.privateName(prefix_name, "XmlPrefixName.local");
  const XmlPrefixName_qualified = dart.privateName(prefix_name, "XmlPrefixName.qualified");
  prefix_name.XmlPrefixName = class XmlPrefixName extends name$.XmlName {
    get prefix() {
      return this[prefix$0];
    }
    set prefix(value) {
      super.prefix = value;
    }
    get local() {
      return this[local$0];
    }
    set local(value) {
      super.local = value;
    }
    get qualified() {
      return this[qualified$];
    }
    set qualified(value) {
      super.qualified = value;
    }
    get namespaceUri() {
      for (let node = this.parent; node != null; node = node.parent) {
        for (let attribute of node.attributes) {
          if (attribute.name.prefix === "xmlns" && attribute.name.local == this.prefix) {
            return attribute.value;
          }
        }
      }
      return null;
    }
  };
  (prefix_name.XmlPrefixName.new = function(prefix, local, qualified) {
    this[prefix$0] = prefix;
    this[local$0] = local;
    this[qualified$] = qualified;
    prefix_name.XmlPrefixName.__proto__.internal.call(this);
    ;
  }).prototype = prefix_name.XmlPrefixName.prototype;
  dart.addTypeTests(prefix_name.XmlPrefixName);
  const prefix$0 = XmlPrefixName_prefix;
  const local$0 = XmlPrefixName_local;
  const qualified$ = XmlPrefixName_qualified;
  dart.setGetterSignature(prefix_name.XmlPrefixName, () => ({
    __proto__: dart.getGetters(prefix_name.XmlPrefixName.__proto__),
    namespaceUri: core.String
  }));
  dart.setLibraryUri(prefix_name.XmlPrefixName, "package:xml/src/xml/utils/prefix_name.dart");
  dart.setFieldSignature(prefix_name.XmlPrefixName, () => ({
    __proto__: dart.getFields(prefix_name.XmlPrefixName.__proto__),
    prefix: dart.finalFieldType(core.String),
    local: dart.finalFieldType(core.String),
    qualified: dart.finalFieldType(core.String)
  }));
  production.XmlProductionDefinition = class XmlProductionDefinition extends grammar.GrammarDefinition {
    start() {
      return this.ref(dart.bind(this, 'document')).end();
    }
    attribute() {
      return this.ref(dart.bind(this, 'qualified')).seq(this.ref(dart.bind(this, 'spaceOptional'))).seq(char.char("=")).seq(this.ref(dart.bind(this, 'spaceOptional'))).seq(this.ref(dart.bind(this, 'attributeValue')));
    }
    attributeValue() {
      return this.ref(dart.bind(this, 'attributeValueDouble')).or(this.ref(dart.bind(this, 'attributeValueSingle')));
    }
    attributeValueDouble() {
      return char.char("\"").seq(new entities.XmlCharacterDataParser.new("\"", 0)).seq(char.char("\""));
    }
    attributeValueSingle() {
      return char.char("'").seq(new entities.XmlCharacterDataParser.new("'", 0)).seq(char.char("'"));
    }
    attributes() {
      return this.ref(dart.bind(this, 'space')).seq(this.ref(dart.bind(this, 'attribute'))).pick(dart.dynamic, 1).star();
    }
    comment() {
      return string.string("<!--").seq(any.any().starLazy(string.string("-->")).flatten("Expected comment content")).seq(string.string("-->"));
    }
    cdata() {
      return string.string("<![CDATA[").seq(any.any().starLazy(string.string("]]>")).flatten("Expected CDATA content")).seq(string.string("]]>"));
    }
    content() {
      return this.ref(dart.bind(this, 'characterData')).or(this.ref(dart.bind(this, 'element'))).or(this.ref(dart.bind(this, 'processing'))).or(this.ref(dart.bind(this, 'comment'))).or(this.ref(dart.bind(this, 'cdata'))).star();
    }
    doctype() {
      return string.string("<!DOCTYPE").seq(this.ref(dart.bind(this, 'space'))).seq(this.ref(dart.bind(this, 'nameToken')).or(this.ref(dart.bind(this, 'attributeValue'))).or(any.any().starLazy(char.char("[")).seq(char.char("[")).seq(any.any().starLazy(char.char("]"))).seq(char.char("]"))).separatedBy(dart.dynamic, this.ref(dart.bind(this, 'space'))).flatten("Expected doctype content")).seq(this.ref(dart.bind(this, 'spaceOptional'))).seq(char.char(">"));
    }
    document() {
      return this.ref(dart.bind(this, 'misc')).seq(this.ref(dart.bind(this, 'doctype')).optional()).seq(this.ref(dart.bind(this, 'misc'))).seq(this.ref(dart.bind(this, 'element'))).seq(this.ref(dart.bind(this, 'misc')));
    }
    element() {
      return char.char("<").seq(this.ref(dart.bind(this, 'qualified'))).seq(this.ref(dart.bind(this, 'attributes'))).seq(this.ref(dart.bind(this, 'spaceOptional'))).seq(string.string("/>").or(char.char(">").seq(this.ref(dart.bind(this, 'content'))).seq(string.string("</").token()).seq(this.ref(dart.bind(this, 'qualified'))).seq(this.ref(dart.bind(this, 'spaceOptional'))).seq(char.char(">"))));
    }
    processing() {
      return string.string("<?").seq(this.ref(dart.bind(this, 'nameToken'))).seq(this.ref(dart.bind(this, 'space')).seq(any.any().starLazy(string.string("?>")).flatten("Expected processing instruction content")).pick(dart.dynamic, 1).optional("")).seq(string.string("?>"));
    }
    qualified() {
      return this.ref(dart.bind(this, 'nameToken'));
    }
    characterData() {
      return new entities.XmlCharacterDataParser.new("<", 1);
    }
    misc() {
      return this.ref(dart.bind(this, 'spaceText')).or(this.ref(dart.bind(this, 'comment'))).or(this.ref(dart.bind(this, 'processing'))).star();
    }
    space() {
      return whitespace.whitespace().plus();
    }
    spaceText() {
      return this.ref(dart.bind(this, 'space')).flatten("Expected whitespace");
    }
    spaceOptional() {
      return whitespace.whitespace().star();
    }
    nameToken() {
      return this.ref(dart.bind(this, 'nameStartChar')).seq(this.ref(dart.bind(this, 'nameChar')).star()).flatten("Expected name");
    }
    nameStartChar() {
      return pattern.pattern(production.XmlProductionDefinition._nameStartChars);
    }
    nameChar() {
      return pattern.pattern(production.XmlProductionDefinition._nameChars);
    }
  };
  (production.XmlProductionDefinition.new = function() {
    production.XmlProductionDefinition.__proto__.new.call(this);
    ;
  }).prototype = production.XmlProductionDefinition.prototype;
  dart.addTypeTests(production.XmlProductionDefinition);
  dart.setMethodSignature(production.XmlProductionDefinition, () => ({
    __proto__: dart.getMethods(production.XmlProductionDefinition.__proto__),
    start: dart.fnType(parser.Parser, []),
    attribute: dart.fnType(parser.Parser, []),
    attributeValue: dart.fnType(parser.Parser, []),
    attributeValueDouble: dart.fnType(parser.Parser, []),
    attributeValueSingle: dart.fnType(parser.Parser, []),
    attributes: dart.fnType(parser.Parser, []),
    comment: dart.fnType(parser.Parser, []),
    cdata: dart.fnType(parser.Parser, []),
    content: dart.fnType(parser.Parser, []),
    doctype: dart.fnType(parser.Parser, []),
    document: dart.fnType(parser.Parser, []),
    element: dart.fnType(parser.Parser, []),
    processing: dart.fnType(parser.Parser, []),
    qualified: dart.fnType(parser.Parser, []),
    characterData: dart.fnType(parser.Parser, []),
    misc: dart.fnType(parser.Parser, []),
    space: dart.fnType(parser.Parser, []),
    spaceText: dart.fnType(parser.Parser, []),
    spaceOptional: dart.fnType(parser.Parser, []),
    nameToken: dart.fnType(parser.Parser, []),
    nameStartChar: dart.fnType(parser.Parser, []),
    nameChar: dart.fnType(parser.Parser, [])
  }));
  dart.setLibraryUri(production.XmlProductionDefinition, "package:xml/src/xml/production.dart");
  dart.defineLazy(production.XmlProductionDefinition, {
    /*production.XmlProductionDefinition._nameStartChars*/get _nameStartChars() {
      return ":A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、퟿豈-﷏ﷰ-�";
    },
    /*production.XmlProductionDefinition._nameChars*/get _nameChars() {
      return "-.0-9·̀-ͯ‿-⁀:A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、퟿豈-﷏ﷰ-�";
    }
  });
  const _is_XmlGrammarDefinition_default = Symbol('_is_XmlGrammarDefinition_default');
  grammar$.XmlGrammarDefinition$ = dart.generic((TNode, TName) => {
    let dynamicToTNode = () => (dynamicToTNode = dart.constFn(dart.fnType(TNode, [dart.dynamic])))();
    let JSArrayOfTNode = () => (JSArrayOfTNode = dart.constFn(_interceptors.JSArray$(TNode)))();
    class XmlGrammarDefinition extends production.XmlProductionDefinition {
      attribute() {
        return super.attribute().map(dart.dynamic, dart.fn(each => this.createAttribute(TName._check(dart.dsend(each, '_get', [0])), core.String._check(dart.dsend(dart.dsend(each, '_get', [4]), '_get', [0])), attribute_type.XmlAttributeType._check(dart.dsend(dart.dsend(each, '_get', [4]), '_get', [1]))), dynamicToTNode()));
      }
      attributeValueDouble() {
        return super.attributeValueDouble().map(dart.dynamic, dart.fn(each => [dart.dsend(each, '_get', [1]), attribute_type.XmlAttributeType.DOUBLE_QUOTE], dynamicToList()));
      }
      attributeValueSingle() {
        return super.attributeValueSingle().map(dart.dynamic, dart.fn(each => [dart.dsend(each, '_get', [1]), attribute_type.XmlAttributeType.SINGLE_QUOTE], dynamicToList()));
      }
      comment() {
        return super.comment().map(dart.dynamic, dart.fn(each => this.createComment(core.String._check(dart.dsend(each, '_get', [1]))), dynamicToTNode()));
      }
      cdata() {
        return super.cdata().map(dart.dynamic, dart.fn(each => this.createCDATA(core.String._check(dart.dsend(each, '_get', [1]))), dynamicToTNode()));
      }
      doctype() {
        return super.doctype().map(dart.dynamic, dart.fn(each => this.createDoctype(core.String._check(dart.dsend(each, '_get', [2]))), dynamicToTNode()));
      }
      document() {
        return super.document().map(dart.dynamic, dart.fn(each => {
          let nodes = [];
          nodes[$addAll](core.Iterable._check(dart.dsend(each, '_get', [0])));
          if (dart.dsend(each, '_get', [1]) != null) {
            nodes[$add](dart.dsend(each, '_get', [1]));
          }
          nodes[$addAll](core.Iterable._check(dart.dsend(each, '_get', [2])));
          nodes[$add](dart.dsend(each, '_get', [3]));
          nodes[$addAll](core.Iterable._check(dart.dsend(each, '_get', [4])));
          return this.createDocument(core.List.castFrom(dart.dynamic, TNode, nodes));
        }, dynamicToTNode()));
      }
      element() {
        return super.element().map(dart.dynamic, dart.fn(list => {
          let name = TName._check(dart.dsend(list, '_get', [1]));
          let attributes = core.List.castFrom(dart.dynamic, TNode, core.List._check(dart.dsend(list, '_get', [2])));
          if (dart.equals(dart.dsend(list, '_get', [4]), "/>")) {
            return this.createElement(name, attributes, JSArrayOfTNode().of([]), true);
          } else {
            if (dart.equals(dart.dsend(list, '_get', [1]), dart.dsend(dart.dsend(list, '_get', [4]), '_get', [3]))) {
              let children = core.List.castFrom(dart.dynamic, TNode, core.List._check(dart.dsend(dart.dsend(list, '_get', [4]), '_get', [1])));
              return this.createElement(name, attributes, children, children[$isNotEmpty]);
            } else {
              let token = token$.Token._check(dart.dsend(dart.dsend(list, '_get', [4]), '_get', [2]));
              dart.throw(new exceptions.XmlParserException.new("Expected </" + dart.str(dart.dsend(list, '_get', [1])) + ">, but found </" + dart.str(dart.dsend(dart.dsend(list, '_get', [4]), '_get', [3])) + ">", token.line, token.column));
            }
          }
        }, dynamicToTNode()));
      }
      processing() {
        return super.processing().map(dart.dynamic, dart.fn(each => this.createProcessing(core.String._check(dart.dsend(each, '_get', [1])), core.String._check(dart.dsend(each, '_get', [2]))), dynamicToTNode()));
      }
      qualified() {
        return super.qualified().cast(core.String).map(dart.dynamic, dart.bind(this, 'createQualified'));
      }
      characterData() {
        return super.characterData().cast(core.String).map(dart.dynamic, dart.bind(this, 'createText'));
      }
      spaceText() {
        return super.spaceText().cast(core.String).map(dart.dynamic, dart.bind(this, 'createText'));
      }
    }
    (XmlGrammarDefinition.new = function() {
      XmlGrammarDefinition.__proto__.new.call(this);
      ;
    }).prototype = XmlGrammarDefinition.prototype;
    dart.addTypeTests(XmlGrammarDefinition);
    XmlGrammarDefinition.prototype[_is_XmlGrammarDefinition_default] = true;
    dart.setLibraryUri(XmlGrammarDefinition, "package:xml/src/xml/grammar.dart");
    return XmlGrammarDefinition;
  });
  grammar$.XmlGrammarDefinition = grammar$.XmlGrammarDefinition$();
  dart.addTypeTests(grammar$.XmlGrammarDefinition, _is_XmlGrammarDefinition_default);
  parser$.XmlParserDefinition = class XmlParserDefinition extends grammar$.XmlGrammarDefinition$(node$.XmlNode, name$.XmlName) {
    createAttribute(name, text, type) {
      name$.XmlName._check(name);
      return new attribute$.XmlAttribute.new(name, text, type);
    }
    createComment(text) {
      return new comment.XmlComment.new(text);
    }
    createCDATA(text) {
      return new cdata.XmlCDATA.new(text);
    }
    createDoctype(text) {
      return new doctype.XmlDoctype.new(text);
    }
    createDocument(children) {
      IterableOfXmlNode()._check(children);
      return new document.XmlDocument.new(children);
    }
    createElement(name, attributes, children, isSelfClosing) {
      name$.XmlName._check(name);
      IterableOfXmlNode()._check(attributes);
      IterableOfXmlNode()._check(children);
      if (isSelfClosing === void 0) isSelfClosing = true;
      return new element.XmlElement.new(name, ListOfXmlAttribute().from(attributes), children, isSelfClosing);
    }
    createProcessing(target, text) {
      return new processing.XmlProcessing.new(target, text);
    }
    createQualified(name) {
      return name$.XmlName.fromString(name);
    }
    createText(text) {
      return new text$.XmlText.new(text);
    }
  };
  (parser$.XmlParserDefinition.new = function() {
    parser$.XmlParserDefinition.__proto__.new.call(this);
    ;
  }).prototype = parser$.XmlParserDefinition.prototype;
  dart.addTypeTests(parser$.XmlParserDefinition);
  dart.setMethodSignature(parser$.XmlParserDefinition, () => ({
    __proto__: dart.getMethods(parser$.XmlParserDefinition.__proto__),
    createAttribute: dart.fnType(attribute$.XmlAttribute, [core.Object, core.String, attribute_type.XmlAttributeType]),
    createComment: dart.fnType(comment.XmlComment, [core.String]),
    createCDATA: dart.fnType(cdata.XmlCDATA, [core.String]),
    createDoctype: dart.fnType(doctype.XmlDoctype, [core.String]),
    createDocument: dart.fnType(document.XmlDocument, [core.Object]),
    createElement: dart.fnType(element.XmlElement, [core.Object, core.Object, core.Object], [core.bool]),
    createProcessing: dart.fnType(processing.XmlProcessing, [core.String, core.String]),
    createQualified: dart.fnType(name$.XmlName, [core.String]),
    createText: dart.fnType(text$.XmlText, [core.String])
  }));
  dart.setLibraryUri(parser$.XmlParserDefinition, "package:xml/src/xml/parser.dart");
  dart.trackLibraries("packages/xml/src/xml/builder", {
    "package:xml/src/xml/builder.dart": builder,
    "package:xml/src/xml/visitors/transformer.dart": transformer,
    "package:xml/src/xml/visitors/visitor.dart": visitor,
    "package:xml/src/xml/visitors/visitable.dart": visitable,
    "package:xml/src/xml/utils/name.dart": name$,
    "package:xml/src/xml/utils/writable.dart": writable,
    "package:xml/src/xml/visitors/writer.dart": writer,
    "package:xml/src/xml/utils/token.dart": token,
    "package:xml/src/xml/utils/entities.dart": entities,
    "package:xml/src/xml/utils/attribute_type.dart": attribute_type,
    "package:xml/src/xml/nodes/text.dart": text$,
    "package:xml/src/xml/utils/node_type.dart": node_type,
    "package:xml/src/xml/nodes/data.dart": data,
    "package:xml/src/xml/nodes/node.dart": node$,
    "package:xml/src/xml/visitors/normalizer.dart": normalizer,
    "package:xml/src/xml/nodes/element.dart": element,
    "package:xml/src/xml/utils/node_list.dart": node_list,
    "package:xml/src/xml/utils/owned.dart": owned,
    "package:xml/src/xml/utils/exceptions.dart": exceptions,
    "package:xml/src/xml/utils/named.dart": named,
    "package:xml/src/xml/nodes/attribute.dart": attribute$,
    "package:xml/src/xml/utils/name_matcher.dart": name_matcher,
    "package:xml/src/xml/nodes/parent.dart": parent,
    "package:xml/src/xml/nodes/document_fragment.dart": document_fragment,
    "package:xml/src/xml/nodes/document.dart": document,
    "package:xml/src/xml/nodes/doctype.dart": doctype,
    "package:xml/src/xml/nodes/cdata.dart": cdata,
    "package:xml/src/xml/iterators/preceding.dart": preceding,
    "package:xml/src/xml/iterators/following.dart": following,
    "package:xml/src/xml/iterators/descendants.dart": descendants,
    "package:xml/src/xml/iterators/ancestors.dart": ancestors,
    "package:xml/src/xml/nodes/processing.dart": processing,
    "package:xml/src/xml/nodes/comment.dart": comment,
    "package:xml/src/xml/visitors/pretty_writer.dart": pretty_writer,
    "package:xml/src/xml/utils/simple_name.dart": simple_name,
    "package:xml/src/xml/utils/prefix_name.dart": prefix_name,
    "package:xml/src/xml/grammar.dart": grammar$,
    "package:xml/src/xml/production.dart": production,
    "package:xml/src/xml/parser.dart": parser$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["builder.dart","visitors\\\\visitor.dart","visitors\\\\transformer.dart","utils\\\\writable.dart","utils\\\\owned.dart","utils\\\\name.dart","visitors\\\\writer.dart","utils\\\\token.dart","utils\\\\entities.dart","utils\\\\attribute_type.dart","nodes\\\\node.dart","nodes\\\\data.dart","nodes\\\\text.dart","utils\\\\node_type.dart","visitors\\\\normalizer.dart","nodes\\\\parent.dart","nodes\\\\element.dart","utils\\\\node_list.dart","utils\\\\exceptions.dart","utils\\\\named.dart","nodes\\\\attribute.dart","utils\\\\name_matcher.dart","nodes\\\\document_fragment.dart","nodes\\\\document.dart","nodes\\\\doctype.dart","nodes\\\\cdata.dart","iterators\\\\preceding.dart","iterators\\\\following.dart","iterators\\\\descendants.dart","iterators\\\\ancestors.dart","nodes\\\\processing.dart","nodes\\\\comment.dart","visitors\\\\pretty_writer.dart","utils\\\\simple_name.dart","utils\\\\prefix_name.dart","production.dart","grammar.dart","parser.dart"],"names":[],"mappings":"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","file":"builder.ddc.js"}');
  // Exports:
  return {
    src__xml__builder: builder,
    src__xml__visitors__transformer: transformer,
    src__xml__visitors__visitor: visitor,
    src__xml__visitors__visitable: visitable,
    src__xml__utils__name: name$,
    src__xml__utils__writable: writable,
    src__xml__visitors__writer: writer,
    src__xml__utils__token: token,
    src__xml__utils__entities: entities,
    src__xml__utils__attribute_type: attribute_type,
    src__xml__nodes__text: text$,
    src__xml__utils__node_type: node_type,
    src__xml__nodes__data: data,
    src__xml__nodes__node: node$,
    src__xml__visitors__normalizer: normalizer,
    src__xml__nodes__element: element,
    src__xml__utils__node_list: node_list,
    src__xml__utils__owned: owned,
    src__xml__utils__exceptions: exceptions,
    src__xml__utils__named: named,
    src__xml__nodes__attribute: attribute$,
    src__xml__utils__name_matcher: name_matcher,
    src__xml__nodes__parent: parent,
    src__xml__nodes__document_fragment: document_fragment,
    src__xml__nodes__document: document,
    src__xml__nodes__doctype: doctype,
    src__xml__nodes__cdata: cdata,
    src__xml__iterators__preceding: preceding,
    src__xml__iterators__following: following,
    src__xml__iterators__descendants: descendants,
    src__xml__iterators__ancestors: ancestors,
    src__xml__nodes__processing: processing,
    src__xml__nodes__comment: comment,
    src__xml__visitors__pretty_writer: pretty_writer,
    src__xml__utils__simple_name: simple_name,
    src__xml__utils__prefix_name: prefix_name,
    src__xml__grammar: grammar$,
    src__xml__production: production,
    src__xml__parser: parser$
  };
});

//# sourceMappingURL=builder.ddc.js.map
