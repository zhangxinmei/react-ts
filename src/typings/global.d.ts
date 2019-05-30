declare namespace process {
  let env: { API_URL: string };
}

declare module '*.css';
declare module '*.less';

declare interface Window {
  [key: string]: any;
}
