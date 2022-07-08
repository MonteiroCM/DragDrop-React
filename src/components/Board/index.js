import React, { useState } from 'react'
import produce from 'immer'
import { loadLists } from '../../service/api'
import List from '../List'
import BoardContext from './context'

import { Conteiner } from './styles'

const data = loadLists()

export default function Board() {
  const [lists, setLists] = useState(data)

  function move(fromList, toList, from, to) {
    setLists(
      produce(lists, draft => {
        const drgged = draft[fromList].cards[from]
        draft[fromList].cards.splice(from, 1)
        draft[toList].cards.splice(to, 0, drgged)
      }),
    )
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Conteiner>
        {lists.map((list, index) => (
          <List key={list.title} index={index} data={list} />
        ))}
      </Conteiner>
    </BoardContext.Provider>
  )
}
