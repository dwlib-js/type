'use strict';

const GetIntrinsic = require('#intrinsic/GetIntrinsic');
const RequireIntrinsic = require('#intrinsic/RequireIntrinsic');
const UncurryThisIntrinsic = require('#intrinsic/UncurryThisIntrinsic');

const AggregateError = GetIntrinsic('AggregateError');
const ArrayBuffer = RequireIntrinsic('ArrayBuffer');
const ArrayIteratorPrototype = RequireIntrinsic('ArrayIteratorPrototype');
const AsyncFunction = GetIntrinsic('AsyncFunction');
const AsyncGeneratorFunction = GetIntrinsic('AsyncGeneratorFunction');
const AsyncGeneratorPrototype = GetIntrinsic('AsyncGeneratorPrototype');
const AsyncIteratorPrototype = GetIntrinsic('AsyncIteratorPrototype');
const BigInt = GetIntrinsic('BigInt');
const BigInt64Array = GetIntrinsic('BigInt64Array');
const BigUint64Array = GetIntrinsic('BigUint64Array');
const DataView = RequireIntrinsic('DataView');
const Date = RequireIntrinsic('Date');
const Error = RequireIntrinsic('Error');
const FinalizationRegistry = GetIntrinsic('FinalizationRegistry');
const Float32Array = RequireIntrinsic('Float32Array');
const Float64Array = RequireIntrinsic('Float64Array');
const FunctionCall = UncurryThisIntrinsic('Function.prototype.call');
const FunctionToString = UncurryThisIntrinsic('Function.prototype.toString');
const FunctionSymbolHasInstance = UncurryThisIntrinsic(
  'Function.prototype[@@hasInstance]'
);
const GeneratorFunction = RequireIntrinsic('GeneratorFunction');
const GeneratorPrototype = RequireIntrinsic('GeneratorPrototype');
const Int8Array = RequireIntrinsic('Int8Array');
const Int16Array = RequireIntrinsic('Int16Array');
const Int32Array = RequireIntrinsic('Int32Array');
const IteratorPrototype = RequireIntrinsic('IteratorPrototype');
const Map = RequireIntrinsic('Map');
const MapIteratorPrototype = RequireIntrinsic('MapIteratorPrototype');
const MathFloor = RequireIntrinsic('Math.floor');
const MathTrunc = RequireIntrinsic('Math.trunc');
const Number = RequireIntrinsic('Number');
const NumberMAX_SAFE_INTEGER = RequireIntrinsic('Number.MAX_SAFE_INTEGER');
const NumberMIN_SAFE_INTEGER = RequireIntrinsic('Number.MIN_SAFE_INTEGER');
const Object = RequireIntrinsic('Object');
const ObjectCreate = RequireIntrinsic('Object.create');
const ObjectPrototype = RequireIntrinsic('Object.prototype');
const ObjectIsPrototypeOf = UncurryThisIntrinsic(
  'Object.prototype.isPrototypeOf'
);
const ObjectToString = UncurryThisIntrinsic('Object.prototype.toString');
const Promise = RequireIntrinsic('Promise');
const RangeError = RequireIntrinsic('RangeError');
const ReferenceError = RequireIntrinsic('ReferenceError');
const ReflectConstruct = RequireIntrinsic('Reflect.construct');
const ReflectDefineProperty = RequireIntrinsic('Reflect.defineProperty');
const RegExp = RequireIntrinsic('RegExp');
const RegExpTest = UncurryThisIntrinsic('RegExp.prototype.test');
const RegExpStringIteratorPrototype = GetIntrinsic(
  'RegExpStringIteratorPrototype'
);
const Set = RequireIntrinsic('Set');
const SetIteratorPrototype = RequireIntrinsic('SetIteratorPrototype');
const SharedArrayBuffer = GetIntrinsic('SharedArrayBuffer');
const String = RequireIntrinsic('String');
const StringSlice = UncurryThisIntrinsic('String.prototype.slice');
const StringIteratorPrototype = RequireIntrinsic('StringIteratorPrototype');
const SymbolAsyncIterator = GetIntrinsic('@@asyncIterator');
const SymbolIterator = RequireIntrinsic('@@iterator');
const SymbolToPrimitive = RequireIntrinsic('@@toPrimitive');
const SymbolToStringTag = RequireIntrinsic('@@toStringTag');
const SyntaxError = RequireIntrinsic('SyntaxError');
const TypedArray = RequireIntrinsic('TypedArray');
const TypeError = RequireIntrinsic('TypeError');
const Uint8Array = RequireIntrinsic('Uint8Array');
const Uint8ClampedArray = RequireIntrinsic('Uint8ClampedArray');
const Uint16Array = RequireIntrinsic('Uint16Array');
const Uint32Array = RequireIntrinsic('Uint32Array');
const URIError = RequireIntrinsic('URIError');
const WeakMap = RequireIntrinsic('WeakMap');
const WeakRef = GetIntrinsic('WeakRef');
const WeakSet = RequireIntrinsic('WeakSet');

