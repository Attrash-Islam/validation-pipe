import { IValidator } from "../src/IValidator";

export const HexaDecimalValidator: IValidator = value => /^[0-9A-Fa-f]+$/.test(value);
