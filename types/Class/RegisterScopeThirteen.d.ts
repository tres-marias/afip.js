export = RegisterScopeThirteen;

class TokenAndSign {
    token: String;
    sign: String;
    expiration: Date;
}

declare class RegisterScopeThirteen extends AfipWebService {
    constructor(afip: any);
    /**
     * Asks to web service for servers status {@see WS
     * Specification item 3.1}
     *
     * @return object { appserver : Web Service status,
     * dbserver : Database status, authserver : Autentication
     * server status}
     **/
    getServerStatus(): Promise<any>;
    /**
     * Asks to web service for taxpayer details {@see WS
     * Specification item 3.2}
     *
     * @throws Exception if exists an error in response
     *
     * @return object|null if taxpayer does not exists, return null,
     * if it exists, returns idPersona property of response {@see
     * WS Specification item 3.2.2}
     **/
    getTaxpayerDetails(
        token: TokenAndSign,
        identifier: Number
    ): Promise<{
        estadoClave: "ACTIVO" | "INACTIVO";
        tipoClave: "CUIT" | "CUIL" | "CDI";
        tipoPersona: "FISICA" | "JURIDICA";
        tipoDocumento: "LC" | "LE" | "CI" | "TRAM" | "ACTA" | "PAS" | "DNI" | "INDET" | "CERT" | "DIEXT" | "DNI M" | "INDOC";
        idPersona: Number;
        razonSocial: String;
        nombre: String;
        apellido: String;
        fechaNacimiento: String;
        descripcionActividadPrincipal: String;
        periodoActividadPrincipal: String;
        mesCierre: Number;
        domicilio: {
            tipoDomicilio: "FISCAL" | "LEGAL/REAL";
            estadoDomicilio: String;
            codPostal: String;
            idProvincia: Number;
            descripcionProvincia: String;
            calle: String;
            numero: String;
            direccion: String;
            localidad: String;
        }[];
    }>;
    /**
     * Asks to web service for tax id by document number
     *
     * @throws Exception if exists an error in response
     *
     * @return object|null if taxpayer does not exists, return null,
     * if it exists, returns idPersona property of response
     **/
    getTaxIDByDocument(documentNumber: any): Promise<Number[]>;
}
import AfipWebService = require("./AfipWebService");
