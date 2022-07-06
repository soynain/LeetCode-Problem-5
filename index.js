var longestPalindrome = function (s) {
    let palindromeBuilder = "", palindromeArrayy = [], ai = 0, jei = 0;
    if (!s) return "";
      for (let i = 0; i < s.length; i++) {
          for (let j = i; j < s.length; j++) {
              palindromeBuilder += s[j];
              if (palindromeBuilder === s.substring(i, j + 1).split("").reverse().join(""))
                  palindromeArrayy.push(palindromeBuilder);
              if (j == s.length - 1) palindromeBuilder = "";
          }
      }
  /*  while (ai < s.length) {
        console.log(jei, ' inicio')
        palindromeBuilder += s[jei];
        console.log(ai, ' ', jei, ' ', palindromeBuilder, ' ', s.substring(ai, jei + 1).split("").reverse().join(""))
        if (palindromeBuilder === s.substring(ai, jei + 1).split("").reverse().join("")) {
            palindromeArrayy.push(palindromeBuilder);
            if (ai == s.length) {
                break;
            } else {
                ai++;
                jei = ai;
                jei++;
                if (jei >= s.length - 1) palindromeBuilder = "";
            }
            //palindromeBuilder = "";
        } else {
            if (jei == s.length - 1) palindromeBuilder = "";
            console.log(jei, ' fin')
            jei++;
        }


    }*/
    /*   return typeof palindromeArrayy === undefined ? "" : palindromeArrayy.reduce((a, b) => {
           return a.length > b.length ? a : b;
       });*/
    console.log(palindromeArrayy)
}



//cbbd
//babad
console.log(longestPalindrome('babad'))