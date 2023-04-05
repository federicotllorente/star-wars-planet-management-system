import Link from "next/link"
import { FunctionComponent, ComponentPropsWithoutRef } from "react"
import { Planet } from "~types"

type PlanetListProps = {
  planetList: Planet[]
}

export const PlanetList: FunctionComponent<
  ComponentPropsWithoutRef<'div'> & PlanetListProps
> = ({ planetList }) => {
  return (
    <div className="overflow-x-scroll">
      <div className="w-122.5 flex flex-col">
        <div className="px-4 pb-2 grid grid-cols-6 gap-3 uppercase opacity-60">
          <span>Name</span>
          <span>ID</span>
          <span>Diameter</span>
          <span>Climates</span>
          <span>Terrains</span>
          <span>Population</span>
        </div>

        {planetList.map(planet => (
          <Link
            key={planet.id}
            className="px-4 opacity-80 transition hover:opacity-100 hover:bg-black-withOpacity"
            href={`/planets/${planet.id}`}
          >
            <div className="py-2 grid grid-cols-6 gap-3 border-t border-white-withOpacity">
              <span>{planet.name}</span>
              <span>{planet.id}</span>
              <span>{planet.diameter}</span>
              <span>{planet.climates.join(', ')}</span>
              <span>{planet.terrains.join(', ')}</span>
              <span>{planet.population}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
