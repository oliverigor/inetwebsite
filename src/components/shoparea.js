import React, { Component } from "react";
import "../index.css";
import PosiPc from "../images//pc1.png";
import Modal from "react-modal";
import { Carousel } from "react-bootstrap";
import data from "./pchash.json";

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
          {data.map(pc => {
            return (
              <div>
                <div className="card">
                  <div>
                    <Carousel>
                      <Carousel.Item>
                        <img src={pc.pic1} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img src={pc.pic2} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img src={pc.pic3} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img src={pc.pic4} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img src={pc.pic5} />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  <hr />
                  <p>{pc.modelo}</p>
                  <p />
                  <a onClick={this.openModal}>Comprar</a>
                </div>
                <div>
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
                            <img src={pc.pic1} />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img src={pc.pic2} />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img src={pc.pic3} />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img src={pc.pic4} />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img src={pc.pic5} />
                          </Carousel.Item>
                        </Carousel>
                      </div>
                      <hr />
                      <p>
                        {/*
                          <a href="https://imgbb.com/"><img src="https://image.ibb.co/dJ21EJ/D365_04.jpg" alt="D365_04" border="0"></a>
                          <a href="https://imgbb.com/"><img src="https://image.ibb.co/m2riTd/D365_03_1.jpg" alt="D365_03_1" border="0"></a>
                            <a href="https://imgbb.com/"><img src="https://image.ibb.co/hB88uJ/D365_03.jpg" alt="D365_03" border="0"></a>
                          <a href="https://imgbb.com/"><img src="https://image.ibb.co/dhriTd/D635_02.jpg" alt="D635_02" border="0"></a>
                          <a href="https://imgbb.com/"><img src="https://image.ibb.co/bYAMEJ/D365.jpg" alt="D365" border="0"></a>
                          <a href="https://imgbb.com/"><img src="https://image.ibb.co/jHuRgy/T50_angulo2.jpg" alt="T50_angulo2" border="0"></a>
                          <a href="https://imgbb.com/"><img src="https://image.ibb.co/cq9sMy/master_C1002.jpg" alt="master_C1002" border="0"></a>
                        <a href="https://imgbb.com/"><img src="https://image.ibb.co/g6KEZJ/pc1.png" alt="pc1" border="0"></a> */}
                      </p>
                      <a onClick={this.onOpenModal}>Comprar</a>
                    </div>
                  </Modal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShopArea;
