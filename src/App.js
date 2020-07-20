import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import "./App.css";

import { Config } from "@baltimorecounty/javascript-utilities";
import { FilterList } from "@baltimorecounty/react-filter-list";
import PoliceNewsRoomCard from "./components/PoliceNewsRoomCard";
import React from "react";

const { setConfig, getValue } = Config;

const testApiRoot =
  "https://testservices.baltimorecountymd.gov/api/hub/structuredContent/news/police";
const prodApiRoot =
  "https://services.baltimorecountymd.gov/hub/api/hub/structuredContent/news/police";

// HACK - the Config utiltiy does not account for beta.
// TODO: This will need to be addressed when we get closer to launch
const localApiRoot =
  window.location.hostname.indexOf("beta") > -1
    ? testApiRoot
    : "http://localhost:54727/api/hub/structuredContent/news/police";

const configValues = {
  local: {
    apiRoot: localApiRoot,
  },
  development: {
    apiRoot: testApiRoot,
  },
  staging: {
    apiRoot: testApiRoot,
  },
  production: {
    apiRoot: prodApiRoot,
  },
};

setConfig(configValues);

let date = new Date();
const filters = [
  {
    targetApiField: "category.value",
    displayName: "Category",
    options: [
      { value: "releases", label: "News Releases" },
      { value: "stories", label: "Stories" },
    ],
  },
  {
    targetApiField: "FilterDate",
    displayName: "FilterDate",
    value: `${date.setDate(date.getDate() - 14)},${date}`,
  },
];

console.log(date.setDate(date.getDate() - 14));

function App() {
  return (
    <FilterList
      title="Baltimore County Police Newsroom"
      filters={filters}
      apiEndpoint={getValue("apiRoot")}
      renderItem={(props) => <PoliceNewsRoomCard {...props} />}
      includeInputFilter={true}
      inputFilterPlaceholder="Begin typing to filter by title or summary..."
    />
  );
}

export default App;
