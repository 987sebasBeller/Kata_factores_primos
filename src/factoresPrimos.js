
class FactoresPrimos{
    generar(numero){
        let lista=[];
            if(numero%2==0){
                lista.push(2);
                numero/=2;
            }
            if(numero>1){
                lista.push(numero);
            }
        return lista;
    }
}
export default FactoresPrimos;