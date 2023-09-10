class CapturaEntity{
    id: string;
    nome: string;
    sobrenome: string;
    endereco: string;
    dataNascimento: Date;
    quantidadeMacas: number;

    constructor(id: string, nome: string, sobrenome: string, endereco: string, dataNascimento: Date, quantidadeMacas: number){
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.endereco = endereco;
        this.dataNascimento = dataNascimento;
        this.quantidadeMacas = quantidadeMacas;
    }

}

export default CapturaEntity;