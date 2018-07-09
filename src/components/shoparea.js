import React, { Component } from "react";
import "../index.css";
import PosiPc from "../pc1.png";
import Modal from "react-responsive-modal";

import Carousel from "nuka-carousel";

class ShopArea extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="div-style">
        <div className="temcard">
          <div className="card">
            <div>
              <Carousel>
                <img src={PosiPc} className="img-fit" />
                <img src={PosiPc} className="img-fit" />
                <img src={PosiPc} className="img-fit" />
              </Carousel>
            </div>
            <hr />
            <p>
              Fundada em Novembro de 2014 e com o objetivo de disseminar ao
              público experiências simples e inovadoras dos jogos, a Mad Pixel
              se estabeleceu no mercado após vencer a game jam na JAM NERD
              FESTIVAL.
            </p>
            <a onClick={this.onOpenModal}>Comprar</a>
            <Modal open={open} onClose={this.onCloseModal} center>
              <p>VEEEEI EHUAHAUEHUAHUAEH</p>
              <div style={{ width: "700px", height: "500px" }}>
                <Carousel>
                  <img src={PosiPc} style={{ width: "50%", height: "50%" }} />
                  <img src={PosiPc} style={{ width: "50%", height: "50%" }} />
                  <img src={PosiPc} style={{ width: "50%", height: "50%" }} />
                </Carousel>
              </div>
            </Modal>
          </div>
          <div className="card">
            <h3>Jogos</h3>
            <p>
              Fundada em Novembro de 2014 e com o objetivo de disseminar ao
              público experiências simples e inovadoras dos jogos, a Mad Pixel
              se estabeleceu no mercado após vencer a game jam na JAM NERD
              FESTIVAL.
            </p>
            <a>Comprar</a>
          </div>

          <div class="card">
            <h3>Jogos</h3>
            <p>
              Fundada em Novembro de 2014 e com o objetivo de disseminar ao
              público experiências simples e inovadoras dos jogos, a Mad Pixel
              se estabeleceu no mercado após vencer a game jam na JAM NERD
              FESTIVAL.
            </p>
            <a>Comprar</a>
          </div>
          <div class="card">
            <h3>Jogos</h3>
            <p>
              Fundada em Novembro de 2014 e com o objetivo de disseminar ao
              público experiências simples e inovadoras dos jogos, a Mad Pixel
              se estabeleceu no mercado após vencer a game jam na JAM NERD
              FESTIVAL.
            </p>
            <a>Comprar</a>
          </div>
          <div class="card">
            <h3>Jogos</h3>
            <p>
              Fundada em Novembro de 2014 e com o objetivo de disseminar ao
              público experiências simples e inovadoras dos jogos, a Mad Pixel
              se estabeleceu no mercado após vencer a game jam na JAM NERD
              FESTIVAL.
            </p>
            <a>Comprar</a>
          </div>
          <div class="card">
            <h3>Jogos</h3>
            <p>
              Fundada em Novembro de 2014 e com o objetivo de disseminar ao
              público experiências simples e inovadoras dos jogos, a Mad Pixel
              se estabeleceu no mercado após vencer a game jam na JAM NERD
              FESTIVAL.
            </p>
            <a>Comprar</a>
          </div>
          <div class="card">
            <h3>Jogos</h3>
            <p>
              Fundada em Novembro de 2014 e com o objetivo de disseminar ao
              público experiências simples e inovadoras dos jogos, a Mad Pixel
              se estabeleceu no mercado após vencer a game jam na JAM NERD
              FESTIVAL.
            </p>
            <a>Comprar</a>
          </div>
          <div class="card">
            <h3>Jogos</h3>
            <p>
              Fundada em Novembro de 2014 e com o objetivo de disseminar ao
              público experiências simples e inovadoras dos jogos, a Mad Pixel
              se estabeleceu no mercado após vencer a game jam na JAM NERD
              FESTIVAL.
            </p>
            <a>Comprar</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopArea;
