import React from "react";

import PaginatedList from "./component/PaginatedList/paginatedList";
import "./App.scss"; // Import the SCSS file
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();
function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <PaginatedList />
    </QueryClientProvider>
  );
}

export default App;
