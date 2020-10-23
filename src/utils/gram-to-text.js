export const gramToText = (gramN) => {
  if (
    [!gramN, typeof gramN !== "number", !Number.isFinite(gramN)].some(Boolean)
  ) {
    return "";
  }

  const kg = Math.floor(gramN / 1000);
  const gramLeft = gramN % 1000;

  return [`${kg ? `${kg} кг. ` : ""}`, `${gramLeft} г.`].join("");
};
