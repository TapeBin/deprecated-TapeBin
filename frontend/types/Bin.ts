export class Bin {
  private _id: number;
  private _title: string;
  private _fileName: string;
  private _description: string;
  private _languageId: number;
  private _languageExtension: string;

  constructor(
    id: number,
    title: string,
    fileName: string,
    description: string,
    languageId: number,
    languageExtension: string
  ) {
    this._id = id;
    this._title = title;
    this._fileName = fileName;
    this._description = description;
    this._languageId = languageId;
    this._languageExtension = languageExtension;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get fileName(): string {
    return this._fileName;
  }

  set fileName(value: string) {
    this._fileName = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
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
}
