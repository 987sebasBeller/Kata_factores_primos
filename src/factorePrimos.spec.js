import FactoresPrimos from "./factoresPrimos";
describe("factores primos de un numero",()=>{
    it("devuelve los factores primos para el numero 1",()=>{
        let factoresPrimos= new FactoresPrimos();
        expect(factoresPrimos.generar(1)).toEqual([]);
    });
});