import { Config } from "@baltimorecounty/javascript-utilities";
import { FilterList } from "@baltimorecounty/react-filter-list";
import PoliceNewsRoomCard from "./components/PoliceNewsRoomCard";
import React from "react";
const { setConfig, getValue } = Config;

const DisplayFilterList = ({ filters = [] }) => (
    <FilterList
      title="Baltimore County Police Newsroom"
      filters={filters}
      apiEndpoint={getValue("apiRoot")}
      renderItem={(props) => <PoliceNewsRoomCard {...props} />}
      includeInputFilter={true}
      inputFilterPlaceholder="Begin typing to filter by title or summary..."
    />   
);

export default DisplayFilterList;