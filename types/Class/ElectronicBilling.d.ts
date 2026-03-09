export = ElectronicBilling;

class TokenAndSign {
    token: String;
    sign: String;
    expiration: Date;
}

class Voucher {
    "CantReg": Number;
    "PtoVta": Number;
    "CbteTipo": Number;
    "Concepto": 1 | 2 | 3;
    "DocTipo": Number;
    "DocNro": Number;
    "CbteDesde": Number;
    "CbteHasta": Number;
    "CbteFch": Number;
    "ImpTotal": Number;
    "ImpTotConc": Number;
    "ImpNeto": Number;
    "ImpOpEx": Number;
    "ImpIVA": Number;
    "ImpTrib": Number;
    "FchServDesde": Number;
    "FchServHasta": Number;
    "FchVtoPago": Number;
    "MonId": String;
    "MonCotiz": Number;
    "CbtesAsoc": [
        {
            Tipo: Number;
            PtoVta: Number;
            Nro: Number;
            Cuit: Number;
        }
    ];
    "Tributos": [
        {
            Id: Number;
            Desc: String;
            BaseImp: Number;
            Alic: Number;
            Importe: Number;
        }
    ];
    "Iva": [
        {
            Id: Number;
            BaseImp: Number;
            Importe: Number;
        }
    ];
    "Opcionales": [
        {
            Id: Number;
            Valor: Number;
        }
    ];
    "Compradores": [
        {
            DocTipo: Number;
            DocNro: Number;
            Porcentaje: Number;
        }
    ];
}

declare class ElectronicBilling extends AfipWebService {
    constructor(afip: any);
    getServerStatus(tokenAndSign: TokenAndSign): Promise<string>;
    getSalesPoints(tokenAndSign: TokenAndSign): Promise<
        {
            Nro: Number;
            EmisionTipo: String;
            Bloqueado: String;
            FchBaja: Number;
        }[]
    >;
    getLastVoucher(
        salesPoint: Number,
        type: Number,
        tokenAndSign: TokenAndSign
    ): Promise<{
        PtoVta: Number;
        CbteTipo: Number;
        CbteNro: Number;
    }>;
    createVoucher(
        voucher: Voucher,
        tokenAndSign: TokenAndSign
    ): Promise<{
        CAE: String;
        CAEFchVto: Number;
    }>;
    getVoucherInfo(number: Number, salesPoint: Number, type: Number, tokenAndSign: TokenAndSign): Promise<Voucher>;

    createNextVoucher(data: any): Promise<any>;
    createCAEA(period: any, fortnight: any): Promise<any>;
    getCAEA(period: any, fortnight: any): Promise<any>;
    getVoucherTypes(): Promise<any>;
    getConceptTypes(): Promise<any>;
    getDocumentTypes(): Promise<any>;
    getAliquotTypes(): Promise<any>;
    getCurrenciesTypes(): Promise<any>;
    getOptionsTypes(): Promise<any>;
    getTaxTypes(): Promise<any>;

    /**
     * Change date from AFIP used format (yyyymmdd) to yyyy-mm-dd
     *
     * @param string|int date to format
     *
     * @return string date in format yyyy-mm-dd
     **/
    formatDate(date: any): any;
    /**
     * Make default request parameters for most of the operations
     *
     * @param string operation SOAP Operation to do
     *
     * @return array Request parameters
     **/
    getWSInitialRequest(operation: any): Promise<
        | {
              Auth?: undefined;
          }
        | {
              Auth: {
                  Token: any;
                  Sign: any;
                  Cuit: any;
              };
          }
    >;
    /**
     * Check if occurs an error on Web Service request
     *
     * @param string 	operation 	SOAP operation to check
     * @param mixed 	results 	AFIP response
     *
     * @throws Exception if exists an error in response
     *
     * @return void
     **/
    _checkErrors(operation: any, results: any): Promise<void>;
}
import AfipWebService = require("./AfipWebService");
