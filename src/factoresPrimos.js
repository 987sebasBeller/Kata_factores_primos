
class FactoresPrimos{
    generar(numero){
        let lista=[];
            let divisor=2;
            while(numero>1){
                while(this.numerEsDivisibleEntre(numero,divisor)){
                    lista.push(divisor);
                    numero/=divisor;
                }
                divisor++;
            }
            if(numero>1){
                lista.push(numero);
            }
        return lista;
    }
    numerEsDivisibleEntre(numero,divisor){
        return numero%divisor==0;
    }
}
export default FactoresPrimos;