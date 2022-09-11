import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'


export default function SecuestroEstados() {

  const URL = 'http://localhost:5050/indicadores/secuestros/estados/Mexico/'

  const [secuestros,setSecuestros] = useState([])
  useEffect(()=>{
    getSecuestros()
  },[])

  //metodo para mostrar todos los blogs
  const getSecuestros = async ()=>{
    const res = await axios.get(URL)
    setSecuestros(res.data)
  }

  return (
    <div className="content-wrapper">
  <div className="container-fluid">
    <ol className="breadcrumb">
    <li className="breadcrumb-item">Lista De Secuestros</li>
      <li className="breadcrumb-item active">Estados de Mexico</li>
    </ol>
    <hr />
    <div className="row">
      <div className="table-responsive col-xl-12">
        <table className="table table-hover table-bordered" id="sampleTable">
          <thead>
            <tr>
              <th>Estados</th>
              <th>Casos</th>
            </tr>
          </thead>
          <tbody>
          { secuestros.map ( (secuestro) => (
                    <tr key={ secuestro.id}>
                        <td> { secuestro.estado } </td>
                        <td> { secuestro.casos } </td>
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