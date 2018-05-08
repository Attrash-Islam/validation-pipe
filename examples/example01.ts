import { IValidator } from "../src/IValidator";
import { ValidationPipe } from "../src/ValidationPipe";
import _isUndefined from "lodash-es/isUndefined";
import _isNull from "lodash-es/isNull";

const HexaDecimalValidator: IValidator = value => /^[0-9A-Fa-f]+$/.test(value);

const StringLimitedLengthValidator = (maxLength: number) => (value: string) => value.length < maxLength;

const StringLimitedUpTo10 = StringLimitedLengthValidator(10);

const HexaDecaLimitedLengthValidator =
  ValidationPipe([HexaDecimalValidator, StringLimitedUpTo10]);

// We'll use it on a valid hexadecimal value but not valid by the string length limitation
const useTheComplexAbove = HexaDecaLimitedLengthValidator("fffff4654535435434353");

// Console into the log the failedPipes array which points to the validationPipe functions
console.log("FailedPipes", useTheComplexAbove.failedPipes); // 1
console.log("valid final result", useTheComplexAbove.valid); // false

// You can use equality to find which pipes failed to determine what to do next
// useTheComplexAbove.failedPipes[0] === StringLimitedUpTo10 resolves as true
// or maybe indexOf? Other complex computations?

// Usage with External Libraries that implement the same IValidator interface -> (value: any) => boolean
const isNotNullNorUndefinedValidator =
  ValidationPipe([x => !_isUndefined(x), x => !_isNull(x)]);
