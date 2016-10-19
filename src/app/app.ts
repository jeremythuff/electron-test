// Type-script's main entry point

import {View} from "src/app/model/View";
import {Model} from "src/app/model/Model";

import {Viewish} from "src/app/interface/Viewish";

let view = new View("src/app/view/main.html", new Model({
	"MyValue": false
}));

view.addToModel("test", "value");

console.log(view);