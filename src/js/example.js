const labelSelector = p => parseFloat(p[1]) * 100;
const xSelector = p => new Date(p[0]);
const ySelector = p => parseFloat(p[1]) * 100;

const PrimaryTimelineChart: React.StatelessComponent<{ data: any[] }> = ({ data }) => (
  <VictoryChart>
    {data.map(chart => (
      <VictoryGroup
        key={chart.graph.id}
        data={chart.dataPoints}
        x={xSelector}
        y={ySelector}
        labels={labelSelector}
        labelComponent={<VictoryTooltip />}
        scale={{x: 'time', y: 'linear'}}>
        <VictoryLine style={{data: { stroke: chart.graph.color }}} />
        <VictoryScatter style={{data: { fill: chart.graph.color }}} />
      </VictoryGroup>
    ))}

    {/* Shared axis (time) */}
    <VictoryAxis
      fixLabelOverlap
      scale="time" />

    <VictoryAxis dependentAxis />
  </VictoryChart>
);
