export function checkLocalStorage(key) {
    let keyValue =''
    try {
      if (typeof localStorage !== 'undefined') {
        keyValue = localStorage.getItem(key)
          ? JSON.parse(localStorage.getItem(key) || '')
          : ''
      }
    } catch (e) {
      console.log('error ', e)
    }
    return keyValue
  }
  