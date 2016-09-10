export interface Viewish {

	model: {};
	url: string;
	
	setUrl(url:string): void;
	getUrl(): string;

	addToModel(key:string, value:any): void;
	getFromModel(key:string):{};

}