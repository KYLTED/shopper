export default class Product {
	public static readonly SHOES = "Shoes";
	public static readonly BAGS = "Bags";
	public static readonly SHIRTS = "Shirts";
	public static readonly ACCESSORIES = "Accessories";

	public static readonly FALL_WINTER = "Fall/Winter";
	public static readonly SPRING_SUMMER = "Spring/Summer";
	public static readonly ALL_YEAR = "All Year";

	public static readonly THREE_XS = 1;
	public static readonly TWO_XS = 2;
	public static readonly XS = 3;
	public static readonly S = 4;
	public static readonly M = 5;
	public static readonly L = 6;
	public static readonly XL = 7;
	public static readonly TWO_XL = 8;
	public static readonly THREE_XL = 9;
	public static readonly FOUR_XL = 10;
	public static readonly ONE_SIZE = 11;

	public static readonly BLACK = 1;
	public static readonly WHITE = 2;
	public static readonly BLUE = 3;
	public static readonly RED = 4;
	public static readonly BROWN = 5;
	public static readonly GRAY = 6;
	public static readonly CYAN = 7;
	public static readonly PINK = 8;
	public static readonly YELLOW = 9;
	public static readonly GREEN = 10;
	public static readonly ORANGE = 11;
	public static readonly GOLD = 12;
	public static readonly SILVER = 13;
	public static readonly NAVY = 14;

	public static readonly BRAND_ONE = 1;
	public static readonly BRAND_TWO = 2;
	public static readonly BRAND_THREE = 3;
	public static readonly BRAND_FOUR = 4;

	public static readonly TEN_FIFTY = 1;
	public static readonly FIFTY_HUNDRED = 2;
	public static readonly HUNDRED_TWO_HUNDRED = 3;
	public static readonly TWO_HUNDRED_UP = 4;

	private _id: string;
	private _record_type: string;
	private _product_id: number;
	private _model_id: string;
	private _brand: string;
	private _name: string;
	private _code: string;
	private _product_quantity: number;
	private _cost_no_tax: number;
	private _street_price: number;
	private _suggested_price: number;
	private _sell_price: number;
	private _priceDiscount: number;
	private _plain_description: string;
	private _weight: number;
	private _madein: string;
	private _Firme: string;
	private _heel: string;
	private _Produzione: string;
	private _Categorie: string;
	private _Sottocategorie: string;
	private _season: string;
	private _color: string;
	private _service: string;
	private _Warehouse2: string;
	private _Sunglasses: string;
	private _Watches: string;
	private _bicolors: string;
	private _Genere: string;
	private _Print: string;
	private _productname: string;
	private _barcode: string;
	private _model_size: string;
	private _model_quantity: string;


	constructor(id: string, record_type: string, product_id: number, model_id: string, brand: string, name: string, code: string, product_quantity: number, cost_no_tax: number, street_price: number, suggested_price: number, sell_price: number, priceDiscount: number, plain_description: string, weight: number, madein: string, Firme: string, heel: string, Produzione: string, Categorie: string, Sottocategorie: string, season: string, color: string, service: string, Warehouse2: string, Sunglasses: string, Watches: string, bicolors: string, Genere: string, Print: string, productname: string, barcode: string, model_size: string, model_quantity: string) {
		this._id = id;
		this._record_type = record_type;
		this._product_id = product_id;
		this._model_id = model_id;
		this._brand = brand;
		this._name = name;
		this._code = code;
		this._product_quantity = product_quantity;
		this._cost_no_tax = cost_no_tax;
		this._street_price = street_price;
		this._suggested_price = suggested_price;
		this._sell_price = sell_price;
		this._priceDiscount = priceDiscount;
		this._plain_description = plain_description;
		this._weight = weight;
		this._madein = madein;
		this._Firme = Firme;
		this._heel = heel;
		this._Produzione = Produzione;
		this._Categorie = Categorie;
		this._Sottocategorie = Sottocategorie;
		this._season = season;
		this._color = color;
		this._service = service;
		this._Warehouse2 = Warehouse2;
		this._Sunglasses = Sunglasses;
		this._Watches = Watches;
		this._bicolors = bicolors;
		this._Genere = Genere;
		this._Print = Print;
		this._productname = productname;
		this._barcode = barcode;
		this._model_size = model_size;
		this._model_quantity = model_quantity;
	}

	/**
	 * Getter id
	 * @return {string}
	 */
	public get id(): string {
		return this._id;
	}

	/**
	 * Getter record_type
	 * @return {string}
	 */
	public get record_type(): string {
		return this._record_type;
	}

	/**
	 * Getter product_id
	 * @return {number}
	 */
	public get product_id(): number {
		return this._product_id;
	}

	/**
	 * Getter model_id
	 * @return {string}
	 */
	public get model_id(): string {
		return this._model_id;
	}

	/**
	 * Getter brand
	 * @return {string}
	 */
	public get brand(): string {
		return this._brand;
	}

	/**
	 * Getter name
	 * @return {string}
	 */
	public get name(): string {
		return this._name;
	}

	/**
	 * Getter code
	 * @return {string}
	 */
	public get code(): string {
		return this._code;
	}

	/**
	 * Getter product_quantity
	 * @return {number}
	 */
	public get product_quantity(): number {
		return this._product_quantity;
	}

	/**
	 * Getter cost_no_tax
	 * @return {number}
	 */
	public get cost_no_tax(): number {
		return this._cost_no_tax;
	}

	/**
	 * Getter street_price
	 * @return {number}
	 */
	public get street_price(): number {
		return this._street_price;
	}

	/**
	 * Getter suggested_price
	 * @return {number}
	 */
	public get suggested_price(): number {
		return this._suggested_price;
	}

	/**
	 * Getter sell_price
	 * @return {number}
	 */
	public get sell_price(): number {
		return this._sell_price;
	}

	/**
	 * Getter priceDiscount
	 * @return {number}
	 */
	public get priceDiscount(): number {
		return this._priceDiscount;
	}

	/**
	 * Getter plain_description
	 * @return {string}
	 */
	public get plain_description(): string {
		return this._plain_description;
	}

	/**
	 * Getter weight
	 * @return {number}
	 */
	public get weight(): number {
		return this._weight;
	}

	/**
	 * Getter madein
	 * @return {string}
	 */
	public get madein(): string {
		return this._madein;
	}

	/**
	 * Getter Firme
	 * @return {string}
	 */
	public get Firme(): string {
		return this._Firme;
	}

	/**
	 * Getter heel
	 * @return {string}
	 */
	public get heel(): string {
		return this._heel;
	}

	/**
	 * Getter Produzione
	 * @return {string}
	 */
	public get Produzione(): string {
		return this._Produzione;
	}

	/**
	 * Getter Categorie
	 * @return {string}
	 */
	public get Categorie(): string {
		return this._Categorie;
	}

	/**
	 * Getter Sottocategorie
	 * @return {string}
	 */
	public get Sottocategorie(): string {
		return this._Sottocategorie;
	}

	/**
	 * Getter season
	 * @return {string}
	 */
	public get season(): string {
		return this._season;
	}

	/**
	 * Getter color
	 * @return {string}
	 */
	public get color(): string {
		return this._color;
	}

	/**
	 * Getter service
	 * @return {string}
	 */
	public get service(): string {
		return this._service;
	}

	/**
	 * Getter Warehouse2
	 * @return {string}
	 */
	public get Warehouse2(): string {
		return this._Warehouse2;
	}

	/**
	 * Getter Sunglasses
	 * @return {string}
	 */
	public get Sunglasses(): string {
		return this._Sunglasses;
	}

	/**
	 * Getter Watches
	 * @return {string}
	 */
	public get Watches(): string {
		return this._Watches;
	}

	/**
	 * Getter bicolors
	 * @return {string}
	 */
	public get bicolors(): string {
		return this._bicolors;
	}

	/**
	 * Getter Genere
	 * @return {string}
	 */
	public get Genere(): string {
		return this._Genere;
	}

	/**
	 * Getter Print
	 * @return {string}
	 */
	public get Print(): string {
		return this._Print;
	}

	/**
	 * Getter productname
	 * @return {string}
	 */
	public get productname(): string {
		return this._productname;
	}

	/**
	 * Getter barcode
	 * @return {string}
	 */
	public get barcode(): string {
		return this._barcode;
	}

	/**
	 * Getter model_size
	 * @return {string}
	 */
	public get model_size(): string {
		return this._model_size;
	}

	/**
	 * Getter model_quantity
	 * @return {string}
	 */
	public get model_quantity(): string {
		return this._model_quantity;
	}

	/**
	 * Setter id
	 * @param {string} value
	 */
	public set id(value: string) {
		this._id = value;
	}

	/**
	 * Setter record_type
	 * @param {string} value
	 */
	public set record_type(value: string) {
		this._record_type = value;
	}

	/**
	 * Setter product_id
	 * @param {number} value
	 */
	public set product_id(value: number) {
		this._product_id = value;
	}

	/**
	 * Setter model_id
	 * @param {string} value
	 */
	public set model_id(value: string) {
		this._model_id = value;
	}

	/**
	 * Setter brand
	 * @param {string} value
	 */
	public set brand(value: string) {
		this._brand = value;
	}

	/**
	 * Setter name
	 * @param {string} value
	 */
	public set name(value: string) {
		this._name = value;
	}

	/**
	 * Setter code
	 * @param {string} value
	 */
	public set code(value: string) {
		this._code = value;
	}

	/**
	 * Setter product_quantity
	 * @param {number} value
	 */
	public set product_quantity(value: number) {
		this._product_quantity = value;
	}

	/**
	 * Setter cost_no_tax
	 * @param {number} value
	 */
	public set cost_no_tax(value: number) {
		this._cost_no_tax = value;
	}

	/**
	 * Setter street_price
	 * @param {number} value
	 */
	public set street_price(value: number) {
		this._street_price = value;
	}

	/**
	 * Setter suggested_price
	 * @param {number} value
	 */
	public set suggested_price(value: number) {
		this._suggested_price = value;
	}

	/**
	 * Setter sell_price
	 * @param {number} value
	 */
	public set sell_price(value: number) {
		this._sell_price = value;
	}

	/**
	 * Setter priceDiscount
	 * @param {number} value
	 */
	public set priceDiscount(value: number) {
		this._priceDiscount = value;
	}

	/**
	 * Setter plain_description
	 * @param {string} value
	 */
	public set plain_description(value: string) {
		this._plain_description = value;
	}

	/**
	 * Setter weight
	 * @param {number} value
	 */
	public set weight(value: number) {
		this._weight = value;
	}

	/**
	 * Setter madein
	 * @param {string} value
	 */
	public set madein(value: string) {
		this._madein = value;
	}

	/**
	 * Setter Firme
	 * @param {string} value
	 */
	public set Firme(value: string) {
		this._Firme = value;
	}

	/**
	 * Setter heel
	 * @param {string} value
	 */
	public set heel(value: string) {
		this._heel = value;
	}

	/**
	 * Setter Produzione
	 * @param {string} value
	 */
	public set Produzione(value: string) {
		this._Produzione = value;
	}

	/**
	 * Setter Categorie
	 * @param {string} value
	 */
	public set Categorie(value: string) {
		this._Categorie = value;
	}

	/**
	 * Setter Sottocategorie
	 * @param {string} value
	 */
	public set Sottocategorie(value: string) {
		this._Sottocategorie = value;
	}

	/**
	 * Setter season
	 * @param {string} value
	 */
	public set season(value: string) {
		this._season = value;
	}

	/**
	 * Setter color
	 * @param {string} value
	 */
	public set color(value: string) {
		this._color = value;
	}

	/**
	 * Setter service
	 * @param {string} value
	 */
	public set service(value: string) {
		this._service = value;
	}

	/**
	 * Setter Warehouse2
	 * @param {string} value
	 */
	public set Warehouse2(value: string) {
		this._Warehouse2 = value;
	}

	/**
	 * Setter Sunglasses
	 * @param {string} value
	 */
	public set Sunglasses(value: string) {
		this._Sunglasses = value;
	}

	/**
	 * Setter Watches
	 * @param {string} value
	 */
	public set Watches(value: string) {
		this._Watches = value;
	}

	/**
	 * Setter bicolors
	 * @param {string} value
	 */
	public set bicolors(value: string) {
		this._bicolors = value;
	}

	/**
	 * Setter Genere
	 * @param {string} value
	 */
	public set Genere(value: string) {
		this._Genere = value;
	}

	/**
	 * Setter Print
	 * @param {string} value
	 */
	public set Print(value: string) {
		this._Print = value;
	}

	/**
	 * Setter productname
	 * @param {string} value
	 */
	public set productname(value: string) {
		this._productname = value;
	}

	/**
	 * Setter barcode
	 * @param {string} value
	 */
	public set barcode(value: string) {
		this._barcode = value;
	}

	/**
	 * Setter model_size
	 * @param {string} value
	 */
	public set model_size(value: string) {
		this._model_size = value;
	}

	/**
	 * Setter model_quantity
	 * @param {string} value
	 */
	public set model_quantity(value: string) {
		this._model_quantity = value;
	}
}