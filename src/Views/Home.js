
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./home.css";
import "./styles.css";
import "./nicepage1.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  const [campNome, setcampNome] = useState("");
  const [campEmail, setcampEmail] = useState("");
  const [campTelemovel, setcampTelemovel] = useState("");
  const [campMensagem, setcampMensagem] = useState("");

  const SendSave =e=> {
    e.preventDefault ();
    console.log("hhhh");
    if (campNome === "") {
      alert("Escreva um nome!");
    } else if (campEmail === "") {
      alert("Escreva um Email!");
    } else if (campTelemovel === "") {
      alert("Insira um telemovel!");
    } else if (campMensagem === "") {
      alert("Insira uma Mensagem!");
    } else {
      const baseUrl = "https://ai2p3backend.herokuapp.com/tickets/create";
      const datapost = {
        nome: campNome,
        email: campEmail,
        telemovel: campTelemovel,
        mensagem: campMensagem,
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
    <div className="u-body u-xl-mode">
      
      <section
        className="u-clearfix u-palette-3-base u-section-1"
        id="sec-780a"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <img
            className="u-image u-image-default u-image-1"
            src="images/image2.png" 
            alt=""
            data-image-width={873}
            data-image-height={221}
          />
        </div>
      </section>
      <section className="u-align-center u-clearfix u-section-2" id="sec-3f3c">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              {/*mkt*/}
              <div className="u-container-style u-list-item u-repeater-item">
                <div className="u-container-layout u-similar-container u-container-layout-1">
                  <a href="/mktdigital"><img
                    className="u-image u-image-default u-image-1"
                    src="images/image.png"
                    alt=""
                    data-image-width={282}
                    data-image-height={258}
                    data-href="mktdigital.html"
                  /></a>
                </div>
              </div>
              {/*branding */}
              <div className="u-container-style u-list-item u-repeater-item">
                <div className="u-container-layout u-similar-container u-container-layout-2">
                <a href="/branding"><img
                    className="u-image u-image-default u-image-2"
                    src="images/image4.png"
                    alt=""
                    data-image-width={282}
                    data-image-height={258}
                    data-href="Branding.html"
                    data-page-id={257137132}
                  /></a>
                </div>
              </div>
              {/*Comunicação */}
              <div className="u-container-style u-list-item u-repeater-item">
                <div className="u-container-layout u-similar-container u-container-layout-3">
                <a href="/comunicacaoeconsultoria"><img
                    className="u-image u-image-default u-image-3"
                    src="images/image5.png"
                    alt=""
                    data-image-width={282}
                    data-image-height={258}
                    data-href="ComunicaçãoeConsultoria.html"
                  /></a>
                </div>
              </div>
              {/*sites */}
              <div className="u-container-style u-list-item u-repeater-item">
                <div className="u-container-layout u-similar-container u-container-layout-4">
                <a href="/siteslojas"><img
                    className="u-image u-image-default u-image-4"
                    src="images/image6.png"
                    alt=""
                    data-image-width={282}
                    data-image-height={258}
                    data-href="menu.html"
                  /></a>
                </div>
              </div>
              {/*design */}
              <div className="u-container-style u-list-item u-repeater-item">
                <div className="u-container-layout u-similar-container u-container-layout-5">
                <a href="/design"> <img
                    className="u-image u-image-default u-image-5"
                    src="images/image7.png"
                    alt=""
                    data-image-width={282}
                    data-image-height={258}
                    data-href="design.html"
                  /></a>
                </div>
              </div>
            </div>
            {/*supermix */}
          </div>
          <a href="/supermix"><img
            className="u-image u-image-default u-image-6"
            src="images/image8.png"
            alt=""
            data-image-width={1733}
            data-image-height={122}
            data-href="supermix.html"
            data-page-id={257137132}
          /></a>
        </div>
      </section>
      <section className="u-clearfix u-white u-section-3" id="sec-5cca">
        <div className="u-align-left u-clearfix u-sheet u-sheet-1">
          <h3 className="u-text u-text-default u-text-1">
            Precisa de mais informações?
          </h3>
          <div className="u-form u-form-1">

            

              <form
            onSubmit={SendSave}
              // action="#"
              // method="POST"
              className="u-clearfix u-form-spacing-20 u-form-vertical u-inner-form"
              style={{ padding: "30px" }}
              // source="email"
            >
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
                {/* <a
                  href="#"
                  className="u-border-none u-btn u-btn-submit u-button-style u-palette-3-base u-text-body-alt-color u-btn-1"
                >
                  Submeter
                </a> */}
                <input
                  type="submit"
                  defaultValue="submit"
                  className="u-border-none u-btn u-btn-submit u-button-style u-palette-3-base u-text-body-alt-color u-btn-1"

                  // onClick={()  =>SendSave()}
                />
              </div>
              <div className="u-form-send-message u-form-send-success">
                Thank you! Your message has been sent.
              </div>
              <div className="u-form-send-error u-form-send-message">
                Unable to send your message. Please fix errors then try again.
              </div>
              <input type="hidden" defaultValue name="recaptchaResponse" />
            </form>
          </div>
        </div>
      </section>
      <footer className="u-clearfix u-footer u-palette-3-base" id="sec-83f8">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <p className="u-text u-text-default u-text-white u-text-1">
            © 2022 incommun creative lab All rights reserved
          </p>
          <div className="u-social-icons u-spacing-10 u-social-icons-1">
            <a className="u-social-url" title="facebook" target="_blank" href>
              <span className="u-icon u-social-facebook u-social-icon u-icon-1">
                <svg
                  className="u-svg-link"
                  preserveAspectRatio="xMidYMin slice"
                  viewBox="0 0 112 112"
                  style={{}}
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-e063"
                  />
                </svg>
                <svg
                  className="u-svg-content"
                  viewBox="0 0 112 112"
                  x={0}
                  y={0}
                  id="svg-e063"
                >
                  <circle fill="currentColor" cx="56.1" cy="56.1" r={55} />
                  <path
                    fill="#FFFFFF"
                    d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
      c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"
                  />
                </svg>
              </span>
            </a>
            <a className="u-social-url" title="twitter" target="_blank" href>
              <span className="u-icon u-social-icon u-social-twitter u-icon-2">
                <svg
                  className="u-svg-link"
                  preserveAspectRatio="xMidYMin slice"
                  viewBox="0 0 112 112"
                  style={{}}
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-a69c"
                  />
                </svg>
                <svg
                  className="u-svg-content"
                  viewBox="0 0 112 112"
                  x={0}
                  y={0}
                  id="svg-a69c"
                >
                  <circle
                    fill="currentColor"
                    className="st0"
                    cx="56.1"
                    cy="56.1"
                    r={55}
                  />
                  <path
                    fill="#FFFFFF"
                    d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
      c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
      c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
      c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
      c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"
                  />
                </svg>
              </span>
            </a>
            <a className="u-social-url" title="instagram" target="_blank" href>
              <span className="u-icon u-social-icon u-social-instagram u-icon-3">
                <svg
                  className="u-svg-link"
                  preserveAspectRatio="xMidYMin slice"
                  viewBox="0 0 112 112"
                  style={{}}
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-53a5"
                  />
                </svg>
                <svg
                  className="u-svg-content"
                  viewBox="0 0 112 112"
                  x={0}
                  y={0}
                  id="svg-53a5"
                >
                  <circle fill="currentColor" cx="56.1" cy="56.1" r={55} />
                  <path
                    fill="#FFFFFF"
                    d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
      z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
      C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
      c5.5,0,9.9,4.5,9.9,9.9V73.3z"
                  />
                </svg>
              </span>
            </a>
            <a className="u-social-url" title="linkedin" target="_blank" href>
              <span className="u-icon u-social-icon u-social-linkedin u-icon-4">
                <svg
                  className="u-svg-link"
                  preserveAspectRatio="xMidYMin slice"
                  viewBox="0 0 112 112"
                  style={{}}
                >
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#svg-04f5"
                  />
                </svg>
                <svg
                  className="u-svg-content"
                  viewBox="0 0 112 112"
                  x={0}
                  y={0}
                  id="svg-04f5"
                >
                  <circle fill="currentColor" cx="56.1" cy="56.1" r={55} />
                  <path
                    fill="#FFFFFF"
                    d="M41.3,83.7H27.9V43.4h13.4V83.7z M34.6,37.9L34.6,37.9c-4.6,0-7.5-3.1-7.5-7c0-4,3-7,7.6-7s7.4,3,7.5,7
      C42.2,34.8,39.2,37.9,34.6,37.9z M89.6,83.7H76.2V62.2c0-5.4-1.9-9.1-6.8-9.1c-3.7,0-5.9,2.5-6.9,4.9c-0.4,0.9-0.4,2.1-0.4,3.3v22.5
      H48.7c0,0,0.2-36.5,0-40.3h13.4v5.7c1.8-2.7,5-6.7,12.1-6.7c8.8,0,15.4,5.8,15.4,18.1V83.7z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </footer>
      
    </div>
  );


  //  SendSave(e) {
  //   e.preventDefault ();
  //   console.log("hhhh");
  //   if (campNome === "") {
  //     alert("Escreva um nome!");
  //   } else if (campEmail === "") {
  //     alert("Escreva um Email!");
  //   } else if (campTelemovel === "") {
  //     alert("Insira um telemovel!");
  //   } else if (campMensagem === "") {
  //     alert("Insira uma Mensagem!");
  //   } else {
  //     const baseUrl = "https://ai2p3backend.herokuapp.com/tickets/create";
  //     const datapost = {
  //       nome: campNome,
  //       email: campEmail,
  //       telemovel: campTelemovel,
  //       mensagem: campMensagem,
  //     };
  //     axios
  //       .post(baseUrl, datapost)
  //       .then((response) => {
  //         if (response.data.success === true) {
  //           alert(response.data.message);
  //         } else {
  //           alert(response.data.message);
  //         }
  //       })
  //       .catch((error) => {
  //         alert("Error 34 " + error);
  //       });
  //   }
  // }

}



