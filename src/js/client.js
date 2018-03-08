import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup} from 'victory';

// const data = {
//   "data":{
//     "venues":[
//       {
//         "name": "Punto Gelato",
//         "totalSalesByDate":[
//           {
//             "date": '03092018',
//             "totalSales": 34
//           },{
//             "date": '03082018',
//             "totalSales": 78
//           },{
//             "date": '03072018',
//             "totalSales": 132
//           },{
//             "date": '03062018',
//             "totalSales": 32
//           },{
//             "date": '03052018',
//             "totalSales": 98
//           },{
//             "date": '03042018',
//             "totalSales": 63
//           },{
//             "date": '03032018',
//             "totalSales": 56
//           },{
//             "date": '03022018',
//             "totalSales": 134
//           },
//         ]
//       }
//     ]
//   }
// }
      // ,{
//         "name": "The Grow Op",
//         "totalSalesByDate":[
//           {
//             "date": 03092018,
//             "totalSales": 163
//           },{
//             "date": 03082018,
//             "totalSales": 87
//           },{
//             "date": 03072018,
//             "totalSales": 112
//           },{
//             "date": 03062018,
//             "totalSales": 133
//           },{
//             "date": 03052018,
//             "totalSales": 129
//           },{
//             "date": 03042018,
//             "totalSales": 240
//           },{
//             "date": 03032018,
//             "totalSales": 217
//           },{
//             "date": 03022018,
//             "totalSales": 122
//           },
//         ]
//       },{
//         "name": "Rialto Coffee",
//         "totalSalesByDate":[
//           {
//             "date": 03092018,
//             "totalSales": 200
//           },{
//             "date": 03082018,
//             "totalSales": 89
//           },{
//             "date": 03072018,
//             "totalSales": 54
//           },{
//             "date": 03062018,
//             "totalSales": 78
//           },{
//             "date": 03052018,
//             "totalSales": 186
//           },{
//             "date": 03042018,
//             "totalSales": 210
//           },{
//             "date": 03032018,
//             "totalSales": 211
//           },{
//             "date": 03022018,
//             "totalSales": 76
//           },
//         ]
//       },{
//         "name": "Glory Hole Donuts",
//         "totalSalesByDate":[
          // {
          //   "date": 03092018,
          //   "totalSales": 132
          // },{
          //   "date": 03082018,
          //   "totalSales": 109
          // },{
          //   "date": 03072018,
          //   "totalSales": 232
          // },{
          //   "date": 03062018,
          //   "totalSales": 248
          // },{
          //   "date": 03052018,
          //   "totalSales": 89
          // },{
          //   "date": 03042018,
          //   "totalSales": 64
          // },{
          //   "date": 03032018,
          //   "totalSales": 134
          // },{
          //   "date": 03022018,
          //   "totalSales": 170
          // },
//         ]
//       }
//     ]
//   }
// }

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Victory Tutorial</h1>
        <VictoryChart
          // domainPadding will add space to each side of VictoryBar to
          // prevent it from overlapping the axis
          height={1000}
          width={1000}
          domainPadding={{ x: 10, y: [1, 20] }}
          scale={{ x: "time" }}
          >
            <VictoryGroup
              offset={20}
              colorScale={"qualitative"}>
              {/* <VictoryAxis
                  tickFormat={(x) => new Date(x).getFullYear()}
                /> */}
              {/* <VictoryBar
              data={} x="date" y="totalSales"
            /> */}

            <VictoryBar
            data={[
              {
                "date": new Date(2018, 3, 9),
                "totalSales": 132
              },{
                "date": new Date(2018, 3, 8),
                "totalSales": 109
              },{
                "date": new Date(2018, 3, 7),
                "totalSales": 232
              },{
                "date": new Date(2018, 3, 6),
                "totalSales": 248
              },{
                "date": new Date(2018, 3, 5),
                "totalSales": 89
              },{
                "date": new Date(2018, 3, 4),
                "totalSales": 64
              },{
                "date": new Date(2018, 3, 3),
                "totalSales": 134
              },{
                "date": new Date(2018, 3, 2),
                "totalSales": 170
              },
            ]}
            x="date" y="totalSales"
          />
        </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
