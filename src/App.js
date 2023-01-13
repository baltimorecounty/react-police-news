import React from "react";
import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import "./App.css";

import { FilterList } from "@baltimorecounty/react-filter-list";
import PoliceNewsRoomCard from "./components/PoliceNewsRoomCard";
import { Run, getValue } from "./Startup";
import { filters, addFilterToEndpoint } from "./filters/filters";

Run();

console.log(addFilterToEndpoint());
function App(props) {
  return (
    <FilterList
      title="Baltimore County Police Newsroom"
      filters={filters}
      apiEndpoint={getValue("apiRoot")}
      renderItem={(props) => <PoliceNewsRoomCard {...props} />}
      includeInputFilter={true}
      includeDateFilter={true}
      includeClearButton={true}
      includedFilters={addFilterToEndpoint()}
      searchCategory="PoliceNews"
      inputFilterPlaceholder="Begin typing to filter by title or summary..."
    />
  );
}

export default App;
