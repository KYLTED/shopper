export default class Product {
	public static readonly SHOES = 1;
	public static readonly DRESSES = 2;
	public static readonly TOPS = 3;
	public static readonly BAGS = 4;
	public static readonly SHIRTS = 4;

	public static readonly SUMMER = 1;
	public static readonly WINTER = 2;
	public static readonly SPRING = 3;
	public static readonly AUTUMM = 4;
	
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
	
	public static readonly BRAND_ONE = 1;
	public static readonly BRAND_TWO = 2;
	public static readonly BRAND_THREE = 3;
	public static readonly BRAND_FOUR = 4;
	
	public static readonly TEN_FIFTY = 1;
	public static readonly FIFTY_HUNDRED = 2;
	public static readonly HUNDRED_TWO_HUNDRED = 3;
	public static readonly TWO_HUNDRED_UP = 4;

	private _id: number;
	private _name: string;
	private _type: number;
	private _price: number;
	private _old_price: number;
	private _pictures: Array<string>;
	private _is_sale: boolean;
	private _is_new: boolean;
	private _filter: {
		category:{
			type:Array<number>
		},
		season:Array<number>,
		size:Array<number>,
		color:Array<number>,
		brand:Array<number>,
		price:Array<number>
	};


	constructor(id: number, name: string, type: number, price: number, old_price: number, pictures: Array<string>, is_sale: boolean, is_new: boolean, filter: any) {
		this._id = id;
		this._name = name;
		this._type = type;
		this._price = price;
		this._old_price = old_price;
		this._pictures = pictures;
		this._is_sale = is_sale;
		this._is_new = is_new;
		this._filter = filter;
	}

	/**
	 * Setter id
	 * @param {number} value
	 */
	public set id(value: number) {
		this._id = value;
	}
	
	/**
	 * Getter id
	 * @return {number}
	 */
	public get id(): number {
		return this._id;
	}

	/**
	 * Getter name
	 * @return {string}
	 */
	public get name(): string {
		return this._name;
	}

	/**
	 * Getter type
	 * @return {number}
	 */
	public get type(): number {
		return this._type;
	}

	/**
	 * Getter price
	 * @return {number}
	 */
	public get price(): number {
		return this._price;
	}

	/**
	 * Getter old_price
	 * @return {number}
	 */
	public get old_price(): number {
		return this._old_price;
	}

	/**
	 * Getter pictures
	 * @return {Array<string>}
	 */
	public get pictures(): Array<string> {
		return this._pictures;
	}

	/**
	 * Getter is_sale
	 * @return {boolean}
	 */
	public get is_sale(): boolean {
		return this._is_sale;
	}

	/**
	 * Getter is_new
	 * @return {boolean}
	 */
	public get is_new(): boolean {
		return this._is_new;
	}

	/**
	 * Setter name
	 * @param {string} value
	 */
	public set name(value: string) {
		this._name = value;
	}

	/**
	 * Setter type
	 * @param {number} value
	 */
	public set type(value: number) {
		this._type = value;
	}

	/**
	 * Setter price
	 * @param {number} value
	 */
	public set price(value: number) {
		this._price = value;
	}

	/**
	 * Setter old_price
	 * @param {number} value
	 */
	public set old_price(value: number) {
		this._old_price = value;
	}

	/**
	 * Setter pictures
	 * @param {Array<string>} value
	 */
	public set pictures(value: Array<string>) {
		this._pictures = value;
	}

	/**
	 * Setter is_sale
	 * @param {boolean} value
	 */
	public set is_sale(value: boolean) {
		this._is_sale = value;
	}

	/**
	 * Setter is_new
	 * @param {boolean} value
	 */
	public set is_new(value: boolean) {
		this._is_new = value;
	}

	/**
	 * Getter filter
	 */
	public get filter(): any {
		return this._filter;
	}

	/**
	 * Setter filter
	 * @param {any} value
	 */
	public set filter(value: any) {
		this._filter = value;
	}
}