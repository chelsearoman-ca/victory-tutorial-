import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, Bar} from 'victory';

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
            "totalSales": 400
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
            "totalSales": 400
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




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      style: {
        data: { fill: "tomato" }
      }
    };
  }

  render() {
	const Punto = data.data.venues[0].totalSalesByDate
    const GrowOp = data.data.venues[1].totalSalesByDate
    const Rialto = data.data.venues[2].totalSalesByDate
    const handleMouseOver = () => {
      const fillColor = this.state.clicked ? "blue" : "tomato";
      const clicked = !this.state.clicked;
      this.setState({
        clicked,
        style: {
          data: { fill: fillColor }
        }
      });
    };

    return (
      <div>
        <VictoryChart height={400} width={400}
          domainPadding={{ x: 50, y: [0, 20] }}
          scale={{ x: "time" }}
        >
        	<VictoryGroup offset={10} colorScale={"qualitative"}>
        		<VictoryBar

            data={Rialto}
          x="date"
          y="totalSales"

          />

        		<VictoryBar

            data={Punto}
          x="date"
          y="totalSales"

          />
          <VictoryBar
            dataComponent={
              <Bar events={{ onMouseOver: handleMouseOver }}/>
            }
            style={this.state.style}
            data={GrowOp}
            x="date"
            y="totalSales"
          />

        	</VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
 }
const app = document.getElementById('app');
ReactDOM.render(<App/>, mountNode);
