export = RegisterInscriptionProof;
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
    getTaxpayerDetails(identifier: Number): Promise<{
        datosGenerales: {
            estadoClave: "ACTIVO" | "INACTIVO";
            tipoClave: "CUIT" | "CUIL" | "CDI";
            tipoPersona: "FISICA" | "JURIDICA";
            idPersona: Number;
            razonSocial: String;
            nombre: String;
            apellido: String;
            domicilioFiscal: {
                tipoDomicilio: "FISCAL" | "LEGAL/REAL";
                codPostal: String;
                idProvincia: Number;
                descripcionProvincia: String;
                direccion: String;
                localidad: String;
            };
            mesCierre: Number;
        };
        datosMonotributo: {
            actividadMonotributista: {
                idActividad: Number;
                descripcionActividad: String;
                nomenclador: Number;
                orden: Number;
                periodo: String;
            };
            categoriaMonotributo: {
                idCategoria: Number;
                descripcionCategoria: String;
                idImpuesto: Number;
                periodo: String;
            };
            impuesto: {
                idImpuesto: Number;
                descripcionImpuesto: String;
                periodo: String;
            };
        };
        datosRegimenGeneral: {
            actividad: {
                idActividad: Number;
                descripcionActividad: String;
                nomenclador: Number;
                orden: Number;
                periodo: String;
            }[];
            impuesto: {
                idImpuesto: Number;
                descripcionImpuesto: String;
                periodo: String;
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
    getTaxpayersDetails(identifiers: any): Promise<any>;
}
import AfipWebService = require("./AfipWebService");
