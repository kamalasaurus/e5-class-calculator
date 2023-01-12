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

// concat inner dimension from 1:5 to get all terminal points
// it's a lot more that 243 holy crap
// should chart the bell curve and come up with
// appropriate clusters and names

function makeCombos(depth: number): number[][] {
  return Array.from(
    {length: 3 ** depth},
    (_, i) => Array
      .from(
        {length: depth},
        (_, j) => Math.floor(i / Math.pow(3, j)) % 3
      )
  )
}

const levelCombos1: string[][] = makeCombos(1)
  .map(levels => levels.map((x, y) => levelOptions[y][x]))

const levelCombos2: string[][] = makeCombos(2)
  .map(levels => levels.map((x, y) => levelOptions[y][x]))

const levelCombos3: string[][] = makeCombos(3)
  .map(levels => levels.map((x, y) => levelOptions[y][x]))

const levelCombos4: string[][] = makeCombos(4)
  .map(levels => levels.map((x, y) => levelOptions[y][x]))

const levelCombos5: string[][] = makeCombos(5)
  .map(levels => levels.map((x, y) => levelOptions[y][x]))

const FormComponent = () => {
  return (
    <div>
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2">Level 1</h1>
      { levelCombos1.map(combo => <Character levels={combo} />) }
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2">Level 2</h1>
      { levelCombos2.map(combo => <Character levels={combo} />) }
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2">Level 3</h1>
      { levelCombos3.map(combo => <Character levels={combo} />) }
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2">Level 4</h1>
      { levelCombos4.map(combo => <Character levels={combo} />) }
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2">Level 5</h1>
      { levelCombos5.map(combo => <Character levels={combo} />) }
    </div>
  )
}

export default FormComponent