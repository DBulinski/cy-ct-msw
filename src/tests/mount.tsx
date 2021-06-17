import { mount as cyMount } from "@cypress/react";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

export function mount(element: JSX.Element) {
  return cyMount(
    <QueryClientProvider client={client}>{element}</QueryClientProvider>
  );
}
