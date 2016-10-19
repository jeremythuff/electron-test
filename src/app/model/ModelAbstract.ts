import {Modelish} from "src/app/interface/Modelish"

export abstract class ModelAbstract implements Modelish {

	constructor(model?:{}) {
		if(model) this.setData(model);
	}

	public setData(model:{}) {
		for(let key in model) {
			this[key] = model[key];
		}
	}

	public set(key:string, value:any) {
		this[key] = value;
	}

	public remove(key:string) {
		delete this[key];
	}

	public get(key:string) {
		return this[key];
	}

}