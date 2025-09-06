const myPromise= new Promise<number> ((resolve, reject) => {
    setTimeout(() => {
        //! Yo quiero mi dinero!!
        // resolve(100);
        reject(`El pana se dio a la fuga`);
    }, 1000);
});

myPromise.then((myMoney) => {
        console.log(`Tengo mi dinero $${myMoney}`);
    })
    .catch((reason:string) => {
        console.warn(reason);
        
    })
    .finally(():void => {
        console.log(`A seguir con la vida perrin`);
    })