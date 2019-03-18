function rarityBorderColor(str) {
  switch (str) {
    case "mythic":
      return "orange";
    case "rare":
      return "yellow";
    case "uncommon":
      return "blue";
    case "common":
      return "white";
    default:
      return "white";  
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
