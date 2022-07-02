export function loadLists() {
  return [
    {
      title: 'Tarefas',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar NodeJS',
          labels: ['#7159c1'],
          user: 'https://pickaface.net/gallery/avatar/unr_ocareca_190207_1643_39ya9.png',
        },
        {
          id: 2,
          content: 'Estudar React',
          labels: ['#7159c1'],
          user: 'https://pickaface.net/gallery/avatar/unr_ocareca_190207_1643_39ya9.png',
        },
        {
          id: 3,
          content: 'ITEM 1',
          labels: ['#7159c1'],
          user: 'https://pickaface.net/gallery/avatar/unr_ocareca_190207_1643_39ya9.png',
        },
        {
          id: 4,
          content: 'ITEM 2',
          labels: ['#54e1f7'],
          user: 'https://pickaface.net/gallery/avatar/unr_ocareca_190207_1643_39ya9.png',
        },
        {
          id: 5,
          content: 'ITEM 3',
          labels: ['#54e1f7'],
          user: 'https://pickaface.net/gallery/avatar/unr_ocareca_190207_1643_39ya9.png',
        },
      ],
    },
    {
      title: 'Fazendo',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Subir Para O Git',
          labels: [],
          user: 'https://pickaface.net/gallery/avatar/unr_ocareca_190207_1643_39ya9.png',
        },
      ],
    },
    {
      title: 'Pausado',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Terminar Game',
          labels: ['#7159c1'],
          user: 'https://pickaface.net/gallery/avatar/unr_ocareca_190207_1643_39ya9.png',
        },
        {
          id: 8,
          content: 'Zerar Zelda',
          labels: ['#54e1f7'],
          user: 'https://pickaface.net/gallery/avatar/unr_ocareca_190207_1643_39ya9.png',
        },
        {
          id: 9,
          content: 'Formatar PC',
          labels: [],
        },
      ],
    },
    {
      title: 'Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'AULAS',
          labels: [],
        },
        {
          id: 12,
          content: 'Importação de Dados',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Banco de dados',
          labels: ['#7159c1'],
        },
      ],
    },
  ]
}
