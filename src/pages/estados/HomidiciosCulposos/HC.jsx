import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'


export default function HomidiciosCulpososEstado() {

  const URL = 'http://localhost:5050/indicadores//homicidios/culposos/estados/Mexico/'

  const [homidicios,setHomidicios] = useState([])
  useEffect(()=>{
    getHomidicidios()
  },[])

  //metodo para mostrar todos los blogs
  const getHomidicidios = async ()=>{
    const res = await axios.get(URL)
    setHomidicios(res.data)
  }

  const borrarHomidicios = async (id) =>{
     const borrar = await axios.delete(`${URL}${id}`)
     getHomidicidios()

  }

  return (
    <div className="content-wrapper">
  <div className="container-fluid">
    <ol className="breadcrumb">
    <li className="breadcrumb-item">Lista De Homicidios Culposos</li>
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
          { homidicios.map ( (homicidio) => (
                    <tr key={ homicidio.id}>
                        <td> { homicidio.estado } </td>
                        <td> { homicidio.casos } </td>
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