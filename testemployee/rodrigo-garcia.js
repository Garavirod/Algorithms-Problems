// Responsables de los cuarteles
const paddockManagers = [
    { id: 1, taxNumber: '132254524', name: 'JUAN TAPIA BURGOS' },
    { id: 2, taxNumber: '143618668', name: 'EFRAIN SOTO VERA' },
    { id: 3, taxNumber: '78903228', name: 'CARLOS PEREZ GONZALEZ' },
    { id: 4, taxNumber: '176812737', name: 'ANDRES VIÑALES CIENFUEGOS' },
    { id: 5, taxNumber: '216352696', name: 'OSCAR PEREZ ZUÑIGA' },
    { id: 6, taxNumber: '78684747', name: 'JOAQUIN ANDRADE SANDOVAL' }
];

// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const paddockType = [
    { id: 1, name: 'PALTOS' },
    { id: 2, name: 'AVELLANOS' },
    { id: 3, name: 'CEREZAS' },
    { id: 4, name: 'NOGALES' },
]

// Un paddock representa un cuartel de un campo (Entiéndase también como potrero o
// parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
const paddocks = [
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 1200 },
    { paddockManagerId: 1, farmId: 3, paddockTypeId: 4, harvestYear: 2019, area: 500 },
    { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 20000 },
    { paddockManagerId: 2, farmId: 2, paddockTypeId: 3, harvestYear: 2021, area: 8401 },
    { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2020, area: 2877 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 2, harvestYear: 2017, area: 15902 },
    { paddockManagerId: 3, farmId: 3, paddockTypeId: 2, harvestYear: 2018, area: 1736 },
    { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2020, area: 2965 },
    { paddockManagerId: 4, farmId: 3, paddockTypeId: 4, harvestYear: 2018, area: 1651 },
    { paddockManagerId: 5, farmId: 1, paddockTypeId: 1, harvestYear: 2018, area: 700 },
    { paddockManagerId: 1, farmId: 2, paddockTypeId: 1, harvestYear: 2019, area: 7956 },
    { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 3745 },
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 3, harvestYear: 2021, area: 11362 },
    { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2021, area: 300 },
    { paddockManagerId: 3, farmId: 2, paddockTypeId: 2, harvestYear: 2020, area: 19188 },
    { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 17137 },
    { paddockManagerId: 4, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 100 },
    { paddockManagerId: 2, farmId: 1, paddockTypeId: 3, harvestYear: 2019, area: 11845 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 1, harvestYear: 2018, area: 15969 },
    { paddockManagerId: 1, farmId: 3, paddockTypeId: 1, harvestYear: 2029, area: 10420 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 3, harvestYear: 2010, area: 3200 },
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 2, harvestYear: 2012, area: 10587 },
    { paddockManagerId: 2, farmId: 2, paddockTypeId: 2, harvestYear: 2018, area: 16750 }
];

const farms = [
    { id: 1, name: 'AGRICOLA SANTA ANA' },
    { id: 2, name: 'VINA SANTA PAULA' },
    { id: 3, name: 'FORESTAL Y AGRICOLA LO ENCINA' }
];


/** UTILS */

/**
 * Construye un objeto a partir de un arreglo de objetos
 * cuya clave es el id de cada elemento.
 * @param {*} array 
 * @returns {Object}
 */
function toObjectMap(array) {
    return array.reduce((grouped, item) => ({
        ...grouped,
        [item.id]: item
    }), {})
}




/**
 * SOLUCIÓN DE PROBLEMAS
*/

// Tip: Una hectárea equivale a 10.000m2
// 0 Arreglo con los ids de los responsables de cada cuartel
function listPaddockManagerIds() {
    return paddockManagers.map((paddockManager) => paddockManager.id);
};

// 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
function listPaddockManagersByName() {
    const sortedResponsablesCurateles = paddockManagers
        .sort((managerA, managerB) => managerA.name.localeCompare(managerB.name));
    return sortedResponsablesCurateles.map((responsable) => responsable.taxNumber);
};

// 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma
// TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
function sortPaddockTypeByTotalArea() {
    let cultivosSembrados = [];
    for (let tipoCultivo of paddockType) {
        const cultivoFilter = paddocks.filter((paddock) => paddock.paddockTypeId === tipoCultivo.id);
        const totalAreas = cultivoFilter.reduce((total, paddock) => (total + paddock.area), 0);
        cultivosSembrados.push({
            name: tipoCultivo.name,
            totalHectareas: (totalAreas / 10000)
        });
    }
    return cultivosSembrados.sort((cultivoA, cultivoB) => cultivoB.totalHectareas - cultivoA.totalHectareas)
    .map((cultivo) => cultivo.name);
};

// 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma
// TOTAL de hectáreas que administran.
function sortFarmManagerByAdminArea() {
    let administradores = [];
    for (let manager of paddockManagers) {
        const managerFilter = paddocks.filter((paddock) => paddock.paddockManagerId === manager.id);
        const totalAreas = managerFilter.reduce((total, paddock) => (total + paddock.area), 0);
        administradores.push({name: manager.name, totalHectareas: (totalAreas / 10000)});
    }
    return administradores.sort((managerA, managerB) => managerB.totalHectareas - managerA.totalHectareas)
        .map((manager) => manager.name);
};

