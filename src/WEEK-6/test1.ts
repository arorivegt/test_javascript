function encode(plainText: string): string {
    let ant = "";
    let result = "";
    let cont = 1;
    plainText.split("").forEach( e => {
        console.log(e,cont,ant);
        
        if(ant === "") {
            ant = e;
        }else if(e === ant){
            cont++;
            ant = e;
        }else{
            result += `${cont}${ant}`;
            cont = 1;
            ant = e;
        }
    })
    result += `${cont}${ant}`;
    return result;
}

console.log(encode("aaabcccaaa"));
