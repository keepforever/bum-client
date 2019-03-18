function rarityBorderColor(str) {
  switch (str) {
    case "mythic":
      return "orange";
      break;
    case "rare":
      return "yellow";
      break;
    case "uncommon":
      return "blue";
      break;
    case "common":
      return "white";
      break;
    default:
  }
}

function clearLog(text, item) {
  console.log(
    `


  ###########################################
                  ${text}
  ###########################################


  `,
    item,
    `

  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  ${text}
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  `
  );
}

const truncate = string => {
  if (string.length > 12) return string.substring(0, 12) + "...";
  else return string;
};

const isBasicLand = str => {
  if (
    str.toLowerCase() === "swamp" ||
    str.toLowerCase() === "forest" ||
    str.toLowerCase() === "island" ||
    str.toLowerCase() === "plains" ||
    str.toLowerCase() === "mountain"
  ) {
    return true;
  } else {
    return false;
  }
};

const utils = {
  clearLog,
  truncate,
  isBasicLand,
  rarityBorderColor
};

export default utils;