const IsArray = RequireIntrinsic('Array.isArray');
const IsArrayBufferView = RequireIntrinsic('ArrayBuffer.isView');
const IsFinite = RequireIntrinsic('Number.isFinite');
const IsInteger = RequireIntrinsic('Number.isInteger');
const IsNaN = RequireIntrinsic('Number.isNaN');
const IsSafeInteger = RequireIntrinsic('Number.isSafeInteger');

const ReturnFalse = () => false;

const Modulo = (x, y) => ((x % y) + y) % y;

const IsBigInt = argument => typeof argument === 'bigint';

const IsBoolean = argument => typeof argument === 'boolean';

const IsFunction = argument => typeof argument === 'function';

const IsNull = argument => argument === null;

const IsNullable = argument => argument == null;

const IsNumber = argument => typeof argument === 'number';

const IsNumeric = argument => {
  const type = typeof argument;
  return type === 'number' || type === 'bigint';
}

const IsObject = argument => {
  const type = typeof argument;
  return type === 'object' && argument !== null || type === 'function';
}

const IsObjectOrNull = argument => {
  const type = typeof argument;
  return type === 'object' || type === 'function';
}

const IsPrimitive = argument => !IsObject(argument);

const IsPropertyKey = argument => {
  const type = typeof argument;
  return type === 'string' || type === 'symbol';
}

const IsString = argument => typeof argument === 'string';

const IsSymbol = argument => typeof argument === 'symbol';

const IsUndefined = argument => argument === undefined;

const IsInt8 = argument => (
  IsInteger(argument) && argument >= -0x80 && argument <= 0x7F
);

const IsInt16 = argument => (
  IsInteger(argument) && argument >= -0x8000 && argument <= 0x7FFF
);

const IsInt32 = argument => (
  IsInteger(argument) && argument >= -0x80000000 && argument <= 0x7FFFFFFF
);

const IsUint8 = argument => (
  IsInteger(argument) && argument >= 0 && argument <= 0xFF
);

const IsUint16 = argument => (
  IsInteger(argument) && argument >= 0 && argument <= 0xFFFF
);

const IsUint32 = argument => (
  IsInteger(argument) && argument >= 0 && argument <= 0xFFFFFFFF
);

const IsIndex = argument => IsSafeInteger(argument) && argument >= 0;

const IsInfinity = argument => argument === Infinity || argument === -Infinity;

const IsNegativeZero = argument => (
  argument === 0 && (1 / argument) === -Infinity
);

const IsArrayLike = argument => IsObject(argument) && IsIndex(argument.length);

const IsClass = argument => {
  if (!IsFunction(argument)) {
    return false;
  }
  const sourceText = FunctionToString(argument);
  return RegExpTest(/^\s*class/, sourceText);
}

const IsConstructor = argument => {
  if (!IsFunction(argument)) {
    return false;
  }
  try {
    ReflectConstruct(Object, [], argument);
  } catch (e) {
    return false;
  }
  return true;
}

const IsCallable = argument => (
  IsFunction(argument) && !IsClass(argument)
);

const IsIterable = argument => (
  argument != null && IsCallable(argument[SymbolIterator])
);

const IsArrayBuffer = argument => FunctionSymbolHasInstance(
  ArrayBuffer, argument
);

const IsArrayIterator = argument => ObjectIsPrototypeOf(
  ArrayIteratorPrototype, argument
);

const IsDataView = argument => FunctionSymbolHasInstance(DataView, argument);

const IsDate = argument => FunctionSymbolHasInstance(Date, argument);

