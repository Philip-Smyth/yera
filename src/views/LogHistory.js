import React, { Component } from 'react';
import Heading from './components/Header';
import { Container, Card, Header, Divider } from 'semantic-ui-react'
import { HeatMapGrid } from "react-grid-heatmap";
import { withRouter } from "react-router-dom";

const xLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
const historyData = [
  [
    {day: "1", eventsCount: 2},
    {day: "2", eventsCount: 0},
    {day: "3", eventsCount: 3},
    {day: "4", eventsCount: 5},
    {day: "5", eventsCount: 6},
    {day: "6", eventsCount: 3},
    {day: "7", eventsCount: 0},
    {day: "8", eventsCount: 0},
    {day: "9", eventsCount: 1},
    {day: "10", eventsCount: 0},
    {day: "11", eventsCount: 2},
    {day: "12", eventsCount: 0},
    {day: "13", eventsCount: 3},
    {day: "14", eventsCount: 5},
    {day: "15", eventsCount: 6},
    {day: "16", eventsCount: 3},
    {day: "17", eventsCount: 0},
    {day: "18", eventsCount: 0},
    {day: "19", eventsCount: 1},
    {day: "20", eventsCount: 0},
    {day: "21", eventsCount: 2},
    {day: "22", eventsCount: 0},
    {day: "23", eventsCount: 3},
    {day: "24", eventsCount: 5},
    {day: "25", eventsCount: 6},
    {day: "26", eventsCount: 3},
    {day: "27", eventsCount: 0},
    {day: "28", eventsCount: 0},
    {day: "29", eventsCount: 1},
    {day: "30", eventsCount: 0},
  ]
]
/**
 * when the code gives us the day, we need to determine the beginning placement of that 
 * day, so we have a check of day, and map the day with the initial placement of the 
 * events, then we carry on as normal.
 * 
 * We drag out the day number/date and the events count
 * we use these to add to the label and then also use it 
 * for the data value
 * These will likwlt need to be split in some way
 */
const yLabels = new Array(24).fill(0).map((_, i) => `${i}`)

 const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 50 + 50))
  )

console.log(data);

class LogHistory extends Component {

  render() {
    const { history } = this.props;
    return (
      <div>
        <Container>
          <Heading
            header="Log History"
            subheader="Lets take a look at past events"
          />
          <Card fluid>
            <br></br>
            <Header textAlign='center' as='h1'>Events over the months</Header>
            <Divider />
            <HeatMapGrid
              data={data}
              xLabels={xLabels}
              // Reder cell with tooltip
              cellRender={(x, y, value) => (
                <div title={`Pos(${x}, ${y}) = ${value}`}>{value}</div>
              )}
              // xLabelsStyle={index => ({
              //   color: index % 2 ? "transparent" : "#777",
              //   fontSize: ".65rem"
              // })}
              // yLabelsStyle={() => ({
              //   fontSize: ".65rem",
              //   textTransform: "uppercase",
              //   color: "#777"
              // })}
              // cellStyle={(_x, _y, ratio) => ({
              //   background: `rgb(12, 160, 44, ${ratio})`,
              //   fontSize: ".7rem",
              //   color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
              // })}
              cellHeight="1.5rem"
              xLabelsPos="bottom"
              onClick={() => history.push("/daily")}
              // yLabelsPos="right"
              // square
            />
          </Card>
        </Container>
      </div>
    );
  }
}

export default withRouter(LogHistory);
