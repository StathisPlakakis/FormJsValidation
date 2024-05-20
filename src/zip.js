function checkZIP(country) {
  const constraints = {
    ch: [
      '^(CH-)?\\d{4}$',
      'Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950',
    ],
    fr: [
      '^(F-)?\\d{5}$',
      'France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012',
    ],
    de: [
      '^(D-)?\\d{5}$',
      'Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345',
    ],
    nl: [
      '^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$',
      'Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS',
    ],
  };

  const regexp = constraints[country][0];
  const message = constraints[country][1];

  return [regexp, message];
}

export default checkZIP;
