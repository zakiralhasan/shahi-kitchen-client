const { useEffect } = require("react");

const useSetTitle = (getTitle) => {
  useEffect(() => {
    document.title = `${getTitle} - Shahi Kitchen`;
  }, [getTitle]);
};

export default useSetTitle;
