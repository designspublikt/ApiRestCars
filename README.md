# ApiRestCars

## Instrucciones

- `git clone https://github.com/designspublikt/ApiRestCars.git`
- Ejecutar `npm run server` para arrancar el servidor

## Filtros
### - Traer listado de todos los autos
`localhost:3000/api/cars/`

### - Traer listado de los autos por año
`localhost:3000/api/cars/year/:year`

### - Traer los autos hasta un año determinado
`localhost:3000/api/cars/untilyear/:year`

### - Traer los autos desde un año determinado
`localhost:3000/api/cars/fromyear/:year`

### - Traer los autos por tipo (Si tiene varios tipos, separarlos por comas)
`localhost:3000/api/cars/type/:type1,:type2,...:typen`

### - Traer los autos por modelo
`localhost:3000/api/cars/model/:model`

### - Traer los autos por fabricante
`localhost:3000/api/cars/make/:make`

