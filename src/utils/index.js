function clearLog(text, item) {
  console.log(`


  ###########################################
                  ${text}
  ###########################################


  `, item, `

  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  ${text}
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  `)
}

const truncate = (string) => {
   if (string.length > 12)
      return string.substring(0, 12)+'...';
   else
      return string;
};

const utils = {
  clearLog,
  truncate
}

export default utils
