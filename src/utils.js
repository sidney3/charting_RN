//import MeasureText from 'react-native-measure-text';

export function unix_to_MDY(unix) {
  const date = new Date(unix)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDay()

  return month + "/" + day + "/" + year
}

export function ticks(start, end, count) {
  //re-write of D3's "ticks" function
  //returns array of length count with start, end included
  //additionally we round to the nearest decimal
  const floored_start = Math.floor(start)
  const floored_end = Math.floor(end)
  if (count <= 1 || floored_start > floored_end) {
    throw Error("Bad input to ticks")
  }

  const step_size = (floored_end - floored_start) / (count - 1)
  let ret = [floored_start]
  let curr = floored_start
  while (curr < floored_end) {
    curr += step_size
    ret.push(Math.floor(curr))
  }
  return ret
}

export function default_key_to_color(key) {
  const big_prime_1 = 1181
  const big_prime_2 = 139
  const big_prime_3 = 107

  //https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const red = (big_prime_1 * (key + big_prime_2)) % 256
  const blue = (big_prime_2 * (key + big_prime_3)) % 256
  const green = (big_prime_3 * (key+ big_prime_1)) % 256

  return rgbToHex(red, green, blue)
  
}

//https://www.tutorialspoint.com/finding-the-nth-prime-number-in-javascript
export function findPrime(num){
  let i, primes = [2, 3], n = 5;
  const isPrime = n => {
     let i = 1, p = primes[i],
     limit = Math.ceil(Math.sqrt(n));
     while (p <= limit) {
        if (n % p === 0) {
           return false;
        }
        i += 1;
        p = primes[i];
     }
     return true;
  }
  for (i = 2; i <= num; i += 1) {
     while (!isPrime(n)) {
        n += 2;
     }
     primes.push(n);
     n += 2;
  };
  return primes[num - 1];

}

export function locate_y(path, x) {
  // Convert the path to a SVG path element
  const pathElement = path.node();

  // Get the total length of the path
  const pathLength = pathElement.getTotalLength();

  // Use binary search to find the point on the path
  let start = 0;
  let end = pathLength;
  let targetLength = x;

  while (start < end) {
    const middle = (start + end) / 2;
    const point = pathElement.getPointAtLength(middle);

    if (point.x < targetLength) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }

  // Get the final point on the path
  const finalPoint = pathElement.getPointAtLength(end);

  return finalPoint.y;
}

//https://stackoverflow.com/a/35373030/14145032
export var BrowserText = (function () {
  // var canvas = document.createElement('canvas'),
  //     context = canvas.getContext('2d');

  // /**
  //  * Measures the rendered width of arbitrary text given the font size and font face
  //  * @param {string} text The text to measure
  //  * @param {number} fontSize The font size in pixels
  //  * @param {string} fontFace The font face ("Arial", "Helvetica", etc.)
  //  * @returns {number} The width of the text
  //  **/
  function getWidth(text, fontSize, fontFace) {
      // res = MeasureText.widths({texts: [text], height: 12, fontSize: fontSize})
      // console.log("text width: ", res[0], res)
      // return res
      return 30
  }

  return {
      getWidth: getWidth
  };
})()