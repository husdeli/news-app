import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ComponentType } from "react";

const queryClient = new QueryClient();

export function withReactQuery<T extends JSX.IntrinsicAttributes>(
  Component: ComponentType<T>
) {
  const WithReactQuery = (props: T) => (
    <QueryClientProvider client={queryClient}>
      <Component {...(props as T)} />
    </QueryClientProvider>
  );

  return WithReactQuery;
}
