export const addressShortner = (address, shorter) => {
  if (shorter)
    return `${address.slice(0, 5)}...${address.slice(
      address.length - 4,
      address.length
    )}`;
  return `${address?.slice(0, 12)}.....${address?.slice(
    address.length - 10,
    address.length
  )}`;
};

export const dateConvert = (str) => {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
};
