import { createContext, useState } from 'react'

export interface IAvailableCoffee {
  id: string
  title: string
  description: string
  price: number
  img: string
  tagList: string[]
}

interface CoffeeContextType {
  listOfAvailableCoffees: IAvailableCoffee[]
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProvider {
  children: React.ReactNode
}

export function CoffeeContextProvider({ children }: CoffeeContextProvider) {
  const [listOfAvailableCoffees, setListOfAvailableCoffees] = useState<
    IAvailableCoffee[]
  >([
    {
      id: '1',
      title: 'Expresso tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      img: './coffee-expresso.png',
      tagList: ['Tradicional'],
    },
    {
      id: '2',
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 8.7,
      img: './coffee-americano.png',
      tagList: ['Tradicional'],
    },
    {
      id: '3',
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 11.9,
      img: './coffee-cremoso.png',
      tagList: ['Tradicional'],
    },
    {
      id: '4',
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 10.9,
      img: './coffee-gelado.png',
      tagList: ['Tradicional', 'Gelado'],
    },
    {
      id: '5',
      title: 'Café com leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 13.9,
      img: './coffee-leite.png',
      tagList: ['Tradicional', 'Com leite'],
    },
  ])

  return (
    <CoffeeContext.Provider value={{ listOfAvailableCoffees }}>
      {children}
    </CoffeeContext.Provider>
  )
}