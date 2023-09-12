class CapturaEntity{
    id: string;
    id_criminoso: string;
    id_pais_capturado: string;
    id_pais_origem: string;
    data: Date;
    probabilidade: number;


    constructor(id: string, id_criminoso: string, id_pais_capturado: string, id_pais_origem: string, data: Date, probabilidade: number) {
        this.id = id;
        this.id_criminoso = id_criminoso;
        this.id_pais_capturado = id_pais_capturado;
        this.id_pais_origem = id_pais_origem;
        this.data = data;
        this.probabilidade = probabilidade;
    }

}

export default CapturaEntity;