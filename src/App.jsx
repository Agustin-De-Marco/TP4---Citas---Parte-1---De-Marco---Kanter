import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import CitasList from './components/CitasList'
import './styles/App.css'

function App() {
  const [citas, setCitas] = useState([
    {
      mascota: "Nina",
      propietario: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      mascota: "Sifon",
      propietario: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      mascota: "Floki",
      propietario: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
  ])

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column">
            <CitasList citas={citas} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App