# Type API

## Abstract
The module for checking and casting the built-in types of the JavaScript
language in the ECMAScript specification.

## Install
`npm i --save @dwlib/type`

## Usage
```javascript
// CJS
const Type = require('@dwlib/type');
const IsAggregateError = require('@dwlib/type/IsAggregateError');
const IsArray = require('@dwlib/type/IsArray');
const IsArrayBuffer = require('@dwlib/type/IsArrayBuffer');
const IsArrayBufferView = require('@dwlib/type/IsArrayBufferView');
const IsArrayIterator = require('@dwlib/type/IsArrayIterator');
const IsArrayLike = require('@dwlib/type/IsArrayLike');
const IsAsyncFunction = require('@dwlib/type/IsAsyncFunction');
const IsAsyncGenerator = require('@dwlib/type/IsAsyncGenerator');
const IsAsyncGeneratorFunction = require('@dwlib/type/IsAsyncGeneratorFunction');
const IsAsyncIterable = require('@dwlib/type/IsAsyncIterable');
const IsAsyncIterator = require('@dwlib/type/IsAsyncIterator');
const IsBigInt = require('@dwlib/type/IsBigInt');
const IsBigInt64 = require('@dwlib/type/IsBigInt64');
const IsBigInt64Array = require('@dwlib/type/IsBigInt64Array');
const IsBigUint64 = require('@dwlib/type/IsBigUint64');
const IsBigUint64Array = require('@dwlib/type/IsBigUint64Array');
const IsBoolean = require('@dwlib/type/IsBoolean');
const IsBufferSource = require('@dwlib/type/IsBufferSource');
const IsCallable = require('@dwlib/type/IsCallable');
const IsClass = require('@dwlib/type/IsClass');
const IsConstructor = require('@dwlib/type/IsConstructor');
const IsDataView = require('@dwlib/type/IsDataView');
const IsDate = require('@dwlib/type/IsDate');
const IsError = require('@dwlib/type/IsError');
const IsFinalizationRegistry = require('@dwlib/type/IsFinalizationRegistry');
const IsFinite = require('@dwlib/type/IsFinite');
const IsFloat32Array = require('@dwlib/type/IsFloat32Array');
const IsFloat64Array = require('@dwlib/type/IsFloat64Array');
const IsFunction = require('@dwlib/type/IsFunction');
const IsGenerator = require('@dwlib/type/IsGenerator');
const IsGeneratorFunction = require('@dwlib/type/IsGeneratorFunction');
const IsInt8 = require('@dwlib/type/IsInt8');
const IsInt8Array = require('@dwlib/type/IsInt8Array');
const IsInt16 = require('@dwlib/type/IsInt16');
const IsInt16Array = require('@dwlib/type/IsInt16Array');
const IsInt32 = require('@dwlib/type/IsInt32');
const IsInt32Array = require('@dwlib/type/IsInt32Array');
const IsIndex = require('@dwlib/type/IsIndex');
const IsInfinity = require('@dwlib/type/IsInfinity');
const IsInteger = require('@dwlib/type/IsInteger');
const IsIterable = require('@dwlib/type/IsIterable');
const IsIterator = require('@dwlib/type/IsIterator');
const IsMap = require('@dwlib/type/IsMap');
const IsMapIterator = require('@dwlib/type/IsMapIterator');
const IsNaN = require('@dwlib/type/IsNaN');
const IsNegativeZero = require('@dwlib/type/IsNegativeZero');
const IsNull = require('@dwlib/type/IsNull');
const IsNullable = require('@dwlib/type/IsNullable');
const IsNumber = require('@dwlib/type/IsNumber');
const IsNumeric = require('@dwlib/type/IsNumeric');
const IsObject = require('@dwlib/type/IsObject');
const IsObjectOrNull = require('@dwlib/type/IsObjectOrNull');
const IsPrimitive = require('@dwlib/type/IsPrimitive');
const IsPromise = require('@dwlib/type/IsPromise');
const IsPropertyKey = require('@dwlib/type/IsPropertyKey');
const IsRangeError = require('@dwlib/type/IsRangeError');
const IsReferenceError = require('@dwlib/type/IsReferenceError');
const IsRegExp = require('@dwlib/type/IsRegExp');
const IsRegExpStringIterator = require('@dwlib/type/IsRegExpStringIterator');
const IsSafeInteger = require('@dwlib/type/IsSafeInteger');
const IsSet = require('@dwlib/type/IsSet');
const IsSetIterator = require('@dwlib/type/IsSetIterator');
const IsSharedArrayBuffer = require('@dwlib/type/IsSharedArrayBuffer');
const IsString = require('@dwlib/type/IsString');
const IsStringIterator = require('@dwlib/type/IsStringIterator');
const IsSymbol = require('@dwlib/type/IsSymbol');
const IsSyntaxError = require('@dwlib/type/IsSyntaxError');
const IsTypedArray = require('@dwlib/type/IsTypedArray');
const IsTypeError = require('@dwlib/type/IsTypeError');
const IsUint8 = require('@dwlib/type/IsUint8');
const IsUint8Array = require('@dwlib/type/IsUint8Array');
const IsUint8ClampedArray = require('@dwlib/type/IsUint8ClampedArray');
const IsUint16 = require('@dwlib/type/IsUint16');
const IsUint16Array = require('@dwlib/type/IsUint16Array');
const IsUint32 = require('@dwlib/type/IsUint32');
const IsUint32Array = require('@dwlib/type/IsUint32Array');
const IsUndefined = require('@dwlib/type/IsUndefined');
const IsURIError = require('@dwlib/type/IsURIError');
const IsWeakMap = require('@dwlib/type/IsWeakMap');
const IsWeakRef = require('@dwlib/type/IsWeakRef');
const IsWeakSet = require('@dwlib/type/IsWeakSet');
const ToBigInt = require('@dwlib/type/ToBigInt');
const ToBigInt64 = require('@dwlib/type/ToBigInt64');
const ToBigUint64 = require('@dwlib/type/ToBigUint64');
const ToBoolean = require('@dwlib/type/ToBoolean');
const ToDecimal = require('@dwlib/type/ToDecimal');
const ToDecimalOrInfinity = require('@dwlib/type/ToDecimalOrInfinity');
const ToIndex = require('@dwlib/type/ToIndex');
const ToInt8 = require('@dwlib/type/ToInt8');
const ToInt16 = require('@dwlib/type/ToInt16');
const ToInt32 = require('@dwlib/type/ToInt32');
const ToInteger = require('@dwlib/type/ToInteger');
const ToIntegerOrInfinity = require('@dwlib/type/ToIntegerOrInfinity');
const ToLength = require('@dwlib/type/ToLength');
const ToNumber = require('@dwlib/type/ToNumber');
const ToNumeric = require('@dwlib/type/ToNumeric');
const ToObject = require('@dwlib/type/ToObject');
const ToPrimitive = require('@dwlib/type/ToPrimitive');
const ToPropertyKey = require('@dwlib/type/ToPropertyKey');
const ToSafeInteger = require('@dwlib/type/ToSafeInteger');
const ToString = require('@dwlib/type/ToString');
const ToUint8 = require('@dwlib/type/ToUint8');
const ToUint8Clamp = require('@dwlib/type/ToUint8Clamp');
const ToUint16 = require('@dwlib/type/ToUint16');
const ToUint32 = require('@dwlib/type/ToUint32');
const TypeOf = require('@dwlib/type/TypeOf');
const TypeTag = require('@dwlib/type/TypeTag');
// ESM
import Type, {
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
  TypeOf,
  TypeTag
} from '@dwlib/type';
import IsAggregateError from '@dwlib/type/IsAggregateError';
import IsArray from '@dwlib/type/IsArray';
import IsArrayBuffer from '@dwlib/type/IsArrayBuffer';
import IsArrayBufferView from '@dwlib/type/IsArrayBufferView';
import IsArrayIterator from '@dwlib/type/IsArrayIterator';
import IsArrayLike from '@dwlib/type/IsArrayLike';
import IsAsyncFunction from '@dwlib/type/IsAsyncFunction';
import IsAsyncGenerator from '@dwlib/type/IsAsyncGenerator';
import IsAsyncGeneratorFunction from '@dwlib/type/IsAsyncGeneratorFunction';
import IsAsyncIterable from '@dwlib/type/IsAsyncIterable';
import IsAsyncIterator from '@dwlib/type/IsAsyncIterator';
import IsBigInt from '@dwlib/type/IsBigInt';
import IsBigInt64 from '@dwlib/type/IsBigInt64';
import IsBigInt64Array from '@dwlib/type/IsBigInt64Array';
import IsBigUint64 from '@dwlib/type/IsBigUint64';
import IsBigUint64Array from '@dwlib/type/IsBigUint64Array';
import IsBoolean from '@dwlib/type/IsBoolean';
import IsBufferSource from '@dwlib/type/IsBufferSource';
import IsCallable from '@dwlib/type/IsCallable';
import IsClass from '@dwlib/type/IsClass';
import IsConstructor from '@dwlib/type/IsConstructor';
import IsDataView from '@dwlib/type/IsDataView';
import IsDate from '@dwlib/type/IsDate';
import IsError from '@dwlib/type/IsError';
import IsFinalizationRegistry from '@dwlib/type/IsFinalizationRegistry';
import IsFinite from '@dwlib/type/IsFinite';
import IsFloat32Array from '@dwlib/type/IsFloat32Array';
import IsFloat64Array from '@dwlib/type/IsFloat64Array';
import IsFunction from '@dwlib/type/IsFunction';
import IsGenerator from '@dwlib/type/IsGenerator';
import IsGeneratorFunction from '@dwlib/type/IsGeneratorFunction';
import IsInt8 from '@dwlib/type/IsInt8';
import IsInt8Array from '@dwlib/type/IsInt8Array';
import IsInt16 from '@dwlib/type/IsInt16';
import IsInt16Array from '@dwlib/type/IsInt16Array';
import IsInt32 from '@dwlib/type/IsInt32';
import IsInt32Array from '@dwlib/type/IsInt32Array';
import IsIndex from '@dwlib/type/IsIndex';
import IsInfinity from '@dwlib/type/IsInfinity';
import IsInteger from '@dwlib/type/IsInteger';
import IsIterable from '@dwlib/type/IsIterable';
import IsIterator from '@dwlib/type/IsIterator';
import IsMap from '@dwlib/type/IsMap';
import IsMapIterator from '@dwlib/type/IsMapIterator';
import IsNaN from '@dwlib/type/IsNaN';
import IsNegativeZero from '@dwlib/type/IsNegativeZero';
import IsNull from '@dwlib/type/IsNull';
import IsNullable from '@dwlib/type/IsNullable';
import IsNumber from '@dwlib/type/IsNumber';
import IsNumeric from '@dwlib/type/IsNumeric';
import IsObject from '@dwlib/type/IsObject';
import IsObjectOrNull from '@dwlib/type/IsObjectOrNull';
import IsPrimitive from '@dwlib/type/IsPrimitive';
import IsPromise from '@dwlib/type/IsPromise';
import IsPropertyKey from '@dwlib/type/IsPropertyKey';
import IsRangeError from '@dwlib/type/IsRangeError';
import IsReferenceError from '@dwlib/type/IsReferenceError';
import IsRegExp from '@dwlib/type/IsRegExp';
import IsRegExpStringIterator from '@dwlib/type/IsRegExpStringIterator';
import IsSafeInteger from '@dwlib/type/IsSafeInteger';
import IsSet from '@dwlib/type/IsSet';
import IsSetIterator from '@dwlib/type/IsSetIterator';
import IsSharedArrayBuffer from '@dwlib/type/IsSharedArrayBuffer';
import IsString from '@dwlib/type/IsString';
import IsStringIterator from '@dwlib/type/IsStringIterator';
import IsSymbol from '@dwlib/type/IsSymbol';
import IsSyntaxError from '@dwlib/type/IsSyntaxError';
import IsTypedArray from '@dwlib/type/IsTypedArray';
import IsTypeError from '@dwlib/type/IsTypeError';
import IsUint8 from '@dwlib/type/IsUint8';
import IsUint8Array from '@dwlib/type/IsUint8Array';
import IsUint8ClampedArray from '@dwlib/type/IsUint8ClampedArray';
import IsUint16 from '@dwlib/type/IsUint16';
import IsUint16Array from '@dwlib/type/IsUint16Array';
import IsUint32 from '@dwlib/type/IsUint32';
import IsUint32Array from '@dwlib/type/IsUint32Array';
import IsUndefined from '@dwlib/type/IsUndefined';
import IsURIError from '@dwlib/type/IsURIError';
import IsWeakMap from '@dwlib/type/IsWeakMap';
import IsWeakRef from '@dwlib/type/IsWeakRef';
import IsWeakSet from '@dwlib/type/IsWeakSet';
import ToBigInt from '@dwlib/type/ToBigInt';
import ToBigInt64 from '@dwlib/type/ToBigInt64';
import ToBigUint64 from '@dwlib/type/ToBigUint64';
import ToBoolean from '@dwlib/type/ToBoolean';
import ToDecimal from '@dwlib/type/ToDecimal';
import ToDecimalOrInfinity from '@dwlib/type/ToDecimalOrInfinity';
import ToIndex from '@dwlib/type/ToIndex';
import ToInt8 from '@dwlib/type/ToInt8';
import ToInt16 from '@dwlib/type/ToInt16';
import ToInt32 from '@dwlib/type/ToInt32';
import ToInteger from '@dwlib/type/ToInteger';
import ToIntegerOrInfinity from '@dwlib/type/ToIntegerOrInfinity';
import ToLength from '@dwlib/type/ToLength';
import ToNumber from '@dwlib/type/ToNumber';
import ToNumeric from '@dwlib/type/ToNumeric';
import ToObject from '@dwlib/type/ToObject';
import ToPrimitive from '@dwlib/type/ToPrimitive';
import ToPropertyKey from '@dwlib/type/ToPropertyKey';
import ToSafeInteger from '@dwlib/type/ToSafeInteger';
import ToString from '@dwlib/type/ToString';
import ToUint8 from '@dwlib/type/ToUint8';
import ToUint8Clamp from '@dwlib/type/ToUint8Clamp';
import ToUint16 from '@dwlib/type/ToUint16';
import ToUint32 from '@dwlib/type/ToUint32';
import TypeOf from '@dwlib/type/TypeOf';
import TypeTag from '@dwlib/type/TypeTag';
```

