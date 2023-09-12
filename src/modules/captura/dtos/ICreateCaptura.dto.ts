export default interface ICreateCapturaDTO {
    id_criminoso: string;
    id_pais_capturado: string;
    id_pais_origem: string;
    data: Date;
    probabilidade: number;

}