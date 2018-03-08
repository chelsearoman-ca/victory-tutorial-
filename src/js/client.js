import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup} from 'victory';

const data = {
  "data":{
    "venues":[
      {
        "name": "Punto Gelato",
        "totalSalesByDate":[
          {
            "date": new Date(2018, 3, 9),
            "totalSales": 34
          },{
            "date": new Date(2018, 3, 8),
            "totalSales": 78
          },{
            "date": new Date(2018, 3, 7),
            "totalSales": 132
          },{
            "date": new Date(2018, 3, 6),
            "totalSales": 32
          },{
            "date": new Date(2018, 3, 5),
            "totalSales": 98
          },{
            "date": new Date(2018, 3, 4),
            "totalSales": 63
          },{
            "date": new Date(2018, 3, 3),
            "totalSales": 56
          },{
            "date": new Date(2018, 3, 2),
            "totalSales": 134
          },
        ]
      },{
        "name": "The Grow Op",
        "totalSalesByDate":[
          {
            "date": new Date(2018, 3, 9),
            "totalSales": 163
          },{
            "date": new Date(2018, 3, 8),
            "totalSales": 87
          },{
            "date": new Date(2018, 3, 7),
            "totalSales": 112
          },{
            "date": new Date(2018, 3, 6),
            "totalSales": 133
          },{
            "date": new Date(2018, 3, 5),
            "totalSales": 129
          },{
            "date": new Date(2018, 3, 4),
            "totalSales": 240
          },{
            "date": new Date(2018, 3, 3),
            "totalSales": 217
          },{
            "date": new Date(2018, 3, 2),
            "totalSales": 122
          },
        ]
      },{
        "name": "Rialto Coffee",
        "totalSalesByDate":[
          {
            "date": new Date(2018, 3, 9),
            "totalSales": 200
          },{
            "date": new Date(2018, 3, 8),
            "totalSales": 89
          },{
            "date": new Date(2018, 3, 7),
            "totalSales": 54
          },{
            "date": new Date(2018, 3, 6),
            "totalSales": 78
          },{
            "date": new Date(2018, 3, 5),
            "totalSales": 186
          },{
            "date": new Date(2018, 3, 4),
            "totalSales": 210
          },{
            "date": new Date(2018, 3, 3),
            "totalSales": 211
          },{
            "date": new Date(2018, 3, 2),
            "totalSales": 76
          },
        ]
      },{
        "name": "Glory Hole Donuts",
        "totalSalesByDate":[
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
        ]
      }
    ]
  }
}

class Main extends React.Component {
  render() {
    console.log(data.data.venues[0].totalSalesByDate)
    const newData = data.data.venues[0].totalSalesByDate
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
            <VictoryGroup offset={20}
              colorScale={"qualitative"}
            >
              {data.data.venues.map( venueData => {
                console.log("hello venue", venueData)
                return(
                 <VictoryBar
                     data={venueData.totalSalesByDate}
                    x="date"
                    y="totalSales"
                  />
                )
              })}



            </VictoryGroup>

        </VictoryChart>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
