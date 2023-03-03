import { ReactElement } from "react";

type FlavorLevel = 0 | 1 | 2 | 3 | 4;
const MAX_FLAVOR = 4;

type Flavor = 'chocolate' | 'nut' | 'fruit' | 'spice' | 'floral' | 'earth' | 'citrus';

type Flavors = {
  chocolate: FlavorLevel
  nut: FlavorLevel
  fruit: FlavorLevel
  spice: FlavorLevel
  floral: FlavorLevel
  earth: FlavorLevel
  citrus: FlavorLevel
}

const FLAVORS: Flavor[] = [
  'chocolate',
  'nut',
  'fruit',
  'spice',
  'floral',
  'earth',
  'citrus',
]

export type Coffee = {
  name: string,
  type: 'single origin' | 'blend',
  region: string,
  description: string,
  flavors: Flavors,
}

export default function ({ coffee }: { coffee: Coffee }) {
  return (
    <div style={{
      aspectRatio: 1,
      width: '80%',
      // backgroundColor: 'rgba(255,255,255, 0.5)',
      border: 'dashed grey',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
    }}>

      <div style={{ fontSize: 30, textAlign: "center", padding: '20px' }}>
        {coffee.name}
      </div>

      {FLAVORS.map((flavor, index) => (
        <FlavorBar level={coffee.flavors[flavor]} color={`rgb(${index/6 * 255}, 80, 50)`}>
          <text>{flavor}</text>
        </FlavorBar>
      ))}

    </div>
  )
}

function FlavorBar({ level, color, children }: { level: FlavorLevel, color: string, children:ReactElement }) {
  return (
    <div style={{flex: 1,  width: `${level / MAX_FLAVOR * 100}%`, backgroundColor: color }}>
      {children}
    </div>
  );
}