import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes, setPaciente}) => {

   return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">      
      { 
        pacientes && pacientes.length ?
        (
          <>
            <h1 className=" font-black text-3xl text-center">
              Listado Pacientes
            </h1>
            <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {''}
              <span className="text-indigo-600 font-bold">
                Pacientes y Citas
              </span>
            </p>
            {
              pacientes.map( paciente => 
                ( 
                  <Paciente 
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente}
                  />
                )
              )
            }
          </>
        ) 
        : 
        (
          <>
            <h1 className=" font-black text-3xl text-center">
              No Hay Pacientes
            </h1>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza Agregando pacientess {''}
              <span className="text-indigo-600 font-bold">
                y apareceran en este Lugar
              </span>
            </p>
          </>
        )
      }
    </div>
  )
}

export default ListadoPacientes
