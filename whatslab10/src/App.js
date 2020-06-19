import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
const SpaceMessage = styled.div`
height: 100vh;
border: 1px black solid;
width: 500px;
display: flex;
flex-direction: column;
justify-content: flex-end;
background-color: #CDF9DA;
`
const MsgDigitada = styled.section`
display: flex;
flex-direction: column;
padding: 20px;
margin-bottom: 10px;
`
const Inputs = styled.section`
display: flex;
`
const Corpo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const InputUsuario = styled.input`
width: 100px;
margin: 10px;
`
const InputMsg = styled.input`
width: 350px;
margin: 10px;
`
const InputBotao = styled.button`
margin: 10px;
`

const MensagemExibida = styled.div`
margin-bottom: 16px;
background-color: white;
border-radius: 10px;
max-width: 40%;
padding: 5px;
`

const Texto = styled.span`
font-weight:bold;
`
class App extends React.Component {
  state = {
    Mensagens: [],
    InputUsuario: "",
    InputMsg: ""
  }
  onChangeUsuario = event => {
    this.setState({ InputUsuario: event.target.value })
  }
  onChangeMsg = event => {
    this.setState({ InputMsg: event.target.value })
  }
  enviaMensagem = () => {
    const novaMensagem = {
      user: this.state.InputUsuario,
      msg: this.state.InputMsg
    }
    const novoMensagens = [...this.state.Mensagens, novaMensagem]
    this.setState({ Mensagens: novoMensagens })
    this.state.InputMsg = " "
  }
  render() {
    const listaDeMensagens = this.state.Mensagens.map((mensagem) => {
      return (
        <MensagemExibida>
          <Texto>{mensagem.user}</Texto>{': '+mensagem.msg}
        </MensagemExibida>
      );
    });
    return (
      <Corpo>
        <SpaceMessage>
          <MsgDigitada>
            {listaDeMensagens}
          </MsgDigitada>
          <Inputs>
            <InputUsuario
              value={this.state.InputUsuario}
              onChange={this.onChangeUsuario}
              placeholder={" Usuario"}
            />
            <InputMsg
              value={this.state.InputMsg}
              onChange={this.onChangeMsg}
              placeholder={" Mensagem"}
            />
            <InputBotao onClick={this.enviaMensagem}>Enviar</InputBotao>
          </Inputs>
        </SpaceMessage>
      </Corpo>
    );
  }
}
export default App;