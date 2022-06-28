import { Icon } from '@iconify/react';


const studies = [{
  Ranking: 1,
  Estudio: "dede",
  Filtro_1: "",
  Filtro_2: "",
  Descripcion: "",
  Preparacion_Estudio: "",
  Dias_de_Resultado: "",
  Precio: "",
  Promocion: "",
  Pct_Promocion: "",
  Precio_Promocions: ""

}]
export default function Example() {
  return (
    <>
        <div className="grid grid-rows-3 rounded-lg bg-gray-200  border border-sky-500 border-2 border-double mx-4 my-10">
          <div className="grid grid-cols-10 h-20">
            <div className="col-start-1 bg-white flex justify-center rounded-l">
              <Icon icon="medical-icon:i-ambulance" className="h-12 w-12 text-black" aria-hidden="true" />
            </div>
            <div className="col-start-2 col-span-9 rounded-r-md bg-sky-600 flex self-center">
              <h2 className="text-4xl text-white ml-8 uppercase" >Análisis de Sangre</h2>
            </div>
          </div>
          <div>
            dsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd
          </div>
          <div className="grid grid-cols-3 border-t border-white">
            <div className="flex flex-col text-center border-r border-white">
              <h1>Preparación</h1>
              <p>dfdfdf</p>
            </div>
            <div className="flex flex-col text-center  border-r border-white">
              <h1>Dias de Resultado</h1>
              <p>sdsdsdsdsfd</p>
            </div>
            <div className="flex flex-col text-center">
              <h1>Precio</h1>
              <p>123232323</p>
            </div>
          </div>
        </div>
    </>
  )
}
