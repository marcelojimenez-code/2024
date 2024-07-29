const comunas = [
{id_comunas:1101,"nombre_comuna":"Iquique",id_region:1},
{id_comunas:1107,"nombre_comuna":"Alto Hospicio",id_region:1},
{id_comunas:1401,"nombre_comuna":"Pozo Almonte",id_region:1},
{id_comunas:1402,"nombre_comuna":"Camiña",id_region:1},
{id_comunas:1403,"nombre_comuna":"Colchane",id_region:1},
{id_comunas:1404,"nombre_comuna":"Huara",id_region:1},
{id_comunas:1405,"nombre_comuna":"Pica",id_region:1},
{id_comunas:2101,"nombre_comuna":"Antofagasta",id_region:2},
{id_comunas:2102,"nombre_comuna":"Mejillones",id_region:2},
{id_comunas:2103,"nombre_comuna":"Sierra Gorda",id_region:2},
{id_comunas:2104,"nombre_comuna":"Taltal",id_region:2},
{id_comunas:2201,"nombre_comuna":"Calama",id_region:2},
{id_comunas:2202,"nombre_comuna":"Ollague",id_region:2},
{id_comunas:2203,"nombre_comuna":"San Pedro De Atacama",id_region:2},
{id_comunas:2301,"nombre_comuna":"Tocopilla",id_region:2},
{id_comunas:2302,"nombre_comuna":"María Elena",id_region:2},
{id_comunas:3101,"nombre_comuna":"Copiapó",id_region:3},
{id_comunas:3102,"nombre_comuna":"Caldera",id_region:3},
{id_comunas:3103,"nombre_comuna":"Tierra Amarilla",id_region:3},
{id_comunas:3201,"nombre_comuna":"Chañaral",id_region:3},
{id_comunas:3202,"nombre_comuna":"Diego De Almagro",id_region:3},
{id_comunas:3301,"nombre_comuna":"Vallenar",id_region:3},
{id_comunas:3302,"nombre_comuna":"Alto Del Carmen",id_region:3},
{id_comunas:3303,"nombre_comuna":"Freirina",id_region:3},
{id_comunas:3304,"nombre_comuna":"Huasco",id_region:3},
{id_comunas:4101,"nombre_comuna":"La Serena",id_region:4},
{id_comunas:4102,"nombre_comuna":"Coquimbo",id_region:4},
{id_comunas:4103,"nombre_comuna":"Andacollo",id_region:4},
{id_comunas:4104,"nombre_comuna":"La Higuera",id_region:4},
{id_comunas:4105,"nombre_comuna":"Paiguano",id_region:4},
{id_comunas:4106,"nombre_comuna":"Vicuña",id_region:4},
{id_comunas:4201,"nombre_comuna":"Illapel",id_region:4},
{id_comunas:4202,"nombre_comuna":"Canela",id_region:4},
{id_comunas:4203,"nombre_comuna":"Los Vilos",id_region:4},
{id_comunas:4204,"nombre_comuna":"Salamanca",id_region:4},
{id_comunas:4301,"nombre_comuna":"Ovalle",id_region:4},
{id_comunas:4302,"nombre_comuna":"Combarbalá",id_region:4},
{id_comunas:4303,"nombre_comuna":"Monte Patria",id_region:4},
{id_comunas:4304,"nombre_comuna":"Punitaqui",id_region:4},
{id_comunas:4305,"nombre_comuna":"Río Hurtado",id_region:4},
{id_comunas:5101,"nombre_comuna":"Valparaíso",id_region:5},
{id_comunas:5102,"nombre_comuna":"Casablanca",id_region:5},
{id_comunas:5103,"nombre_comuna":"Concón",id_region:5},
{id_comunas:5104,"nombre_comuna":"Juan Fernández",id_region:5},
{id_comunas:5105,"nombre_comuna":"Puchuncaví",id_region:5},
{id_comunas:5107,"nombre_comuna":"Quintero",id_region:5},
{id_comunas:5109,"nombre_comuna":"Viña Del Mar",id_region:5},
{id_comunas:5201,"nombre_comuna":"Isla De Pascua",id_region:5},
{id_comunas:5301,"nombre_comuna":"Los Andes",id_region:5},
{id_comunas:5302,"nombre_comuna":"Calle Larga",id_region:5},
{id_comunas:5303,"nombre_comuna":"Rinconada",id_region:5},
{id_comunas:5304,"nombre_comuna":"San Esteban",id_region:5},
{id_comunas:5401,"nombre_comuna":"La Ligua",id_region:5},
{id_comunas:5402,"nombre_comuna":"Cabildo",id_region:5},
{id_comunas:5403,"nombre_comuna":"Papudo",id_region:5},
{id_comunas:5404,"nombre_comuna":"Petorca",id_region:5},
{id_comunas:5405,"nombre_comuna":"Zapallar",id_region:5},
{id_comunas:5501,"nombre_comuna":"Quillota",id_region:5},
{id_comunas:5502,"nombre_comuna":"Calera",id_region:5},
{id_comunas:5503,"nombre_comuna":"Hijuelas",id_region:5},
{id_comunas:5504,"nombre_comuna":"La Cruz",id_region:5},
{id_comunas:5506,"nombre_comuna":"Nogales",id_region:5},
{id_comunas:5601,"nombre_comuna":"San Antonio",id_region:5},
{id_comunas:5602,"nombre_comuna":"Algarrobo",id_region:5},
{id_comunas:5603,"nombre_comuna":"Cartagena",id_region:5},
{id_comunas:5604,"nombre_comuna":"El Quisco",id_region:5},
{id_comunas:5605,"nombre_comuna":"El Tabo",id_region:5},
{id_comunas:5606,"nombre_comuna":"Santo Domingo",id_region:5},
{id_comunas:5701,"nombre_comuna":"San Felipe",id_region:5},
{id_comunas:5702,"nombre_comuna":"Catemu",id_region:5},
{id_comunas:5703,"nombre_comuna":"Llaillay",id_region:5},
{id_comunas:5704,"nombre_comuna":"Panquehue",id_region:5},
{id_comunas:5705,"nombre_comuna":"Putaendo",id_region:5},
{id_comunas:5706,"nombre_comuna":"Santa María",id_region:5},
{id_comunas:5801,"nombre_comuna":"Quilpué",id_region:5},
{id_comunas:5802,"nombre_comuna":"Limache",id_region:5},
{id_comunas:5803,"nombre_comuna":"Olmué",id_region:5},
{id_comunas:5804,"nombre_comuna":"Villa Alemana",id_region:5},
{id_comunas:6101,"nombre_comuna":"Rancagua",id_region:6},
{id_comunas:6102,"nombre_comuna":"Codegua",id_region:6},
{id_comunas:6103,"nombre_comuna":"Coinco",id_region:6},
{id_comunas:6104,"nombre_comuna":"Coltauco",id_region:6},
{id_comunas:6105,"nombre_comuna":"Doñihue",id_region:6},
{id_comunas:6106,"nombre_comuna":"Graneros",id_region:6},
{id_comunas:6107,"nombre_comuna":"Las Cabras",id_region:6},
{id_comunas:6108,"nombre_comuna":"Machali",id_region:6},
{id_comunas:6109,"nombre_comuna":"Malloa",id_region:6},
{id_comunas:6110,"nombre_comuna":"Mostazal",id_region:6},
{id_comunas:6111,"nombre_comuna":"El Olivar",id_region:6},
{id_comunas:6112,"nombre_comuna":"Peumo",id_region:6},
{id_comunas:6113,"nombre_comuna":"Pichidegua",id_region:6},
{id_comunas:6114,"nombre_comuna":"Quinta De Tilcoco",id_region:6},
{id_comunas:6115,"nombre_comuna":"Rengo",id_region:6},
{id_comunas:6116,"nombre_comuna":"Requinoa",id_region:6},
{id_comunas:6117,"nombre_comuna":"San Vicente",id_region:6},
{id_comunas:6201,"nombre_comuna":"Pichilemu",id_region:6},
{id_comunas:6202,"nombre_comuna":"La Estrella",id_region:6},
{id_comunas:6203,"nombre_comuna":"Litueche",id_region:6},
{id_comunas:6204,"nombre_comuna":"Marchihue",id_region:6},
{id_comunas:6205,"nombre_comuna":"Navidad",id_region:6},
{id_comunas:6206,"nombre_comuna":"Paredones",id_region:6},
{id_comunas:6301,"nombre_comuna":"San Fernando",id_region:6},
{id_comunas:6302,"nombre_comuna":"Chépica",id_region:6},
{id_comunas:6303,"nombre_comuna":"Chimbarongo",id_region:6},
{id_comunas:6304,"nombre_comuna":"Lolol",id_region:6},
{id_comunas:6305,"nombre_comuna":"Nancagua",id_region:6},
{id_comunas:6306,"nombre_comuna":"Palmilla",id_region:6},
{id_comunas:6307,"nombre_comuna":"Peralillo",id_region:6},
{id_comunas:6308,"nombre_comuna":"Placilla",id_region:6},
{id_comunas:6309,"nombre_comuna":"Pumanque",id_region:6},
{id_comunas:6310,"nombre_comuna":"Santa Cruz",id_region:6},
{id_comunas:7101,"nombre_comuna":"Talca",id_region:7},
{id_comunas:7102,"nombre_comuna":"Constitución",id_region:7},
{id_comunas:7103,"nombre_comuna":"Curepto",id_region:7},
{id_comunas:7104,"nombre_comuna":"Empedrado",id_region:7},
{id_comunas:7105,"nombre_comuna":"Maule",id_region:7},
{id_comunas:7106,"nombre_comuna":"Pelarco",id_region:7},
{id_comunas:7107,"nombre_comuna":"Pencahue",id_region:7},
{id_comunas:7108,"nombre_comuna":"Río Claro",id_region:7},
{id_comunas:7109,"nombre_comuna":"San Clemente",id_region:7},
{id_comunas:7110,"nombre_comuna":"San Rafael",id_region:7},
{id_comunas:7201,"nombre_comuna":"Cauquenes",id_region:7},
{id_comunas:7202,"nombre_comuna":"Chanco",id_region:7},
{id_comunas:7203,"nombre_comuna":"Pelluhue",id_region:7},
{id_comunas:7301,"nombre_comuna":"Curicó",id_region:7},
{id_comunas:7302,"nombre_comuna":"Hualañe",id_region:7},
{id_comunas:7303,"nombre_comuna":"Licantén",id_region:7},
{id_comunas:7304,"nombre_comuna":"Molina",id_region:7},
{id_comunas:7305,"nombre_comuna":"Rauco",id_region:7},
{id_comunas:7306,"nombre_comuna":"Romeral",id_region:7},
{id_comunas:7307,"nombre_comuna":"Sagrada Familia",id_region:7},
{id_comunas:7308,"nombre_comuna":"Teno",id_region:7},
{id_comunas:7309,"nombre_comuna":"Vichuquén",id_region:7},
{id_comunas:7401,"nombre_comuna":"Linares",id_region:7},
{id_comunas:7402,"nombre_comuna":"Colbún",id_region:7},
{id_comunas:7403,"nombre_comuna":"Longaví",id_region:7},
{id_comunas:7404,"nombre_comuna":"Parral",id_region:7},
{id_comunas:7405,"nombre_comuna":"Retiro",id_region:7},
{id_comunas:7406,"nombre_comuna":"San Javier",id_region:7},
{id_comunas:7407,"nombre_comuna":"Villa Alegre",id_region:7},
{id_comunas:7408,"nombre_comuna":"Yerbas Buenas",id_region:7},
{id_comunas:8101,"nombre_comuna":"Concepción",id_region:8},
{id_comunas:8102,"nombre_comuna":"Coronel",id_region:8},
{id_comunas:8103,"nombre_comuna":"Chiguayante",id_region:8},
{id_comunas:8104,"nombre_comuna":"Florida",id_region:8},
{id_comunas:8105,"nombre_comuna":"Hualqui",id_region:8},
{id_comunas:8106,"nombre_comuna":"Lota",id_region:8},
{id_comunas:8107,"nombre_comuna":"Penco",id_region:8},
{id_comunas:8108,"nombre_comuna":"San Pedro de la Paz",id_region:8},
{id_comunas:8109,"nombre_comuna":"Santa Juana",id_region:8},
{id_comunas:8110,"nombre_comuna":"Talcahuano",id_region:8},
{id_comunas:8111,"nombre_comuna":"Tomé",id_region:8},
{id_comunas:8112,"nombre_comuna":"Hualpén",id_region:8},
{id_comunas:8201,"nombre_comuna":"Lebu",id_region:8},
{id_comunas:8202,"nombre_comuna":"Arauco",id_region:8},
{id_comunas:8203,"nombre_comuna":"Cañete",id_region:8},
{id_comunas:8204,"nombre_comuna":"Contulmo",id_region:8},
{id_comunas:8205,"nombre_comuna":"Curanilahue",id_region:8},
{id_comunas:8206,"nombre_comuna":"Los Alamos",id_region:8},
{id_comunas:8207,"nombre_comuna":"Tirua",id_region:8},
{id_comunas:8301,"nombre_comuna":"Los Angeles",id_region:8},
{id_comunas:8302,"nombre_comuna":"Antuco",id_region:8},
{id_comunas:8303,"nombre_comuna":"Cabrero",id_region:8},
{id_comunas:8304,"nombre_comuna":"Laja",id_region:8},
{id_comunas:8305,"nombre_comuna":"Mulchén",id_region:8},
{id_comunas:8306,"nombre_comuna":"Nacimiento",id_region:8},
{id_comunas:8307,"nombre_comuna":"Negrete",id_region:8},
{id_comunas:8308,"nombre_comuna":"Quilaco",id_region:8},
{id_comunas:8309,"nombre_comuna":"Quilleco",id_region:8},
{id_comunas:8310,"nombre_comuna":"San Rosendo",id_region:8},
{id_comunas:8311,"nombre_comuna":"Santa Bárbara",id_region:8},
{id_comunas:8312,"nombre_comuna":"Tucapel",id_region:8},
{id_comunas:8313,"nombre_comuna":"Yumbel",id_region:8},
{id_comunas:8314,"nombre_comuna":"Alto Biobío",id_region:8},
{id_comunas:8401,"nombre_comuna":"Chillán",id_region:8},
{id_comunas:8402,"nombre_comuna":"Bulnes",id_region:8},
{id_comunas:8403,"nombre_comuna":"Cobquecura",id_region:8},
{id_comunas:8404,"nombre_comuna":"Coelemu",id_region:8},
{id_comunas:8405,"nombre_comuna":"Coihueco",id_region:8},
{id_comunas:8406,"nombre_comuna":"Chillán Viejo",id_region:8},
{id_comunas:8407,"nombre_comuna":"El Carmen",id_region:8},
{id_comunas:8408,"nombre_comuna":"Ninhue",id_region:8},
{id_comunas:8409,"nombre_comuna":"Ñiquén",id_region:8},
{id_comunas:8410,"nombre_comuna":"Pemuco",id_region:8},
{id_comunas:8411,"nombre_comuna":"Pinto",id_region:8},
{id_comunas:8412,"nombre_comuna":"Portezuelo",id_region:8},
{id_comunas:8413,"nombre_comuna":"Quillón",id_region:8},
{id_comunas:8414,"nombre_comuna":"Quirihue",id_region:8},
{id_comunas:8415,"nombre_comuna":"Ranquil",id_region:8},
{id_comunas:8416,"nombre_comuna":"San Carlos",id_region:8},
{id_comunas:8417,"nombre_comuna":"San Fabián",id_region:8},
{id_comunas:8418,"nombre_comuna":"San Ignacio",id_region:8},
{id_comunas:8419,"nombre_comuna":"San Nicolás",id_region:8},
{id_comunas:8420,"nombre_comuna":"Treguaco",id_region:8},
{id_comunas:8421,"nombre_comuna":"Yungay",id_region:8},
{id_comunas:9101,"nombre_comuna":"Temuco",id_region:9},
{id_comunas:9102,"nombre_comuna":"Carahue",id_region:9},
{id_comunas:9103,"nombre_comuna":"Cunco",id_region:9},
{id_comunas:9104,"nombre_comuna":"Curarrehue",id_region:9},
{id_comunas:9105,"nombre_comuna":"Freire",id_region:9},
{id_comunas:9106,"nombre_comuna":"Galvarino",id_region:9},
{id_comunas:9107,"nombre_comuna":"Gorbea",id_region:9},
{id_comunas:9108,"nombre_comuna":"Lautaro",id_region:9},
{id_comunas:9109,"nombre_comuna":"Loncoche",id_region:9},
{id_comunas:9110,"nombre_comuna":"Melipeuco",id_region:9},
{id_comunas:9111,"nombre_comuna":"Nueva Imperial",id_region:9},
{id_comunas:9112,"nombre_comuna":"Padre Las Casas",id_region:9},
{id_comunas:9113,"nombre_comuna":"Perquenco",id_region:9},
{id_comunas:9114,"nombre_comuna":"Pitrufquén",id_region:9},
{id_comunas:9115,"nombre_comuna":"Pucón",id_region:9},
{id_comunas:9116,"nombre_comuna":"Saavedra",id_region:9},
{id_comunas:9117,"nombre_comuna":"Teodoro Schmidt",id_region:9},
{id_comunas:9118,"nombre_comuna":"Toltén",id_region:9},
{id_comunas:9119,"nombre_comuna":"Vilcún",id_region:9},
{id_comunas:9120,"nombre_comuna":"Villarrica",id_region:9},
{id_comunas:9121,"nombre_comuna":"Cholchol",id_region:9},
{id_comunas:9201,"nombre_comuna":"Angol",id_region:9},
{id_comunas:9202,"nombre_comuna":"Collipulli",id_region:9},
{id_comunas:9203,"nombre_comuna":"Curacautín",id_region:9},
{id_comunas:9204,"nombre_comuna":"Ercilla",id_region:9},
{id_comunas:9205,"nombre_comuna":"Lonquimay",id_region:9},
{id_comunas:9206,"nombre_comuna":"Los Sauces",id_region:9},
{id_comunas:9207,"nombre_comuna":"Lumaco",id_region:9},
{id_comunas:9208,"nombre_comuna":"Puren",id_region:9},
{id_comunas:9209,"nombre_comuna":"Renaico",id_region:9},
{id_comunas:9210,"nombre_comuna":"Traiguén",id_region:9},
{id_comunas:9211,"nombre_comuna":"Victoria",id_region:9},
{id_comunas:10101,"nombre_comuna":"Puerto Montt",id_region:10},
{id_comunas:10102,"nombre_comuna":"Calbuco",id_region:10},
{id_comunas:10103,"nombre_comuna":"Cochamó",id_region:10},
{id_comunas:10104,"nombre_comuna":"Fresia",id_region:10},
{id_comunas:10105,"nombre_comuna":"Frutillar",id_region:10},
{id_comunas:10106,"nombre_comuna":"Los Muermos",id_region:10},
{id_comunas:10107,"nombre_comuna":"Llanquihue",id_region:10},
{id_comunas:10108,"nombre_comuna":"Maullín",id_region:10},
{id_comunas:10109,"nombre_comuna":"Puerto Varas",id_region:10},
{id_comunas:10201,"nombre_comuna":"Castro",id_region:10},
{id_comunas:10202,"nombre_comuna":"Ancud",id_region:10},
{id_comunas:10203,"nombre_comuna":"Chonchi",id_region:10},
{id_comunas:10204,"nombre_comuna":"Curaco de Velez",id_region:10},
{id_comunas:10205,"nombre_comuna":"Dalcahue",id_region:10},
{id_comunas:10206,"nombre_comuna":"Puqueldón",id_region:10},
{id_comunas:10207,"nombre_comuna":"Queilén",id_region:10},
{id_comunas:10208,"nombre_comuna":"Quellón",id_region:10},
{id_comunas:10209,"nombre_comuna":"Quemchi",id_region:10},
{id_comunas:10210,"nombre_comuna":"Quinchao",id_region:10},
{id_comunas:10301,"nombre_comuna":"Osorno",id_region:10},
{id_comunas:10302,"nombre_comuna":"Puerto Octay",id_region:10},
{id_comunas:10303,"nombre_comuna":"Purranque",id_region:10},
{id_comunas:10304,"nombre_comuna":"Puyehue",id_region:10},
{id_comunas:10305,"nombre_comuna":"Río Negro",id_region:10},
{id_comunas:10306,"nombre_comuna":"San Juan de la Costa",id_region:10},
{id_comunas:10307,"nombre_comuna":"San Pablo",id_region:10},
{id_comunas:10401,"nombre_comuna":"Chaitén",id_region:10},
{id_comunas:10402,"nombre_comuna":"Futaleufú",id_region:10},
{id_comunas:10403,"nombre_comuna":"Hualaihue",id_region:10},
{id_comunas:10404,"nombre_comuna":"Palena",id_region:10},
{id_comunas:11101,"nombre_comuna":"Coihayque",id_region:11},
{id_comunas:11102,"nombre_comuna":"Lago Verde",id_region:11},
{id_comunas:11201,"nombre_comuna":"Aisén",id_region:11},
{id_comunas:11202,"nombre_comuna":"Cisnes",id_region:11},
{id_comunas:11203,"nombre_comuna":"Guaitecas",id_region:11},
{id_comunas:11301,"nombre_comuna":"Cochrane",id_region:11},
{id_comunas:11302,"nombre_comuna":"O'Higgins",id_region:11},
{id_comunas:11303,"nombre_comuna":"Tortel",id_region:11},
{id_comunas:11401,"nombre_comuna":"Chile Chico",id_region:11},
{id_comunas:11402,"nombre_comuna":"Río Ibáñez",id_region:11},
{id_comunas:12101,"nombre_comuna":"Punta Arenas",id_region:12},
{id_comunas:12102,"nombre_comuna":"Laguna Blanca",id_region:12},
{id_comunas:12103,"nombre_comuna":"Río Verde",id_region:12},
{id_comunas:12104,"nombre_comuna":"San Gregorio",id_region:12},
{id_comunas:12201,"nombre_comuna":"Cabo de Hornos",id_region:12},
{id_comunas:12202,"nombre_comuna":"Antártica",id_region:12},
{id_comunas:12301,"nombre_comuna":"Porvenir",id_region:12},
{id_comunas:12302,"nombre_comuna":"Primavera",id_region:12},
{id_comunas:12303,"nombre_comuna":"Timaukel",id_region:12},
{id_comunas:12401,"nombre_comuna":"Natales",id_region:12},
{id_comunas:12402,"nombre_comuna":"Torres del Paine",id_region:12},
{id_comunas:13101,"nombre_comuna":"Santiago",id_region:13},
{id_comunas:13102,"nombre_comuna":"Cerrillos",id_region:13},
{id_comunas:13103,"nombre_comuna":"Cerro Navia",id_region:13},
{id_comunas:13104,"nombre_comuna":"Conchalí",id_region:13},
{id_comunas:13105,"nombre_comuna":"El Bosque",id_region:13},
{id_comunas:13106,"nombre_comuna":"Estación Central",id_region:13},
{id_comunas:13107,"nombre_comuna":"Huechuraba",id_region:13},
{id_comunas:13108,"nombre_comuna":"Independencia",id_region:13},
{id_comunas:13109,"nombre_comuna":"La Cisterna",id_region:13},
{id_comunas:13110,"nombre_comuna":"La Florida",id_region:13},
{id_comunas:13111,"nombre_comuna":"La Granja",id_region:13},
{id_comunas:13112,"nombre_comuna":"La Pintana",id_region:13},
{id_comunas:13113,"nombre_comuna":"La Reina",id_region:13},
{id_comunas:13114,"nombre_comuna":"Las Condes",id_region:13},
{id_comunas:13115,"nombre_comuna":"Lo Barnechea",id_region:13},
{id_comunas:13116,"nombre_comuna":"Lo Espejo",id_region:13},
{id_comunas:13117,"nombre_comuna":"Lo Prado",id_region:13},
{id_comunas:13118,"nombre_comuna":"Macul",id_region:13},
{id_comunas:13119,"nombre_comuna":"Maipú",id_region:13},
{id_comunas:13120,"nombre_comuna":"Ñuñoa",id_region:13},
{id_comunas:13121,"nombre_comuna":"Pedro Aguirre Cerda",id_region:13},
{id_comunas:13122,"nombre_comuna":"Peñalolén",id_region:13},
{id_comunas:13123,"nombre_comuna":"Providencia",id_region:13},
{id_comunas:13124,"nombre_comuna":"Pudahuel",id_region:13},
{id_comunas:13125,"nombre_comuna":"Quilicura",id_region:13},
{id_comunas:13126,"nombre_comuna":"Quinta Normal",id_region:13},
{id_comunas:13127,"nombre_comuna":"Recoleta",id_region:13},
{id_comunas:13128,"nombre_comuna":"Renca",id_region:13},
{id_comunas:13129,"nombre_comuna":"San Joaquín",id_region:13},
{id_comunas:13130,"nombre_comuna":"San Miguel",id_region:13},
{id_comunas:13131,"nombre_comuna":"San Ramón",id_region:13},
{id_comunas:13132,"nombre_comuna":"Vitacura",id_region:13},
{id_comunas:13201,"nombre_comuna":"Puente Alto",id_region:13},
{id_comunas:13202,"nombre_comuna":"Pirque",id_region:13},
{id_comunas:13203,"nombre_comuna":"San José De Maipo",id_region:13},
{id_comunas:13301,"nombre_comuna":"Colina",id_region:13},
{id_comunas:13302,"nombre_comuna":"Lampa",id_region:13},
{id_comunas:13303,"nombre_comuna":"Tiltil",id_region:13},
{id_comunas:13401,"nombre_comuna":"San Bernardo",id_region:13},
{id_comunas:13402,"nombre_comuna":"Buin",id_region:13},
{id_comunas:13403,"nombre_comuna":"Calera De Tango",id_region:13},
{id_comunas:13404,"nombre_comuna":"Paine",id_region:13},
{id_comunas:13501,"nombre_comuna":"Melipilla",id_region:13},
{id_comunas:13502,"nombre_comuna":"Alhué",id_region:13},
{id_comunas:13503,"nombre_comuna":"Curacaví",id_region:13},
{id_comunas:13504,"nombre_comuna":"María Pinto",id_region:13},
{id_comunas:13505,"nombre_comuna":"San Pedro",id_region:13},
{id_comunas:13601,"nombre_comuna":"Talagante",id_region:13},
{id_comunas:13602,"nombre_comuna":"El Monte",id_region:13},
{id_comunas:13603,"nombre_comuna":"Isla De Maipo",id_region:13},
{id_comunas:13604,"nombre_comuna":"Padre Hurtado",id_region:13},
{id_comunas:13605,"nombre_comuna":"Peñaflor",id_region:13},
{id_comunas:14101,"nombre_comuna":"Valdivia",id_region:14},
{id_comunas:14102,"nombre_comuna":"Corral",id_region:14},
{id_comunas:14103,"nombre_comuna":"Lanco",id_region:14},
{id_comunas:14104,"nombre_comuna":"Los Lagos",id_region:14},
{id_comunas:14105,"nombre_comuna":"Máfil",id_region:14},
{id_comunas:14106,"nombre_comuna":"Mariquina",id_region:14},
{id_comunas:14107,"nombre_comuna":"Paillaco",id_region:14},
{id_comunas:14108,"nombre_comuna":"Panguipulli",id_region:14},
{id_comunas:14201,"nombre_comuna":"La Unión",id_region:14},
{id_comunas:14202,"nombre_comuna":"Futrono",id_region:14},
{id_comunas:14203,"nombre_comuna":"Lago Ranco",id_region:14},
{id_comunas:14204,"nombre_comuna":"Río Bueno",id_region:14},
{id_comunas:15101,"nombre_comuna":"Arica",id_region:15},
{id_comunas:15102,"nombre_comuna":"Camarones",id_region:15},
{id_comunas:15201,"nombre_comuna":"Putre",id_region:15},
{id_comunas:15202,"nombre_comuna":"General Lagos",id_region:15},
]

export default comunas