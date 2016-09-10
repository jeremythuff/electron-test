import {Viewish} from "./../interface/Viewish";

export class View implements Viewish {

	model: {};
	url: string;

	constructor(url?:string) {
		if(url) this.url = url;
	}; 

	getUrl() {
		return this.url;
	}

	setUrl(url:string) {
		this.url = url;
	}

	addToModel(key:string, value:any) {
		this.model[key] = value;
	}

	getFromModel(key:string) {
		return this.model[key];
	}

}