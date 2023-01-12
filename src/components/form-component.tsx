import * as React from 'react'

interface Stats {
  dexterity: number,
  vitality: number,
  affinity: number
}

interface CharacterProps {
  levels: string[]
}

interface CharacterState {
  levels: string[],
  stats: Stats
}

class Character extends React.Component <CharacterProps, CharacterState> {
  levelSchema: {[key: string]: Stats}[] = [
    {
      'child': {
        dexterity: 1,
        vitality: 1,
        affinity: 1
      }
    },
    {
      'vagrant': {
        dexterity: 2,
        vitality: 0,
        affinity: 0
      },
      'peasant': {
        dexterity: 0,
        vitality: 2,
        affinity: 0
      },
      'dandy': {
        dexterity: 0,
        vitality: 0,
        affinity: 2
      }
    },
    {
      'burglar': {
        dexterity: 2,
        vitality: 1,
        affinity: 0
      },
      'tradesman': {
        dexterity: 0,
        vitality: 2,
        affinity: 1
      },
      'bard': {
        dexterity: 1,
        vitality: 0,
        affinity: 2
      }
    },
    {
      'burglar': {
        dexterity: 2,
        vitality: 1,
        affinity: 0
      },
      'tradesman': {
        dexterity: 0,
        vitality: 2,
        affinity: 1
      },
      'bard': {
        dexterity: 1,
        vitality: 0,
        affinity: 2
      }
    },
    {
      'ranger': {
        dexterity: 4,
        vitality: 1,
        affinity: 2
      },
      'knight': {
        dexterity: 2,
        vitality: 4,
        affinity: 1
      },
      'alchemist': {
        dexterity: 1,
        vitality: 2,
        affinity: 4
      }
    },
    {
      'ranger': {
        dexterity: 4,
        vitality: 1,
        affinity: 2
      },
      'knight': {
        dexterity: 2,
        vitality: 4,
        affinity: 1
      },
      'alchemist': {
        dexterity: 1,
        vitality: 2,
        affinity: 4
      }
    }
  ] // index = level 0:6

  // classes should be an enumerated type
  // of 9 string options
  constructor(props: CharacterProps) {
    super(props)

    this.state = {
      levels: ['child'].concat(this.props['levels']),
      stats: {
        dexterity: 0,
        vitality: 0,
        affinity: 0
      }
    }

    this.state.levels.forEach((job, index) => {
      const { dexterity, vitality, affinity } = this.levelSchema[index][job]
      this.state.stats['dexterity'] += dexterity
      this.state.stats['vitality'] += vitality
      this.state.stats['affinity'] += affinity
    })
  }

  render() {
    const {dexterity, vitality, affinity} = this.state.stats
    return <div>
      <div>{this.state.levels.join(' ')}</div>
      <div>
        <p>dexterity: {dexterity}</p>
        <p>vitality: {vitality}</p>
        <p>affinity: {affinity}</p>
      </div>
    </div>
  }
}

const levelOptions: string[][] = [
  ['vagrant', 'peasant', 'dandy'],
  ['burglar', 'tradesman', 'bard'],
  ['burglar', 'tradesman', 'bard'],
  ['ranger', 'knight', 'alchemist'],
  ['ranger', 'knight', 'alchemist']
]

const allCombos: string[][] = []

const n = 3 ** 5 // total number of class combos

for (let x = 0; x < 3; x++) {
  let combo: string[] = []
  for (let y = 0; y < 5; y++) {
    combo.push(levelOptions[y][x])
  }
  allCombos.push(combo)
}

const FormComponent = () => {
  return (
    <div>
      { allCombos.map(combo => <Character levels={combo} />) }
    </div>
  )
}

export default FormComponent