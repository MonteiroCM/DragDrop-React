import React from 'react'
import { PlusCircle } from 'phosphor-react'
import { Conteiner } from './styles'
import Card from '../Card'

export default function List({ data, index: listIndex }) {
  return (
    <Conteiner done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type='button'>
            <PlusCircle size={24} />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Conteiner>
  )
}
