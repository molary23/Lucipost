import * as React from "react";

import { Search } from "../styles/all";

function SearchBar() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <Search
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
}

export default SearchBar;
