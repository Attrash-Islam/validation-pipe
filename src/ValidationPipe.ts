import { IValidator } from "./IValidator";

interface IValidationPipeResult {
  valid: boolean;
  failedPipes: IValidator[];
}

export const ValidationPipe = (validators: IValidator[]) => value =>
    validators.reduce<IValidationPipeResult>((acc, current) => {
      const pipeItemResult = current(value);
      const {
        failedPipes: accFailedPipes,
        valid: accValid,
      } = acc;

      return {
        valid: pipeItemResult && accValid,
        failedPipes: pipeItemResult ? accFailedPipes : accFailedPipes.concat([current]),
      };
    }, {
      valid: true,
      failedPipes: [],
    });
