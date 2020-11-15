import { EWeightType } from "../db/common-enums";

export const gramToText = (gramN, type) => {
  if (
    [!gramN, !type, typeof gramN !== "number", !Number.isFinite(gramN)].some(Boolean)
  ) {
    return "";
  }

  let bigName = '';
  let smallName = '';

  switch (type) {
    case EWeightType.Milliliter: {
      bigName = 'л.';
      smallName = 'мл.';
      break;
    }
    case EWeightType.Gram: {
      bigName = 'кг.';
      smallName = 'г.';
      break;
    }
    default: break;
  }

  const oneMatter = Math.floor(gramN / 1000);
  const matterLeft = gramN % 1000;

  return [
    `${oneMatter ? `${oneMatter} ${bigName} ` : ""}`,
    `${matterLeft} ${smallName}`,
  ].join("");
};
