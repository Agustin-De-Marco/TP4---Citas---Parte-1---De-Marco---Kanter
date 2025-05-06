import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import CitasList from './components/CitasList'
import './styles/App.css'

function App() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      mascota: "Nina",
      propietario: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      id: 2,
      mascota: "Sifon",
      propietario: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      id: 3,
      mascota: "Floki",
      propietario: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
  ])

  const crearCita = cita => {
    setCitas([...citas, {...cita, id: Date.now()}])
  }

  const eliminarCita = id => {
    setCitas(citas.filter(cita => cita.id !== id))
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <CitasList 
              citas={citas}
              eliminarCita={eliminarCita}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App