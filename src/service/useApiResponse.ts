export default class UseApiResponse<T> {
  isLoading: boolean = false;
  result: T | null = null;
  error: string = '';
}
