export const fetchApiHeaders = (showToast = true, hasLoading = true, hasLogs = false) => {
  const headers = {
    hasLogs,
    hasLoading,
    showToast,
  };

  return {
    headers,
  };
};
