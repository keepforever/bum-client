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

const utils = {
  clearLog
}

export default utils
