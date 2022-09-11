import React from 'react'
import "./home.css"
import { useEffect,useState } from 'react'
import axios from 'axios'

export default function Home() {

    const URLHD = 'http://localhost:5050/indicadores/homicidios/dolosos/Mexico'
    const URLHC = 'http://localhost:5050/indicadores/homicidios/culposos/Mexico/'
    const URLS = 'http://localhost:5050/indicadores/secuestros/Mexico/'
    const URLE = 'http://localhost:5050/indicadores/extorsiones/Mexico/'
    const URLRV = 'http://localhost:5050/indicadores/robo/violencia/Mexico/'
    const URLRA = 'http://localhost:5050/indicadores/robo/autos/Mexico/'
    const URLRC = 'http://localhost:5050/indicadores/robo/casa/habitacion/Mexico/'
    const URLRN = 'http://localhost:5050/indicadores/robo/negocios/Mexico/'
    const URLF = 'http://localhost:5050/indicadores/feminicidios/Mexico/'

    const [homidiciosDolosos,setHomidiciosDolosos] = useState([])
    const [homidiciosCulposos,setHomidiciosCulposos] = useState([])
    const [secuestros,setSecuestro] = useState([])
    const [extorsiones, setExtorsiones] = useState([])
    const [roboViolencias, setRoboViolencias] = useState([])
    const [roboAutos, setRoboAutos] = useState([])
    const [roboCasas, setRoboCasas] = useState([])
    const [roboNegocios, setRoboNegocios] = useState([])
    const [feminicidios, setFeminicidios] = useState([])
    useEffect(()=>{
        getHomicidiosD()
        getHomidicidiosC()
        getSecuestro()
        getExtorsion()
        getRoboVi()
        getRoboAuto()
        getRoboCasa()
        getRoboNegocio()
        getFeminicidios()
    },[])

    const getHomicidiosD = async ()=>{
        const homidicidios = await axios.get(URLHD)
        setHomidiciosDolosos(homidicidios.data)
      }

      const getHomidicidiosC = async ()=>{
        const homidicidiosC = await axios.get(URLHC)
        setHomidiciosCulposos(homidicidiosC.data)
      }
      
      const getSecuestro = async ()=>{
        const secuestroM = await axios.get(URLS)
        setSecuestro(secuestroM.data)
      } 

      const getExtorsion = async ()=>{
        const extorsionM = await axios.get(URLE)
        setExtorsiones(extorsionM.data)
      }
      
      const getRoboVi = async ()=>{
        const roboViM = await axios.get(URLRV)
        setRoboViolencias(roboViM.data)
      } 

      const getRoboAuto = async ()=>{
        const roboAutoM = await axios.get(URLRA)
        setRoboAutos(roboAutoM.data)
      } 

      const getRoboCasa = async ()=>{
        const roboCasaM = await axios.get(URLRC)
        setRoboCasas(roboCasaM.data)
      }
      
      const getRoboNegocio = async ()=>{
        const roboNegocioM = await axios.get(URLRN)
        setRoboNegocios(roboNegocioM.data)
      }

      const getFeminicidios = async ()=>{
        const feminicidioM = await axios.get(URLF)
        setFeminicidios(feminicidioM.data)
      }


  return (
    <div className='content-wrapper'>
     <center><h1><strong>BIENVENIDO</strong></h1></center>
     <center><h2><strong>Seccion de Indicadores del Pais</strong></h2></center>  
     <br />
        <div class="row">
                <div class="col-12 col-sm-4 col-md-3">
                    <div class="info-box">
                        <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-skull-crossbones"></i></span>

                        <div class="info-box-content">
                            <span class="info-box-text">Homidicios Dolosos</span>
                            <span class="info-box-number">
                            { homidiciosDolosos.map ( (homicidioD) => (
                    <tr key={ homicidioD.id}>
                        { homicidioD.h_dol }
                    </tr>
                )) }
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-4 col-md-3">
                    <div class="info-box mb-3">
                        <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-skull-crossbones"></i></span>

                        <div class="info-box-content">
                            <span class="info-box-text">Homicidios Culposos</span>
                            <span class="info-box-number">
                            { homidiciosCulposos.map ( (homicidioCulp) => (
                    <tr key={ homicidioCulp.id}>
                        { homicidioCulp.h_culp }
                    </tr>
                )) }
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-4 col-md-3">
                    <div class="info-box mb-3">
                        <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-car-side"></i></span>

                        <div class="info-box-content">
                            <span class="info-box-text">Secuestros</span>
                            <span class="info-box-number">
                            { secuestros.map ( (secuestro) => (
                    <tr key={ secuestro.id}>
                        { secuestro.secuestros }
                    </tr>
                )) }
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-4 col-md-3">
                    <div class="info-box mb-3">
                        <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-coins"></i></span>

                        <div class="info-box-content">
                            <span class="info-box-text">Extorsiones</span>
                            <span class="info-box-number">
                            { extorsiones.map ( (extorsion) => (
                    <tr key={ extorsion.id}>
                        { extorsion.extorsion }
                    </tr>
                )) }
                            </span>
                        </div>
                    </div>
                </div>
        </div>
        <div className="row">
            <div class="col-12 col-sm-6 col-md-4">
                <div class="info-box mb-3">
                    <span class="info-box-icon bg-warning elevation-1"><i class="fas fa-skull"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Robo con Violencia</span>
                        <span class="info-box-number">
                        { roboViolencias.map ( (roboVio) => (
                <tr key={ roboVio.id}>
                    { roboVio.robo_violencia }
                </tr>
            )) }
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <div class="info-box mb-3">
                    <span class="info-box-icon bg-warning elevation-1"><i class="fas fa-car"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Robo Autos</span>
                        <span class="info-box-number">
                        { roboAutos.map ( (roboAuto) => (
                <tr key={ roboAuto.id}>
                    { roboAuto.robo_autos }
                </tr>
            )) }
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <div class="info-box mb-3">
                    <span class="info-box-icon bg-warning elevation-1"><i class="fas fa-home"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Robo Casa Habitacion</span>
                        <span class="info-box-number">
                        { roboCasas.map ( (roboCasa) => (
                <tr key={ roboCasa.id}>
                    { roboCasa.robo_casa }
                </tr>
            )) }
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div class="col-12 col-sm-6 col-md-6">
                <div class="info-box mb-3">
                    <span class="info-box-icon bg-info elevation-1"><i class="fas fa-glass-martini"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Robo a negocios</span>
                        <span class="info-box-number">
                        { roboNegocios.map ( (roboNegocio) => (
                <tr key={ roboNegocio.id}>
                    { roboNegocio.robo_negocio }
                </tr>
            )) }
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6">
                <div class="info-box mb-3">
                    <span class="info-box-icon bg-info elevation-1"><i class="fas fa-female"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Feminicidios</span>
                        <span class="info-box-number">
                        { feminicidios.map ( (feminicidio) => (
                <tr key={ feminicidio.id}>
                    { feminicidio.feminicidios }
                </tr>
            )) }
                        </span>
                    </div>
                </div>
            </div>
        </div>

            <br /><br />
    </div>
  )
}
