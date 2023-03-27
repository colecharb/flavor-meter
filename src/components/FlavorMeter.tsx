// import '../App.css'
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from "react-chartjs-2";

export type FlavorLevel = 0 | 1 | 2 | 3 | 4;
const MAX_FLAVOR = 4;
const FALVOR_SCALE_MIN = 0; // allowance for logo in center
const FLAVOR_SCALE_MAX = 4;


export type FlavorLevels = {
  chocolate: FlavorLevel,
  spice: FlavorLevel,
  nut: FlavorLevel,
  herb: FlavorLevel,
  flower: FlavorLevel,
  fruit: FlavorLevel,
  caramel: FlavorLevel,
}

export type FlavorName = keyof FlavorLevels; //'chocolate' | 'spice' | 'nut' | 'herb' | 'flower' | 'fruit' | 'caramel';

const flavorColors: { [Property in FlavorName]: string } = {
  chocolate: '#844229',
  spice: '#af4e25',
  nut: '#9a6126',
  herb: '#969438',
  flower: '#afc000',
  fruit: '#edba22',
  caramel: '#cd8022',
}

export type Coffee = {
  name: string,
  price: string,
  origin: string,
  region: string,
  locality: string,
  farm: string,
  producer: string,
  altitude: string,
  variety: string,
  process: string,
  roast: string,
  description: string,
  flavorLevels: FlavorLevels,
}

export const coffeeInfoListItems: (keyof Coffee)[] = [
  'origin',
  'region',
  'locality',
  'farm',
  'producer',
  'altitude',
  'variety',
  'process',
  'roast'
]


export default function ({ coffee }: { coffee: Coffee }) {

  // register chart stuff to render
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend); // ChartDataLabels

  return (
    // <div className='test-border'>
    <div style={{ position: 'relative', aspectRatio: 1, width:'100%' }}>
      <PolarArea title={coffee.name}
        // style={{ zIndex: 10 }}
        // width={"100%"}
        data={{

          labels: Object.keys(flavorColors).map(flavor => flavor.toUpperCase()),
          datasets: [
            {
              label: 'strength',
              data: Object.keys(flavorColors).map(name => coffee.flavorLevels[name as FlavorName]),//Object.values(coffee.flavors),
              backgroundColor: Object.values(flavorColors),
              borderWidth: 0,
              borderColor: 'white',
              borderRadius: (context) => context.chart.width / 50,
              // borderAlign: 'inner'
            },
          ],
        }}
        options={{
          animation: {
            duration: 500,
            animateRotate: true,
            animateScale: true,
          },
          responsive: true,
          onResize(chart, size) {

          },
          maintainAspectRatio: true,
          aspectRatio: 1,
          scales: {
            r: {
              // display: false,
              min: FALVOR_SCALE_MIN,
              max: FLAVOR_SCALE_MAX,
              pointLabels: {
                // color: Object.values(flavorColors),
                color: (context) => flavorColors[context.label.toLowerCase() as FlavorName],
                display: true,
                centerPointLabels: true,
                font: (context) => ({
                  weight: 'bold',
                  size: context.chart.width / 20,
                }),
              },
              ticks: {
                display: false,
              },
              grid: {
                lineWidth: 1,

                // display: false,
              }
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            // datalabels: {
            //   display: false,
            //   formatter: (value, context: Context) => (context.chart.data.labels[context.dataIndex] ?? null),
            //   anchor: 'end',
            //   align: 'end',
            //   font: {
            //     weight: 'bold',
            //     size: 16
            //   }
            // }
          }
        }}
      />
    </div>
    // </div>
  )
}

/// CUSTOM PLUGIN

// const image = new Image();
// image.src = '../public/flavor-meter_bg.png';

// const bgImagePlugin = {
//   id: 'customBackgroundImage',
//   beforeDraw: (chart: ChartJS) => {
//     if (image.complete) {
//       const ctx = chart.ctx;
//       const { top, left, width, height } = chart.chartArea;
//       const dx = left + width / 2 - image.width / 2;
//       const dy = top + height / 2 - image.height / 2;
//       ctx.drawImage(image, dx, dy);
//     } else {
//       image.onload = () => chart.draw();
//     }
//   }
// };