let bills = [100, 50, 20, 10, 5, 2, 1 ];

 const numeberOfBills = (i) =>{
    let contador = 0;
    if(i > 1 && i <= 10000){
        for(let n of bills){
            let numerBills = Math.floor(i / n)
            i = i % n
            contador += numerBills
            
        } return contador
    } else {
        return 'Fuera de los parametros'
    }
 }

 console.log(numeberOfBills(110))