const IsError = argument => FunctionSymbolHasInstance(Error, argument);

const IsFloat32Array = argument => FunctionSymbolHasInstance(
  Float32Array, argument
);

const IsFloat64Array = argument => FunctionSymbolHasInstance(
  Float64Array, argument
);

const IsGenerator = argument => ObjectIsPrototypeOf(
  GeneratorPrototype, argument
);

const IsGeneratorFunction = argument => FunctionSymbolHasInstance(
  GeneratorFunction, argument
);

const IsInt8Array = argument => FunctionSymbolHasInstance(Int8Array, argument);

const IsInt16Array = argument => FunctionSymbolHasInstance(Int16Array, argument);

const IsInt32Array = argument => FunctionSymbolHasInstance(Int32Array, argument);

const IsIterator = argument => ObjectIsPrototypeOf(IteratorPrototype, argument);

const IsMap = argument => FunctionSymbolHasInstance(Map, argument);

const IsMapIterator = argument => ObjectIsPrototypeOf(
  MapIteratorPrototype, argument
);

const IsPromise = argument => FunctionSymbolHasInstance(Promise, argument);

const IsRangeError = argument => FunctionSymbolHasInstance(RangeError, argument);

const IsReferenceError = argument => FunctionSymbolHasInstance(
  ReferenceError, argument
);

const IsRegExp = argument => FunctionSymbolHasInstance(RegExp, argument);

const IsSet = argument => FunctionSymbolHasInstance(Set, argument);

const IsSetIterator = argument => ObjectIsPrototypeOf(
  SetIteratorPrototype, argument
);

const IsStringIterator = argument => ObjectIsPrototypeOf(
  StringIteratorPrototype, argument
);

const IsSyntaxError = argument => FunctionSymbolHasInstance(
  SyntaxError, argument
);

const IsTypedArray = argument => FunctionSymbolHasInstance(TypedArray, argument);

const IsTypeError = argument => FunctionSymbolHasInstance(TypeError, argument);

const IsUint8Array = argument => FunctionSymbolHasInstance(Uint8Array, argument);

const IsUint8ClampedArray = argument => FunctionSymbolHasInstance(
  Uint8ClampedArray, argument
);

const IsUint16Array = argument => FunctionSymbolHasInstance(
  Uint16Array, argument
);

const IsUint32Array = argument => FunctionSymbolHasInstance(
  Uint32Array, argument
);

const IsURIError = argument => FunctionSymbolHasInstance(URIError, argument);

const IsWeakMap = argument => FunctionSymbolHasInstance(WeakMap, argument);

const IsWeakSet = argument => FunctionSymbolHasInstance(WeakSet, argument);

const IsBufferSource = argument => (
  IsArrayBuffer(argument) || IsArrayBufferView(argument)
);

const TypeOf = argument => {
  switch (typeof argument) {
    case 'undefined': return 'Undefined';
    case 'object': {
      if (argument === null) {
        return 'Null';
      }
    }
    case 'function': return 'Object';
    case 'number': return 'Number';
    case 'string': return 'String';
    case 'boolean': return 'Boolean';
    case 'symbol': return 'Symbol';
    case 'bigint': return 'BigInt';
  }
}

const TypeTag = argument => {
  const string = ObjectToString(argument);
  return StringSlice(string, 8, -1);
}

const ToBoolean = argument => !!argument;

const ToObject = argument => {
  if (argument == null) {
    throw new TypeError(`Cannot convert ${argument} to object`);
  }
  return Object(argument);
}

const ToPrimitive = (argument, hint) => {
  hint = hint !== undefined ? `${hint}` : 'default';
  if (IsPrimitive(argument)) {
    return argument;
  }
  const toPrimitive = argument[SymbolToPrimitive];
  if (toPrimitive != null) {
    const value = FunctionCall(toPrimitive, argument, hint);
    if (IsPrimitive(value)) {
      return value;
    }
  } else {
    const methodNames = (
      hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString']
    );
    for (let i = 0; i < 2; i++) {
      const methodName = methodNames[i];
      const method = argument[methodName];
      if (IsCallable(method)) {
        const value = FunctionCall(method, argument);
        if (IsPrimitive(value)) {
          return value;
        }
      }
    }
  }
  throw new TypeError('Cannot convert object to primitive value');
}