## API
- *static class* Type
  - *static* isAggregateError(argument)
  - *static* isArray(argument)
  - *static* isArrayBuffer(argument)
  - *static* isArrayBufferView(argument)
  - *static* isArrayIterator(argument)
  - *static* isArrayLike(argument)
  - *static* isAsyncFunction(argument)
  - *static* isAsyncGenerator(argument)
  - *static* isAsyncGeneratorFunction(argument)
  - *static* isAsyncIterable(argument)
  - *static* isAsyncIterator(argument)
  - *static* isBigInt(argument)
  - *static* isBigInt64(argument)
  - *static* isBigInt64Array(argument)
  - *static* isBigUint64(argument)
  - *static* isBigUint64Array(argument)
  - *static* isBoolean(argument)
  - *static* isBufferSource(argument)
  - *static* isCallable(argument)
  - *static* isClass(argument)
  - *static* isConstructor(argument)
  - *static* isDataView(argument)
  - *static* isDate(argument)
  - *static* isError(argument)
  - *static* isFinalizationRegistry(argument)
  - *static* isFinite(argument)
  - *static* isFloat32Array(argument)
  - *static* isFloat64Array(argument)
  - *static* isFunction(argument)
  - *static* isGenerator(argument)
  - *static* isGeneratorFunction(argument)
  - *static* isInt8(argument)
  - *static* isInt8Array(argument)
  - *static* isInt16(argument)
  - *static* isInt16Array(argument)
  - *static* isInt32(argument)
  - *static* isInt32Array(argument)
  - *static* isIndex(argument)
  - *static* isInfinity(argument)
  - *static* isInteger(argument)
  - *static* isIterable(argument)
  - *static* isIterator(argument)
  - *static* isMap(argument)
  - *static* isMapIterator(argument)
  - *static* isNaN(argument)
  - *static* isNegativeZero(argument)
  - *static* isNull(argument)
  - *static* isNullable(argument)
  - *static* isNumber(argument)
  - *static* isNumeric(argument)
  - *static* isObject(argument)
  - *static* isObjectOrNull(argument)
  - *static* isPrimitive(argument)
  - *static* isPromise(argument)
  - *static* isPropertyKey(argument)
  - *static* isRangeError(argument)
  - *static* isReferenceError(argument)
  - *static* isRegExp(argument)
  - *static* isRegExpStringIterator(argument)
  - *static* isSafeInteger(argument)
  - *static* isSet(argument)
  - *static* isSetIterator(argument)
  - *static* isSharedArrayBuffer(argument)
  - *static* isString(argument)
  - *static* isStringIterator(argument)
  - *static* isSymbol(argument)
  - *static* isSyntaxError(argument)
  - *static* isTypedArray(argument)
  - *static* isTypeError(argument)
  - *static* isUint8(argument)
  - *static* isUint8Array(argument)
  - *static* isUint8ClampedArray(argument)
  - *static* isUint16(argument)
  - *static* isUint16Array(argument)
  - *static* isUint32(argument)
  - *static* isUint32Array(argument)
  - *static* isUndefined(argument)
  - *static* isURIError(argument)
  - *static* isWeakMap(argument)
  - *static* isWeakRef(argument)
  - *static* isWeakSet(argument)
  - *static* of(argument)
  - *static* tag(argument)
  - *static* toBigInt(argument)
  - *static* toBigInt64(argument)
  - *static* toBigUint64(argument)
  - *static* toBoolean(argument)
  - *static* toDecimal(argument)
  - *static* toDecimalOrInfinity(argument)
  - *static* toIndex(argument)
  - *static* toInt8(argument)
  - *static* toInt16(argument)
  - *static* toInt32(argument)
  - *static* toInteger(argument)
  - *static* toIntegerOrInfinity(argument)
  - *static* toLength(argument)
  - *static* toNumber(argument)
  - *static* toNumeric(argument)
  - *static* toObject(argument)
  - *static* toPrimitive(argument[, hint])
  - *static* toPropertyKey(argument)
  - *static* toSafeInteger(argument)
  - *static* toString(argument)
  - *static* toUint8(argument)
  - *static* toUint8Clamp(argument)
  - *static* toUint16(argument)
  - *static* toUint32(argument)

