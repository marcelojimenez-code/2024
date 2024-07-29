import Comunas from "./comunas.model.js";
import Region from "./region.model.js";

Comunas.belongsTo(Region,{foreignKey:'id_region'})

export {
Comunas,
Region
}