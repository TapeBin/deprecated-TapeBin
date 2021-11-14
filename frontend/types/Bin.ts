export class Bin {
  private _id: number;
  private _fileName: string;
  private _languageId: number;
  private _languageExtension: string;
  private _text: string;

  constructor(
    id: number,
    fileName: string,
    languageId: number,
    languageExtension: string,
    text: string
  ) {
    this._id = id;
    this._fileName = fileName;
    this._languageId = languageId;
    this._languageExtension = languageExtension;
    this._text = text;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get fileName(): string {
    return this._fileName;
  }

  set fileName(value: string) {
    this._fileName = value;
  }

  get languageId(): number {
    return this._languageId;
  }

  set languageId(value: number) {
    this._languageId = value;
  }

  get languageExtension(): string {
    return this._languageExtension;
  }

  set languageExtension(value: string) {
    this._languageExtension = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }
}