### Builtins
- IsAggregateError(argument)
- IsArray(argument)
- IsArrayBuffer(argument)
- IsArrayBufferView(argument)
- IsArrayIterator(argument)
- IsArrayLike(argument)
- IsAsyncFunction(argument)
- IsAsyncGenerator(argument)
- IsAsyncGeneratorFunction(argument)
- IsAsyncIterable(argument)
- IsAsyncIterator(argument)
- IsBigInt(argument)
- IsBigInt64(argument)
- IsBigInt64Array(argument)
- IsBigUint64(argument)
- IsBigUint64Array(argument)
- IsBoolean(argument)
- IsBufferSource(argument)
- IsCallable(argument)
- IsClass(argument)
- IsConstructor(argument)
- IsDataView(argument)
- IsDate(argument)
- IsError(argument)
- IsFinalizationRegistry(argument)
- IsFinite(argument)
- IsFloat32Array(argument)
- IsFloat64Array(argument)
- IsFunction(argument)
- IsGenerator(argument)
- IsGeneratorFunction(argument)
- IsInt8(argument)
- IsInt8Array(argument)
- IsInt16(argument)
- IsInt16Array(argument)
- IsInt32(argument)
- IsInt32Array(argument)
- IsIndex(argument)
- IsInfinity(argument)
- IsInteger(argument)
- IsIterable(argument)
- IsIterator(argument)
- IsMap(argument)
- IsMapIterator(argument)
- IsNaN(argument)
- IsNegativeZero(argument)
- IsNull(argument)
- IsNullable(argument)
- IsNumber(argument)
- IsNumeric(argument)
- IsObject(argument)
- IsObjectOrNull(argument)
- IsPrimitive(argument)
- IsPromise(argument)
- IsPropertyKey(argument)
- IsRangeError(argument)
- IsReferenceError(argument)
- IsRegExp(argument)
- IsRegExpStringIterator(argument)
- IsSafeInteger(argument)
- IsSet(argument)
- IsSetIterator(argument)
- IsSharedArrayBuffer(argument)
- IsString(argument)
- IsStringIterator(argument)
- IsSymbol(argument)
- IsSyntaxError(argument)
- IsTypedArray(argument)
- IsTypeError(argument)
- IsUint8(argument)
- IsUint8Array(argument)
- IsUint8ClampedArray(argument)
- IsUint16(argument)
- IsUint16Array(argument)
- IsUint32(argument)
- IsUint32Array(argument)
- IsUndefined(argument)
- IsURIError(argument)
- IsWeakMap(argument)
- IsWeakRef(argument)
- IsWeakSet(argument)
- ToBigInt(argument)
- ToBigInt64(argument)
- ToBigUint64(argument)
- ToBoolean(argument)
- ToDecimal(argument)
- ToDecimalOrInfinity(argument)
- ToIndex(argument)
- ToInt8(argument)
- ToInt16(argument)
- ToInt32(argument)
- ToInteger(argument)
- ToIntegerOrInfinity(argument)
- ToLength(argument)
- ToNumber(argument)
- ToNumeric(argument)
- ToObject(argument)
- ToPrimitive(argument[, hint])
- ToPropertyKey(argument)
- ToSafeInteger(argument)
- ToString(argument)
- ToUint8(argument)
- ToUint8Clamp(argument)
- ToUint16(argument)
- ToUint32(argument)
- TypeOf(argument)
- TypeTag(argument)
