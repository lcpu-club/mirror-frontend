export class HTTPError extends Error {
  constructor(
    public statusCode: number,
    message = `HTTP Error ${statusCode}`
  ) {
    super(message)
  }
}

export function isHTTPError(err: any): err is HTTPError {
  return 'statusCode' in err
}
