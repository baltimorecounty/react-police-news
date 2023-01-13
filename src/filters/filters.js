const findType = () => {
  const URL = window.location.href;

  switch (true) {
    case URL.toLowerCase().indexOf("unsolved-homicides") !== -1:
      return "unsolved-homicides";
    default:
      return "news";
  }
};
const addFilterToEndpoint = () => {
  const filterType = findType();
  switch (filterType) {
    case "unsolved-homicides":
      return "&category.value=homicides,missing";
    default:
      return "";
  }
};

const findFilters = () => {
  const filterType = findType();

  return filterType === "news"
    ? [
        {
          targetApiField: "category.value",
          displayName: "Category",
          options: [
            { value: "releases", label: "News Releases" },
            { value: "stories", label: "Stories" },
          ],
        },
        {
          targetApiField: "recordsPerPage",
          value: 10,
        },
      ]
    : [
        {
          targetApiField: "category.value",
          displayName: "Category",
          options: [
            { value: "homicides", label: "Unsolved Homicides" },
            { value: "missing", label: "Missing Persons" },
          ],
        },
        {
          targetApiField: "recordsPerPage",
          value: 10,
        },
      ];
};

const filters = findFilters();

export { filters, addFilterToEndpoint };
