interface IFetchHeaders {
  showToast?: boolean;
  hasLoading?: boolean;
  token?: boolean;
}

export const fetchApiHeaders = (args?: IFetchHeaders) => {
  const { hasLoading = true, showToast = true, token = true } = args || {};

  const headers = {
    hasLoading,
    showToast,
    token,
  };

  return {
    headers,
  };
};
