var forLoop = (array) => {

  for(let i = 0 ; i < 25 ; i += 1) {

    i === 1 ? array.push("I am 1 strange loop.") : array.push(`I am ${i} strange loops.`);

  }

  return array;
}


var whileLoop = (n) => {
    var i = parseInt(n , 10);

    while ( i > 0 ) {

        console.log("count down " + i);

        i -= 1;

    }
    return 'done';
}

var doWhileLoop = (array) => {

    do{
      
        array.pop();

    }while (array.length !== 0 && maybeTrue());

    return array;

    function maybeTrue() {

    return Math.random() >= 0.5;

    }
}