const ToBigInt = argument => {
  const value = ToPrimitive(argument, 'number');
  const type = typeof value;
  if (type === 'bigint') {
    return value;
  }
  if (value == null || type === 'number' || type === 'symbol') {
    throw new TypeError(
      `Cannot convert ${value === null ? 'null' : type} to bigint`
    );
  }
  return BigInt(value);
}

const ToNumber = argument => {
  const value = ToPrimitive(argument, 'number');
  const type = typeof value;
  if (type === 'number') {
    return value;
  }
  if (type === 'symbol' || type === 'bigint') {
    throw new TypeError(`Cannot convert ${type} to number`);
  }
  return Number(value);
}

const ToNumeric = argument => {
  const value = ToPrimitive(argument, 'number');
  return IsNumeric(value) ? value : ToNumber(value);
}

const ToString = argument => {
  const value = ToPrimitive(argument, 'string');
  const type = typeof value;
  if (type === 'string') {
    return value;
  }
  if (type === 'symbol') {
    throw new TypeError('Cannot convert symbol to string');
  }
  return String(value);
}

const ToPropertyKey = argument => {
  const value = ToPrimitive(argument, 'string');
  return IsPropertyKey(value) ? value : ToString(value);
}

const ToDecimalOrInfinity = argument => ToNumber(argument) || 0;

const ToDecimal = argument => {
  const number = ToDecimalOrInfinity(argument);
  return IsInfinity(number) ? 0 : number;
}

const ToIntegerOrInfinity = argument => {
  const number = ToNumber(argument);
  return MathTrunc(number) || 0;
}

const ToInteger = argument => {
  const number = ToIntegerOrInfinity(argument);
  return IsInfinity(number) ? 0 : number;
}

const ToSafeInteger = argument => {
  const number = ToIntegerOrInfinity(argument);
  return (
    number <= NumberMIN_SAFE_INTEGER ? NumberMIN_SAFE_INTEGER :
    number >= NumberMAX_SAFE_INTEGER ? NumberMAX_SAFE_INTEGER : number
  );
}

const ToUint8 = argument => {
  const integer = ToInteger(argument);
  return Modulo(integer, 0x100);
}

const ToInt8 = argument => {
  const uint8 = ToUint8(argument);
  return uint8 > 0x7f ? uint8 - 0x100 : uint8;
}

const ToUint8Clamp = argument => {
  const number = ToNumber(argument);
  if (!number || number < 0) {
    return 0;
  }
  if (number >= 0xff) {
    return 0xff;
  }
  const uint8 = MathFloor(number);
  return (
    uint8 + 0.5 < number ? uint8 + 1 :
    number < uint8 + 0.5 ? uint8 :
    uint8 % 2 ? uint8 + 1 : uint8
  );
}

const ToUint16 = argument => {
  const integer = ToInteger(argument);
  return Modulo(integer, 0x10000);
}

const ToInt16 = argument => {
  const uint16 = ToUint16(argument);
  return uint16 > 0x7fff ? uint16 - 0x10000 : uint16;
}

const ToUint32 = argument => {
  const integer = ToInteger(argument);
  return Modulo(integer, 0x100000000);
}

const ToInt32 = argument => {
  const uint32 = ToUint32(argument);
  return uint32 > 0x7fffffff ? uint32 - 0x100000000 : uint32;
}

const ToIndex = argument => {
  const number = ToIntegerOrInfinity(argument);
  if (number < 0 || number > NumberMAX_SAFE_INTEGER) {
    throw new RangeError('Index out of range');
  }
  return number;
}

const ToLength = argument => {
  const number = ToIntegerOrInfinity(argument);
  return (
    number <= 0 ? 0 :
    number >= NumberMAX_SAFE_INTEGER ? NumberMAX_SAFE_INTEGER : number
  );
}

let IsAggregateError;
let IsAsyncFunction;
let IsAsyncGenerator;
let IsAsyncGeneratorFunction;
let IsAsyncIterable;
let IsAsyncIterator;
let IsBigInt64;
let IsBigInt64Array;
let IsBigUint64;
let IsBigUint64Array;
let IsFinalizationRegistry;
let IsRegExpStringIterator;
let IsSharedArrayBuffer;
let IsWeakRef;
let ToBigInt64;
let ToBigUint64;

