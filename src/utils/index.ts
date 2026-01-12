export const countAvatars = (length: number, shownAvatar: number) => {
  const sisa = length - shownAvatar;
  if (sisa >= 1000) {
    return `${sisa}k`;
  } else if (sisa >= 1e6) {
    return `${sisa}m`;
  } else {
    return sisa;
  }
};
