export type TGetProps = {
  url: string;
  params?: Record<string, unknown>;
}
export type TPostProps = {
  url: string;
  requestMethod: 'post' | 'put' | 'patch' | 'delete';
  body: Record<string, unknown>;
}
