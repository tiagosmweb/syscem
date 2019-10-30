import {UserController} from "./controller/UserController";
import { StorageController } from "./controller/StorageController";
import { PlantaController } from "./controller/PlantaController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "post",
    route: "/users/create",
    controller: UserController,
    action: "createUser"
},  {
    method: "post",
    route: "/users/auth",
    controller: UserController,
    action: "auth"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},


{ method: "get", route: "/planta", controller: PlantaController, action: "all" },
{ method: "get", route: "/planta/:id", controller: PlantaController, action: "one" },
{ method: "post", route: "/planta", controller: PlantaController, action: "save" },
{ method: "post", route: "/planta/create", controller: PlantaController, action: "createPlanta" },
{ method: "delete", route: "/planta/:id", controller: PlantaController, action: "remove" },

{ method: "get", route: "/storage/:filename", controller: StorageController, action: "getFile" }



];