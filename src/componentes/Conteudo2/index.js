import React from 'react'
import styles from './Conteudo.module.css'

const Conteudo = () => {
  return (
    <div>
        Conteudo
    <form onSubmit={()=>alert("Favorito salvo")}>
        <label>
            Nome do Site
        </label>
        <input name='nome_site'></input>
        <label>
            URL
        </label>
        <input type='url' name='url'></input>
        <button >Salvar</button>
    </form>
    </div>
  )
}