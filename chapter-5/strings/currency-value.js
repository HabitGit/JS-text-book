'use strict';

function extractCurrencyValue(str) {
    
    if (str.startsWith('$')) {
      let cutStr = str.slice(1);
      return +cutStr;
    }
  }