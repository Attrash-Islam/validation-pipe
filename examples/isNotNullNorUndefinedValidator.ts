import { ValidationPipe } from "../src/ValidationPipe";
import _isUndefined from "lodash-es/isUndefined";
import _isNull from "lodash-es/isNull";

export const isNotNullNorUndefinedValidator =
  ValidationPipe([x => !_isUndefined(x), x => !_isNull(x)]);
