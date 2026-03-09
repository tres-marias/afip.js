export = RegisterInscriptionProof;

class TokenAndSign {
    token: string;
    sign: string;
    expiration: Date;
}

declare class RegisterInscriptionProof extends AfipWebService {
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
     * if it exists, returns full response {@see
     * WS Specification item 3.2.2}
     **/
    getTaxpayerDetails(
        token: TokenAndSign,
        identifier: number
    ): Promise<{
        datosGenerales: {
            estadoClave: "ACTIVO" | "INACTIVO";
            tipoClave: "CUIT" | "CUIL" | "CDI";
            tipoPersona: "FISICA" | "JURIDICA";
            idPersona: number;
            razonSocial: string;
            nombre: string;
            apellido: string;
            domicilioFiscal: {
                tipoDomicilio: "FISCAL" | "LEGAL/REAL";
                codPostal: string;
                idProvincia: number;
                descripcionProvincia: string;
                direccion: string;
                localidad: string;
            };
            mesCierre: number;
        };
        datosMonotributo: {
            actividadMonotributista: {
                idActividad: number;
                descripcionActividad: string;
                nomenclador: number;
                orden: number;
                periodo: string;
            };
            categoriaMonotributo: {
                idCategoria: number;
                descripcionCategoria: string;
                idImpuesto: number;
                periodo: string;
            };
            impuesto: {
                idImpuesto: number;
                descripcionImpuesto: string;
                periodo: string;
            };
        };
        datosRegimenGeneral: {
            actividad: {
                idActividad: number;
                descripcionActividad: string;
                nomenclador: number;
                orden: number;
                periodo: string;
            }[];
            impuesto: {
                idImpuesto: number;
                descripcionImpuesto: string;
                periodo: string;
            }[];
        };
    }>;
    /**
     * Asks to web service for taxpayers details
     *
     * @throws Exception if exists an error in response
     *
     * @return [object] returns web service full response
     **/
    private getTaxpayersDetails(identifiers: any): Promise<any>;
}
import AfipWebService = require("./AfipWebService");
