export = ElectronicBilling;

class TokenAndSign {
    token: string;
    sign: string;
    expiration: Date;
}

export class VoucherDto {
    "CantReg": number;
    "PtoVta": number;
    "CbteTipo": number;
    "Concepto": 1 | 2 | 3;
    "DocTipo": number;
    "DocNro": number;
    "CbteDesde": number;
    "CbteHasta": number;
    "CbteFch": number;
    "ImpTotal": number;
    "ImpTotConc": number;
    "ImpNeto": number;
    "ImpOpEx": number;
    "ImpIVA": number;
    "ImpTrib": number;
    "FchServDesde": number;
    "FchServHasta": number;
    "FchVtoPago": number;
    "MonId": string;
    "MonCotiz": number;
    "CbtesAsoc": {
        Tipo: number;
        PtoVta: number;
        Nro: number;
        Cuit: number;
    }[];
    "Tributos": {
        Id: number;
        Desc: string;
        BaseImp: number;
        Alic: number;
        Importe: number;
    }[];
    "Iva": {
        Id: number;
        BaseImp: number;
        Importe: number;
    }[];
    "Opcionales": {
        Id: number;
        Valor: number;
    }[];
    "Compradores": {
        DocTipo: number;
        DocNro: number;
        Porcentaje: number;
    }[];
}

export class Voucher extends VoucherDto {
    CAE: string;
    CAEFchVto: number;
}

declare class ElectronicBilling extends AfipWebService {
    constructor(afip: any);
    getServerStatus(tokenAndSign: TokenAndSign): Promise<string>;
    getSalesPoints(tokenAndSign: TokenAndSign): Promise<
        {
            Nro: number;
            EmisionTipo: string;
            Bloqueado: string;
            FchBaja: number;
        }[]
    >;
    getLastVoucher(
        salesPoint: number,
        type: number,
        tokenAndSign: TokenAndSign
    ): Promise<{
        PtoVta: number;
        CbteTipo: number;
        CbteNro: number;
    }>;
    createVoucher(
        voucher: VoucherDto,
        tokenAndSign: TokenAndSign
    ): Promise<{
        CAE: string;
        CAEFchVto: number;
    }>;
    getVoucherInfo(number: number, salesPoint: number, type: number, tokenAndSign: TokenAndSign): Promise<Voucher>;

    private createNextVoucher(data: any): Promise<any>;
    private createCAEA(period: any, fortnight: any): Promise<any>;
    private getCAEA(period: any, fortnight: any): Promise<any>;
    private getVoucherTypes(): Promise<any>;
    private getConceptTypes(): Promise<any>;
    private getDocumentTypes(): Promise<any>;
    private getAliquotTypes(): Promise<any>;
    private getCurrenciesTypes(): Promise<any>;
    private getOptionsTypes(): Promise<any>;
    private getTaxTypes(): Promise<any>;
    /**
     * Change date from AFIP used format (yyyymmdd) to yyyy-mm-dd
     *
     * @param string|int date to format
     *
     * @return string date in format yyyy-mm-dd
     **/
    private formatDate(date: any): any;
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
