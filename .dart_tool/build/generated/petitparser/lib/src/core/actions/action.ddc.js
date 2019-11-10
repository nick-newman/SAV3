define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const failure = Object.create(dart.library);
  const result = Object.create(dart.library);
  const context$ = Object.create(dart.library);
  const token$ = Object.create(dart.library);
  const parser = Object.create(dart.library);
  const unbounded = Object.create(dart.library);
  const possesive = Object.create(dart.library);
  const repeating = Object.create(dart.library);
  const delegate = Object.create(dart.library);
  const lazy = Object.create(dart.library);
  const limited = Object.create(dart.library);
  const greedy = Object.create(dart.library);
  const any = Object.create(dart.library);
  const pattern = Object.create(dart.library);
  const settable = Object.create(dart.library);
  const failure$ = Object.create(dart.library);
  const eof = Object.create(dart.library);
  const success = Object.create(dart.library);
  const sequence = Object.create(dart.library);
  const list = Object.create(dart.library);
  const optional = Object.create(dart.library);
  const not = Object.create(dart.library);
  const choice = Object.create(dart.library);
  const and = Object.create(dart.library);
  const whitespace = Object.create(dart.library);
  const predicate = Object.create(dart.library);
  const parser$ = Object.create(dart.library);
  const trimming = Object.create(dart.library);
  const token = Object.create(dart.library);
  const flatten = Object.create(dart.library);
  const cast = Object.create(dart.library);
  const action = Object.create(dart.library);
  const char$ = Object.create(dart.library);
  const code$ = Object.create(dart.library);
  const exception = Object.create(dart.library);
  const $substring = dartx.substring;
  const $_get = dartx._get;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $add = dartx.add;
  const $length = dartx.length;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $runtimeType = dartx.runtimeType;
  const $allMatches = dartx.allMatches;
  const $matchAsPrefix = dartx.matchAsPrefix;
  const $toString = dartx.toString;
  const $last = dartx.last;
  const $isEmpty = dartx.isEmpty;
  const $removeLast = dartx.removeLast;
  const $_set = dartx._set;
  const $codeUnitAt = dartx.codeUnitAt;
  const $cast = dartx.cast;
  const $round = dartx.round;
  const $toRadixString = dartx.toRadixString;
  const $padLeft = dartx.padLeft;
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let SyncIterableOfMatch = () => (SyncIterableOfMatch = dart.constFn(_js_helper.SyncIterable$(core.Match)))();
  let JSArrayOfParser = () => (JSArrayOfParser = dart.constFn(_interceptors.JSArray$(parser.Parser)))();
  let LinkedHashSetOfParser = () => (LinkedHashSetOfParser = dart.constFn(collection.LinkedHashSet$(parser.Parser)))();
  let JSArrayOfContext = () => (JSArrayOfContext = dart.constFn(_interceptors.JSArray$(context$.Context)))();
  let ListOfParser = () => (ListOfParser = dart.constFn(core.List$(parser.Parser)))();
  let ResultOfList = () => (ResultOfList = dart.constFn(result.Result$(core.List)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], parser.Parser);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: whitespace.WhitespaceCharPredicate.prototype
      });
    }
  });
  const Context_buffer = dart.privateName(context$, "Context.buffer");
  const Context_position = dart.privateName(context$, "Context.position");
  context$.Context = class Context extends core.Object {
    get buffer() {
      return this[buffer$];
    }
    set buffer(value) {
      super.buffer = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    success(R, result, position) {
      let t0;
      if (position === void 0) position = null;
      return new (success.Success$(R)).new(this.buffer, (t0 = position, t0 == null ? this.position : t0), result);
    }
    failure(R, message, position) {
      let t0;
      if (position === void 0) position = null;
      return new (failure.Failure$(R)).new(this.buffer, (t0 = position, t0 == null ? this.position : t0), message);
    }
    toString() {
      return "Context[" + dart.str(this.toPositionString()) + "]";
    }
    toPositionString() {
      return token$.Token.positionString(this.buffer, this.position);
    }
  };
  (context$.Context.new = function(buffer, position) {
    this[buffer$] = buffer;
    this[position$] = position;
    ;
  }).prototype = context$.Context.prototype;
  dart.addTypeTests(context$.Context);
  const buffer$ = Context_buffer;
  const position$ = Context_position;
  dart.setMethodSignature(context$.Context, () => ({
    __proto__: dart.getMethods(context$.Context.__proto__),
    success: dart.gFnType(R => [result.Result$(R), [R], [core.int]]),
    failure: dart.gFnType(R => [result.Result$(R), [core.String], [core.int]]),
    toPositionString: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(context$.Context, "package:petitparser/src/core/contexts/context.dart");
  dart.setFieldSignature(context$.Context, () => ({
    __proto__: dart.getFields(context$.Context.__proto__),
    buffer: dart.finalFieldType(core.String),
    position: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(context$.Context, ['toString']);
  const _is_Result_default = Symbol('_is_Result_default');
  result.Result$ = dart.generic(R => {
    class Result extends context$.Context {
      get isSuccess() {
        return false;
      }
      get isFailure() {
        return false;
      }
    }
    (Result.new = function(buffer, position) {
      Result.__proto__.new.call(this, buffer, position);
      ;
    }).prototype = Result.prototype;
    dart.addTypeTests(Result);
    Result.prototype[_is_Result_default] = true;
    dart.setGetterSignature(Result, () => ({
      __proto__: dart.getGetters(Result.__proto__),
      isSuccess: core.bool,
      isFailure: core.bool
    }));
    dart.setLibraryUri(Result, "package:petitparser/src/core/contexts/result.dart");
    return Result;
  });
  result.Result = result.Result$();
  dart.addTypeTests(result.Result, _is_Result_default);
  const _is_Failure_default = Symbol('_is_Failure_default');
  const Failure_message = dart.privateName(failure, "Failure.message");
  failure.Failure$ = dart.generic(R => {
    class Failure extends result.Result$(R) {
      get message() {
        return this[message$];
      }
      set message(value) {
        super.message = value;
      }
      get isFailure() {
        return true;
      }
      get value() {
        return dart.throw(new exception.ParserException.new(this));
      }
      map(T, callback) {
        return this.failure(T, this.message);
      }
      toString() {
        return "Failure[" + dart.str(this.toPositionString()) + "]: " + dart.str(this.message);
      }
    }
    (Failure.new = function(buffer, position, message) {
      this[message$] = message;
      Failure.__proto__.new.call(this, buffer, position);
      ;
    }).prototype = Failure.prototype;
    dart.addTypeTests(Failure);
    Failure.prototype[_is_Failure_default] = true;
    const message$ = Failure_message;
    dart.setMethodSignature(Failure, () => ({
      __proto__: dart.getMethods(Failure.__proto__),
      map: dart.gFnType(T => [result.Result$(T), [dart.fnType(T, [R])]])
    }));
    dart.setGetterSignature(Failure, () => ({
      __proto__: dart.getGetters(Failure.__proto__),
      value: R
    }));
    dart.setLibraryUri(Failure, "package:petitparser/src/core/contexts/failure.dart");
    dart.setFieldSignature(Failure, () => ({
      __proto__: dart.getFields(Failure.__proto__),
      message: dart.finalFieldType(core.String)
    }));
    dart.defineExtensionMethods(Failure, ['toString']);
    return Failure;
  });
  failure.Failure = failure.Failure$();
  dart.addTypeTests(failure.Failure, _is_Failure_default);
  const _is_Token_default = Symbol('_is_Token_default');
  const Token_value = dart.privateName(token$, "Token.value");
  const Token_buffer = dart.privateName(token$, "Token.buffer");
  const Token_start = dart.privateName(token$, "Token.start");
  const Token_stop = dart.privateName(token$, "Token.stop");
  token$.Token$ = dart.generic(T => {
    class Token extends core.Object {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get buffer() {
        return this[buffer$];
      }
      set buffer(value) {
        super.buffer = value;
      }
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
      get input() {
        return this.buffer[$substring](this.start, this.stop);
      }
      get length() {
        return dart.notNull(this.stop) - dart.notNull(this.start);
      }
      get line() {
        return token$.Token.lineAndColumnOf(this.buffer, this.start)[$_get](0);
      }
      get column() {
        return token$.Token.lineAndColumnOf(this.buffer, this.start)[$_get](1);
      }
      toString() {
        return "Token[" + dart.str(token$.Token.positionString(this.buffer, this.start)) + "]: " + dart.str(this.value);
      }
      _equals(other) {
        if (other == null) return false;
        return token$.Token.is(other) && dart.equals(this.value, other.value) && this.start == other.start && this.stop == other.stop;
      }
      get hashCode() {
        return dart.notNull(dart.hashCode(this.value)) + dart.hashCode(this.start) + dart.hashCode(this.stop);
      }
      static newlineParser() {
        return token$.Token._newlineParser;
      }
      static lineAndColumnOf(buffer, position) {
        let line = 1;
        let offset = 0;
        let iter = token$.Token.newlineParser().token().matchesSkipping(buffer);
        for (let token of iter) {
          if (dart.notNull(position) < dart.notNull(token.stop)) {
            return JSArrayOfint().of([line, dart.notNull(position) - dart.notNull(offset) + 1]);
          }
          line = line + 1;
          offset = token.stop;
        }
        return JSArrayOfint().of([line, dart.notNull(position) - dart.notNull(offset) + 1]);
      }
      static positionString(buffer, position) {
        let lineAndColumn = token$.Token.lineAndColumnOf(buffer, position);
        return dart.str(lineAndColumn[$_get](0)) + ":" + dart.str(lineAndColumn[$_get](1));
      }
    }
    (Token.new = function(value, buffer, start, stop) {
      this[value$] = value;
      this[buffer$] = buffer;
      this[start$] = start;
      this[stop$] = stop;
      ;
    }).prototype = Token.prototype;
    dart.addTypeTests(Token);
    Token.prototype[_is_Token_default] = true;
    const value$ = Token_value;
    const buffer$ = Token_buffer;
    const start$ = Token_start;
    const stop$ = Token_stop;
    dart.setMethodSignature(Token, () => ({
      __proto__: dart.getMethods(Token.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(Token, () => ({
      __proto__: dart.getGetters(Token.__proto__),
      input: core.String,
      length: core.int,
      line: core.int,
      column: core.int
    }));
    dart.setLibraryUri(Token, "package:petitparser/src/core/token.dart");
    dart.setFieldSignature(Token, () => ({
      __proto__: dart.getFields(Token.__proto__),
      value: dart.finalFieldType(T),
      buffer: dart.finalFieldType(core.String),
      start: dart.finalFieldType(core.int),
      stop: dart.finalFieldType(core.int)
    }));
    dart.defineExtensionMethods(Token, ['toString', '_equals']);
    dart.defineExtensionAccessors(Token, ['hashCode']);
    return Token;
  });
  token$.Token = token$.Token$();
  dart.defineLazy(token$.Token, {
    /*token$.Token._newlineParser*/get _newlineParser() {
      return char$.char("\n")['|'](char$.char("\r")['&'](char$.char("\n").optional()));
    }
  });
  dart.addTypeTests(token$.Token, _is_Token_default);
  let C0;
  const _is_Parser_default = Symbol('_is_Parser_default');
  parser.Parser$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let OptionalParserOfT = () => (OptionalParserOfT = dart.constFn(optional.OptionalParser$(T)))();
    let PossessiveRepeatingParserOfT = () => (PossessiveRepeatingParserOfT = dart.constFn(possesive.PossessiveRepeatingParser$(T)))();
    let GreedyRepeatingParserOfT = () => (GreedyRepeatingParserOfT = dart.constFn(greedy.GreedyRepeatingParser$(T)))();
    let LazyRepeatingParserOfT = () => (LazyRepeatingParserOfT = dart.constFn(lazy.LazyRepeatingParser$(T)))();
    let AndParserOfT = () => (AndParserOfT = dart.constFn(and.AndParser$(T)))();
    let TokenParserOfT = () => (TokenParserOfT = dart.constFn(token.TokenParser$(T)))();
    let TrimmingParserOfT = () => (TrimmingParserOfT = dart.constFn(trimming.TrimmingParser$(T)))();
    let SettableParserOfT = () => (SettableParserOfT = dart.constFn(settable.SettableParser$(T)))();
    let ParserOfT = () => (ParserOfT = dart.constFn(parser.Parser$(T)))();
    class Parser extends core.Object {
      fastParseOn(buffer, position) {
        let result = this.parseOn(new context$.Context.new(buffer, position));
        return dart.test(result.isSuccess) ? result.position : -1;
      }
      parse(input) {
        return this.parseOn(new context$.Context.new(input, 0));
      }
      allMatches(string, start) {
        if (start === void 0) start = 0;
        return new (SyncIterableOfMatch()).new(() => (function* allMatches(start) {
          while (dart.notNull(start) <= string.length) {
            let match = this.matchAsPrefix(string, start);
            if (match == null) {
              start = dart.notNull(start) + 1;
            } else {
              yield match;
              if (start == match.end) {
                start = dart.notNull(start) + 1;
              } else {
                start = match.end;
              }
            }
          }
        }).bind(this)(start));
      }
      matchAsPrefix(string, start) {
        if (start === void 0) start = 0;
        let end = this.fastParseOn(string, start);
        return dart.notNull(end) < 0 ? null : new pattern.ParserMatch.new(this, string, start, end);
      }
      accept(input) {
        return dart.notNull(this.fastParseOn(input, 0)) >= 0;
      }
      matches(input) {
        let list = JSArrayOfT().of([]);
        this.and().map(dart.void, dart.bind(list, $add), {hasSideEffects: true}).seq(any.any()).or(any.any()).star().fastParseOn(input, 0);
        return list;
      }
      matchesSkipping(input) {
        let list = JSArrayOfT().of([]);
        this.map(dart.void, dart.bind(list, $add), {hasSideEffects: true}).or(any.any()).star().fastParseOn(input, 0);
        return list;
      }
      optional(otherwise) {
        if (otherwise === void 0) otherwise = null;
        T._check(otherwise);
        return new (OptionalParserOfT()).new(this, otherwise);
      }
      star() {
        return this.repeat(0, -1);
      }
      starGreedy(limit) {
        return this.repeatGreedy(limit, 0, -1);
      }
      starLazy(limit) {
        return this.repeatLazy(limit, 0, -1);
      }
      plus() {
        return this.repeat(1, -1);
      }
      plusGreedy(limit) {
        return this.repeatGreedy(limit, 1, -1);
      }
      plusLazy(limit) {
        return this.repeatLazy(limit, 1, -1);
      }
      times(count) {
        return this.repeat(count, count);
      }
      repeat(min, max) {
        let t0;
        if (max === void 0) max = null;
        return new (PossessiveRepeatingParserOfT()).new(this, min, (t0 = max, t0 == null ? min : t0));
      }
      repeatGreedy(limit, min, max) {
        return new (GreedyRepeatingParserOfT()).new(this, limit, min, max);
      }
      repeatLazy(limit, min, max) {
        return new (LazyRepeatingParserOfT()).new(this, limit, min, max);
      }
      seq(other) {
        return new sequence.SequenceParser.new(JSArrayOfParser().of([this, other]));
      }
      ['&'](other) {
        return this.seq(other);
      }
      or(other) {
        return new choice.ChoiceParser.new(JSArrayOfParser().of([this, other]));
      }
      ['|'](other) {
        return this.or(other);
      }
      and() {
        return new (AndParserOfT()).new(this);
      }
      not(message) {
        if (message === void 0) message = "success not expected";
        return new not.NotParser.new(this, message);
      }
      neg(message) {
        if (message === void 0) message = "input not expected";
        return this.not(message).seq(any.any()).pick(core.String, 1);
      }
      flatten(message) {
        if (message === void 0) message = null;
        return new flatten.FlattenParser.new(this, message);
      }
      token() {
        return new (TokenParserOfT()).new(this);
      }
      trim(left, right) {
        let t0, t0$;
        if (left === void 0) left = null;
        if (right === void 0) right = null;
        return new (TrimmingParserOfT()).new(this, (t0 = left, t0 == null ? left = whitespace.whitespace() : t0), (t0$ = right, t0$ == null ? right = left : t0$));
      }
      end(message) {
        if (message === void 0) message = "end of input expected";
        return new sequence.SequenceParser.new(JSArrayOfParser().of([this, eof.endOfInput(message)])).pick(T, 0);
      }
      settable() {
        return new (SettableParserOfT()).new(this);
      }
      map(R, callback, opts) {
        let hasSideEffects = opts && 'hasSideEffects' in opts ? opts.hasSideEffects : false;
        return new (action.ActionParser$(T, R)).new(this, callback, hasSideEffects);
      }
      cast(R) {
        return new (cast.CastParser$(R)).new(this);
      }
      castList(R) {
        return new (cast.CastListParser$(R)).new(this);
      }
      pick(R, index) {
        return this.castList(R).map(R, dart.fn(list => list[$_get](dart.notNull(index) < 0 ? dart.notNull(list[$length]) + dart.notNull(index) : index), dart.fnType(R, [core.List$(R)])));
      }
      permute(R, indexes) {
        return this.castList(R).map(core.List$(R), dart.fn(list => indexes[$map](R, dart.fn(index => list[$_get](dart.notNull(index) < 0 ? dart.notNull(list[$length]) + dart.notNull(index) : index), dart.fnType(R, [core.int])))[$toList]({growable: false}), dart.fnType(core.List$(R), [core.List$(R)])));
      }
      separatedBy(R, separator, opts) {
        let includeSeparators = opts && 'includeSeparators' in opts ? opts.includeSeparators : true;
        let optionalSeparatorAtEnd = opts && 'optionalSeparatorAtEnd' in opts ? opts.optionalSeparatorAtEnd : false;
        let repeater = new sequence.SequenceParser.new(JSArrayOfParser().of([separator, this])).star();
        let parser = new sequence.SequenceParser.new(dart.test(optionalSeparatorAtEnd) ? JSArrayOfParser().of([this, repeater, separator.optional()]) : JSArrayOfParser().of([this, repeater]));
        return parser.map(core.List$(R), dart.fn(list => {
          let result = _interceptors.JSArray$(R).of([]);
          result[$add](R._check(list[$_get](0)));
          for (let tuple of core.Iterable._check(list[$_get](1))) {
            if (dart.test(includeSeparators)) {
              result[$add](R._check(dart.dsend(tuple, '_get', [0])));
            }
            result[$add](R._check(dart.dsend(tuple, '_get', [1])));
          }
          if (dart.test(includeSeparators) && dart.test(optionalSeparatorAtEnd) && list[$_get](2) != null) {
            result[$add](R._check(list[$_get](2)));
          }
          return result;
        }, dart.fnType(core.List$(R), [core.List])));
      }
      isEqualTo(other, seen) {
        if (seen === void 0) seen = null;
        seen == null ? seen = LinkedHashSetOfParser().new() : null;
        if (this[$_equals](other) || dart.test(seen.contains(this))) {
          return true;
        }
        seen.add(this);
        return dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.test(this.hasEqualProperties(ParserOfT()._check(other))) && dart.test(this.hasEqualChildren(other, seen));
      }
      hasEqualProperties(other) {
        ParserOfT()._check(other);
        return true;
      }
      hasEqualChildren(other, seen) {
        let thisChildren = this.children;
        let otherChildren = other.children;
        if (thisChildren[$length] != otherChildren[$length]) {
          return false;
        }
        for (let i = 0; i < dart.notNull(thisChildren[$length]); i = i + 1) {
          if (!dart.test(thisChildren[$_get](i).isEqualTo(otherChildren[$_get](i), seen))) {
            return false;
          }
        }
        return true;
      }
      get children() {
        return C0 || CT.C0;
      }
      replace(source, target) {
      }
    }
    (Parser.new = function() {
      ;
    }).prototype = Parser.prototype;
    dart.addTypeTests(Parser);
    Parser.prototype[_is_Parser_default] = true;
    Parser[dart.implements] = () => [core.Pattern];
    dart.setMethodSignature(Parser, () => ({
      __proto__: dart.getMethods(Parser.__proto__),
      fastParseOn: dart.fnType(core.int, [core.String, core.int]),
      parse: dart.fnType(result.Result$(T), [core.String]),
      allMatches: dart.fnType(core.Iterable$(core.Match), [core.String], [core.int]),
      [$allMatches]: dart.fnType(core.Iterable$(core.Match), [core.String], [core.int]),
      matchAsPrefix: dart.fnType(core.Match, [core.String], [core.int]),
      [$matchAsPrefix]: dart.fnType(core.Match, [core.String], [core.int]),
      accept: dart.fnType(core.bool, [core.String]),
      matches: dart.fnType(core.List$(T), [core.String]),
      matchesSkipping: dart.fnType(core.List$(T), [core.String]),
      optional: dart.fnType(parser.Parser$(T), [], [core.Object]),
      star: dart.fnType(parser.Parser$(core.List$(T)), []),
      starGreedy: dart.fnType(parser.Parser$(core.List$(T)), [parser.Parser]),
      starLazy: dart.fnType(parser.Parser$(core.List$(T)), [parser.Parser]),
      plus: dart.fnType(parser.Parser$(core.List$(T)), []),
      plusGreedy: dart.fnType(parser.Parser$(core.List$(T)), [parser.Parser]),
      plusLazy: dart.fnType(parser.Parser$(core.List$(T)), [parser.Parser]),
      times: dart.fnType(parser.Parser$(core.List$(T)), [core.int]),
      repeat: dart.fnType(parser.Parser$(core.List$(T)), [core.int], [core.int]),
      repeatGreedy: dart.fnType(parser.Parser$(core.List$(T)), [parser.Parser, core.int, core.int]),
      repeatLazy: dart.fnType(parser.Parser$(core.List$(T)), [parser.Parser, core.int, core.int]),
      seq: dart.fnType(parser.Parser$(core.List), [parser.Parser]),
      '&': dart.fnType(parser.Parser$(core.List), [parser.Parser]),
      or: dart.fnType(parser.Parser, [parser.Parser]),
      '|': dart.fnType(parser.Parser, [parser.Parser]),
      and: dart.fnType(parser.Parser$(T), []),
      not: dart.fnType(parser.Parser$(dart.void), [], [core.String]),
      neg: dart.fnType(parser.Parser$(core.String), [], [core.String]),
      flatten: dart.fnType(parser.Parser$(core.String), [], [core.String]),
      token: dart.fnType(parser.Parser$(token$.Token$(T)), []),
      trim: dart.fnType(parser.Parser$(T), [], [parser.Parser, parser.Parser]),
      end: dart.fnType(parser.Parser$(T), [], [core.String]),
      settable: dart.fnType(settable.SettableParser$(T), []),
      map: dart.gFnType(R => [parser.Parser$(R), [dart.fnType(R, [T])], {hasSideEffects: core.bool}]),
      cast: dart.gFnType(R => [parser.Parser$(R), []]),
      castList: dart.gFnType(R => [parser.Parser$(core.List$(R)), []]),
      pick: dart.gFnType(R => [parser.Parser$(R), [core.int]]),
      permute: dart.gFnType(R => [parser.Parser$(core.List$(R)), [core.List$(core.int)]]),
      separatedBy: dart.gFnType(R => [parser.Parser$(core.List$(R)), [parser.Parser], {includeSeparators: core.bool, optionalSeparatorAtEnd: core.bool}]),
      isEqualTo: dart.fnType(core.bool, [parser.Parser], [core.Set$(parser.Parser)]),
      hasEqualProperties: dart.fnType(core.bool, [core.Object]),
      hasEqualChildren: dart.fnType(core.bool, [parser.Parser, core.Set$(parser.Parser)]),
      replace: dart.fnType(dart.void, [parser.Parser, parser.Parser])
    }));
    dart.setGetterSignature(Parser, () => ({
      __proto__: dart.getGetters(Parser.__proto__),
      children: core.List$(parser.Parser)
    }));
    dart.setLibraryUri(Parser, "package:petitparser/src/core/parser.dart");
    dart.defineExtensionMethods(Parser, ['allMatches', 'matchAsPrefix']);
    return Parser;
  });
  parser.Parser = parser.Parser$();
  dart.addTypeTests(parser.Parser, _is_Parser_default);
  dart.defineLazy(unbounded, {
    /*unbounded.unbounded*/get unbounded() {
      return -1;
    }
  });
  const _is_DelegateParser_default = Symbol('_is_DelegateParser_default');
  const DelegateParser_delegate = dart.privateName(delegate, "DelegateParser.delegate");
  delegate.DelegateParser$ = dart.generic(R => {
    let ResultOfR = () => (ResultOfR = dart.constFn(result.Result$(R)))();
    let DelegateParserOfR = () => (DelegateParserOfR = dart.constFn(delegate.DelegateParser$(R)))();
    class DelegateParser extends parser.Parser$(R) {
      get delegate() {
        return this[delegate$];
      }
      set delegate(value) {
        this[delegate$] = value;
      }
      parseOn(context) {
        return ResultOfR()._check(this.delegate.parseOn(context));
      }
      get children() {
        return JSArrayOfParser().of([this.delegate]);
      }
      replace(source, target) {
        super.replace(source, target);
        if (dart.equals(this.delegate, source)) {
          this.delegate = target;
        }
      }
      copy() {
        return new (DelegateParserOfR()).new(this.delegate);
      }
    }
    (DelegateParser.new = function(delegate) {
      this[delegate$] = delegate;
      if (!(delegate != null)) dart.assertFailed("delegate must not be null", "org-dartlang-app:///packages/petitparser/src/core/combinators/delegate.dart", 13, 16, "delegate != null");
      DelegateParser.__proto__.new.call(this);
      ;
    }).prototype = DelegateParser.prototype;
    dart.addTypeTests(DelegateParser);
    DelegateParser.prototype[_is_DelegateParser_default] = true;
    const delegate$ = DelegateParser_delegate;
    dart.setMethodSignature(DelegateParser, () => ({
      __proto__: dart.getMethods(DelegateParser.__proto__),
      parseOn: dart.fnType(result.Result$(R), [context$.Context]),
      copy: dart.fnType(delegate.DelegateParser$(R), [])
    }));
    dart.setLibraryUri(DelegateParser, "package:petitparser/src/core/combinators/delegate.dart");
    dart.setFieldSignature(DelegateParser, () => ({
      __proto__: dart.getFields(DelegateParser.__proto__),
      delegate: dart.fieldType(parser.Parser)
    }));
    return DelegateParser;
  });
  delegate.DelegateParser = delegate.DelegateParser$();
  dart.addTypeTests(delegate.DelegateParser, _is_DelegateParser_default);
  const _is_RepeatingParser_default = Symbol('_is_RepeatingParser_default');
  const RepeatingParser_min = dart.privateName(repeating, "RepeatingParser.min");
  const RepeatingParser_max = dart.privateName(repeating, "RepeatingParser.max");
  repeating.RepeatingParser$ = dart.generic(T => {
    let RepeatingParserOfT = () => (RepeatingParserOfT = dart.constFn(repeating.RepeatingParser$(T)))();
    class RepeatingParser extends delegate.DelegateParser$(core.List$(T)) {
      get min() {
        return this[min$];
      }
      set min(value) {
        super.min = value;
      }
      get max() {
        return this[max$];
      }
      set max(value) {
        super.max = value;
      }
      toString() {
        return dart.str(super[$toString]()) + "[" + dart.str(this.min) + ".." + dart.str(this.max === -1 ? "*" : this.max) + "]";
      }
      hasEqualProperties(other) {
        RepeatingParserOfT()._check(other);
        return dart.test(super.hasEqualProperties(other)) && this.min == other.min && this.max == other.max;
      }
    }
    (RepeatingParser.new = function(parser, min, max) {
      this[min$] = min;
      this[max$] = max;
      if (!(min != null)) dart.assertFailed("min must not be null", "org-dartlang-app:///packages/petitparser/src/core/repeaters/repeating.dart", 14, 16, "min != null");
      if (!(max != null)) dart.assertFailed("max must not be null", "org-dartlang-app:///packages/petitparser/src/core/repeaters/repeating.dart", 15, 16, "max != null");
      RepeatingParser.__proto__.new.call(this, parser);
      if (dart.notNull(this.min) < 0) {
        dart.throw(new core.ArgumentError.new("Minimum repetitions must be positive, but got " + dart.str(this.min) + "."));
      }
      if (this.max !== -1 && dart.notNull(this.max) < dart.notNull(this.min)) {
        dart.throw(new core.ArgumentError.new("Maximum repetitions must be larger than " + dart.str(this.min) + ", but got " + dart.str(this.max) + "."));
      }
    }).prototype = RepeatingParser.prototype;
    dart.addTypeTests(RepeatingParser);
    RepeatingParser.prototype[_is_RepeatingParser_default] = true;
    const min$ = RepeatingParser_min;
    const max$ = RepeatingParser_max;
    dart.setLibraryUri(RepeatingParser, "package:petitparser/src/core/repeaters/repeating.dart");
    dart.setFieldSignature(RepeatingParser, () => ({
      __proto__: dart.getFields(RepeatingParser.__proto__),
      min: dart.finalFieldType(core.int),
      max: dart.finalFieldType(core.int)
    }));
    dart.defineExtensionMethods(RepeatingParser, ['toString']);
    return RepeatingParser;
  });
  repeating.RepeatingParser = repeating.RepeatingParser$();
  dart.addTypeTests(repeating.RepeatingParser, _is_RepeatingParser_default);
  const _is_PossessiveRepeatingParser_default = Symbol('_is_PossessiveRepeatingParser_default');
  possesive.PossessiveRepeatingParser$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let PossessiveRepeatingParserOfT = () => (PossessiveRepeatingParserOfT = dart.constFn(possesive.PossessiveRepeatingParser$(T)))();
    let ParserOfT = () => (ParserOfT = dart.constFn(parser.Parser$(T)))();
    class PossessiveRepeatingParser extends repeating.RepeatingParser$(T) {
      parseOn(context) {
        let elements = JSArrayOfT().of([]);
        let current = context;
        while (dart.notNull(elements[$length]) < dart.notNull(this.min)) {
          let result = this.delegate.parseOn(current);
          if (dart.test(result.isFailure)) {
            return result.failure(ListOfT(), result.message);
          }
          elements[$add](T._check(result.value));
          current = result;
        }
        while (this.max === -1 || dart.notNull(elements[$length]) < dart.notNull(this.max)) {
          let result = this.delegate.parseOn(current);
          if (dart.test(result.isFailure)) {
            return current.success(ListOfT(), elements);
          }
          elements[$add](T._check(result.value));
          current = result;
        }
        return current.success(ListOfT(), elements);
      }
      fastParseOn(buffer, position) {
        let count = 0;
        let current = position;
        while (count < dart.notNull(this.min)) {
          let result = this.delegate.fastParseOn(buffer, current);
          if (dart.notNull(result) < 0) {
            return -1;
          }
          current = result;
          count = count + 1;
        }
        while (this.max === -1 || count < dart.notNull(this.max)) {
          let result = this.delegate.fastParseOn(buffer, current);
          if (dart.notNull(result) < 0) {
            return current;
          }
          current = result;
          count = count + 1;
        }
        return current;
      }
      copy() {
        return new (PossessiveRepeatingParserOfT()).new(ParserOfT()._check(this.delegate), this.min, this.max);
      }
    }
    (PossessiveRepeatingParser.new = function(parser, min, max) {
      PossessiveRepeatingParser.__proto__.new.call(this, parser, min, max);
      ;
    }).prototype = PossessiveRepeatingParser.prototype;
    dart.addTypeTests(PossessiveRepeatingParser);
    PossessiveRepeatingParser.prototype[_is_PossessiveRepeatingParser_default] = true;
    dart.setMethodSignature(PossessiveRepeatingParser, () => ({
      __proto__: dart.getMethods(PossessiveRepeatingParser.__proto__),
      copy: dart.fnType(possesive.PossessiveRepeatingParser$(T), [])
    }));
    dart.setLibraryUri(PossessiveRepeatingParser, "package:petitparser/src/core/repeaters/possesive.dart");
    return PossessiveRepeatingParser;
  });
  possesive.PossessiveRepeatingParser = possesive.PossessiveRepeatingParser$();
  dart.addTypeTests(possesive.PossessiveRepeatingParser, _is_PossessiveRepeatingParser_default);
  const _is_LimitedRepeatingParser_default = Symbol('_is_LimitedRepeatingParser_default');
  const LimitedRepeatingParser_limit = dart.privateName(limited, "LimitedRepeatingParser.limit");
  limited.LimitedRepeatingParser$ = dart.generic(T => {
    class LimitedRepeatingParser extends repeating.RepeatingParser$(T) {
      get limit() {
        return this[limit$];
      }
      set limit(value) {
        this[limit$] = value;
      }
      get children() {
        return JSArrayOfParser().of([this.delegate, this.limit]);
      }
      replace(source, target) {
        super.replace(source, target);
        if (dart.equals(this.limit, source)) {
          this.limit = target;
        }
      }
    }
    (LimitedRepeatingParser.new = function(delegate, limit, min, max) {
      this[limit$] = limit;
      if (!(limit != null)) dart.assertFailed("limit must not be null", "org-dartlang-app:///packages/petitparser/src/core/repeaters/limited.dart", 14, 16, "limit != null");
      LimitedRepeatingParser.__proto__.new.call(this, delegate, min, max);
      ;
    }).prototype = LimitedRepeatingParser.prototype;
    dart.addTypeTests(LimitedRepeatingParser);
    LimitedRepeatingParser.prototype[_is_LimitedRepeatingParser_default] = true;
    const limit$ = LimitedRepeatingParser_limit;
    dart.setLibraryUri(LimitedRepeatingParser, "package:petitparser/src/core/repeaters/limited.dart");
    dart.setFieldSignature(LimitedRepeatingParser, () => ({
      __proto__: dart.getFields(LimitedRepeatingParser.__proto__),
      limit: dart.fieldType(parser.Parser)
    }));
    return LimitedRepeatingParser;
  });
  limited.LimitedRepeatingParser = limited.LimitedRepeatingParser$();
  dart.addTypeTests(limited.LimitedRepeatingParser, _is_LimitedRepeatingParser_default);
  const _is_LazyRepeatingParser_default = Symbol('_is_LazyRepeatingParser_default');
  lazy.LazyRepeatingParser$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let LazyRepeatingParserOfT = () => (LazyRepeatingParserOfT = dart.constFn(lazy.LazyRepeatingParser$(T)))();
    let ParserOfT = () => (ParserOfT = dart.constFn(parser.Parser$(T)))();
    class LazyRepeatingParser extends limited.LimitedRepeatingParser$(T) {
      parseOn(context) {
        let current = context;
        let elements = JSArrayOfT().of([]);
        while (dart.notNull(elements[$length]) < dart.notNull(this.min)) {
          let result = this.delegate.parseOn(current);
          if (dart.test(result.isFailure)) {
            return result.failure(ListOfT(), result.message);
          }
          elements[$add](T._check(result.value));
          current = result;
        }
        for (;;) {
          let limiter = this.limit.parseOn(current);
          if (dart.test(limiter.isSuccess)) {
            return current.success(ListOfT(), elements);
          } else {
            if (this.max !== -1 && dart.notNull(elements[$length]) >= dart.notNull(this.max)) {
              return limiter.failure(ListOfT(), limiter.message);
            }
            let result = this.delegate.parseOn(current);
            if (dart.test(result.isFailure)) {
              return limiter.failure(ListOfT(), limiter.message);
            }
            elements[$add](T._check(result.value));
            current = result;
          }
        }
      }
      fastParseOn(buffer, position) {
        let count = 0;
        let current = position;
        while (count < dart.notNull(this.min)) {
          let result = this.delegate.fastParseOn(buffer, current);
          if (dart.notNull(result) < 0) {
            return -1;
          }
          current = result;
          count = count + 1;
        }
        for (;;) {
          let limiter = this.limit.fastParseOn(buffer, current);
          if (dart.notNull(limiter) >= 0) {
            return current;
          } else {
            if (this.max !== -1 && count >= dart.notNull(this.max)) {
              return -1;
            }
            let result = this.delegate.fastParseOn(buffer, current);
            if (dart.notNull(result) < 0) {
              return -1;
            }
            current = result;
            count = count + 1;
          }
        }
      }
      copy() {
        return new (LazyRepeatingParserOfT()).new(ParserOfT()._check(this.delegate), this.limit, this.min, this.max);
      }
    }
    (LazyRepeatingParser.new = function(parser, limit, min, max) {
      LazyRepeatingParser.__proto__.new.call(this, parser, limit, min, max);
      ;
    }).prototype = LazyRepeatingParser.prototype;
    dart.addTypeTests(LazyRepeatingParser);
    LazyRepeatingParser.prototype[_is_LazyRepeatingParser_default] = true;
    dart.setMethodSignature(LazyRepeatingParser, () => ({
      __proto__: dart.getMethods(LazyRepeatingParser.__proto__),
      copy: dart.fnType(lazy.LazyRepeatingParser$(T), [])
    }));
    dart.setLibraryUri(LazyRepeatingParser, "package:petitparser/src/core/repeaters/lazy.dart");
    return LazyRepeatingParser;
  });
  lazy.LazyRepeatingParser = lazy.LazyRepeatingParser$();
  dart.addTypeTests(lazy.LazyRepeatingParser, _is_LazyRepeatingParser_default);
  const _is_GreedyRepeatingParser_default = Symbol('_is_GreedyRepeatingParser_default');
  greedy.GreedyRepeatingParser$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let GreedyRepeatingParserOfT = () => (GreedyRepeatingParserOfT = dart.constFn(greedy.GreedyRepeatingParser$(T)))();
    let ParserOfT = () => (ParserOfT = dart.constFn(parser.Parser$(T)))();
    class GreedyRepeatingParser extends limited.LimitedRepeatingParser$(T) {
      parseOn(context) {
        let current = context;
        let elements = JSArrayOfT().of([]);
        while (dart.notNull(elements[$length]) < dart.notNull(this.min)) {
          let result = this.delegate.parseOn(current);
          if (dart.test(result.isFailure)) {
            return result.failure(ListOfT(), result.message);
          }
          elements[$add](T._check(result.value));
          current = result;
        }
        let contexts = JSArrayOfContext().of([current]);
        while (this.max === -1 || dart.notNull(elements[$length]) < dart.notNull(this.max)) {
          let result = this.delegate.parseOn(current);
          if (dart.test(result.isFailure)) {
            break;
          }
          elements[$add](T._check(result.value));
          contexts[$add](current = result);
        }
        for (;;) {
          let limiter = this.limit.parseOn(contexts[$last]);
          if (dart.test(limiter.isSuccess)) {
            return contexts[$last].success(ListOfT(), elements);
          }
          if (dart.test(elements[$isEmpty])) {
            return limiter.failure(ListOfT(), limiter.message);
          }
          contexts[$removeLast]();
          elements[$removeLast]();
          if (dart.test(contexts[$isEmpty])) {
            return limiter.failure(ListOfT(), limiter.message);
          }
        }
      }
      fastParseOn(buffer, position) {
        let count = 0;
        let current = position;
        while (count < dart.notNull(this.min)) {
          let result = this.delegate.fastParseOn(buffer, current);
          if (dart.notNull(result) < 0) {
            return -1;
          }
          current = result;
          count = count + 1;
        }
        let positions = JSArrayOfint().of([current]);
        while (this.max === -1 || count < dart.notNull(this.max)) {
          let result = this.delegate.fastParseOn(buffer, current);
          if (dart.notNull(result) < 0) {
            break;
          }
          positions[$add](current = result);
          count = count + 1;
        }
        for (;;) {
          let limiter = this.limit.fastParseOn(buffer, positions[$last]);
          if (dart.notNull(limiter) >= 0) {
            return positions[$last];
          }
          if (count === 0) {
            return -1;
          }
          positions[$removeLast]();
          count = count - 1;
          if (dart.test(positions[$isEmpty])) {
            return -1;
          }
        }
      }
      copy() {
        return new (GreedyRepeatingParserOfT()).new(ParserOfT()._check(this.delegate), this.limit, this.min, this.max);
      }
    }
    (GreedyRepeatingParser.new = function(parser, limit, min, max) {
      GreedyRepeatingParser.__proto__.new.call(this, parser, limit, min, max);
      ;
    }).prototype = GreedyRepeatingParser.prototype;
    dart.addTypeTests(GreedyRepeatingParser);
    GreedyRepeatingParser.prototype[_is_GreedyRepeatingParser_default] = true;
    dart.setMethodSignature(GreedyRepeatingParser, () => ({
      __proto__: dart.getMethods(GreedyRepeatingParser.__proto__),
      copy: dart.fnType(greedy.GreedyRepeatingParser$(T), [])
    }));
    dart.setLibraryUri(GreedyRepeatingParser, "package:petitparser/src/core/repeaters/greedy.dart");
    return GreedyRepeatingParser;
  });
  greedy.GreedyRepeatingParser = greedy.GreedyRepeatingParser$();
  dart.addTypeTests(greedy.GreedyRepeatingParser, _is_GreedyRepeatingParser_default);
  const AnyParser_message = dart.privateName(any, "AnyParser.message");
  any.AnyParser = class AnyParser extends parser.Parser$(core.String) {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    parseOn(context) {
      let position = context.position;
      let buffer = context.buffer;
      return dart.notNull(position) < buffer.length ? context.success(core.String, buffer[$_get](position), dart.notNull(position) + 1) : context.failure(core.String, this.message);
    }
    fastParseOn(buffer, position) {
      return dart.notNull(position) < buffer.length ? dart.notNull(position) + 1 : -1;
    }
    copy() {
      return new any.AnyParser.new(this.message);
    }
    hasEqualProperties(other) {
      any.AnyParser._check(other);
      return dart.test(super.hasEqualProperties(other)) && this.message == other.message;
    }
  };
  (any.AnyParser.new = function(message) {
    this[message$] = message;
    if (!(message != null)) dart.assertFailed("message must not be null", "org-dartlang-app:///packages/petitparser/src/core/predicates/any.dart", 19, 36, "message != null");
    any.AnyParser.__proto__.new.call(this);
    ;
  }).prototype = any.AnyParser.prototype;
  dart.addTypeTests(any.AnyParser);
  const message$ = AnyParser_message;
  dart.setMethodSignature(any.AnyParser, () => ({
    __proto__: dart.getMethods(any.AnyParser.__proto__),
    parseOn: dart.fnType(result.Result$(core.String), [context$.Context]),
    copy: dart.fnType(any.AnyParser, [])
  }));
  dart.setLibraryUri(any.AnyParser, "package:petitparser/src/core/predicates/any.dart");
  dart.setFieldSignature(any.AnyParser, () => ({
    __proto__: dart.getFields(any.AnyParser.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  any.any = function any$(message) {
    if (message === void 0) message = "input expected";
    return new any.AnyParser.new(message);
  };
  const ParserMatch_pattern = dart.privateName(pattern, "ParserMatch.pattern");
  const ParserMatch_input = dart.privateName(pattern, "ParserMatch.input");
  const ParserMatch_start = dart.privateName(pattern, "ParserMatch.start");
  const ParserMatch_end = dart.privateName(pattern, "ParserMatch.end");
  pattern.ParserMatch = class ParserMatch extends core.Match {
    get pattern() {
      return this[pattern$];
    }
    set pattern(value) {
      super.pattern = value;
    }
    get input() {
      return this[input$];
    }
    set input(value) {
      super.input = value;
    }
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    group(group) {
      return this._get(group);
    }
    _get(group) {
      return group === 0 ? this.input[$substring](this.start, this.end) : null;
    }
    groups(groupIndices) {
      return groupIndices[$map](core.String, dart.bind(this, 'group'))[$toList]({growable: false});
    }
    get groupCount() {
      return 1;
    }
  };
  (pattern.ParserMatch.new = function(pattern, input, start, end) {
    this[pattern$] = pattern;
    this[input$] = input;
    this[start$] = start;
    this[end$] = end;
    ;
  }).prototype = pattern.ParserMatch.prototype;
  dart.addTypeTests(pattern.ParserMatch);
  const pattern$ = ParserMatch_pattern;
  const input$ = ParserMatch_input;
  const start$ = ParserMatch_start;
  const end$ = ParserMatch_end;
  dart.setMethodSignature(pattern.ParserMatch, () => ({
    __proto__: dart.getMethods(pattern.ParserMatch.__proto__),
    group: dart.fnType(core.String, [core.int]),
    _get: dart.fnType(core.String, [core.int]),
    groups: dart.fnType(core.List$(core.String), [core.List$(core.int)])
  }));
  dart.setGetterSignature(pattern.ParserMatch, () => ({
    __proto__: dart.getGetters(pattern.ParserMatch.__proto__),
    groupCount: core.int
  }));
  dart.setLibraryUri(pattern.ParserMatch, "package:petitparser/src/core/pattern.dart");
  dart.setFieldSignature(pattern.ParserMatch, () => ({
    __proto__: dart.getFields(pattern.ParserMatch.__proto__),
    pattern: dart.finalFieldType(core.Pattern),
    input: dart.finalFieldType(core.String),
    start: dart.finalFieldType(core.int),
    end: dart.finalFieldType(core.int)
  }));
  const _is_SettableParser_default = Symbol('_is_SettableParser_default');
  settable.SettableParser$ = dart.generic(T => {
    let ParserOfT = () => (ParserOfT = dart.constFn(parser.Parser$(T)))();
    let SettableParserOfT = () => (SettableParserOfT = dart.constFn(settable.SettableParser$(T)))();
    class SettableParser extends delegate.DelegateParser$(T) {
      set(parser) {
        ParserOfT()._check(parser);
        return this.replace(this.children[$_get](0), parser);
      }
      fastParseOn(buffer, position) {
        return this.delegate.fastParseOn(buffer, position);
      }
      copy() {
        return new (SettableParserOfT()).new(ParserOfT()._check(this.delegate));
      }
    }
    (SettableParser.new = function(delegate) {
      SettableParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = SettableParser.prototype;
    dart.addTypeTests(SettableParser);
    SettableParser.prototype[_is_SettableParser_default] = true;
    dart.setMethodSignature(SettableParser, () => ({
      __proto__: dart.getMethods(SettableParser.__proto__),
      set: dart.fnType(dart.void, [core.Object]),
      copy: dart.fnType(settable.SettableParser$(T), [])
    }));
    dart.setLibraryUri(SettableParser, "package:petitparser/src/core/parsers/settable.dart");
    return SettableParser;
  });
  settable.SettableParser = settable.SettableParser$();
  dart.addTypeTests(settable.SettableParser, _is_SettableParser_default);
  settable.undefined = function undefined(T, message) {
    if (message === void 0) message = "undefined parser";
    return failure$.failure(T, message).settable();
  };
  const _is_FailureParser_default = Symbol('_is_FailureParser_default');
  const FailureParser_message = dart.privateName(failure$, "FailureParser.message");
  failure$.FailureParser$ = dart.generic(T => {
    let FailureParserOfT = () => (FailureParserOfT = dart.constFn(failure$.FailureParser$(T)))();
    class FailureParser extends parser.Parser$(T) {
      get message() {
        return this[message$];
      }
      set message(value) {
        super.message = value;
      }
      parseOn(context) {
        return context.failure(T, this.message);
      }
      fastParseOn(buffer, position) {
        return -1;
      }
      toString() {
        return dart.str(super[$toString]()) + "[" + dart.str(this.message) + "]";
      }
      copy() {
        return new (FailureParserOfT()).new(this.message);
      }
      hasEqualProperties(other) {
        FailureParserOfT()._check(other);
        return dart.test(super.hasEqualProperties(other)) && this.message == other.message;
      }
    }
    (FailureParser.new = function(message) {
      this[message$] = message;
      if (!(message != null)) dart.assertFailed("message must not be null", "org-dartlang-app:///packages/petitparser/src/core/parsers/failure.dart", 19, 16, "message != null");
      FailureParser.__proto__.new.call(this);
      ;
    }).prototype = FailureParser.prototype;
    dart.addTypeTests(FailureParser);
    FailureParser.prototype[_is_FailureParser_default] = true;
    const message$ = FailureParser_message;
    dart.setMethodSignature(FailureParser, () => ({
      __proto__: dart.getMethods(FailureParser.__proto__),
      parseOn: dart.fnType(result.Result$(T), [context$.Context]),
      copy: dart.fnType(failure$.FailureParser$(T), [])
    }));
    dart.setLibraryUri(FailureParser, "package:petitparser/src/core/parsers/failure.dart");
    dart.setFieldSignature(FailureParser, () => ({
      __proto__: dart.getFields(FailureParser.__proto__),
      message: dart.finalFieldType(core.String)
    }));
    dart.defineExtensionMethods(FailureParser, ['toString']);
    return FailureParser;
  });
  failure$.FailureParser = failure$.FailureParser$();
  dart.addTypeTests(failure$.FailureParser, _is_FailureParser_default);
  failure$.failure = function failure$0(T, message) {
    if (message === void 0) message = "unable to parse";
    return new (failure$.FailureParser$(T)).new(message);
  };
  const EndOfInputParser_message = dart.privateName(eof, "EndOfInputParser.message");
  eof.EndOfInputParser = class EndOfInputParser extends parser.Parser$(dart.void) {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    parseOn(context) {
      return dart.notNull(context.position) < context.buffer.length ? context.failure(dart.dynamic, this.message) : context.success(dart.dynamic, null);
    }
    fastParseOn(buffer, position) {
      return dart.notNull(position) < buffer.length ? -1 : position;
    }
    toString() {
      return dart.str(super[$toString]()) + "[" + dart.str(this.message) + "]";
    }
    copy() {
      return new eof.EndOfInputParser.new(this.message);
    }
    hasEqualProperties(other) {
      eof.EndOfInputParser._check(other);
      return dart.test(super.hasEqualProperties(other)) && this.message == other.message;
    }
  };
  (eof.EndOfInputParser.new = function(message) {
    this[message$0] = message;
    if (!(message != null)) dart.assertFailed("message must not be null", "org-dartlang-app:///packages/petitparser/src/core/parsers/eof.dart", 16, 16, "message != null");
    eof.EndOfInputParser.__proto__.new.call(this);
    ;
  }).prototype = eof.EndOfInputParser.prototype;
  dart.addTypeTests(eof.EndOfInputParser);
  const message$0 = EndOfInputParser_message;
  dart.setMethodSignature(eof.EndOfInputParser, () => ({
    __proto__: dart.getMethods(eof.EndOfInputParser.__proto__),
    parseOn: dart.fnType(result.Result, [context$.Context]),
    copy: dart.fnType(eof.EndOfInputParser, [])
  }));
  dart.setLibraryUri(eof.EndOfInputParser, "package:petitparser/src/core/parsers/eof.dart");
  dart.setFieldSignature(eof.EndOfInputParser, () => ({
    __proto__: dart.getFields(eof.EndOfInputParser.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(eof.EndOfInputParser, ['toString']);
  eof.endOfInput = function endOfInput(message) {
    if (message === void 0) message = "end of input expected";
    return new eof.EndOfInputParser.new(message);
  };
  const _is_Success_default = Symbol('_is_Success_default');
  const Success_value = dart.privateName(success, "Success.value");
  success.Success$ = dart.generic(R => {
    class Success extends result.Result$(R) {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get isSuccess() {
        return true;
      }
      get message() {
        return null;
      }
      map(T, callback) {
        return this.success(T, callback(this.value));
      }
      toString() {
        return "Success[" + dart.str(this.toPositionString()) + "]: " + dart.str(this.value);
      }
    }
    (Success.new = function(buffer, position, value) {
      this[value$] = value;
      Success.__proto__.new.call(this, buffer, position);
      ;
    }).prototype = Success.prototype;
    dart.addTypeTests(Success);
    Success.prototype[_is_Success_default] = true;
    const value$ = Success_value;
    dart.setMethodSignature(Success, () => ({
      __proto__: dart.getMethods(Success.__proto__),
      map: dart.gFnType(T => [result.Result$(T), [dart.fnType(T, [R])]])
    }));
    dart.setGetterSignature(Success, () => ({
      __proto__: dart.getGetters(Success.__proto__),
      message: core.String
    }));
    dart.setLibraryUri(Success, "package:petitparser/src/core/contexts/success.dart");
    dart.setFieldSignature(Success, () => ({
      __proto__: dart.getFields(Success.__proto__),
      value: dart.finalFieldType(R)
    }));
    dart.defineExtensionMethods(Success, ['toString']);
    return Success;
  });
  success.Success = success.Success$();
  dart.addTypeTests(success.Success, _is_Success_default);
  const _is_ListParser_default = Symbol('_is_ListParser_default');
  const ListParser_children = dart.privateName(list, "ListParser.children");
  list.ListParser$ = dart.generic(T => {
    class ListParser extends parser.Parser$(T) {
      get children() {
        return this[children$];
      }
      set children(value) {
        super.children = value;
      }
      replace(source, target) {
        super.replace(source, target);
        for (let i = 0; i < dart.notNull(this.children[$length]); i = i + 1) {
          if (dart.equals(this.children[$_get](i), source)) {
            this.children[$_set](i, target);
          }
        }
      }
    }
    (ListParser.new = function(children) {
      this[children$] = ListOfParser().of(children, {growable: false});
      ListParser.__proto__.new.call(this);
      ;
    }).prototype = ListParser.prototype;
    dart.addTypeTests(ListParser);
    ListParser.prototype[_is_ListParser_default] = true;
    const children$ = ListParser_children;
    dart.setLibraryUri(ListParser, "package:petitparser/src/core/combinators/list.dart");
    dart.setFieldSignature(ListParser, () => ({
      __proto__: dart.getFields(ListParser.__proto__),
      children: dart.finalFieldType(core.List$(parser.Parser))
    }));
    return ListParser;
  });
  list.ListParser = list.ListParser$();
  dart.addTypeTests(list.ListParser, _is_ListParser_default);
  sequence.SequenceParser = class SequenceParser extends list.ListParser$(core.List) {
    parseOn(context) {
      let current = context;
      let elements = core.List.new(this.children[$length]);
      for (let i = 0; i < dart.notNull(this.children[$length]); i = i + 1) {
        let result = this.children[$_get](i).parseOn(current);
        if (dart.test(result.isFailure)) {
          return result.failure(core.List, result.message);
        }
        elements[$_set](i, result.value);
        current = result;
      }
      return current.success(core.List, elements);
    }
    fastParseOn(buffer, position) {
      for (let parser of this.children) {
        position = parser.fastParseOn(buffer, position);
        if (dart.notNull(position) < 0) {
          return position;
        }
      }
      return position;
    }
    seq(other) {
      return new sequence.SequenceParser.new((() => {
        let t0 = JSArrayOfParser().of([]);
        for (let t1 of this.children)
          t0[$add](t1);
        t0[$add](other);
        return t0;
      })());
    }
    copy() {
      return new sequence.SequenceParser.new(this.children);
    }
  };
  (sequence.SequenceParser.new = function(children) {
    sequence.SequenceParser.__proto__.new.call(this, children);
    ;
  }).prototype = sequence.SequenceParser.prototype;
  dart.addTypeTests(sequence.SequenceParser);
  dart.setMethodSignature(sequence.SequenceParser, () => ({
    __proto__: dart.getMethods(sequence.SequenceParser.__proto__),
    parseOn: dart.fnType(result.Result$(core.List), [context$.Context]),
    copy: dart.fnType(sequence.SequenceParser, [])
  }));
  dart.setLibraryUri(sequence.SequenceParser, "package:petitparser/src/core/combinators/sequence.dart");
  const _is_OptionalParser_default = Symbol('_is_OptionalParser_default');
  const OptionalParser_otherwise = dart.privateName(optional, "OptionalParser.otherwise");
  optional.OptionalParser$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    let OptionalParserOfT = () => (OptionalParserOfT = dart.constFn(optional.OptionalParser$(T)))();
    let ParserOfT = () => (ParserOfT = dart.constFn(parser.Parser$(T)))();
    class OptionalParser extends delegate.DelegateParser$(T) {
      get otherwise() {
        return this[otherwise$];
      }
      set otherwise(value) {
        super.otherwise = value;
      }
      parseOn(context) {
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isSuccess)) {
          return ResultOfT()._check(result);
        } else {
          return context.success(T, this.otherwise);
        }
      }
      fastParseOn(buffer, position) {
        let result = this.delegate.fastParseOn(buffer, position);
        return dart.notNull(result) < 0 ? position : result;
      }
      copy() {
        return new (OptionalParserOfT()).new(ParserOfT()._check(this.delegate), this.otherwise);
      }
      hasEqualProperties(other) {
        OptionalParserOfT()._check(other);
        return dart.test(super.hasEqualProperties(other)) && dart.equals(this.otherwise, other.otherwise);
      }
    }
    (OptionalParser.new = function(delegate, otherwise) {
      this[otherwise$] = otherwise;
      OptionalParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = OptionalParser.prototype;
    dart.addTypeTests(OptionalParser);
    OptionalParser.prototype[_is_OptionalParser_default] = true;
    const otherwise$ = OptionalParser_otherwise;
    dart.setMethodSignature(OptionalParser, () => ({
      __proto__: dart.getMethods(OptionalParser.__proto__),
      copy: dart.fnType(optional.OptionalParser$(T), [])
    }));
    dart.setLibraryUri(OptionalParser, "package:petitparser/src/core/combinators/optional.dart");
    dart.setFieldSignature(OptionalParser, () => ({
      __proto__: dart.getFields(OptionalParser.__proto__),
      otherwise: dart.finalFieldType(T)
    }));
    return OptionalParser;
  });
  optional.OptionalParser = optional.OptionalParser$();
  dart.addTypeTests(optional.OptionalParser, _is_OptionalParser_default);
  const NotParser_message = dart.privateName(not, "NotParser.message");
  not.NotParser = class NotParser extends delegate.DelegateParser$(dart.void) {
    get message() {
      return this[message$1];
    }
    set message(value) {
      super.message = value;
    }
    parseOn(context) {
      let result = this.delegate.parseOn(context);
      if (dart.test(result.isFailure)) {
        return context.success(dart.void, null);
      } else {
        return context.failure(dart.void, this.message);
      }
    }
    fastParseOn(buffer, position) {
      let result = this.delegate.fastParseOn(buffer, position);
      return dart.notNull(result) < 0 ? position : -1;
    }
    toString() {
      return dart.str(super[$toString]()) + "[" + dart.str(this.message) + "]";
    }
    copy() {
      return new not.NotParser.new(this.delegate, this.message);
    }
    hasEqualProperties(other) {
      not.NotParser._check(other);
      return dart.test(super.hasEqualProperties(other)) && this.message == other.message;
    }
  };
  (not.NotParser.new = function(delegate, message) {
    this[message$1] = message;
    if (!(message != null)) dart.assertFailed("message must not be null", "org-dartlang-app:///packages/petitparser/src/core/combinators/not.dart", 14, 16, "message != null");
    not.NotParser.__proto__.new.call(this, delegate);
    ;
  }).prototype = not.NotParser.prototype;
  dart.addTypeTests(not.NotParser);
  const message$1 = NotParser_message;
  dart.setMethodSignature(not.NotParser, () => ({
    __proto__: dart.getMethods(not.NotParser.__proto__),
    copy: dart.fnType(not.NotParser, [])
  }));
  dart.setLibraryUri(not.NotParser, "package:petitparser/src/core/combinators/not.dart");
  dart.setFieldSignature(not.NotParser, () => ({
    __proto__: dart.getFields(not.NotParser.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(not.NotParser, ['toString']);
  choice.ChoiceParser = class ChoiceParser extends list.ListParser {
    parseOn(context) {
      let result = null;
      for (let i = 0; i < dart.notNull(this.children[$length]); i = i + 1) {
        result = this.children[$_get](i).parseOn(context);
        if (dart.test(result.isSuccess)) {
          return result;
        }
      }
      return result;
    }
    fastParseOn(buffer, position) {
      let result = -1;
      for (let parser of this.children) {
        result = parser.fastParseOn(buffer, position);
        if (dart.notNull(result) >= 0) {
          return result;
        }
      }
      return result;
    }
    or(other) {
      return new choice.ChoiceParser.new((() => {
        let t2 = JSArrayOfParser().of([]);
        for (let t3 of this.children)
          t2[$add](t3);
        t2[$add](other);
        return t2;
      })());
    }
    copy() {
      return new choice.ChoiceParser.new(this.children);
    }
  };
  (choice.ChoiceParser.new = function(children) {
    choice.ChoiceParser.__proto__.new.call(this, children);
    if (dart.test(children[$isEmpty])) {
      dart.throw(new core.ArgumentError.new("Choice parser cannot be empty."));
    }
  }).prototype = choice.ChoiceParser.prototype;
  dart.addTypeTests(choice.ChoiceParser);
  dart.setMethodSignature(choice.ChoiceParser, () => ({
    __proto__: dart.getMethods(choice.ChoiceParser.__proto__),
    parseOn: dart.fnType(result.Result, [context$.Context]),
    copy: dart.fnType(choice.ChoiceParser, [])
  }));
  dart.setLibraryUri(choice.ChoiceParser, "package:petitparser/src/core/combinators/choice.dart");
  const _is_AndParser_default = Symbol('_is_AndParser_default');
  and.AndParser$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    let AndParserOfT = () => (AndParserOfT = dart.constFn(and.AndParser$(T)))();
    class AndParser extends delegate.DelegateParser$(T) {
      parseOn(context) {
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isSuccess)) {
          return context.success(T, T._check(result.value));
        } else {
          return ResultOfT()._check(result);
        }
      }
      fastParseOn(buffer, position) {
        let result = this.delegate.fastParseOn(buffer, position);
        return dart.notNull(result) < 0 ? -1 : position;
      }
      copy() {
        return new (AndParserOfT()).new(this.delegate);
      }
    }
    (AndParser.new = function(delegate) {
      AndParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = AndParser.prototype;
    dart.addTypeTests(AndParser);
    AndParser.prototype[_is_AndParser_default] = true;
    dart.setMethodSignature(AndParser, () => ({
      __proto__: dart.getMethods(AndParser.__proto__),
      copy: dart.fnType(and.AndParser$(T), [])
    }));
    dart.setLibraryUri(AndParser, "package:petitparser/src/core/combinators/and.dart");
    return AndParser;
  });
  and.AndParser = and.AndParser$();
  dart.addTypeTests(and.AndParser, _is_AndParser_default);
  whitespace.WhitespaceCharPredicate = class WhitespaceCharPredicate extends core.Object {
    test(value) {
      if (dart.notNull(value) < 256) {
        switch (value) {
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 32:
          case 133:
          case 160:
          {
            return true;
          }
          default:
          {
            return false;
          }
        }
      } else {
        switch (value) {
          case 5760:
          case 8192:
          case 8193:
          case 8194:
          case 8195:
          case 8196:
          case 8197:
          case 8198:
          case 8199:
          case 8200:
          case 8201:
          case 8202:
          case 8232:
          case 8233:
          case 8239:
          case 8287:
          case 12288:
          case 65279:
          {
            return true;
          }
          default:
          {
            return false;
          }
        }
      }
    }
    isEqualTo(other) {
      return whitespace.WhitespaceCharPredicate.is(other);
    }
  };
  (whitespace.WhitespaceCharPredicate.new = function() {
    ;
  }).prototype = whitespace.WhitespaceCharPredicate.prototype;
  dart.addTypeTests(whitespace.WhitespaceCharPredicate);
  whitespace.WhitespaceCharPredicate[dart.implements] = () => [predicate.CharacterPredicate];
  dart.setMethodSignature(whitespace.WhitespaceCharPredicate, () => ({
    __proto__: dart.getMethods(whitespace.WhitespaceCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(whitespace.WhitespaceCharPredicate, "package:petitparser/src/core/characters/whitespace.dart");
  let C1;
  whitespace.whitespace = function whitespace$(message) {
    if (message === void 0) message = "whitespace expected";
    return new parser$.CharacterParser.new(C1 || CT.C1, message);
  };
  predicate.CharacterPredicate = class CharacterPredicate extends core.Object {};
  (predicate.CharacterPredicate.new = function() {
    ;
  }).prototype = predicate.CharacterPredicate.prototype;
  dart.addTypeTests(predicate.CharacterPredicate);
  dart.setLibraryUri(predicate.CharacterPredicate, "package:petitparser/src/core/characters/predicate.dart");
  const CharacterParser_predicate = dart.privateName(parser$, "CharacterParser.predicate");
  const CharacterParser_message = dart.privateName(parser$, "CharacterParser.message");
  parser$.CharacterParser = class CharacterParser extends parser.Parser$(core.String) {
    get predicate() {
      return this[predicate$];
    }
    set predicate(value) {
      super.predicate = value;
    }
    get message() {
      return this[message$2];
    }
    set message(value) {
      super.message = value;
    }
    parseOn(context) {
      let buffer = context.buffer;
      let position = context.position;
      if (dart.notNull(position) < buffer.length && dart.test(this.predicate.test(buffer[$codeUnitAt](position)))) {
        return context.success(core.String, buffer[$_get](position), dart.notNull(position) + 1);
      }
      return context.failure(core.String, this.message);
    }
    fastParseOn(buffer, position) {
      return dart.notNull(position) < buffer.length && dart.test(this.predicate.test(buffer[$codeUnitAt](position))) ? dart.notNull(position) + 1 : -1;
    }
    toString() {
      return dart.str(super[$toString]()) + "[" + dart.str(this.message) + "]";
    }
    copy() {
      return new parser$.CharacterParser.new(this.predicate, this.message);
    }
    hasEqualProperties(other) {
      parser$.CharacterParser._check(other);
      return dart.test(super.hasEqualProperties(other)) && dart.test(this.predicate.isEqualTo(other.predicate)) && this.message == other.message;
    }
  };
  (parser$.CharacterParser.new = function(predicate, message) {
    this[predicate$] = predicate;
    this[message$2] = message;
    if (!(predicate != null)) dart.assertFailed("predicate must not be null", "org-dartlang-app:///packages/petitparser/src/core/characters/parser.dart", 15, 16, "predicate != null");
    if (!(message != null)) dart.assertFailed("message must not be null", "org-dartlang-app:///packages/petitparser/src/core/characters/parser.dart", 16, 16, "message != null");
    parser$.CharacterParser.__proto__.new.call(this);
    ;
  }).prototype = parser$.CharacterParser.prototype;
  dart.addTypeTests(parser$.CharacterParser);
  const predicate$ = CharacterParser_predicate;
  const message$2 = CharacterParser_message;
  dart.setMethodSignature(parser$.CharacterParser, () => ({
    __proto__: dart.getMethods(parser$.CharacterParser.__proto__),
    parseOn: dart.fnType(result.Result$(core.String), [context$.Context]),
    copy: dart.fnType(parser$.CharacterParser, [])
  }));
  dart.setLibraryUri(parser$.CharacterParser, "package:petitparser/src/core/characters/parser.dart");
  dart.setFieldSignature(parser$.CharacterParser, () => ({
    __proto__: dart.getFields(parser$.CharacterParser.__proto__),
    predicate: dart.finalFieldType(predicate.CharacterPredicate),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(parser$.CharacterParser, ['toString']);
  const _is_TrimmingParser_default = Symbol('_is_TrimmingParser_default');
  const TrimmingParser_left = dart.privateName(trimming, "TrimmingParser.left");
  const TrimmingParser_right = dart.privateName(trimming, "TrimmingParser.right");
  trimming.TrimmingParser$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(result.Result$(T)))();
    let TrimmingParserOfT = () => (TrimmingParserOfT = dart.constFn(trimming.TrimmingParser$(T)))();
    let ParserOfT = () => (ParserOfT = dart.constFn(parser.Parser$(T)))();
    class TrimmingParser extends delegate.DelegateParser$(T) {
      get left() {
        return this[left$];
      }
      set left(value) {
        this[left$] = value;
      }
      get right() {
        return this[right$];
      }
      set right(value) {
        this[right$] = value;
      }
      parseOn(context) {
        let buffer = context.buffer;
        let before = this.trim_(this.left, buffer, context.position);
        if (before != context.position) {
          context = new context$.Context.new(buffer, before);
        }
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isFailure)) {
          return ResultOfT()._check(result);
        }
        let after = this.trim_(this.right, buffer, result.position);
        return ResultOfT()._check(after == result.position ? result : result.success(T, T._check(result.value), after));
      }
      fastParseOn(buffer, position) {
        let result = this.delegate.fastParseOn(buffer, this.trim_(this.left, buffer, position));
        return dart.notNull(result) < 0 ? -1 : this.trim_(this.right, buffer, result);
      }
      trim_(parser, buffer, position) {
        for (;;) {
          let result = parser.fastParseOn(buffer, position);
          if (dart.notNull(result) < 0) {
            return position;
          }
          position = result;
        }
      }
      copy() {
        return new (TrimmingParserOfT()).new(ParserOfT()._check(this.delegate), this.left, this.right);
      }
      get children() {
        return JSArrayOfParser().of([this.delegate, this.left, this.right]);
      }
      replace(source, target) {
        super.replace(source, target);
        if (dart.equals(this.left, source)) {
          this.left = target;
        }
        if (dart.equals(this.right, source)) {
          this.right = target;
        }
      }
    }
    (TrimmingParser.new = function(delegate, left, right) {
      this[left$] = left;
      this[right$] = right;
      if (!(left != null)) dart.assertFailed("left must not be null", "org-dartlang-app:///packages/petitparser/src/core/actions/trimming.dart", 15, 16, "left != null");
      if (!(right != null)) dart.assertFailed("right must not be null", "org-dartlang-app:///packages/petitparser/src/core/actions/trimming.dart", 16, 16, "right != null");
      TrimmingParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = TrimmingParser.prototype;
    dart.addTypeTests(TrimmingParser);
    TrimmingParser.prototype[_is_TrimmingParser_default] = true;
    const left$ = TrimmingParser_left;
    const right$ = TrimmingParser_right;
    dart.setMethodSignature(TrimmingParser, () => ({
      __proto__: dart.getMethods(TrimmingParser.__proto__),
      trim_: dart.fnType(core.int, [parser.Parser, core.String, core.int]),
      copy: dart.fnType(trimming.TrimmingParser$(T), [])
    }));
    dart.setLibraryUri(TrimmingParser, "package:petitparser/src/core/actions/trimming.dart");
    dart.setFieldSignature(TrimmingParser, () => ({
      __proto__: dart.getFields(TrimmingParser.__proto__),
      left: dart.fieldType(parser.Parser),
      right: dart.fieldType(parser.Parser)
    }));
    return TrimmingParser;
  });
  trimming.TrimmingParser = trimming.TrimmingParser$();
  dart.addTypeTests(trimming.TrimmingParser, _is_TrimmingParser_default);
  const _is_TokenParser_default = Symbol('_is_TokenParser_default');
  token.TokenParser$ = dart.generic(T => {
    let TokenOfT = () => (TokenOfT = dart.constFn(token$.Token$(T)))();
    let TokenParserOfT = () => (TokenParserOfT = dart.constFn(token.TokenParser$(T)))();
    class TokenParser extends delegate.DelegateParser$(token$.Token$(T)) {
      parseOn(context) {
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isSuccess)) {
          let token = new (TokenOfT()).new(T._check(result.value), context.buffer, context.position, result.position);
          return result.success(TokenOfT(), token);
        } else {
          return result.failure(TokenOfT(), result.message);
        }
      }
      fastParseOn(buffer, position) {
        return this.delegate.fastParseOn(buffer, position);
      }
      copy() {
        return new (TokenParserOfT()).new(this.delegate);
      }
    }
    (TokenParser.new = function(delegate) {
      TokenParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = TokenParser.prototype;
    dart.addTypeTests(TokenParser);
    TokenParser.prototype[_is_TokenParser_default] = true;
    dart.setMethodSignature(TokenParser, () => ({
      __proto__: dart.getMethods(TokenParser.__proto__),
      copy: dart.fnType(token.TokenParser$(T), [])
    }));
    dart.setLibraryUri(TokenParser, "package:petitparser/src/core/actions/token.dart");
    return TokenParser;
  });
  token.TokenParser = token.TokenParser$();
  dart.addTypeTests(token.TokenParser, _is_TokenParser_default);
  const FlattenParser_message = dart.privateName(flatten, "FlattenParser.message");
  flatten.FlattenParser = class FlattenParser extends delegate.DelegateParser$(core.String) {
    get message() {
      return this[message$3];
    }
    set message(value) {
      super.message = value;
    }
    parseOn(context) {
      if (this.message == null) {
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isSuccess)) {
          let output = context.buffer[$substring](context.position, result.position);
          return result.success(core.String, output);
        }
        return result.failure(core.String, result.message);
      } else {
        let position = this.delegate.fastParseOn(context.buffer, context.position);
        if (dart.notNull(position) < 0) {
          return context.failure(core.String, this.message);
        }
        let output = context.buffer[$substring](context.position, position);
        return context.success(core.String, output, position);
      }
    }
    fastParseOn(buffer, position) {
      return this.delegate.fastParseOn(buffer, position);
    }
    hasEqualProperties(other) {
      flatten.FlattenParser._check(other);
      return dart.test(super.hasEqualProperties(other)) && this.message == other.message;
    }
    copy() {
      return new flatten.FlattenParser.new(this.delegate, this.message);
    }
  };
  (flatten.FlattenParser.new = function(delegate, message) {
    if (message === void 0) message = null;
    this[message$3] = message;
    flatten.FlattenParser.__proto__.new.call(this, delegate);
    ;
  }).prototype = flatten.FlattenParser.prototype;
  dart.addTypeTests(flatten.FlattenParser);
  const message$3 = FlattenParser_message;
  dart.setMethodSignature(flatten.FlattenParser, () => ({
    __proto__: dart.getMethods(flatten.FlattenParser.__proto__),
    copy: dart.fnType(flatten.FlattenParser, [])
  }));
  dart.setLibraryUri(flatten.FlattenParser, "package:petitparser/src/core/actions/flatten.dart");
  dart.setFieldSignature(flatten.FlattenParser, () => ({
    __proto__: dart.getFields(flatten.FlattenParser.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  const _is_CastParser_default = Symbol('_is_CastParser_default');
  cast.CastParser$ = dart.generic(R => {
    let CastParserOfR = () => (CastParserOfR = dart.constFn(cast.CastParser$(R)))();
    class CastParser extends delegate.DelegateParser$(R) {
      parseOn(context) {
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isSuccess)) {
          return result.success(R, R._check(result.value));
        } else {
          return result.failure(R, result.message);
        }
      }
      fastParseOn(buffer, position) {
        return this.delegate.fastParseOn(buffer, position);
      }
      copy() {
        return new (CastParserOfR()).new(this.delegate);
      }
    }
    (CastParser.new = function(delegate) {
      CastParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = CastParser.prototype;
    dart.addTypeTests(CastParser);
    CastParser.prototype[_is_CastParser_default] = true;
    dart.setMethodSignature(CastParser, () => ({
      __proto__: dart.getMethods(CastParser.__proto__),
      copy: dart.fnType(cast.CastParser$(R), [])
    }));
    dart.setLibraryUri(CastParser, "package:petitparser/src/core/actions/cast.dart");
    return CastParser;
  });
  cast.CastParser = cast.CastParser$();
  dart.addTypeTests(cast.CastParser, _is_CastParser_default);
  const _is_CastListParser_default = Symbol('_is_CastListParser_default');
  cast.CastListParser$ = dart.generic(R => {
    let ListOfR = () => (ListOfR = dart.constFn(core.List$(R)))();
    let CastListParserOfR = () => (CastListParserOfR = dart.constFn(cast.CastListParser$(R)))();
    class CastListParser extends delegate.DelegateParser$(core.List$(R)) {
      parseOn(context) {
        let result = ResultOfList()._check(this.delegate.parseOn(context));
        if (dart.test(result.isSuccess)) {
          return result.success(ListOfR(), result.value[$cast](R));
        } else {
          return result.failure(ListOfR(), result.message);
        }
      }
      fastParseOn(buffer, position) {
        return this.delegate.fastParseOn(buffer, position);
      }
      copy() {
        return new (CastListParserOfR()).new(this.delegate);
      }
    }
    (CastListParser.new = function(delegate) {
      CastListParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = CastListParser.prototype;
    dart.addTypeTests(CastListParser);
    CastListParser.prototype[_is_CastListParser_default] = true;
    dart.setMethodSignature(CastListParser, () => ({
      __proto__: dart.getMethods(CastListParser.__proto__),
      copy: dart.fnType(cast.CastListParser$(R), [])
    }));
    dart.setLibraryUri(CastListParser, "package:petitparser/src/core/actions/cast.dart");
    return CastListParser;
  });
  cast.CastListParser = cast.CastListParser$();
  dart.addTypeTests(cast.CastListParser, _is_CastListParser_default);
  const _is_ActionParser_default = Symbol('_is_ActionParser_default');
  const ActionParser_callback = dart.privateName(action, "ActionParser.callback");
  const ActionParser_hasSideEffects = dart.privateName(action, "ActionParser.hasSideEffects");
  action.ActionParser$ = dart.generic((T, R) => {
    let ActionParserOfT$R = () => (ActionParserOfT$R = dart.constFn(action.ActionParser$(T, R)))();
    let ParserOfT = () => (ParserOfT = dart.constFn(parser.Parser$(T)))();
    let TToR = () => (TToR = dart.constFn(dart.fnType(R, [T])))();
    class ActionParser extends delegate.DelegateParser$(R) {
      get callback() {
        return this[callback$];
      }
      set callback(value) {
        super.callback = value;
      }
      get hasSideEffects() {
        return this[hasSideEffects$];
      }
      set hasSideEffects(value) {
        super.hasSideEffects = value;
      }
      parseOn(context) {
        let result = this.delegate.parseOn(context);
        if (dart.test(result.isSuccess)) {
          return result.success(R, this.callback(T._check(result.value)));
        } else {
          return result.failure(R, result.message);
        }
      }
      fastParseOn(buffer, position) {
        return dart.test(this.hasSideEffects) ? super.fastParseOn(buffer, position) : this.delegate.fastParseOn(buffer, position);
      }
      copy() {
        return new (ActionParserOfT$R()).new(ParserOfT()._check(this.delegate), this.callback, this.hasSideEffects);
      }
      hasEqualProperties(other) {
        ActionParserOfT$R()._check(other);
        return dart.test(super.hasEqualProperties(other)) && dart.equals(this.callback, TToR()._check(other.callback)) && dart.equals(this.hasSideEffects, other.hasSideEffects);
      }
    }
    (ActionParser.new = function(delegate, callback, hasSideEffects) {
      if (hasSideEffects === void 0) hasSideEffects = false;
      this[callback$] = callback;
      this[hasSideEffects$] = hasSideEffects;
      if (!(callback != null)) dart.assertFailed("callback must not be null", "org-dartlang-app:///packages/petitparser/src/core/actions/action.dart", 18, 16, "callback != null");
      if (!(hasSideEffects != null)) dart.assertFailed("hasSideEffects must not be null", "org-dartlang-app:///packages/petitparser/src/core/actions/action.dart", 19, 16, "hasSideEffects != null");
      ActionParser.__proto__.new.call(this, delegate);
      ;
    }).prototype = ActionParser.prototype;
    dart.addTypeTests(ActionParser);
    ActionParser.prototype[_is_ActionParser_default] = true;
    const callback$ = ActionParser_callback;
    const hasSideEffects$ = ActionParser_hasSideEffects;
    dart.setMethodSignature(ActionParser, () => ({
      __proto__: dart.getMethods(ActionParser.__proto__),
      copy: dart.fnType(action.ActionParser$(T, R), [])
    }));
    dart.setLibraryUri(ActionParser, "package:petitparser/src/core/actions/action.dart");
    dart.setFieldSignature(ActionParser, () => ({
      __proto__: dart.getFields(ActionParser.__proto__),
      callback: dart.finalFieldType(dart.fnType(R, [T])),
      hasSideEffects: dart.finalFieldType(core.bool)
    }));
    return ActionParser;
  });
  action.ActionParser = action.ActionParser$();
  dart.addTypeTests(action.ActionParser, _is_ActionParser_default);
  const SingleCharPredicate_value = dart.privateName(char$, "SingleCharPredicate.value");
  char$.SingleCharPredicate = class SingleCharPredicate extends predicate.CharacterPredicate {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    test(value) {
      return this.value == value;
    }
    isEqualTo(other) {
      return char$.SingleCharPredicate.is(other) && other.value == this.value;
    }
  };
  (char$.SingleCharPredicate.new = function(value) {
    this[value$] = value;
    if (!(value != null)) dart.assertFailed("value must not be null", "org-dartlang-app:///packages/petitparser/src/core/characters/char.dart", 18, 16, "value != null");
    char$.SingleCharPredicate.__proto__.new.call(this);
    ;
  }).prototype = char$.SingleCharPredicate.prototype;
  dart.addTypeTests(char$.SingleCharPredicate);
  const value$ = SingleCharPredicate_value;
  dart.setMethodSignature(char$.SingleCharPredicate, () => ({
    __proto__: dart.getMethods(char$.SingleCharPredicate.__proto__),
    test: dart.fnType(core.bool, [core.int]),
    isEqualTo: dart.fnType(core.bool, [predicate.CharacterPredicate])
  }));
  dart.setLibraryUri(char$.SingleCharPredicate, "package:petitparser/src/core/characters/char.dart");
  dart.setFieldSignature(char$.SingleCharPredicate, () => ({
    __proto__: dart.getFields(char$.SingleCharPredicate.__proto__),
    value: dart.finalFieldType(core.int)
  }));
  char$.char = function char(char, message) {
    let t4;
    if (message === void 0) message = null;
    return new parser$.CharacterParser.new(new char$.SingleCharPredicate.new(code$.toCharCode(char)), (t4 = message, t4 == null ? "\"" + dart.str(code$.toReadableString(char)) + "\" expected" : t4));
  };
  code$.toCharCode = function toCharCode(element) {
    if (typeof element == 'number') {
      return element[$round]();
    }
    let value = dart.toString(element);
    if (value.length !== 1) {
      dart.throw(new core.ArgumentError.new("\"" + dart.str(value) + "\" is not a character"));
    }
    return value[$codeUnitAt](0);
  };
  code$.toReadableString = function toReadableString(element) {
    if (typeof element == 'string' && element.length > 1) {
      let buffer = new core.StringBuffer.new();
      for (let i = 0; i < element.length; i = i + 1) {
        buffer.write(code$.toReadableString(element[$_get](i)));
      }
      return buffer.toString();
    }
    let code = code$.toCharCode(element);
    switch (code) {
      case 8:
      {
        return "\\b";
      }
      case 9:
      {
        return "\\t";
      }
      case 10:
      {
        return "\\n";
      }
      case 11:
      {
        return "\\v";
      }
      case 12:
      {
        return "\\f";
      }
      case 13:
      {
        return "\\r";
      }
      case 34:
      {
        return "\\\"";
      }
      case 39:
      {
        return "\\'";
      }
      case 92:
      {
        return "\\\\";
      }
    }
    if (dart.notNull(code) < 32) {
      return "\\x" + code[$toRadixString](16)[$padLeft](2, "0");
    }
    return core.String.fromCharCode(code);
  };
  const ParserException_failure = dart.privateName(exception, "ParserException.failure");
  exception.ParserException = class ParserException extends core.Object {
    get failure() {
      return this[failure$1];
    }
    set failure(value) {
      super.failure = value;
    }
    toString() {
      return dart.str(this.failure.message) + " at " + dart.str(this.failure.toPositionString());
    }
  };
  (exception.ParserException.new = function(failure) {
    this[failure$1] = failure;
    ;
  }).prototype = exception.ParserException.prototype;
  dart.addTypeTests(exception.ParserException);
  const failure$1 = ParserException_failure;
  exception.ParserException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(exception.ParserException, "package:petitparser/src/core/contexts/exception.dart");
  dart.setFieldSignature(exception.ParserException, () => ({
    __proto__: dart.getFields(exception.ParserException.__proto__),
    failure: dart.finalFieldType(failure.Failure)
  }));
  dart.defineExtensionMethods(exception.ParserException, ['toString']);
  dart.trackLibraries("packages/petitparser/src/core/actions/action", {
    "package:petitparser/src/core/contexts/failure.dart": failure,
    "package:petitparser/src/core/contexts/result.dart": result,
    "package:petitparser/src/core/contexts/context.dart": context$,
    "package:petitparser/src/core/token.dart": token$,
    "package:petitparser/src/core/parser.dart": parser,
    "package:petitparser/src/core/repeaters/unbounded.dart": unbounded,
    "package:petitparser/src/core/repeaters/possesive.dart": possesive,
    "package:petitparser/src/core/repeaters/repeating.dart": repeating,
    "package:petitparser/src/core/combinators/delegate.dart": delegate,
    "package:petitparser/src/core/repeaters/lazy.dart": lazy,
    "package:petitparser/src/core/repeaters/limited.dart": limited,
    "package:petitparser/src/core/repeaters/greedy.dart": greedy,
    "package:petitparser/src/core/predicates/any.dart": any,
    "package:petitparser/src/core/pattern.dart": pattern,
    "package:petitparser/src/core/parsers/settable.dart": settable,
    "package:petitparser/src/core/parsers/failure.dart": failure$,
    "package:petitparser/src/core/parsers/eof.dart": eof,
    "package:petitparser/src/core/contexts/success.dart": success,
    "package:petitparser/src/core/combinators/sequence.dart": sequence,
    "package:petitparser/src/core/combinators/list.dart": list,
    "package:petitparser/src/core/combinators/optional.dart": optional,
    "package:petitparser/src/core/combinators/not.dart": not,
    "package:petitparser/src/core/combinators/choice.dart": choice,
    "package:petitparser/src/core/combinators/and.dart": and,
    "package:petitparser/src/core/characters/whitespace.dart": whitespace,
    "package:petitparser/src/core/characters/predicate.dart": predicate,
    "package:petitparser/src/core/characters/parser.dart": parser$,
    "package:petitparser/src/core/actions/trimming.dart": trimming,
    "package:petitparser/src/core/actions/token.dart": token,
    "package:petitparser/src/core/actions/flatten.dart": flatten,
    "package:petitparser/src/core/actions/cast.dart": cast,
    "package:petitparser/src/core/actions/action.dart": action,
    "package:petitparser/src/core/characters/char.dart": char$,
    "package:petitparser/src/core/characters/code.dart": code$,
    "package:petitparser/src/core/contexts/exception.dart": exception
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["..\\\\contexts\\\\context.dart","..\\\\contexts\\\\result.dart","..\\\\contexts\\\\failure.dart","..\\\\token.dart","..\\\\parser.dart","..\\\\repeaters\\\\unbounded.dart","..\\\\combinators\\\\delegate.dart","..\\\\repeaters\\\\repeating.dart","..\\\\repeaters\\\\possesive.dart","..\\\\repeaters\\\\limited.dart","..\\\\repeaters\\\\lazy.dart","..\\\\repeaters\\\\greedy.dart","..\\\\predicates\\\\any.dart","..\\\\pattern.dart","..\\\\parsers\\\\settable.dart","..\\\\parsers\\\\failure.dart","..\\\\parsers\\\\eof.dart","..\\\\contexts\\\\success.dart","..\\\\combinators\\\\list.dart","..\\\\combinators\\\\sequence.dart","..\\\\combinators\\\\optional.dart","..\\\\combinators\\\\not.dart","..\\\\combinators\\\\choice.dart","..\\\\combinators\\\\and.dart","..\\\\characters\\\\whitespace.dart","..\\\\characters\\\\predicate.dart","..\\\\characters\\\\parser.dart","trimming.dart","token.dart","flatten.dart","cast.dart","action.dart","..\\\\characters\\\\char.dart","..\\\\characters\\\\code.dart","..\\\\contexts\\\\exception.dart"],"names":[],"mappings":"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","file":"action.ddc.js"}');
  // Exports:
  return {
    src__core__contexts__failure: failure,
    src__core__contexts__result: result,
    src__core__contexts__context: context$,
    src__core__token: token$,
    src__core__parser: parser,
    src__core__repeaters__unbounded: unbounded,
    src__core__repeaters__possesive: possesive,
    src__core__repeaters__repeating: repeating,
    src__core__combinators__delegate: delegate,
    src__core__repeaters__lazy: lazy,
    src__core__repeaters__limited: limited,
    src__core__repeaters__greedy: greedy,
    src__core__predicates__any: any,
    src__core__pattern: pattern,
    src__core__parsers__settable: settable,
    src__core__parsers__failure: failure$,
    src__core__parsers__eof: eof,
    src__core__contexts__success: success,
    src__core__combinators__sequence: sequence,
    src__core__combinators__list: list,
    src__core__combinators__optional: optional,
    src__core__combinators__not: not,
    src__core__combinators__choice: choice,
    src__core__combinators__and: and,
    src__core__characters__whitespace: whitespace,
    src__core__characters__predicate: predicate,
    src__core__characters__parser: parser$,
    src__core__actions__trimming: trimming,
    src__core__actions__token: token,
    src__core__actions__flatten: flatten,
    src__core__actions__cast: cast,
    src__core__actions__action: action,
    src__core__characters__char: char$,
    src__core__characters__code: code$,
    src__core__contexts__exception: exception
  };
});

//# sourceMappingURL=action.ddc.js.map
