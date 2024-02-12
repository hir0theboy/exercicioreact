import { useState } from "react"

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [valorImc, setValorImc] = useState(0);

    function tratarMudancaPeso(e) {
        setPeso(e.target.value);
    }

    function tratarMudancaAltura(e) {
        setAltura(e.target.value);
    }

    function calcularImc(e) {
        let imc;
        imc = peso / (altura * altura);
        setValorImc(imc.toFixed(2));
    }

    return (
        <div className="container">
            <header>
                <h1>Calculadora de IMC</h1>
            </header>
            <body>
                <form>
                    <label htmlFor="peso">Peso:</label> <br />
                    <input type="number" name="peso" onChange={tratarMudancaPeso} value={peso} id="peso" />

                    <br /><br />
                    <label htmlFor="altura">Altura:</label> <br />
                    <input type="number" name="altura" onChange={tratarMudancaAltura} value={altura} id="altura" />

                    <br /><br />

                    <input type="button" value="Calcular IMC" onClick={calcularImc} />

                    <br /><br />
                    <b>Seu IMC:</b> {valorImc}
                </form>
            </body>
        </div>
    )
}

export default Formulario