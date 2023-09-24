import FactoresPrimos from "./factoresPrimos";
describe("factores primos de un numero",()=>{
    it("devuelve los factores primos para el numero 1",()=>{
         
        expect( generar(1)).toEqual([]);
    });
    it("devuelve los factores primos para el numero 2",()=>{
         
        expect( generar(2)).toEqual([2]);
    });
    it("devuelve los factores primos para el numero 3",()=>{
         
        expect( generar(3)).toEqual([3]);
    });
    it("devuelve los factores primos para el numero 4",()=>{
         
        expect( generar(4)).toEqual([2,2]);
    });
    it("devuelve los factores primos para el numero 6",()=>{
         
        expect( generar(6)).toEqual([2,3]);
    });
    it("devuelve los factores primos para el numero 8",()=>{
         
        expect( generar(8)).toEqual([2,2,2]);
    });
    
    it("devuelve los factores primos para el numero 9",()=>{
         
        expect( generar(9)).toEqual([3,3]);
    });
});
function generar(numero){
     let factoresPrimos= new FactoresPrimos();
    return factoresPrimos.generar(numero);
}