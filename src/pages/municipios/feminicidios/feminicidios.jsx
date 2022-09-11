import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'


export default function Feminicidios() {

  const URL = 'http://localhost:5050/indicadores/feminicidios/tamaulipas/'

  const [feminicidios,setFeminicidios] = useState([])
  useEffect(()=>{
    getFeminicidios()
  },[])

  //metodo para mostrar todos los blogs
  const getFeminicidios = async ()=>{
    const res = await axios.get(URL)
    setFeminicidios(res.data)
  }


  return (
    <div className="content-wrapper">
  <div className="container-fluid">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Lista De Feminicidios</li>
      <li className="breadcrumb-item active">Municipios de Tamaulipas</li>
    </ol>
    <hr />
    <div className="row">
      <div className="table-responsive col-xl-12">
        <table className="table table-hover table-bordered" id="sampleTable">
          <thead>
            <tr>
              <th>Ciudades</th>
              <th>Casos</th>
            </tr>
          </thead>
          <tbody>
          { feminicidios.map ( (feminicidio) => (
                    <tr key={ feminicidio.id}>
                        <td> { feminicidio.municipio } </td>
                        <td> { feminicidio.casos } </td>
                    </tr>
                )) }
          </tbody>
        </table>
      </div>
    </div>
    <center><Link to="/" class="btn btn-danger btn-lg active" role="button" aria-pressed="true">Volver</Link></center>
  </div>
</div>


  )
}