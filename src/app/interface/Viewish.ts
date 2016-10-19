import {Model} from "src/app/model/Model";

export interface Viewish {

	model: Model;
	url: string;
	
	setUrl(url:string): void;
	getUrl(): string;

	addToModel(key:string, value:any): void;
	getFromModel(key:string):Model;

	setModel(model:Model): void;
	getModel(): Model;

}