import {Viewish} from "src/app/interface/Viewish";
import {Model} from "src/app/model/Model";

export abstract class ViewAbstract implements Viewish {

	model: Model;
	url: string;

	constructor(url?:string, model?:Model) {
		if(url) this.setUrl(url);
		model ? this.setModel(model) : this.setModel(new Model);
	}; 

	getUrl() {
		return this.url;
	};

	setUrl(url:string) {
		this.url = url;
	};

	addToModel(key:string, value:any) {
		this.model.set(key, value);
	};

	getFromModel(key:string) {
		return this.model.get(key);
	};

	setModel(model:Model) {
		this.model = model;
	};

	getModel() {
		return this.model;
	};

}