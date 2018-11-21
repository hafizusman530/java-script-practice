/* 
	PROBLEM STATEMENT

*/
//Solution#1
function birthdayCakeCandles(ar) {
  var tallest = -1;
  var tallestCount = 0;
  for (var i = 0; i < ar.length; i++) {
    if (ar[i] > tallest) {
      tallest = ar[i];
      tallestCount = 1;
    } else if (ar[i] == tallest) {
      tallestCount++;
    }
  }
  return tallestCount;
}
//Solution#2
function birthdayCakeCandles(ar) {
  var tallest = ar[0];
  ar.forEach(function(number) {
    tallest = Math.max(tallest, number);
  });
  var tallestCount = 0;
  ar.forEach(function(number) {
    if (number === tallest) {
      tallestCount++;
    }
  });
  return tallestCount;
}
//Usage
// console.log(birthdayCakeCandles([3, 2, 1, 3, 3, 6, 0, 7, 6, 7, 0, 9]));
//<----------------------------------------------------------------->

/* 
	PROBLEM STATEMENT

*/
//Solution#1
function factorial(number) {
  var factorial = number;
  for (var i = number - 1; number >= 1; number--) {
    factorial = factorial * number;
  }
  return factorial;
}
//Usage
// console.log(factorial(4));
//<----------------------------------------------------------------->

/* 
	PROBLEM STATEMENT

*/
//Solution#1
function numberDivisors(number) {
  var digits = String(number).split("");
  var count = 0;
  digits.forEach(function(digit) {
    if (number % Number(digit) == 0) {
      count++;
    }
  });
  return count;
}
// Usage
// console.log(numberDivisors(1012));
//<----------------------------------------------------------------->

/* 
	PROBLEM STATEMENT

*/
//Solution#1
function getAreaOfString(alpha, inputAlphabt) {
  var alphaCount = {};
  var alStart = 97;
  alpha.forEach(function(elp) {
    var al = String.fromCharCode(alStart);
    alStart += 1;
    alphaCount[al] = elp;
  });
  var maxHeight = 1;
  var width = inputAlphabt.length;
  inputAlphabt.split("").forEach(function(alpha) {
    curAlCount = alphaCount[alpha];
    maxHeight = Math.max(maxHeight, curAlCount);
  });
}
//<----------------------------------------------------------------->

/* 
	PROBLEM STATEMENT

*/
//Solution#1
function countingSort(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max);
  }
  var countingList = [...Array(max + 1)].map(x => 0);
  for (var i = 0; i < arr.length; i++) {
    countingList[arr[i]]++;
  }
  var sortList = [];
  for (var i = 0; i < countingList.length; i++) {
    for (var j = 0; j < countingList[i]; j++) {
      sortList.push(i);
    }
  }
  return sortList;
}
//<----------------------------------------------------------------->

/* 
	PROBLEM STATEMENT

*/
//Solution#1
function finalGrades(grades) {
  var finalGrades = [];
  grades.forEach(function(grade) {
    var diff = grade % 5;
    if (diff >= 3 && grade >= 38) {
      var fGrade = diff === 0 ? grade : grade - diff + 5;
      finalGrades.push(fGrade);
    } else {
      finalGrades.push(grade);
    }
  });
  return finalGrades;
}
//<----------------------------------------------------------------->

/* 
	PROBLEM STATEMENT

*/
//Solution#1
function time12To24(time12) {
  var time12Tokens = time12.split(":");
  var hour = time12Tokens[0];
  var minute = time12Tokens[1];
  var secondTokens = time12Tokens[2];
  var second = secondTokens.substring(0, 2);
  var time12Indicator = secondTokens.substring(2);
  var time24Hour = hour;
  var time24Minute = minute;
  var time24Second = second;
  switch (time12Indicator) {
    case "PM":
      if (Number(hour) <= 11) {
        time24Hour = Number(hour) + 12;
      }
      break;
    case "AM":
      if (Number(hour) > 11) {
        time24Hour = Number(hour) - 12;
        time24Hour = "0" + time24Hour;
      }
      break;
  }
  return time24Hour + ":" + time24Minute + ":" + time24Second;
}
//Usage
//console.log(time12To24("12:45:54PM"));
//<----------------------------------------------------------------->

/* 
	PROBLEM STATEMENT

*/
//Solution#1
function minMaxProblem() {
  var sums = [];
  for (var i = 0; i < ar.length; i++) {
    var exc = i;
    var sum = 0;
    for (var j = 0; j < ar.length; j++) {
      if (j !== exc) {
        sum += ar[j];
      }
    }
    sums.push(sum);
  }
  console.log(sums);
  var max = sums[0];
  var min = sums[0];
  for (var i = 0; i < sums.length; i++) {
    max = Math.max(sums[i], max);
    min = Math.min(sums[i], min);
  }
  console.log(max);
  console.log(min);
}
//Usage
// var ar = [5, 5, 5, 5, 5];
// console.log(minMaxProblem(ar));
//<----------------------------------------------------------------->

/* 
	PROBLEM STATEMENT

*/
//Solution#1
function drawPattern(n) {
  for (var i = 1; i <= n; i++) {
    var spaces = n - i;
    var hashes = i;
    for (var sp = 0; sp < spaces; sp++) {
      process.stdout.write(" ");
    }
    for (var has = 0; has < hashes; has++) {
      process.stdout.write("#");
    }
    process.stdout.write("\n");
  }
}
//<----------------------------------------------------------------->

/* 
	PROBLEM STATEMENT

*/
//Solution#1
function diagonalProblem() {
  var rightD = 0;
  var leftD = 0;
  var totalSize = arr.length;
  for (var row = 0; row < totalSize; row++) {
    for (var col = 0; col < totalSize; col++) {
      if (col == row) {
        leftD = leftD + arr[row][col];
        rightD = rightD + arr[row][totalSize - 1 - row];
      }
    }
  }
  return Math.abs(leftD - rightD);
}
// Usage
// var arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
// console.log(arr);
//<----------------------------------------------------------------->

/* 
	PROBLEM STATEMENT

*/
//Solution#1
function numberCountInPercentage() {
  var totalSize = ar.length;
  var count = {
    posCount: 0,
    negCount: 0,
    zeroCount: 0
  };
  ar.forEach(function(num) {
    if (num > 0) {
      count.posCount++;
    } else if (num < 0) {
      count.negCount++;
    } else {
      count.zeroCount++;
    }
  });
  console.log(Number(count.posCount / totalSize).toFixed(6));
  console.log(Number(count.negCount / totalSize).toFixed(6));
  console.log(Number(count.zeroCount / totalSize).toFixed(6));
}
var ar = [-4, 3, -9, 0, 4, 1];
console.log(numberCountInPercentage(ar));
