 /**
  * fill up the first object with defaults from the second object
  * @param {object} firstObject – object with values that should overwrite the
  * @param {object} secondObject - default values
**/
function fillUpNestedObjects(firstObject, secondObject) {

  for (let key in secondObject) {
    if(!(key in firstObject)) {
      // fill up from defaults
      firstObject[key] = secondObject[key]
    } else {
      // iterate through nested objects if necessary
      if (firstObject[key].constructor === Object) {
        firstObject[key] = fillUpNestedObjects(firstObject[key], secondObject[key])
      }
    }
  }

  return firstObject

}


export default fillUpNestedObjects
