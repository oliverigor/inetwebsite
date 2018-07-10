import React, { Component } from "react";
import "../index.css";
import PosiPc from "../pc1.png";
import Modal from "react-modal";
import { Carousel } from "react-bootstrap";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class ShopArea extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { open } = this.state;
    return (
      <div className="div-style">
        <div className="temcard">
          <div className="card">
            <div>
              {/* <Carousel>
                <img src={PosiPc} className="img-fit" />
                <img src={PosiPc} className="img-fit" />
                <img src={PosiPc} className="img-fit" />
              </Carousel> */}
              <Carousel>
                <Carousel.Item>
                  <img src={PosiPc} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={PosiPc} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={PosiPc} />
                </Carousel.Item>
              </Carousel>
            </div>
            <hr />
            <p>
              Fundada em Novembro de 2014 e com o objetivo de disseminar ao
              público experiências simples e inovadoras dos jogos, a Mad Pixel
              se estabeleceu no mercado após vencer a game jam na JAM NERD
              FESTIVAL.
            </p>
            <a onClick={this.openModal}>Comprar</a>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <p>VEEEEI EHUAHAUEHUAHUAEH</p>
              <div className="card">
                <div>
                  <Carousel>
                    <Carousel.Item>
                      <img src={PosiPc} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={PosiPc} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={PosiPc} />
                    </Carousel.Item>
                  </Carousel>
                </div>
                <hr />
                <p>
                  Fundada em Novembro de 2014 e com o objetivo de disseminar ao
                  público experiências simples e inovadoras dos jogos, a Mad
                  Pixel se estabeleceu no mercado após vencer a game jam na JAM
                  NERD FESTIVAL.
                </p>
                <a onClick={this.onOpenModal}>Comprar</a>
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
