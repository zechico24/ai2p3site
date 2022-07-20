import React from "react";
import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from 'moment';

export default function Supermix() {

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



   // BRANDING

  const [campNameBranding, setcampNameBranding] = useState("");

  useEffect(() => {
    const baseUrl = "https://ai2p3backend.herokuapp.com/pacotes/get/0";
    axios.get(baseUrl)
    .then(res=>{
    if (res.data.success) {
    const data = res.data.data[0];
    //setdataPacotes(data);
    setcampNameBranding(data.nome);
    }
    else {
    alert("Error web service")
    }
    })
    .catch(error=>{
    alert("Error server: "+error)
    })
    }, []);


    const [dataPacotesBranding, setdataPacotesBranding] = useState([]);
    useEffect(() => {
    const url = "https://ai2p3backend.herokuapp.com/categoria/listwithcategory/0";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataPacotesBranding(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const renderCategoriaBranding = dataPacotesBranding.map((data,index) =>{
    return (
      <div className={index % 2 === 1 ? 'coluna2 col-lg-4 col-sm-12 col-12' : 'coluna1branding col-lg-4 col-sm-12 col-12'}>
       <h1 class="subtitpack">{data.nome}</h1>
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

      // MKT DIGITAL

        const [campNameMktDigital, setcampNameMktDigital] = useState("");


        useEffect(() => {
          const baseUrl = "https://ai2p3backend.herokuapp.com/pacotes/get/1";
          axios.get(baseUrl)
          .then(res=>{
          if (res.data.success) {
          const data = res.data.data[0];
          //setdataPacotes(data);
          setcampNameMktDigital(data.nome);
          }
          else {
          alert("Error web service")
          }
          })
          .catch(error=>{
          alert("Error server: "+error)
          })
          }, []);


          
  const [dataPacotesMktDigital, setdataPacotesMktDigital] = useState([]);


  useEffect(() => {
    const url = "https://ai2p3backend.herokuapp.com/categoria/listwithcategory/1";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataPacotesMktDigital(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const renderCategoriaMktDigital = dataPacotesMktDigital.map((data,index) =>{
    return (
       
      <div className={index % 2 === 1 ? 'coluna2 col-lg-4 col-sm-12 col-12' : 'coluna1mkt col-lg-4 col-sm-12 col-12'}>
       <h1 class="subtitpack">{data.nome}</h1>
      {dataListaInfo1.map((data1,index1) =>{
        if (data.idcategoria == data1.idcategoria){
          return (
           <div>
          <p >{data1.nomeDetalhe}</p>
          </div>
          );
          }})}
       </div>
       
    );
    });

    // Comunicação e Consultoria

    const [campNameCC, setcampNameCC] = useState("");


  useEffect(() => {
    const baseUrl = "https://ai2p3backend.herokuapp.com/pacotes/get/2";
    axios.get(baseUrl)
    .then(res=>{
    if (res.data.success) {
    const data = res.data.data[0];
    //setdataPacotes(data);
    setcampNameCC(data.nome);
    }
    else {
    alert("Error web service")
    }
    })
    .catch(error=>{
    alert("Error server: "+error)
    })
    }, []);

    const [dataPacotesCC, setdataPacotesCC] = useState([]);
  useEffect(() => {
    const url = "https://ai2p3backend.herokuapp.com/categoria/listwithcategory/2";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataPacotesCC(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const renderCategoriaCC = dataPacotesCC.map((data,index) =>{
    return (
      <div className={index % 2 === 1 ? 'coluna2 col-lg-4 col-sm-12 col-12' : 'coluna1comunicacao col-lg-4 col-sm-12 col-12'}>
       <h1 class="subtitpack">{data.nome}</h1>
      {dataListaInfo1.map((data1,index1) =>{
        if (data.idcategoria == data1.idcategoria){
          return (
            <div>
           <p >{data1.nomeDetalhe}</p>
           </div>
          );
          }})}
       </div>
    );
    });

    //Sites e Lojas

    const [campNameSL, setcampNameSL] = useState("");

    useEffect(() => {
      const baseUrl = "https://ai2p3backend.herokuapp.com/pacotes/get/3";
      axios.get(baseUrl)
      .then(res=>{
      if (res.data.success) {
      const data = res.data.data[0];
      //setdataPacotes(data);
      setcampNameSL(data.nome);
      }
      else {
      alert("Error web service")
      }
      })
      .catch(error=>{
      alert("Error server: "+error)
      })
      }, []);

      const [dataPacotesSL, setdataPacotesSL] = useState([]);

  useEffect(() => {
    const url = "https://ai2p3backend.herokuapp.com/categoria/listwithcategory/3";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataPacotesSL(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const renderCategoriaSL = dataPacotesSL.map((data,index) =>{
    return (
      <div className={index % 2 === 1 ? 'coluna2 col-lg-4 col-sm-12 col-12' : 'coluna1sitelojas col-lg-4 col-sm-12 col-12'}>
       <h1 class="subtitpack">{data.nome}</h1>
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

    // DESIGN

    const [campNameDESIGN, setcampNameDESIGN] = useState("");

  useEffect(() => {
    const baseUrl = "https://ai2p3backend.herokuapp.com/pacotes/get/4";
    axios.get(baseUrl)
    .then(res=>{
    if (res.data.success) {
    const data = res.data.data[0];
    //setdataPacotes(data);
    setcampNameDESIGN(data.nome);
    }
    else {
    alert("Error web service")
    }
    })
    .catch(error=>{
    alert("Error server: "+error)
    })
    }, []);

    const [dataPacotesDESIGN, setdataPacotesDESIGN] = useState([]);
  useEffect(() => {
    const url = "https://ai2p3backend.herokuapp.com/categoria/listwithcategory/4";
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataPacotesDESIGN(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const renderCategoriaDESIGN = dataPacotesDESIGN.map((data,index) =>{
    return (
      <div className={index % 2 === 1 ? 'coluna2 col-lg-4 col-sm-12 col-12' : 'coluna1design col-lg-4 col-sm-12 col-12'}>
       <h1 class="subtitpack">{data.nome}</h1>
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
        idpacote: 5

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
  <header className="mixbg py-5">
    <div>
      <div className="row gx-5">
        <div className="col-lg-6">
            <div className="packname pagpack fw-bolder mb-2">
              <br></br>
              {"Supermix"}
              </div>
          <h4 className="titpack"> Verifique os Pacotes</h4>
        </div>
      </div>
    </div>
    
  </header>
  {/* Header*/}
  <header className="mktbg py-5">
    <div>
      <div className="row gx-5">
        <div className="col-lg-6">
            <div className="packname pagpack fw-bolder mb-2">
              <br></br>
              {campNameMktDigital}
              </div>
          <h4 className="titpack"> Informações de Pacote</h4>
        </div>
      </div>
    </div>
    
  </header>
  {/* Pricing section*/}
  {renderCategoriaMktDigital}
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
    <br></br>
    <br></br>
    <br></br>
  {/* form*/}
  {/* Header*/}
  <header className="brandingbg py-5"> 
    <div>
    <div className="row gx-5">
        <div className="col-lg-6">
            <div className="packname pagpack fw-bolder mb-2">
              <br></br>
              {campNameBranding}
              </div>
          <h4 className="titpack"> Informações de Pacote</h4>
        </div>
      </div>
    </div>
  </header>
  {/* Pricing section*/}
  {renderCategoriaBranding}
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
    <br></br>
    <br></br>
    <br></br>
  {/* form*/}
  {/* Header*/}
  <header className="comunicacaobg py-5">
  <div>
    <div className="row gx-5">
        <div className="col-lg-6">
            <div className="packname pagpack fw-bolder mb-2">
              <br></br>
              {campNameCC}
              </div>
          <h4 className="titpack"> Informações de Pacote</h4>
        </div>
      </div>
    </div>
  </header>
  {/* Pricing section*/}
  {renderCategoriaCC}
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
    <br></br>
    <br></br>
    <br></br>
  {/* form*/}
  {/* Header*/}
  <header className="sitelojasbg py-5">
  <div>
    <div className="row gx-5">
        <div className="col-lg-6">
            <div className="packname pagpack fw-bolder mb-2">
              <br></br>
              {campNameSL}
              </div>
          <h4 className="titpack"> Informações de Pacote</h4>
        </div>
      </div>
    </div>
  </header>
  {/* Pricing section*/}
  {renderCategoriaSL}
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
    <br></br>
    <br></br>
    <br></br>
  {/* form*/}
  {/* Header*/}
  <header className="designbg py-5">
  <div>
    <div className="row gx-5">
        <div className="col-lg-6">
            <div className="packname pagpack fw-bolder mb-2">
              <br></br>
              {campNameDESIGN}
              </div>
          <h4 className="titpack"> Informações de Pacote</h4>
        </div>
      </div>
    </div>
  </header>
  {/* Pricing section*/}
  {renderCategoriaDESIGN}
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
    <br></br>
    <br></br>
    <br></br>
  {/* form*/}

  <section className="bodybg py-5">
    <div className="container px-5 my-5 px-5">
      <div className="text-center mb-5">
        <div className="feature bg-gradient text-white rounded-3 mb-3"><i className="bi mixtxt bi-envelope" /></div>
        <h2 className="mixtxt fw-bolder">Submissão</h2>
        <p className="mixtxt lead mb-0">Preencha com os seus dados!</p>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-20 mixtxt">
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
</div>
  );
}