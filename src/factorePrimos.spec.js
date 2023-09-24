import FactoresPrimos from "./factoresPrimos";
describe("factores primos de un numero",()=>{
    it("devuelve los factores primos para el numero 1",()=>{
        let factoresPrimos= new FactoresPrimos();
        expect(factoresPrimos.generar(1)).toEqual([]);
    });
    it("devuelve los factores primos para el numero 2",()=>{
        let factoresPrimos= new FactoresPrimos();
        expect(factoresPrimos.generar(2)).toEqual([2]);
    });
    it("devuelve los factores primos para el numero 3",()=>{
        let factoresPrimos= new FactoresPrimos();
        expect(factoresPrimos.generar(3)).toEqual([3]);
    });
    it("devuelve los factores primos para el numero 4",()=>{
        let factoresPrimos= new FactoresPrimos();
        expect(factoresPrimos.generar(4)).toEqual([2,2]);
    });
});