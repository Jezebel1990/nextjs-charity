export class Pix {
    private pixKey: string;
    private description: string;
    private merchantName: string;
    private merchantCity: string;
    private txid: string;
    private amount: string;
  
    private readonly ID_PAYLOAD_FORMAT_INDICATOR = "00";
    private readonly ID_MERCHANT_ACCOUNT_INFORMATION = "26";
    private readonly ID_MERCHANT_ACCOUNT_INFORMATION_GUI = "00";
    private readonly ID_MERCHANT_ACCOUNT_INFORMATION_KEY = "01";
    private readonly ID_MERCHANT_ACCOUNT_INFORMATION_DESCRIPTION = "02";
    private readonly ID_MERCHANT_CATEGORY_CODE = "52";
    private readonly ID_TRANSACTION_CURRENCY = "53";
    private readonly ID_TRANSACTION_AMOUNT = "54";
    private readonly ID_COUNTRY_CODE = "58";
    private readonly ID_MERCHANT_NAME = "59";
    private readonly ID_MERCHANT_CITY = "60";
    private readonly ID_ADDITIONAL_DATA_FIELD_TEMPLATE = "62";
    private readonly ID_ADDITIONAL_DATA_FIELD_TEMPLATE_TXID = "05";
    private readonly ID_CRC16 = "63";
  
    constructor(
      pixKey: string,
      description: string,
      merchantName: string,
      merchantCity: string,
      txid: string,
      amount: number
    ) {
      this.pixKey = pixKey;
      this.description = description;
      this.merchantName = merchantName;
      this.merchantCity = merchantCity;
      this.txid = txid || "***"; // Usa *** caso não seja fornecido
      this.amount = amount.toFixed(2);
    }
  
    private getValue(id: string, value: string): string {
      const size = String(value.length).padStart(2, "0");
      return id + size + value;
    }
  
    private getMerchantAccountInfo(): string {
      const gui = this.getValue(
        this.ID_MERCHANT_ACCOUNT_INFORMATION_GUI,
        "br.gov.bcb.pix"
      );
      const key = this.getValue(
        this.ID_MERCHANT_ACCOUNT_INFORMATION_KEY,
        this.pixKey
      );
      const description = this.getValue(
        this.ID_MERCHANT_ACCOUNT_INFORMATION_DESCRIPTION,
        this.description
      );
  
      return this.getValue(
        this.ID_MERCHANT_ACCOUNT_INFORMATION,
        gui + key + description
      );
    }
  
    private getAdditionalDataFieldTemplate(): string {
      const txid = this.getValue(
        this.ID_ADDITIONAL_DATA_FIELD_TEMPLATE_TXID,
        this.txid
      );
      return this.getValue(this.ID_ADDITIONAL_DATA_FIELD_TEMPLATE, txid);
    }
  
    public getPayload(): string {
      const payload =
        this.getValue(this.ID_PAYLOAD_FORMAT_INDICATOR, "01") +
        this.getMerchantAccountInfo() +
        this.getValue(this.ID_MERCHANT_CATEGORY_CODE, "0000") +
        this.getValue(this.ID_TRANSACTION_CURRENCY, "986") +
        this.getValue(this.ID_TRANSACTION_AMOUNT, this.amount) +
        this.getValue(this.ID_COUNTRY_CODE, "BR") +
        this.getValue(this.ID_MERCHANT_NAME, this.merchantName) +
        this.getValue(this.ID_MERCHANT_CITY, this.merchantCity) +
        this.getAdditionalDataFieldTemplate();
  
      return payload + this.getCRC16(payload);
    }
  
    private getCRC16(payload: string): string {
      function ord(str: string): number {
        return str.charCodeAt(0);
      }
  
      function dechex(number: number): string {
        if (number < 0) {
          number = 0xffffffff + number + 1;
        }
        return parseInt(number.toString(), 10).toString(16);
      }
  
      payload = payload + this.ID_CRC16 + "04";
  
      let polinomio = 0x1021;
      let resultado = 0xffff;
      let length = payload.length;
  
      for (let offset = 0; offset < length; offset++) {
        resultado ^= ord(payload[offset]) << 8;
        for (let bitwise = 0; bitwise < 8; bitwise++) {
          if ((resultado <<= 1) & 0x10000) resultado ^= polinomio;
          resultado &= 0xffff;
        }
      }
  
      return this.ID_CRC16 + "04" + dechex(resultado).toUpperCase();
    }
  }
  