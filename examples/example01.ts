import { IValidator } from "../src/IValidator";
import { ValidationPipe } from "../src/ValidationPipe";
import _isUndefined from "lodash-es/isUndefined";
import _isNull from "lodash-es/isNull";

export const HexaDecimalValidator: IValidator = value => /^[0-9A-Fa-f]+$/.test(value);

export const StringLimitedLengthValidator = (maxLength: number) => (value: string) => value.length < maxLength;

export const HexaDecaLimitedLengthValidator =
  ValidationPipe([HexaDecimalValidator, StringLimitedLengthValidator(10)]);

export const isNotNullNorUndefinedValidator =
  ValidationPipe([x => !_isUndefined(x), x => !_isNull(x)]);
