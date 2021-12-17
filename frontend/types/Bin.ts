export class Bin {
  public id: number;
  public fileName: string;
  public languageId: number;
  public text: string;

  constructor(
    id: number,
    fileName: string,
    languageId: number,
    text: string
  ) {
    this.id = id;
    this.fileName = fileName;
    this.languageId = languageId;
    this.text = text;
  }

}
