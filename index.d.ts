export { ValidationPipe };

///////////////////////////////////////////////////////////////////////////////
// validationPipe module (validation-pipe)
///////////////////////////////////////////////////////////////////////////////

type IValidator = (value: any) => boolean;

interface IValidationPipeResult {
  valid: boolean;
  failedPipes: IValidator[];
}

type ValidationPipe = (validators: IValidator[]) => (value: any) => IValidationPipeResult;
