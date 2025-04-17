import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CollectionsProvider } from "./components/CollectionsContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <CollectionsProvider>
                <App />
            </CollectionsProvider>
        </QueryClientProvider>
    </StrictMode>
);
