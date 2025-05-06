import Cita from './Cita'
import '../styles/CitasList.css'

function CitasList({ citas }) {
  return (
    <>
      <h2>Administra tus citas</h2>
      {citas.map((cita, index) => (
        <Cita 
          key={index}
          mascota={cita.mascota}
          propietario={cita.propietario}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
        />
      ))}
    </>
  )
}

export default CitasList