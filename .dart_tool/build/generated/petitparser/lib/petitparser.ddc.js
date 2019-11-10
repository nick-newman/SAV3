define(['dart_sdk', 'packages/petitparser/src/core/actions/action'], function(dart_sdk, packages__petitparser__src__core__actions__action) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const predicate = packages__petitparser__src__core__actions__action.src__core__characters__predicate;
  const parser = packages__petitparser__src__core__actions__action.src__core__characters__parser;
  const delegate = packages__petitparser__src__core__actions__action.src__core__combinators__delegate;
  const parser$ = packages__petitparser__src__core__actions__action.src__core__parser;
  const result = packages__petitparser__src__core__actions__action.src__core__contexts__result;
  const context = packages__petitparser__src__core__actions__action.src__core__contexts__context;
  const settable = packages__petitparser__src__core__actions__action.src__core__parsers__settable;
  const failure = packages__petitparser__src__core__actions__action.src__core__parsers__failure;
  const sequence = packages__petitparser__src__core__actions__action.src__core__combinators__sequence;
  const choice = packages__petitparser__src__core__actions__action.src__core__combinators__choice;
  const code = packages__petitparser__src__core__actions__action.src__core__characters__code;
  const any = packages__petitparser__src__core__actions__action.src__core__predicates__any;
  const char = packages__petitparser__src__core__actions__action.src__core__characters__char;
  const letter = Object.create(dart.library);
  const ranges$ = Object.create(dart.library);
  const parser$0 = Object.create(dart.library);
  const grammar = Object.create(dart.library);
  const reference$ = Object.create(dart.library);
  const word = Object.create(dart.library);
  const builder = Object.create(dart.library);
  const group$ = Object.create(dart.library);
  const result$ = Object.create(dart.library);
  const digit = Object.create(dart.library);
  const predicate$ = Object.create(dart.library);
  const range = Object.create(dart.library);
  const lowercase = Object.create(dart.library);
  const epsilon = Object.create(dart.library);
  const position = Object.create(dart.library);
  const any_in = Object.create(dart.library);
  const pattern = Object.create(dart.library);
  const optimize = Object.create(dart.library);
  const not = Object.create(dart.library);
  const uppercase = Object.create(dart.library);
  const any_of = Object.create(dart.library);
  const none_of = Object.create(dart.library);
  const string = Object.create(dart.library);
  const petitparser = Object.create(dart.library);
  const $rightShift = dartx['>>'];
  const $_get = dartx._get;
  const $takeWhile = dartx.takeWhile;
  const $toList = dartx.toList;
  const $contains = dartx.contains;
  const $add = dartx.add;
  const $_set = dartx._set;
  const $isNotEmpty = dartx.isNotEmpty;
  const $removeLast = dartx.removeLast;
  const $length = dartx.length;
  const $_equals = dartx._equals;
  const $fold = dartx.fold;
  const $isEmpty = dartx.isEmpty;
  const $first = dartx.first;
  const $last = dartx.last;
  const $substring = dartx.substring;
  const $toString = dartx.toString;
  const $cast = dartx.cast;
  const $codeUnits = dartx.codeUnits;
  const $map = dartx.map;
  const $sort = dartx.sort;
  const $toLowerCase = dartx.toLowerCase;
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  let LinkedMapOfReference$Parser = () => (LinkedMapOfReference$Parser = dart.constFn(_js_helper.LinkedMap$(reference$.Reference, parser$.Parser)))();
  let JSArrayOfReference = () => (JSArrayOfReference = dart.constFn(_interceptors.JSArray$(reference$.Reference)))();
  let ReferenceToParser = () => (ReferenceToParser = dart.constFn(dart.fnType(parser$.Parser, [reference$.Reference])))();
  let JSArrayOfParser = () => (JSArrayOfParser = dart.constFn(_interceptors.JSArray$(parser$.Parser)))();
  let LinkedHashSetOfParser = () => (LinkedHashSetOfParser = dart.constFn(collection.LinkedHashSet$(parser$.Parser)))();
  let JSArrayOfExpressionGroup = () => (JSArrayOfExpressionGroup = dart.constFn(_interceptors.JSArray$(group$.ExpressionGroup)))();
  let dynamicAndExpressionGroupToParser = () => (dynamicAndExpressionGroupToParser = dart.constFn(dart.fnType(parser$.Parser, [dart.dynamic, group$.ExpressionGroup])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let ListToObject = () => (ListToObject = dart.constFn(dart.fnType(core.Object, [core.List])))();
  let dynamicAnddynamicTodynamic = () => (dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))();
  let ListTodynamic = () => (ListTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.List])))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let StringToRangeCharPredicate = () => (StringToRangeCharPredicate = dart.constFn(dart.fnType(range.RangeCharPredicate, [core.String])))();
  let ListToRangeCharPredicate = () => (ListToRangeCharPredicate = dart.constFn(dart.fnType(range.RangeCharPredicate, [core.List])))();
  let ListToCharacterPredicate = () => (ListToCharacterPredicate = dart.constFn(dart.fnType(predicate.CharacterPredicate, [core.List])))();
  let intToRangeCharPredicate = () => (intToRangeCharPredicate = dart.constFn(dart.fnType(range.RangeCharPredicate, [core.int])))();
  let ListOfRangeCharPredicate = () => (ListOfRangeCharPredicate = dart.constFn(core.List$(range.RangeCharPredicate)))();
  let RangeCharPredicateAndRangeCharPredicateToint = () => (RangeCharPredicateAndRangeCharPredicateToint = dart.constFn(dart.fnType(core.int, [range.RangeCharPredicate, range.RangeCharPredicate])))();
  let JSArrayOfRangeCharPredicate = () => (JSArrayOfRangeCharPredicate = dart.constFn(_interceptors.JSArray$(range.RangeCharPredicate)))();
  let RangeCharPredicateToint = () => (RangeCharPredicateToint = dart.constFn(dart.fnType(core.int, [range.RangeCharPredicate])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: letter.LetterCharPredicate.prototype
      });
    },
    get C1() {
      return C1 = dart.constList([], dart.dynamic);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: word.WordCharPredicate.prototype
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: digit.DigitCharPredicate.prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: lowercase.LowercaseCharPredicate.prototype
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: position.PositionParser.prototype
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: uppercase.UppercaseCharPredicate.prototype
      });
    }
  });
  letter.LetterCharPredicate = class LetterCharPredicate extends predicate.CharacterPredicate {
    test(value) {
      return 65 <= dart.notNull(value) && dart.notNull(value) <= 90 || 97 <= dart.notNull(value) && dart.notNull(value) <= 122;
    }
    isEqualTo(other) {
      return letter.LetterCharPredicate.is(other);
    }
  };
  (letter.LetterCharPredicate.new = function() {
    letter.LetterCharPredicate.__proto__.new.call(this);
    ;
  }).prototype = letter.LetterCharPredicate.prototype;
  dart.addTypeTests(letter.LetterCharPredicate);
  dart.setMethodSignature(letter.LetterCharPredicate, () => ({
    __proto__: dart.getMethods(letter.LetterCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(letter.LetterCharPredicate, "package:petitparser/src/core/characters/letter.dart");
  let C0;
  letter.letter = function letter$(message) {
    if (message === void 0) message = "letter expected";
    return new parser.CharacterParser.new(C0 || CT.C0, message);
  };
  const RangesCharPredicate_length = dart.privateName(ranges$, "RangesCharPredicate.length");
  const RangesCharPredicate_starts = dart.privateName(ranges$, "RangesCharPredicate.starts");
  const RangesCharPredicate_stops = dart.privateName(ranges$, "RangesCharPredicate.stops");
  ranges$.RangesCharPredicate = class RangesCharPredicate extends core.Object {
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    get starts() {
      return this[starts$];
    }
    set starts(value) {
      super.starts = value;
    }
    get stops() {
      return this[stops$];
    }
    set stops(value) {
      super.stops = value;
    }
    test(value) {
      let min = 0;
      let max = this.length;
      while (min < dart.notNull(max)) {
        let mid = min + (dart.notNull(max) - min)[$rightShift](1);
        let comp = dart.notNull(this.starts[$_get](mid)) - dart.notNull(value);
        if (comp === 0) {
          return true;
        } else if (comp < 0) {
          min = mid + 1;
        } else {
          max = mid;
        }
      }
      return 0 < min && dart.notNull(value) <= dart.notNull(this.stops[$_get](min - 1));
    }
    isEqualTo(other) {
      return ranges$.RangesCharPredicate.is(other) && other.length == this.length && dart.equals(other.starts, this.starts) && dart.equals(other.stops, this.stops);
    }
  };
  (ranges$.RangesCharPredicate.new = function(length, starts, stops) {
    this[length$] = length;
    this[starts$] = starts;
    this[stops$] = stops;
    if (!(length != null)) dart.assertFailed("length must not be null", "org-dartlang-app:///packages/petitparser/src/core/characters/ranges.dart", 11, 16, "length != null");
    if (!(starts != null)) dart.assertFailed("starts must not be null", "org-dartlang-app:///packages/petitparser/src/core/characters/ranges.dart", 12, 16, "starts != null");
    if (!(stops != null)) dart.assertFailed("stops must not be null", "org-dartlang-app:///packages/petitparser/src/core/characters/ranges.dart", 13, 16, "stops != null");
    ;
  }).prototype = ranges$.RangesCharPredicate.prototype;
  dart.addTypeTests(ranges$.RangesCharPredicate);
  const length$ = RangesCharPredicate_length;
  const starts$ = RangesCharPredicate_starts;
  const stops$ = RangesCharPredicate_stops;
  ranges$.RangesCharPredicate[dart.implements] = () => [predicate.CharacterPredicate];
  dart.setMethodSignature(ranges$.RangesCharPredicate, () => ({
    __proto__: dart.getMethods(ranges$.RangesCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(ranges$.RangesCharPredicate, "package:petitparser/src/core/characters/ranges.dart");
  dart.setFieldSignature(ranges$.RangesCharPredicate, () => ({
    __proto__: dart.getFields(ranges$.RangesCharPredicate.__proto__),
    length: dart.finalFieldType(core.int),
    starts: dart.finalFieldType(core.List$(core.int)),
    stops: dart.finalFieldType(core.List$(core.int))
  }));
  parser$0.GrammarParser = class GrammarParser extends delegate.DelegateParser {
    fastParseOn(buffer, position) {
      return this.delegate.fastParseOn(buffer, position);
    }
  };
  (parser$0.GrammarParser.new = function(definition) {
    parser$0.GrammarParser.__proto__.new.call(this, definition.build());
    ;
  }).prototype = parser$0.GrammarParser.prototype;
  dart.addTypeTests(parser$0.GrammarParser);
  dart.setLibraryUri(parser$0.GrammarParser, "package:petitparser/src/core/definition/parser.dart");
  let C1;
  const _resolve = dart.privateName(grammar, "_resolve");
  grammar.GrammarDefinition = class GrammarDefinition extends core.Object {
    ref($function, arg1, arg2, arg3, arg4, arg5, arg6) {
      if (arg1 === void 0) arg1 = null;
      if (arg2 === void 0) arg2 = null;
      if (arg3 === void 0) arg3 = null;
      if (arg4 === void 0) arg4 = null;
      if (arg5 === void 0) arg5 = null;
      if (arg6 === void 0) arg6 = null;
      let $arguments = JSArrayOfObject().of([arg1, arg2, arg3, arg4, arg5, arg6])[$takeWhile](dart.fn(each => each != null, ObjectTobool()))[$toList]({growable: false});
      return new reference$.Reference.new($function, $arguments);
    }
    build(opts) {
      let t0;
      let start = opts && 'start' in opts ? opts.start : null;
      let $arguments = opts && 'arguments' in opts ? opts.arguments : C1 || CT.C1;
      return this[_resolve](new reference$.Reference.new((t0 = start, t0 == null ? dart.bind(this, 'start') : t0), $arguments));
    }
    [_resolve](reference) {
      let mapping = new (LinkedMapOfReference$Parser()).new();
      function _dereference(reference) {
        let parser = mapping[$_get](reference);
        if (parser == null) {
          let references = JSArrayOfReference().of([reference]);
          parser = reference.resolve();
          while (reference$.Reference.is(parser)) {
            let otherReference = reference$.Reference._check(parser);
            if (dart.test(references[$contains](otherReference))) {
              dart.throw(new core.StateError.new("Recursive references detected: " + dart.str(references)));
            }
            references[$add](otherReference);
            parser = otherReference.resolve();
          }
          for (let otherReference of references) {
            mapping[$_set](otherReference, parser);
          }
        }
        return parser;
      }
      dart.fn(_dereference, ReferenceToParser());
      let todo = JSArrayOfParser().of([_dereference(reference)]);
      let seen = LinkedHashSetOfParser().of(todo);
      while (dart.test(todo[$isNotEmpty])) {
        let parent = todo[$removeLast]();
        for (let child of parent.children) {
          if (reference$.Reference.is(child)) {
            let referenced = _dereference(reference$.Reference._check(child));
            parent.replace(child, referenced);
            child = referenced;
          }
          if (!dart.test(seen.contains(child))) {
            seen.add(child);
            todo[$add](child);
          }
        }
      }
      return mapping[$_get](reference);
    }
  };
  (grammar.GrammarDefinition.new = function() {
    ;
  }).prototype = grammar.GrammarDefinition.prototype;
  dart.addTypeTests(grammar.GrammarDefinition);
  dart.setMethodSignature(grammar.GrammarDefinition, () => ({
    __proto__: dart.getMethods(grammar.GrammarDefinition.__proto__),
    ref: dart.fnType(parser$.Parser, [core.Function], [core.Object, core.Object, core.Object, core.Object, core.Object, core.Object]),
    build: dart.fnType(parser$.Parser, [], {arguments: core.List, start: core.Function}),
    [_resolve]: dart.fnType(parser$.Parser, [reference$.Reference])
  }));
  dart.setLibraryUri(grammar.GrammarDefinition, "package:petitparser/src/core/definition/grammar.dart");
  const Reference_function = dart.privateName(reference$, "Reference.function");
  const Reference_arguments = dart.privateName(reference$, "Reference.arguments");
  reference$.Reference = class Reference extends parser$.Parser {
    get function() {
      return this[func];
    }
    set function(value) {
      super.function = value;
    }
    get arguments() {
      return this[arguments$];
    }
    set arguments(value) {
      super.arguments = value;
    }
    resolve() {
      return parser$.Parser._check(core.Function.apply(this.function, this.arguments));
    }
    _equals(other) {
      if (other == null) return false;
      if (reference$.Reference.is(other)) {
        if (!dart.equals(other.function, this.function) || other.arguments[$length] != this.arguments[$length]) {
          return false;
        }
        for (let i = 0; i < dart.notNull(this.arguments[$length]); i = i + 1) {
          let a = this.arguments[$_get](i);
          let b = other.arguments[$_get](i);
          if (parser$.Parser.is(a) && !reference$.Reference.is(a) && parser$.Parser.is(b) && !reference$.Reference.is(b)) {
            if (!dart.test(a.isEqualTo(b))) {
              return false;
            }
          } else {
            if (!dart.equals(a, b)) {
              return false;
            }
          }
        }
        return true;
      }
      return false;
    }
    get hashCode() {
      return dart.hashCode(this.function);
    }
    copy() {
      return dart.throw(new core.UnsupportedError.new("References cannot be copied."));
    }
    parseOn(context) {
      return dart.throw(new core.UnsupportedError.new("References cannot be parsed."));
    }
  };
  (reference$.Reference.new = function($function, $arguments) {
    this[func] = $function;
    this[arguments$] = $arguments;
    if (!($function != null)) dart.assertFailed("function must not be null", "org-dartlang-app:///packages/petitparser/src/core/definition/reference.dart", 12, 16, "function != null");
    if (!($arguments != null)) dart.assertFailed("arguments must not be null", "org-dartlang-app:///packages/petitparser/src/core/definition/reference.dart", 13, 16, "arguments != null");
    reference$.Reference.__proto__.new.call(this);
    ;
  }).prototype = reference$.Reference.prototype;
  dart.addTypeTests(reference$.Reference);
  const func = Reference_function;
  const arguments$ = Reference_arguments;
  dart.setMethodSignature(reference$.Reference, () => ({
    __proto__: dart.getMethods(reference$.Reference.__proto__),
    resolve: dart.fnType(parser$.Parser, []),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object]),
    copy: dart.fnType(reference$.Reference, []),
    parseOn: dart.fnType(result.Result, [context.Context])
  }));
  dart.setLibraryUri(reference$.Reference, "package:petitparser/src/core/definition/reference.dart");
  dart.setFieldSignature(reference$.Reference, () => ({
    __proto__: dart.getFields(reference$.Reference.__proto__),
    function: dart.finalFieldType(core.Function),
    arguments: dart.finalFieldType(core.List$(core.Object))
  }));
  dart.defineExtensionMethods(reference$.Reference, ['_equals']);
  dart.defineExtensionAccessors(reference$.Reference, ['hashCode']);
  word.WordCharPredicate = class WordCharPredicate extends core.Object {
    test(value) {
      return 65 <= dart.notNull(value) && dart.notNull(value) <= 90 || 97 <= dart.notNull(value) && dart.notNull(value) <= 122 || 48 <= dart.notNull(value) && dart.notNull(value) <= 57 || value === 95;
    }
    isEqualTo(other) {
      return word.WordCharPredicate.is(other);
    }
  };
  (word.WordCharPredicate.new = function() {
    ;
  }).prototype = word.WordCharPredicate.prototype;
  dart.addTypeTests(word.WordCharPredicate);
  word.WordCharPredicate[dart.implements] = () => [predicate.CharacterPredicate];
  dart.setMethodSignature(word.WordCharPredicate, () => ({
    __proto__: dart.getMethods(word.WordCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(word.WordCharPredicate, "package:petitparser/src/core/characters/word.dart");
  let C2;
  word.word = function word$(message) {
    if (message === void 0) message = "letter or digit expected";
    return new parser.CharacterParser.new(C2 || CT.C2, message);
  };
  const _groups = dart.privateName(builder, "_groups");
  const _loopback = dart.privateName(builder, "_loopback");
  builder.ExpressionBuilder = class ExpressionBuilder extends core.Object {
    group() {
      let group = new group$.ExpressionGroup.new(this[_loopback]);
      this[_groups][$add](group);
      return group;
    }
    build() {
      let parser = this[_groups][$fold](parser$.Parser, failure.failure(dart.dynamic, "Highest priority group should define a primitive parser."), dart.fn((a, b) => b.build(parser$.Parser._check(a)), dynamicAndExpressionGroupToParser()));
      this[_loopback].set(parser);
      return parser;
    }
  };
  (builder.ExpressionBuilder.new = function() {
    this[_groups] = JSArrayOfExpressionGroup().of([]);
    this[_loopback] = settable.undefined(dart.dynamic);
    ;
  }).prototype = builder.ExpressionBuilder.prototype;
  dart.addTypeTests(builder.ExpressionBuilder);
  dart.setMethodSignature(builder.ExpressionBuilder, () => ({
    __proto__: dart.getMethods(builder.ExpressionBuilder.__proto__),
    group: dart.fnType(group$.ExpressionGroup, []),
    build: dart.fnType(parser$.Parser, [])
  }));
  dart.setLibraryUri(builder.ExpressionBuilder, "package:petitparser/src/core/expression/builder.dart");
  dart.setFieldSignature(builder.ExpressionBuilder, () => ({
    __proto__: dart.getFields(builder.ExpressionBuilder.__proto__),
    [_groups]: dart.finalFieldType(core.List$(group$.ExpressionGroup)),
    [_loopback]: dart.finalFieldType(settable.SettableParser)
  }));
  const _primitives = dart.privateName(group$, "_primitives");
  const _wrappers = dart.privateName(group$, "_wrappers");
  const _prefix = dart.privateName(group$, "_prefix");
  const _postfix = dart.privateName(group$, "_postfix");
  const _right = dart.privateName(group$, "_right");
  const _left = dart.privateName(group$, "_left");
  const _loopback$ = dart.privateName(group$, "_loopback");
  const _buildChoice = dart.privateName(group$, "_buildChoice");
  const _buildPrimitive = dart.privateName(group$, "_buildPrimitive");
  const _buildWrapper = dart.privateName(group$, "_buildWrapper");
  const _buildPrefix = dart.privateName(group$, "_buildPrefix");
  const _buildPostfix = dart.privateName(group$, "_buildPostfix");
  const _buildRight = dart.privateName(group$, "_buildRight");
  const _buildLeft = dart.privateName(group$, "_buildLeft");
  group$.ExpressionGroup = class ExpressionGroup extends core.Object {
    primitive(V, parser, action) {
      if (action === void 0) action = null;
      this[_primitives][$add](action != null ? parser.map(dart.dynamic, action) : parser);
    }
    [_buildPrimitive](inner) {
      return this[_buildChoice](this[_primitives], inner);
    }
    wrapper(O, V, left, right, action) {
      if (action === void 0) action = null;
      action == null ? action = dart.fn((left, value, right) => JSArrayOfObject().of([left, value, right]), dart.fnType(ListOfObject(), [O, V, O])) : null;
      this[_wrappers][$add](new sequence.SequenceParser.new(JSArrayOfParser().of([left, this[_loopback$], right])).map(dart.dynamic, dart.fn(value => action(O._check(value[$_get](0)), V._check(value[$_get](1)), O._check(value[$_get](2))), ListToObject())));
    }
    [_buildWrapper](inner) {
      return this[_buildChoice]((() => {
        let t0 = JSArrayOfParser().of([]);
        for (let t1 of this[_wrappers])
          t0[$add](t1);
        t0[$add](inner);
        return t0;
      })(), inner);
    }
    prefix(O, V, parser, action) {
      if (action === void 0) action = null;
      action == null ? action = dart.fn((operator, value) => JSArrayOfObject().of([operator, value]), dart.fnType(ListOfObject(), [O, V])) : null;
      this[_prefix][$add](parser.map(dart.dynamic, dart.fn(operator => new result$.ExpressionResult.new(operator, action), dart.fnType(result$.ExpressionResult, [O]))));
    }
    [_buildPrefix](inner) {
      if (dart.test(this[_prefix][$isEmpty])) {
        return inner;
      } else {
        return new sequence.SequenceParser.new(JSArrayOfParser().of([this[_buildChoice](this[_prefix]).star(), inner])).map(dart.dynamic, dart.fn(tuple => dart.dsend(dart.dload(tuple[$first], 'reversed'), 'fold', [tuple[$last], dart.fn((value, result) => {
            let expressionResult = result$.ExpressionResult._check(result);
            return dart.dsend(expressionResult, 'action', [expressionResult.operator, value]);
          }, dynamicAnddynamicTodynamic())]), ListTodynamic()));
      }
    }
    postfix(O, V, parser, action) {
      if (action === void 0) action = null;
      action == null ? action = dart.fn((value, operator) => JSArrayOfObject().of([value, operator]), dart.fnType(ListOfObject(), [V, O])) : null;
      this[_postfix][$add](parser.map(dart.dynamic, dart.fn(operator => new result$.ExpressionResult.new(operator, action), dart.fnType(result$.ExpressionResult, [O]))));
    }
    [_buildPostfix](inner) {
      if (dart.test(this[_postfix][$isEmpty])) {
        return inner;
      } else {
        return new sequence.SequenceParser.new(JSArrayOfParser().of([inner, this[_buildChoice](this[_postfix]).star()])).map(dart.dynamic, dart.fn(tuple => dart.dsend(tuple[$last], 'fold', [tuple[$first], dart.fn((value, result) => {
            let expressionResult = result$.ExpressionResult._check(result);
            return dart.dsend(expressionResult, 'action', [value, expressionResult.operator]);
          }, dynamicAnddynamicTodynamic())]), ListTodynamic()));
      }
    }
    right(O, V, parser, action) {
      if (action === void 0) action = null;
      action == null ? action = dart.fn((left, operator, right) => JSArrayOfObject().of([left, operator, right]), dart.fnType(ListOfObject(), [V, O, V])) : null;
      this[_right][$add](parser.map(dart.dynamic, dart.fn(operator => new result$.ExpressionResult.new(operator, action), dart.fnType(result$.ExpressionResult, [O]))));
    }
    [_buildRight](inner) {
      if (dart.test(this[_right][$isEmpty])) {
        return inner;
      } else {
        return inner.separatedBy(dart.dynamic, this[_buildChoice](this[_right])).map(dart.dynamic, dart.fn(sequence => {
          let result = sequence[$last];
          for (let i = dart.notNull(sequence[$length]) - 2; i > 0; i = i - 2) {
            let expressionResult = result$.ExpressionResult._check(sequence[$_get](i));
            result = dart.dsend(expressionResult, 'action', [sequence[$_get](i - 1), expressionResult.operator, result]);
          }
          return result;
        }, ListTodynamic()));
      }
    }
    left(O, V, parser, action) {
      if (action === void 0) action = null;
      action == null ? action = dart.fn((left, operator, right) => JSArrayOfObject().of([left, operator, right]), dart.fnType(ListOfObject(), [V, O, V])) : null;
      this[_left][$add](parser.map(dart.dynamic, dart.fn(operator => new result$.ExpressionResult.new(operator, action), dart.fnType(result$.ExpressionResult, [O]))));
    }
    [_buildLeft](inner) {
      if (dart.test(this[_left][$isEmpty])) {
        return inner;
      } else {
        return inner.separatedBy(dart.dynamic, this[_buildChoice](this[_left])).map(dart.dynamic, dart.fn(sequence => {
          let result = sequence[$first];
          for (let i = 1; i < dart.notNull(sequence[$length]); i = i + 2) {
            let expressionResult = result$.ExpressionResult._check(sequence[$_get](i));
            result = dart.dsend(expressionResult, 'action', [result, expressionResult.operator, sequence[$_get](i + 1)]);
          }
          return result;
        }, ListTodynamic()));
      }
    }
    [_buildChoice](parsers, otherwise) {
      if (otherwise === void 0) otherwise = null;
      if (dart.test(parsers[$isEmpty])) {
        return otherwise;
      } else if (parsers[$length] === 1) {
        return parsers[$first];
      } else {
        return new choice.ChoiceParser.new(parsers);
      }
    }
    build(inner) {
      return this[_buildLeft](this[_buildRight](this[_buildPostfix](this[_buildPrefix](this[_buildWrapper](this[_buildPrimitive](inner))))));
    }
  };
  (group$.ExpressionGroup.new = function(_loopback) {
    this[_primitives] = JSArrayOfParser().of([]);
    this[_wrappers] = JSArrayOfParser().of([]);
    this[_prefix] = JSArrayOfParser().of([]);
    this[_postfix] = JSArrayOfParser().of([]);
    this[_right] = JSArrayOfParser().of([]);
    this[_left] = JSArrayOfParser().of([]);
    this[_loopback$] = _loopback;
    ;
  }).prototype = group$.ExpressionGroup.prototype;
  dart.addTypeTests(group$.ExpressionGroup);
  dart.setMethodSignature(group$.ExpressionGroup, () => ({
    __proto__: dart.getMethods(group$.ExpressionGroup.__proto__),
    primitive: dart.gFnType(V => [dart.void, [parser$.Parser$(V)], [dart.fnType(core.Object, [V])]]),
    [_buildPrimitive]: dart.fnType(parser$.Parser, [parser$.Parser]),
    wrapper: dart.gFnType((O, V) => [dart.void, [parser$.Parser$(O), parser$.Parser$(O)], [dart.fnType(core.Object, [O, V, O])]]),
    [_buildWrapper]: dart.fnType(parser$.Parser, [parser$.Parser]),
    prefix: dart.gFnType((O, V) => [dart.void, [parser$.Parser$(O)], [dart.fnType(core.Object, [O, V])]]),
    [_buildPrefix]: dart.fnType(parser$.Parser, [parser$.Parser]),
    postfix: dart.gFnType((O, V) => [dart.void, [parser$.Parser$(O)], [dart.fnType(core.Object, [V, O])]]),
    [_buildPostfix]: dart.fnType(parser$.Parser, [parser$.Parser]),
    right: dart.gFnType((O, V) => [dart.void, [parser$.Parser$(O)], [dart.fnType(core.Object, [V, O, V])]]),
    [_buildRight]: dart.fnType(parser$.Parser, [parser$.Parser]),
    left: dart.gFnType((O, V) => [dart.void, [parser$.Parser$(O)], [dart.fnType(core.Object, [V, O, V])]]),
    [_buildLeft]: dart.fnType(parser$.Parser, [parser$.Parser]),
    [_buildChoice]: dart.fnType(parser$.Parser, [core.List$(parser$.Parser)], [parser$.Parser]),
    build: dart.fnType(parser$.Parser, [parser$.Parser])
  }));
  dart.setLibraryUri(group$.ExpressionGroup, "package:petitparser/src/core/expression/group.dart");
  dart.setFieldSignature(group$.ExpressionGroup, () => ({
    __proto__: dart.getFields(group$.ExpressionGroup.__proto__),
    [_loopback$]: dart.finalFieldType(parser$.Parser),
    [_primitives]: dart.finalFieldType(core.List$(parser$.Parser)),
    [_wrappers]: dart.finalFieldType(core.List$(parser$.Parser)),
    [_prefix]: dart.finalFieldType(core.List$(parser$.Parser)),
    [_postfix]: dart.finalFieldType(core.List$(parser$.Parser)),
    [_right]: dart.finalFieldType(core.List$(parser$.Parser)),
    [_left]: dart.finalFieldType(core.List$(parser$.Parser))
  }));
  const ExpressionResult_operator = dart.privateName(result$, "ExpressionResult.operator");
  const ExpressionResult_action = dart.privateName(result$, "ExpressionResult.action");
  result$.ExpressionResult = class ExpressionResult extends core.Object {
    get operator() {
      return this[operator$];
    }
    set operator(value) {
      super.operator = value;
    }
    get action() {
      return this[action$];
    }
    set action(value) {
      super.action = value;
    }
  };
  (result$.ExpressionResult.new = function(operator, action) {
    this[operator$] = operator;
    this[action$] = action;
    ;
  }).prototype = result$.ExpressionResult.prototype;
  dart.addTypeTests(result$.ExpressionResult);
  const operator$ = ExpressionResult_operator;
  const action$ = ExpressionResult_action;
  dart.setLibraryUri(result$.ExpressionResult, "package:petitparser/src/core/expression/result.dart");
  dart.setFieldSignature(result$.ExpressionResult, () => ({
    __proto__: dart.getFields(result$.ExpressionResult.__proto__),
    operator: dart.finalFieldType(core.Object),
    action: dart.finalFieldType(core.Function)
  }));
  digit.DigitCharPredicate = class DigitCharPredicate extends predicate.CharacterPredicate {
    test(value) {
      return 48 <= dart.notNull(value) && dart.notNull(value) <= 57;
    }
    isEqualTo(other) {
      return digit.DigitCharPredicate.is(other);
    }
  };
  (digit.DigitCharPredicate.new = function() {
    digit.DigitCharPredicate.__proto__.new.call(this);
    ;
  }).prototype = digit.DigitCharPredicate.prototype;
  dart.addTypeTests(digit.DigitCharPredicate);
  dart.setMethodSignature(digit.DigitCharPredicate, () => ({
    __proto__: dart.getMethods(digit.DigitCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(digit.DigitCharPredicate, "package:petitparser/src/core/characters/digit.dart");
  let C3;
  digit.digit = function digit$(message) {
    if (message === void 0) message = "digit expected";
    return new parser.CharacterParser.new(C3 || CT.C3, message);
  };
  const PredicateParser_length = dart.privateName(predicate$, "PredicateParser.length");
  const PredicateParser_predicate = dart.privateName(predicate$, "PredicateParser.predicate");
  const PredicateParser_message = dart.privateName(predicate$, "PredicateParser.message");
  predicate$.PredicateParser = class PredicateParser extends parser$.Parser$(core.String) {
    get length() {
      return this[length$0];
    }
    set length(value) {
      super.length = value;
    }
    get predicate() {
      return this[predicate$0];
    }
    set predicate(value) {
      super.predicate = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    parseOn(context) {
      let start = context.position;
      let stop = dart.notNull(start) + dart.notNull(this.length);
      if (stop <= context.buffer.length) {
        let result = context.buffer[$substring](start, stop);
        if (dart.test(this.predicate(result))) {
          return context.success(core.String, result, stop);
        }
      }
      return context.failure(core.String, this.message);
    }
    fastParseOn(buffer, position) {
      let stop = dart.notNull(position) + dart.notNull(this.length);
      return stop <= buffer.length && dart.test(this.predicate(buffer[$substring](position, stop))) ? stop : -1;
    }
    toString() {
      return dart.str(super[$toString]()) + "[" + dart.str(this.message) + "]";
    }
    copy() {
      return new predicate$.PredicateParser.new(this.length, this.predicate, this.message);
    }
    hasEqualProperties(other) {
      predicate$.PredicateParser._check(other);
      return dart.test(super.hasEqualProperties(other)) && this.length == other.length && dart.equals(this.predicate, other.predicate) && this.message == other.message;
    }
  };
  (predicate$.PredicateParser.new = function(length, predicate, message) {
    this[length$0] = length;
    this[predicate$0] = predicate;
    this[message$] = message;
    if (!(dart.notNull(length) > 0)) dart.assertFailed("length must be positive", "org-dartlang-app:///packages/petitparser/src/core/predicates/predicate.dart", 29, 16, "length > 0");
    if (!(predicate != null)) dart.assertFailed("predicate must not be null", "org-dartlang-app:///packages/petitparser/src/core/predicates/predicate.dart", 30, 16, "predicate != null");
    if (!(message != null)) dart.assertFailed("message must not be null", "org-dartlang-app:///packages/petitparser/src/core/predicates/predicate.dart", 31, 16, "message != null");
    predicate$.PredicateParser.__proto__.new.call(this);
    ;
  }).prototype = predicate$.PredicateParser.prototype;
  dart.addTypeTests(predicate$.PredicateParser);
  const length$0 = PredicateParser_length;
  const predicate$0 = PredicateParser_predicate;
  const message$ = PredicateParser_message;
  dart.setMethodSignature(predicate$.PredicateParser, () => ({
    __proto__: dart.getMethods(predicate$.PredicateParser.__proto__),
    parseOn: dart.fnType(result.Result$(core.String), [context.Context]),
    copy: dart.fnType(predicate$.PredicateParser, [])
  }));
  dart.setLibraryUri(predicate$.PredicateParser, "package:petitparser/src/core/predicates/predicate.dart");
  dart.setFieldSignature(predicate$.PredicateParser, () => ({
    __proto__: dart.getFields(predicate$.PredicateParser.__proto__),
    length: dart.finalFieldType(core.int),
    predicate: dart.finalFieldType(dart.fnType(core.bool, [core.String])),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(predicate$.PredicateParser, ['toString']);
  predicate$.predicate = function predicate$1(length, predicate, message) {
    return new predicate$.PredicateParser.new(length, predicate, message);
  };
  const RangeCharPredicate_start = dart.privateName(range, "RangeCharPredicate.start");
  const RangeCharPredicate_stop = dart.privateName(range, "RangeCharPredicate.stop");
  range.RangeCharPredicate = class RangeCharPredicate extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get stop() {
      return this[stop$];
    }
    set stop(value) {
      super.stop = value;
    }
    test(value) {
      return dart.notNull(this.start) <= dart.notNull(value) && dart.notNull(value) <= dart.notNull(this.stop);
    }
    isEqualTo(other) {
      return range.RangeCharPredicate.is(other) && other.start == this.start && other.stop == this.stop;
    }
  };
  (range.RangeCharPredicate.new = function(start, stop) {
    this[start$] = start;
    this[stop$] = stop;
    if (!(start != null)) dart.assertFailed("start must not be null", "org-dartlang-app:///packages/petitparser/src/core/characters/range.dart", 22, 16, "start != null");
    if (!(stop != null)) dart.assertFailed("stop must not be null", "org-dartlang-app:///packages/petitparser/src/core/characters/range.dart", 23, 16, "stop != null");
    if (dart.notNull(this.start) > dart.notNull(this.stop)) {
      dart.throw(new core.ArgumentError.new("Invalid range: " + dart.str(this.start) + "-" + dart.str(this.stop)));
    }
  }).prototype = range.RangeCharPredicate.prototype;
  dart.addTypeTests(range.RangeCharPredicate);
  const start$ = RangeCharPredicate_start;
  const stop$ = RangeCharPredicate_stop;
  range.RangeCharPredicate[dart.implements] = () => [predicate.CharacterPredicate];
  dart.setMethodSignature(range.RangeCharPredicate, () => ({
    __proto__: dart.getMethods(range.RangeCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(range.RangeCharPredicate, "package:petitparser/src/core/characters/range.dart");
  dart.setFieldSignature(range.RangeCharPredicate, () => ({
    __proto__: dart.getFields(range.RangeCharPredicate.__proto__),
    start: dart.finalFieldType(core.int),
    stop: dart.finalFieldType(core.int)
  }));
  range.range = function range$(start, stop, message) {
    let t2;
    if (message === void 0) message = null;
    return new parser.CharacterParser.new(new range.RangeCharPredicate.new(code.toCharCode(start), code.toCharCode(stop)), (t2 = message, t2 == null ? dart.str(code.toReadableString(start)) + ".." + dart.str(code.toReadableString(stop)) + " expected" : t2));
  };
  lowercase.LowercaseCharPredicate = class LowercaseCharPredicate extends predicate.CharacterPredicate {
    test(value) {
      return 97 <= dart.notNull(value) && dart.notNull(value) <= 122;
    }
    isEqualTo(other) {
      return lowercase.LowercaseCharPredicate.is(other);
    }
  };
  (lowercase.LowercaseCharPredicate.new = function() {
    lowercase.LowercaseCharPredicate.__proto__.new.call(this);
    ;
  }).prototype = lowercase.LowercaseCharPredicate.prototype;
  dart.addTypeTests(lowercase.LowercaseCharPredicate);
  dart.setMethodSignature(lowercase.LowercaseCharPredicate, () => ({
    __proto__: dart.getMethods(lowercase.LowercaseCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(lowercase.LowercaseCharPredicate, "package:petitparser/src/core/characters/lowercase.dart");
  let C4;
  lowercase.lowercase = function lowercase$(message) {
    if (message === void 0) message = "lowercase letter expected";
    return new parser.CharacterParser.new(C4 || CT.C4, message);
  };
  const _is_EpsilonParser_default = Symbol('_is_EpsilonParser_default');
  const EpsilonParser_result = dart.privateName(epsilon, "EpsilonParser.result");
  epsilon.EpsilonParser$ = dart.generic(T => {
    let EpsilonParserOfT = () => (EpsilonParserOfT = dart.constFn(epsilon.EpsilonParser$(T)))();
    class EpsilonParser extends parser$.Parser$(T) {
      get result() {
        return this[result$];
      }
      set result(value) {
        super.result = value;
      }
      parseOn(context) {
        return context.success(T, this.result);
      }
      fastParseOn(buffer, position) {
        return position;
      }
      copy() {
        return new (EpsilonParserOfT()).new(this.result);
      }
      hasEqualProperties(other) {
        EpsilonParserOfT()._check(other);
        return dart.test(super.hasEqualProperties(other)) && dart.equals(this.result, other.result);
      }
    }
    (EpsilonParser.new = function(result) {
      this[result$] = result;
      EpsilonParser.__proto__.new.call(this);
      ;
    }).prototype = EpsilonParser.prototype;
    dart.addTypeTests(EpsilonParser);
    EpsilonParser.prototype[_is_EpsilonParser_default] = true;
    const result$ = EpsilonParser_result;
    dart.setMethodSignature(EpsilonParser, () => ({
      __proto__: dart.getMethods(EpsilonParser.__proto__),
      parseOn: dart.fnType(result.Result$(T), [context.Context]),
      copy: dart.fnType(epsilon.EpsilonParser$(T), [])
    }));
    dart.setLibraryUri(EpsilonParser, "package:petitparser/src/core/parsers/epsilon.dart");
    dart.setFieldSignature(EpsilonParser, () => ({
      __proto__: dart.getFields(EpsilonParser.__proto__),
      result: dart.finalFieldType(T)
    }));
    return EpsilonParser;
  });
  epsilon.EpsilonParser = epsilon.EpsilonParser$();
  dart.addTypeTests(epsilon.EpsilonParser, _is_EpsilonParser_default);
  epsilon.epsilon = function epsilon$(T, result) {
    if (result === void 0) result = null;
    return new (epsilon.EpsilonParser$(T)).new(result);
  };
  position.PositionParser = class PositionParser extends parser$.Parser$(core.int) {
    parseOn(context) {
      return context.success(core.int, context.position);
    }
    fastParseOn(buffer, position) {
      return position;
    }
    copy() {
      return this;
    }
  };
  (position.PositionParser.new = function() {
    position.PositionParser.__proto__.new.call(this);
    ;
  }).prototype = position.PositionParser.prototype;
  dart.addTypeTests(position.PositionParser);
  dart.setMethodSignature(position.PositionParser, () => ({
    __proto__: dart.getMethods(position.PositionParser.__proto__),
    parseOn: dart.fnType(result.Result$(core.int), [context.Context]),
    copy: dart.fnType(position.PositionParser, [])
  }));
  dart.setLibraryUri(position.PositionParser, "package:petitparser/src/core/parsers/position.dart");
  let C5;
  position.position = function position$() {
    return C5 || CT.C5;
  };
  any_in.anyIn = function anyIn(elements, message) {
    let t2;
    if (message === void 0) message = null;
    return predicate$.predicate(1, dart.fn(each => elements[$contains](each), StringTobool()), (t2 = message, t2 == null ? "any of " + dart.str(elements) + " expected" : t2));
  };
  pattern.pattern = function pattern$(element, message) {
    let t2;
    if (message === void 0) message = null;
    return new parser.CharacterParser.new(pattern.pattern_.parse(element).value, (t2 = message, t2 == null ? "[" + dart.str(code.toReadableString(element)) + "] expected" : t2));
  };
  dart.defineLazy(pattern, {
    /*pattern.single_*/get single_() {
      return any.any().map(range.RangeCharPredicate, dart.fn(element => new range.RangeCharPredicate.new(code.toCharCode(element), code.toCharCode(element)), StringToRangeCharPredicate()));
    },
    /*pattern.range_*/get range_() {
      return any.any().seq(char.char("-")).seq(any.any()).map(range.RangeCharPredicate, dart.fn(elements => new range.RangeCharPredicate.new(code.toCharCode(elements[$_get](0)), code.toCharCode(elements[$_get](2))), ListToRangeCharPredicate()));
    },
    /*pattern.sequence_*/get sequence_() {
      return pattern.range_.or(pattern.single_).plus().map(predicate.CharacterPredicate, dart.fn(predicates => optimize.optimizedRanges(predicates[$cast](range.RangeCharPredicate)), ListToCharacterPredicate()));
    },
    /*pattern.pattern_*/get pattern_() {
      return char.char("^").optional().seq(pattern.sequence_).map(predicate.CharacterPredicate, dart.fn(predicates => predicate.CharacterPredicate._check(predicates[$_get](0) == null ? predicates[$_get](1) : new not.NotCharacterPredicate.new(predicate.CharacterPredicate._check(predicates[$_get](1)))), ListToCharacterPredicate()));
    }
  });
  optimize.optimizedString = function optimizedString(string) {
    return optimize.optimizedRanges(string[$codeUnits][$map](range.RangeCharPredicate, dart.fn(value => new range.RangeCharPredicate.new(value, value), intToRangeCharPredicate())));
  };
  optimize.optimizedRanges = function optimizedRanges(ranges) {
    let sortedRanges = ListOfRangeCharPredicate().of(ranges, {growable: false});
    sortedRanges[$sort](dart.fn((first, second) => first.start != second.start ? dart.notNull(first.start) - dart.notNull(second.start) : dart.notNull(first.stop) - dart.notNull(second.stop), RangeCharPredicateAndRangeCharPredicateToint()));
    let mergedRanges = JSArrayOfRangeCharPredicate().of([]);
    for (let thisRange of sortedRanges) {
      if (dart.test(mergedRanges[$isEmpty])) {
        mergedRanges[$add](thisRange);
      } else {
        let lastRange = mergedRanges[$last];
        if (dart.notNull(lastRange.stop) + 1 >= dart.notNull(thisRange.start)) {
          let characterRange = new range.RangeCharPredicate.new(lastRange.start, thisRange.stop);
          mergedRanges[$_set](dart.notNull(mergedRanges[$length]) - 1, characterRange);
        } else {
          mergedRanges[$add](thisRange);
        }
      }
    }
    if (mergedRanges[$length] === 1) {
      return mergedRanges[$_get](0).start == mergedRanges[$_get](0).stop ? new char.SingleCharPredicate.new(mergedRanges[$_get](0).start) : mergedRanges[$_get](0);
    } else {
      return new ranges$.RangesCharPredicate.new(mergedRanges[$length], mergedRanges[$map](core.int, dart.fn(range => range.start, RangeCharPredicateToint()))[$toList]({growable: false}), mergedRanges[$map](core.int, dart.fn(range => range.stop, RangeCharPredicateToint()))[$toList]({growable: false}));
    }
  };
  const NotCharacterPredicate_predicate = dart.privateName(not, "NotCharacterPredicate.predicate");
  not.NotCharacterPredicate = class NotCharacterPredicate extends predicate.CharacterPredicate {
    get predicate() {
      return this[predicate$2];
    }
    set predicate(value) {
      super.predicate = value;
    }
    test(value) {
      return !dart.test(this.predicate.test(value));
    }
    isEqualTo(other) {
      return not.NotCharacterPredicate.is(other) && dart.test(other.predicate.isEqualTo(other.predicate));
    }
  };
  (not.NotCharacterPredicate.new = function(predicate) {
    this[predicate$2] = predicate;
    if (!(predicate != null)) dart.assertFailed("predicate must not be null", "org-dartlang-app:///packages/petitparser/src/core/characters/not.dart", 10, 16, "predicate != null");
    not.NotCharacterPredicate.__proto__.new.call(this);
    ;
  }).prototype = not.NotCharacterPredicate.prototype;
  dart.addTypeTests(not.NotCharacterPredicate);
  const predicate$2 = NotCharacterPredicate_predicate;
  dart.setMethodSignature(not.NotCharacterPredicate, () => ({
    __proto__: dart.getMethods(not.NotCharacterPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(not.NotCharacterPredicate, "package:petitparser/src/core/characters/not.dart");
  dart.setFieldSignature(not.NotCharacterPredicate, () => ({
    __proto__: dart.getFields(not.NotCharacterPredicate.__proto__),
    predicate: dart.finalFieldType(predicate.CharacterPredicate)
  }));
  uppercase.UppercaseCharPredicate = class UppercaseCharPredicate extends core.Object {
    test(value) {
      return 65 <= dart.notNull(value) && dart.notNull(value) <= 90;
    }
    isEqualTo(other) {
      return uppercase.UppercaseCharPredicate.is(other);
    }
  };
  (uppercase.UppercaseCharPredicate.new = function() {
    ;
  }).prototype = uppercase.UppercaseCharPredicate.prototype;
  dart.addTypeTests(uppercase.UppercaseCharPredicate);
  uppercase.UppercaseCharPredicate[dart.implements] = () => [predicate.CharacterPredicate];
  dart.setMethodSignature(uppercase.UppercaseCharPredicate, () => ({
    __proto__: dart.getMethods(uppercase.UppercaseCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(uppercase.UppercaseCharPredicate, "package:petitparser/src/core/characters/uppercase.dart");
  let C6;
  uppercase.uppercase = function uppercase$(message) {
    if (message === void 0) message = "uppercase letter expected";
    return new parser.CharacterParser.new(C6 || CT.C6, message);
  };
  any_of.anyOf = function anyOf(chars, message) {
    let t2;
    if (message === void 0) message = null;
    return new parser.CharacterParser.new(optimize.optimizedString(chars), (t2 = message, t2 == null ? "any of \"" + dart.str(code.toReadableString(chars)) + "\" expected" : t2));
  };
  none_of.noneOf = function noneOf(chars, message) {
    let t2;
    if (message === void 0) message = null;
    return new parser.CharacterParser.new(new not.NotCharacterPredicate.new(optimize.optimizedString(chars)), (t2 = message, t2 == null ? "none of \"" + dart.str(code.toReadableString(chars)) + "\" expected" : t2));
  };
  string.string = function string$(element, message) {
    let t2;
    if (message === void 0) message = null;
    return predicate$.predicate(element.length, dart.fn(each => element == each, StringTobool()), (t2 = message, t2 == null ? dart.str(element) + " expected" : t2));
  };
  string.stringIgnoreCase = function stringIgnoreCase(element, message) {
    let t2;
    if (message === void 0) message = null;
    let lowerElement = element[$toLowerCase]();
    return predicate$.predicate(element.length, dart.fn(each => lowerElement === each[$toLowerCase](), StringTobool()), (t2 = message, t2 == null ? dart.str(element) + " expected" : t2));
  };
  dart.trackLibraries("packages/petitparser/petitparser", {
    "package:petitparser/src/core/characters/letter.dart": letter,
    "package:petitparser/src/core/characters/ranges.dart": ranges$,
    "package:petitparser/src/core/definition/parser.dart": parser$0,
    "package:petitparser/src/core/definition/grammar.dart": grammar,
    "package:petitparser/src/core/definition/reference.dart": reference$,
    "package:petitparser/src/core/characters/word.dart": word,
    "package:petitparser/src/core/expression/builder.dart": builder,
    "package:petitparser/src/core/expression/group.dart": group$,
    "package:petitparser/src/core/expression/result.dart": result$,
    "package:petitparser/src/core/characters/digit.dart": digit,
    "package:petitparser/src/core/predicates/predicate.dart": predicate$,
    "package:petitparser/src/core/characters/range.dart": range,
    "package:petitparser/src/core/characters/lowercase.dart": lowercase,
    "package:petitparser/src/core/parsers/epsilon.dart": epsilon,
    "package:petitparser/src/core/parsers/position.dart": position,
    "package:petitparser/src/core/predicates/any_in.dart": any_in,
    "package:petitparser/src/core/characters/pattern.dart": pattern,
    "package:petitparser/src/core/characters/optimize.dart": optimize,
    "package:petitparser/src/core/characters/not.dart": not,
    "package:petitparser/src/core/characters/uppercase.dart": uppercase,
    "package:petitparser/src/core/characters/any_of.dart": any_of,
    "package:petitparser/src/core/characters/none_of.dart": none_of,
    "package:petitparser/src/core/predicates/string.dart": string,
    "package:petitparser/petitparser.dart": petitparser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src\\\\core\\\\characters\\\\letter.dart","src\\\\core\\\\characters\\\\ranges.dart","src\\\\core\\\\definition\\\\parser.dart","src\\\\core\\\\definition\\\\grammar.dart","src\\\\core\\\\definition\\\\reference.dart","src\\\\core\\\\characters\\\\word.dart","src\\\\core\\\\expression\\\\builder.dart","src\\\\core\\\\expression\\\\group.dart","src\\\\core\\\\expression\\\\result.dart","src\\\\core\\\\characters\\\\digit.dart","src\\\\core\\\\predicates\\\\predicate.dart","src\\\\core\\\\characters\\\\range.dart","src\\\\core\\\\characters\\\\lowercase.dart","src\\\\core\\\\parsers\\\\epsilon.dart","src\\\\core\\\\parsers\\\\position.dart","src\\\\core\\\\predicates\\\\any_in.dart","src\\\\core\\\\characters\\\\pattern.dart","src\\\\core\\\\characters\\\\optimize.dart","src\\\\core\\\\characters\\\\not.dart","src\\\\core\\\\characters\\\\uppercase.dart","src\\\\core\\\\characters\\\\any_of.dart","src\\\\core\\\\characters\\\\none_of.dart","src\\\\core\\\\predicates\\\\string.dart"],"names":[],"mappings":"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","file":"petitparser.ddc.js"}');
  // Exports:
  return {
    src__core__characters__letter: letter,
    src__core__characters__ranges: ranges$,
    src__core__definition__parser: parser$0,
    src__core__definition__grammar: grammar,
    src__core__definition__reference: reference$,
    src__core__characters__word: word,
    src__core__expression__builder: builder,
    src__core__expression__group: group$,
    src__core__expression__result: result$,
    src__core__characters__digit: digit,
    src__core__predicates__predicate: predicate$,
    src__core__characters__range: range,
    src__core__characters__lowercase: lowercase,
    src__core__parsers__epsilon: epsilon,
    src__core__parsers__position: position,
    src__core__predicates__any_in: any_in,
    src__core__characters__pattern: pattern,
    src__core__characters__optimize: optimize,
    src__core__characters__not: not,
    src__core__characters__uppercase: uppercase,
    src__core__characters__any_of: any_of,
    src__core__characters__none_of: none_of,
    src__core__predicates__string: string,
    petitparser: petitparser
  };
});

//# sourceMappingURL=petitparser.ddc.js.map
