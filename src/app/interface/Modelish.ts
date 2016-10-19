export interface Modelish {

	setData(model:{}): void;

	set(key:string, value:any): void;
	remove(key:string): void;
	get(key:string): any;

}