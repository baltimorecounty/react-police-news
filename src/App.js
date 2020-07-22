import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import "./App.css";

import { FilterList } from "@baltimorecounty/react-filter-list";
import PoliceNewsRoomCard from "./components/PoliceNewsRoomCard";
import React from "react";
import { Run, getValue, filters } from "./Startup";

Run();

function App() {
  return (
    <FilterList
      title="Baltimore County Police Newsroom"
      filters={filters}
      apiEndpoint={getValue("apiRoot")}
      renderItem={(props) => <PoliceNewsRoomCard {...props} />}
      includeInputFilter={true}
      includeDateFilter={true}
      inputFilterPlaceholder="Begin typing to filter by title or summary..."
    />
  );
}

export default App;