if (AggregateError) {
  IsAggregateError = argument => FunctionSymbolHasInstance(
    AggregateError, argument
  );
} else {
  IsAggregateError = ReturnFalse;
}

if (AsyncFunction) {
  IsAsyncFunction = argument => FunctionSymbolHasInstance(
    AsyncFunction, argument
  );
} else {
  IsAsyncFunction = ReturnFalse;
}

if (AsyncGeneratorPrototype) {
  IsAsyncGenerator = argument => ObjectIsPrototypeOf(
    AsyncGeneratorPrototype, argument
  );
} else {
  IsAsyncGenerator = ReturnFalse;
}

if (AsyncGeneratorFunction) {
  IsAsyncGeneratorFunction = argument => FunctionSymbolHasInstance(
    AsyncGeneratorFunction, argument
  );
} else {
  IsAsyncGeneratorFunction = ReturnFalse;
}

if (SymbolAsyncIterator) {
  IsAsyncIterable = argument => (
    argument != null && IsCallable(argument[SymbolAsyncIterator])
  );
} else {
  IsAsyncIterable = ReturnFalse;
}

if (AsyncIteratorPrototype) {
  IsAsyncIterator = argument => ObjectIsPrototypeOf(
    AsyncIteratorPrototype, argument
  );
} else {
  IsAsyncIterator = ReturnFalse;
}

if (BigInt) {
  const BIGINT_TWO_POW64 = BigInt('0x10000000000000000');
  const MAX_BIGUINT64 = BigInt('0xFFFFFFFFFFFFFFFF');
  const MIN_BIGINT64 = -BigInt('0x8000000000000000');
  const MAX_BIGINT64 = BigInt('0x7FFFFFFFFFFFFFFF');
  const BIGINT_ZERO = BigInt(0);

  IsBigInt64 = argument => (
    IsBigInt(argument) && argument >= MIN_BIGINT64 && argument <= MAX_BIGINT64
  );

  IsBigUint64 = argument => (
    IsBigInt(argument) && argument >= BIGINT_ZERO && argument <= MAX_BIGUINT64
  );

  ToBigUint64 = argument => {
    const bigint = ToBigInt(argument);
    return Modulo(bigint, BIGINT_TWO_POW64);
  }

  ToBigInt64 = argument => {
    const biguint64 = ToBigUint64(argument);
    return biguint64 > MAX_BIGINT64 ? biguint64 - BIGINT_TWO_POW64 : biguint64;
  }
} else {
  IsBigInt64 = ReturnFalse;
  IsBigUint64 = ReturnFalse;
}

if (BigInt64Array) {
  IsBigInt64Array = argument => FunctionSymbolHasInstance(
    BigInt64Array, argument
  );
} else {
  IsBigInt64Array = ReturnFalse;
}

if (BigUint64Array) {
  IsBigUint64Array = argument => FunctionSymbolHasInstance(
    BigUint64Array, argument
  );
} else {
  IsBigUint64Array = ReturnFalse;
}

if (IsFinalizationRegistry) {
  IsFinalizationRegistry = argument => FunctionSymbolHasInstance(
    FinalizationRegistry, argument
  );
} else {
  IsFinalizationRegistry = ReturnFalse;
}

if (RegExpStringIteratorPrototype) {
  IsRegExpStringIterator = argument => ObjectIsPrototypeOf(
    RegExpStringIteratorPrototype, argument
  );
} else {
  IsRegExpStringIterator = ReturnFalse;
}

if (SharedArrayBuffer) {
  IsSharedArrayBuffer = argument => FunctionSymbolHasInstance(
    SharedArrayBuffer, argument
  );
} else {
  IsSharedArrayBuffer = ReturnFalse;
}

if (WeakRef) {
  IsWeakRef = argument => FunctionSymbolHasInstance(WeakRef, argument);
} else {
  IsWeakRef = ReturnFalse;
}

