import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
// import SizeOverTime from "../LineGraph"
// import Test from "../PieChart/test_transition"
// import PieChart from "../PieChart/oldIndex"
// import PieCharts from "../PieChart"
// import BarChart from "../BarChart"

// const CellaredSOTdata = require("./mock_data/bottlesovertime.json").map((d) => [
//   Math.max(0, d.Date),
//   Math.max(0, d.Cellared),
// ])
// const PriceSOTdata = require("./mock_data/priceovertime.json").map((d) => [
//   Math.max(0, d.Date),
//   Math.max(0, d.Price),
// ])

// const largeCellaredOTdata =
//   require("./mock_data/largebottlesovertime.json").map((d) => [
//     Math.max(0, d.Date),
//     Math.max(0, d.Cellared),
//   ])

// const wineByYear = require("./mock_data/winebyyear.json")
// const wineByCountry = require("./mock_data/winebycountry.json")
// const wineByCountryForBarChart = require("./mock_data/winebycountry.json").Children

export function CentralChart() {
  // const [dataArr, setDataArr] = useState([
  //   {
  //     data: PriceSOTdata,
  //     name: "Price over Time",
  //     key: 1,
  //   },
  //   {
  //     data: CellaredSOTdata,
  //     name: "Cellared over Time",
  //     key: 0,
  //   },
  // ])

  // const [dataPreview, setDataPreview] = useState({ 0: 0, 1: 1 })
  // const [barChartDatumName, setBarChartDatumName] = useState("Year")
  // const [barChartData, setBarChartData] = useState(wineByYear)

  // //very temp idea lol
  // const [barChartIndex, setBarChartIndex] = useState(0)
  return (
    <View>
      <Text>Hola</Text>
    </View>
  )

  // return (
  //   <View>
  //     {/* <View>         */}
  //       {/* <SizeOverTime
  //         h={600}
  //         w={600}
  //         data={dataArr}
  //         dataPreview={dataPreview}
  //         setDataPreview={setDataPreview}
  //       /> */}
  //     <Text>Hello! </Text>
  //     {/* <BarChart total_height={500} total_width={500} data={barChartData} fieldname={barChartDatumName}/>
  //     <button onClick={() => {
  //       if(barChartIndex % 2 === 0){
  //         setBarChartData(wineByCountryForBarChart)
  //         setBarChartDatumName("Country")
  //       }
  //       else {
  //         setBarChartData(wineByYear)
  //         setBarChartDatumName("Year")

  //       }
  //       setBarChartIndex((index) => index + 1)
  //     }}>
  //       Change Bar Chart Dataset</button>

  //     <View>
  //     <PieCharts height={500} width={500} data={wineByCountry} />
  //     </View> */}
  //     {/* <PieChart height={500} width={500} data={wineByCountry} /> */}
  //     {/* </View> */}
  //   </View>
  // )
}

