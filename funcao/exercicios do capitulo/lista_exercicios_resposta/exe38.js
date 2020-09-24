function printOdd(start = 0, end = 100) {
    if (start > end) {
        let auxStart = start;
        let auxEnd = end;
        end = auxStart;
        start = auxEnd;
    }
    // The code below is another form of doing the change
    /* 
    if (start > end) {
        start = end + start;
        end = start - end;
        start = start - end;
    }
    */
    for (let index = start; index <= end; index++) {
        if (index % 2 == 1) {
            console.log(index);
        }
    }
}

printOdd(19, 3);
