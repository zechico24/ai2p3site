import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from "axios";
import { useEffect, useState } from "react";
import moment from 'moment';

export default function Mktdigital() {

  const [campName, setcampName] = useState("");


  useEffect(() => {
    const baseUrl = "https://ai2p3backend.herokuapp.com/pacotes/get/1";
    axios.get(baseUrl)
    .then(res=>{
    if (res.data.success) {
    const data = res.data.data[0];
    //setdataPacotes(data);
    setcampName(data.nome);
    }
    else {
    alert("Error web service")
    }
    })
    .catch(error=>{
    alert("Error server: "+error)
    })
    }, []);

  const [dataPacotes, setdataPacotes] = useState([]);
  useEffect(() => {
    const url = "https://ai2p3backend.herokuapp.com/categoria/listwithcategory/1";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataPacotes(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const [dataListaInfo1, setdataListaInfo1] = useState([]);
  useEffect(() => {
    const url = "https://ai2p3backend.herokuapp.com/infoPacote/list";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataListaInfo1(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const renderCategoria = dataPacotes.map((data,index) =>{
  return (
     <div className={index % 2 === 1 ? 'coluna2 col-lg-4 col-sm-12 col-12' : 'coluna1mkt col-lg-4 col-sm-12 col-12'}>
      <br></br>
       <p class="subtitpack"><b>{data.nome}</b></p>
     {dataListaInfo1.map((data1,index1) =>{
       if (data.idcategoria == data1.idcategoria){
         return (
          <div>
         <p>{data1.nomeDetalhe}</p>
         </div>
         );
         }})}
     </div>
  );
  });

  const [campNome, setcampNome] = useState("");
  const [campTelemovel, setcampTelemovel] = useState("");
  const [campEmail, setcampEmail] = useState("");
  const [campMensagem, setcampMensagem] = useState("");

  const SendSave =e=> {
    e.preventDefault ();
    const formatDate=moment().format("MMM Do YY");
    console.log(campNome);
    console.log(campEmail);
    console.log(campTelemovel);
    console.log(campMensagem);
    console.log("hhhh");
    if (campNome === "") {
      alert("Escreva um nome!");
    } else {
      const baseUrl = "https://ai2p3backend.herokuapp.com/pedidos/create";
      const datapost = {
        data_pedido: formatDate,
        nome: campNome,
        email: campEmail, 
        telefone: campTelemovel,
        comentario: campMensagem,
        idpacote: 1

      };
      axios
        .post(baseUrl, datapost)
        .then((response) => {
          if (response.data.success === true) {
            alert(response.data.message);
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          alert("Error 34 " + error);
        });
    }
  }


  return (
<div>
 
  {/* Header*/}
  <header className="bg py-5">
    <div>
      <div className="row gx-5">
        <div className="col-lg-6">
        <div className=" pagpack fw-bolder mb-2 ">
            <br></br>
          {campName}
          </div>
          <h4 className="titpack"> Informações de Pacote</h4>
        </div>
      </div>
    </div>
  </header>
  {/* Pricing section*/}
  {renderCategoria}
  <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  {/* form*/}
  <section className="bodybg py-5">
    <br></br>
    <br></br>
  <hr className="separador"></hr>
    <div className="container px-5 my-5 px-5">
      <div className="text-center mb-5">
        <div className="feature bg-gradient text-white rounded-3 mb-3"><i className="bi mkttxt bi-envelope" /></div>
        <h2 className="mkttxt fw-bolder">Submissão</h2>
        <p className="mkttxt lead mb-0">Preencha com os seus dados!</p>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-20 mkttxt">
          <form
            onSubmit={SendSave}
              className="u-clearfix u-form-spacing-20 u-form-vertical u-inner-form">
              <div className="u-form-group u-form-name u-label-top">
                <label
                  htmlFor="name-558c"
                  className="u-form-control-hidden u-label"
                />
                <input
                  type="text"
                  placeholder="Nome"
                  id="name-558c"
                  name="name"
                  value={campNome}
                  onChange={(value) => setcampNome(value.target.value)}
                  className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                  required
                />
              </div>
              <div className="u-form-group u-form-partition-factor-2 u-label-top u-form-group-2">
                <label
                  htmlFor="text-bbb3"
                  className="u-form-control-hidden u-label"
                />
                <input
                  type="text"
                  placeholder="Email"
                  id="text-bbb3"
                  name="text"
                  value={campEmail}
                  onChange={(value) => setcampEmail(value.target.value)}
                  className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                />
              </div>
              <div className="u-form-group u-form-partition-factor-2 u-label-top u-form-group-3">
                <label
                  htmlFor="text-9670"
                  className="u-form-control-hidden u-label"
                />
                <input
                  type="text" 
                  placeholder="Telemovel"
                  id="text-9670"
                  name="text-1"
                  value={campTelemovel}
                  onChange={(value) => setcampTelemovel(value.target.value)}
                  className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                />
              </div>
              <div className="u-form-group u-form-name u-label-top u-form-group-4">
                <label
                  htmlFor="name-6156"
                  className="u-form-control-hidden u-label"
                />
                <input
                  type="text"
                  placeholder="Mensagem"
                  id="name-6156"
                  name="name-1"
                  value={campMensagem}
                  onChange={(value) => setcampMensagem(value.target.value)}
                  className="u-border-1 u-border-grey-30 u-input u-input-rectangle"
                  required
                />
              </div>
              <div className="u-align-center u-form-group u-form-submit">
                <input
                  type="submit"
                  defaultValue="submit"
                  className="u-border-none u-btn u-btn-submit u-button-style u-palette-3-base u-text-body-alt-color u-btn-1"
                />
              </div>
            </form>
        </div>
      </div>
    </div>
  </section>
  {/* Footer*/}
  <footer className="py-5 bgsite">
    <div className="container px-5"><p className="m-0 text-center text-white">​Política de Privacidade</p></div>
    <div className="container px-5"><p className="m-0 text-center text-white">© 2022 incommun creative lab All rights reserved</p></div>
  </footer>
  {/* Bootstrap core JS*/}
  {/* Core theme JS*/}
  {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
  {/* * *                               SB Forms JS                               * **/}
  {/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/}
  {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
</div>

);
}