// 4 Objeto en que las claves sean los nombres de los campos y los valores un arreglo con los
// ruts de sus administradores ordenados alfabéticamente por nombre.
function farmManagerNames() {
    let farmsManagerNamesObject = {};
    // Convertimos paddockManagers a objeto para facil acceso a los datos
    const managersObject = toObjectMap(paddockManagers);
    for (let farm of farms) {
        const ruts = paddocks.filter((paddock) => paddock.farmId == farm.id)
            .map((paddock) => managersObject[paddock.paddockManagerId]) // administradores del campo
            .sort((managerA, managerB) => managerA.name.localeCompare(managerB.name)) // ordenar por nombre
            .map((manager) => manager.taxNumber); // obtner taxNumber
        farmsManagerNamesObject[farm.name] = ruts;
    }
    return farmsManagerNamesObject;
};

// 5 Arreglo ordenado decrecientemente con los m2 totales de cada campo que tengan más de
// 2 hectáreas en Paltos
function biggestAvocadoFarms() {
    let areasTotalesCampo = [];
    const paltosFilter = paddocks.filter((paddock) => paddock.paddockTypeId === 1);
    for (let farm of farms) {
        const campos = paltosFilter.filter((paddock) => paddock.farmId === farm.id)
        const totalAreas = (campos.reduce((total, paddock) => (total + paddock.area), 0))
        if ((totalAreas / 10000) > 2) areasTotalesCampo.push(totalAreas)
    }
    return areasTotalesCampo.sort((areaA, areaB) => areaB - areaA);
}


// 6 Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA,
// ordenados por nombre, que trabajen más de 1000 m2 de Cerezas
function biggestCherriesManagers() {    
    const managers = [];
    for(let manager of paddockManagers){
        const admin = paddocks.find((paddock) =>
            {
                return (paddock.farmId === 3) && // FORESTAL Y AGRÍCOLA LO ENCINA
                (paddock.area > 1000) &&  // mayor a 1000 m2
                (paddock.paddockTypeId === 3) && // trabajan con Cerezas
                (paddock.paddockManagerId === manager.id) // admin del caurtel
            }
        );
        if(admin) managers.push(manager.name);
    }
    return managers.sort((managerA, managerB) => (managerA).localeCompare(managerB));

}


// 7 Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo con los
// nombres de los campos que administra, ordenados alfabéticamente
function farmManagerPaddocks() {
    let managersFarmsObject = {}
    // Convertimos farms a diccionario para fácil acceso a datos.
    const farmsObject = toObjectMap(farms)
    for(let manager of paddockManagers){
        const camposManager = paddocks.filter((paddock)=> paddock.paddockManagerId === manager.id )
        .map((campoManager) => farmsObject[campoManager.farmId].name ) //  nombres de los campos
        .sort((campoA,campoB) => campoA.localeCompare(campoB)); // ordenar campos alfabéticamente
        managersFarmsObject[manager.name] = camposManager;
    }
    return managersFarmsObject;
}


// 8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de plantación
// (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el
// valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del
// administrador
function paddocksManagers() {
    let managerYearObj = {}
    // Conversión a diccionario paddockManagers y paddockType para fácil acceso a sus datos
    const managersObject = toObjectMap(paddockManagers)
    const paddocksTypeObject = toObjectMap(paddockType)
    for (let paddock of paddocks) {
        managerYearObj[`${paddocksTypeObject[paddock.farmId].name}-${paddock.harvestYear}`] = {
            [paddock.paddockManagerId]: managersObject[paddock.paddockManagerId].name
        }
    }
    return managerYearObj
}


// 9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo
// cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado
// por este nuevo administrador
// Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la
// solución
function newManagerRanking() {
    // Agregamos datos ficticios de copia
    const paddockManagersCopy = [
        ...paddockManagers,
        { id: 7, taxNumber: '11111111', name: 'JESÚS VILCHIS HERNÁNDEZ' }
    ];
    const paddocksCopy = [
        ...paddocks,
        { paddockManagerId: 7, farmId: 1, paddockTypeId: 4, harvestYear: 2017, area: 900 }
    ]

    let managersHectRanck = [] // almacenará los managers con el total de las hectáreas adminstradas

    for(let manager of paddockManagersCopy){
        const totalHectareas = paddocksCopy.filter((paddock)=> paddock.paddockManagerId === manager.id)
        .reduce((total,paddock)=>(total + paddock.area),0) 
        managersHectRanck.push({name:manager.name, totalHectareas:(totalHectareas/10000), id:manager.id});
    }
    return managersHectRanck
        .sort((managerA, managerB) => managerB.totalHectareas - managerA.totalHectareas) 
        .findIndex((manager)=>manager.id === 7);// encuentra el ranking del manager nuevo
}

function main() {
    console.log('Pregunta 0');
    console.log(listPaddockManagerIds());
    console.log('Pregunta 1');
    console.log(listPaddockManagersByName());
    console.log('Pregunta 2');
    console.log(sortPaddockTypeByTotalArea());
    console.log('Pregunta 3');
    console.log(sortFarmManagerByAdminArea());
    console.log('Pregunta 4');
    console.log(farmManagerNames());
    console.log('Pregunta 5');
    console.log(biggestAvocadoFarms());
    console.log('Pregunta 6');
    console.log(biggestCherriesManagers());
    console.log('Pregunta 7');
    console.log(farmManagerPaddocks());
    console.log('Pregunta 8');
    console.log(paddocksManagers());
    console.log('Pregunta 9');
    console.log(newManagerRanking());
};


main();