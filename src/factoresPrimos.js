
class FactoresPrimos{
    generar(numero){
        let lista=[];
            for(let divisor=2;numero>1;divisor++){
                for(;this.numerEsDivisibleEntre(numero,divisor);numero/=divisor){
                    lista.push(divisor);
                }
            }
        return lista;
    }
    numerEsDivisibleEntre(numero,divisor){
        return numero%divisor==0;
    }
}
export default FactoresPrimos;