const Type = ObjectCreate(ObjectPrototype, {
  isAggregateError: {
    value: IsAggregateError
  },
  isArray: {
    value: IsArray
  },
  isArrayBuffer: {
    value: IsArrayBuffer
  },
  isArrayBufferView: {
    value: IsArrayBufferView
  },
  isArrayIterator: {
    value: IsArrayIterator
  },
  isArrayLike: {
    value: IsArrayLike
  },
  isAsyncFunction: {
    value: IsAsyncFunction
  },
  isAsyncGenerator: {
    value: IsAsyncGenerator
  },
  isAsyncGeneratorFunction: {
    value: IsAsyncGeneratorFunction
  },
  isAsyncIterable: {
    value: IsAsyncIterable
  },
  isAsyncIterator: {
    value: IsAsyncIterator
  },
  isBigInt: {
    value: IsBigInt
  },
  isBigInt64: {
    value: IsBigInt64
  },
  isBigInt64Array: {
    value: IsBigInt64Array
  },
  isBigUint64: {
    value: IsBigUint64
  },
  isBigUint64Array: {
    value: IsBigUint64Array
  },
  isBoolean: {
    value: IsBoolean
  },
  isBufferSource: {
    value: IsBufferSource
  },
  isCallable: {
    value: IsCallable
  },
  isClass: {
    value: IsClass
  },
  isConstructor: {
    value: IsConstructor
  },
  isDataView: {
    value: IsDataView
  },
  isDate: {
    value: IsDate
  },
  isError: {
    value: IsError
  },
  isFinalizationRegistry: {
    value: IsFinalizationRegistry
  },
  isFinite: {
    value: IsFinite
  },
  isFloat32Array: {
    value: IsFloat32Array
  },
  isFloat64Array: {
    value: IsFloat64Array
  },
  isFunction: {
    value: IsFunction
  },
  isGenerator: {
    value: IsGenerator
  },
  isGeneratorFunction: {
    value: IsGeneratorFunction
  },
  isInt8: {
    value: IsInt8
  },
  isInt8Array: {
    value: IsInt8Array
  },
  isInt16: {
    value: IsInt16
  },
  isInt16Array: {
    value: IsInt16Array
  },
  isInt32: {
    value: IsInt32
  },
  isInt32Array: {
    value: IsInt32Array
  },
  isIndex: {
    value: IsIndex
  },
  isInfinity: {
    value: IsInfinity
  },
  isInteger: {
    value: IsInteger
  },
  isIterable: {
    value: IsIterable
  },
  isIterator: {
    value: IsIterator
  },
  isMap: {
    value: IsMap
  },
  isMapIterator: {
    value: IsMapIterator
  },
  isNaN: {
    value: IsNaN
  },
  isNegativeZero: {
    value: IsNegativeZero
  },
  isNull: {
    value: IsNull
  },
  isNullable: {
    value: IsNullable
  },
  isNumber: {
    value: IsNumber
  },
  isNumeric: {
    value: IsNumeric
  },
  isObject: {
    value: IsObject
  },
  isObjectOrNull: {
    value: IsObjectOrNull
  },
  isPrimitive: {
    value: IsPrimitive
  },
  isPromise: {
    value: IsPromise
  },
  isPropertyKey: {
    value: IsPropertyKey
  },
  isRangeError: {
    value: IsRangeError
  },
  isReferenceError: {
    value: IsReferenceError
  },
  isRegExp: {
    value: IsRegExp
  },
  isRegExpStringIterator: {
    value: IsRegExpStringIterator
  },
  isSafeInteger: {
    value: IsSafeInteger
  },
  isSet: {
    value: IsSet
  },
  isSetIterator: {
    value: IsSetIterator
  },
  isSharedArrayBuffer: {
    value: IsSharedArrayBuffer
  },
  isString: {
    value: IsString
  },
  isStringIterator: {
    value: IsStringIterator
  },
  isSymbol: {
    value: IsSymbol
  },
  isSyntaxError: {
    value: IsSyntaxError
  },
  isTypedArray: {
    value: IsTypedArray
  },
  isTypeError: {
    value: IsTypeError
  },
  isUint8: {
    value: IsUint8
  },
  isUint8Array: {
    value: IsUint8Array
  },
  isUint8ClampedArray: {
    value: IsUint8ClampedArray
  },
  isUint16: {
    value: IsUint16
  },
  isUint16Array: {
    value: IsUint16Array
  },
  isUint32: {
    value: IsUint32
  },
  isUint32Array: {
    value: IsUint32Array
  },
  isUndefined: {
    value: IsUndefined
  },
  isURIError: {
    value: IsURIError
  },
  isWeakMap: {
    value: IsWeakMap
  },
  isWeakRef: {
    value: IsWeakRef
  },
  isWeakSet: {
    value: IsWeakSet
  },
  of: {
    value: TypeOf
  },
  tag: {
    value: TypeTag
  },
  toBigInt: {
    value: ToBigInt
  },
  toBigInt64: {
    value: ToBigInt64
  },
  toBigUint64: {
    value: ToBigUint64
  },
  toBoolean: {
    value: ToBoolean
  },
  toDecimal: {
    value: ToDecimal
  },
  toDecimalOrInfinity: {
    value: ToDecimalOrInfinity
  },
  toIndex: {
    value: ToIndex
  },
  toInt8: {
    value: ToInt8
  },
  toInt16: {
    value: ToInt16
  },
  toInt32: {
    value: ToInt32
  },
  toInteger: {
    value: ToInteger
  },
  toIntegerOrInfinity: {
    value: ToIntegerOrInfinity
  },
  toLength: {
    value: ToLength
  },
  toNumber: {
    value: ToNumber
  },
  toNumeric: {
    value: ToNumeric
  },
  toObject: {
    value: ToObject
  },
  toPrimitive: {
    value: ToPrimitive
  },
  toPropertyKey: {
    value: ToPropertyKey
  },
  toSafeInteger: {
    value: ToSafeInteger
  },
  toString: {
    value: ToString
  },
  toUint8: {
    value: ToUint8
  },
  toUint8Clamp: {
    value: ToUint8Clamp
  },
  toUint16: {
    value: ToUint16
  },
  toUint32: {
    value: ToUint32
  }
});
ReflectDefineProperty(Type, SymbolToStringTag, {
  value: 'Type'
});

module.exports = {
  IsAggregateError,
  IsArray,
  IsArrayBuffer,
  IsArrayBufferView,
  IsArrayIterator,
  IsArrayLike,
  IsAsyncFunction,
  IsAsyncGenerator,
  IsAsyncGeneratorFunction,
  IsAsyncIterable,
  IsAsyncIterator,
  IsBigInt,
  IsBigInt64,
  IsBigInt64Array,
  IsBigUint64,
  IsBigUint64Array,
  IsBoolean,
  IsBufferSource,
  IsCallable,
  IsClass,
  IsConstructor,
  IsDataView,
  IsDate,
  IsError,
  IsFinalizationRegistry,
  IsFinite,
  IsFloat32Array,
  IsFloat64Array,
  IsFunction,
  IsGenerator,
  IsGeneratorFunction,
  IsInt8,
  IsInt8Array,
  IsInt16,
  IsInt16Array,
  IsInt32,
  IsInt32Array,
  IsIndex,
  IsInfinity,
  IsInteger,
  IsIterable,
  IsIterator,
  IsMap,
  IsMapIterator,
  IsNaN,
  IsNegativeZero,
  IsNull,
  IsNullable,
  IsNumber,
  IsNumeric,
  IsObject,
  IsObjectOrNull,
  IsPrimitive,
  IsPromise,
  IsPropertyKey,
  IsRangeError,
  IsReferenceError,
  IsRegExp,
  IsRegExpStringIterator,
  IsSafeInteger,
  IsSet,
  IsSetIterator,
  IsSharedArrayBuffer,
  IsString,
  IsStringIterator,
  IsSymbol,
  IsSyntaxError,
  IsTypedArray,
  IsTypeError,
  IsUint8,
  IsUint8Array,
  IsUint8ClampedArray,
  IsUint16,
  IsUint16Array,
  IsUint32,
  IsUint32Array,
  IsUndefined,
  IsURIError,
  IsWeakMap,
  IsWeakRef,
  IsWeakSet,
  ToBigInt,
  ToBigInt64,
  ToBigUint64,
  ToBoolean,
  ToDecimal,
  ToDecimalOrInfinity,
  ToIndex,
  ToInt8,
  ToInt16,
  ToInt32,
  ToInteger,
  ToIntegerOrInfinity,
  ToLength,
  ToNumber,
  ToNumeric,
  ToObject,
  ToPrimitive,
  ToPropertyKey,
  ToSafeInteger,
  ToString,
  ToUint8,
  ToUint8Clamp,
  ToUint16,
  ToUint32,
  Type,
  TypeOf,
  TypeTag
};
