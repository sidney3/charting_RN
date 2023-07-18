import React, { useState, useEffect, useRef } from "react"
import * as d3 from "d3"
import { DEFAULT_OFFSETS } from "../../constants"
import {View, Text} from 'react-native'
import {Canvas, SVG} from '@shopify/react-native-skia'

export default function BarChart({ total_height, total_width, data, fieldname }) {
  const svgRef = useRef(null)
  
  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);
      // Use D3 methods to modify the SVG element
      // For example, adding a circle
      svg
        .append('circle')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r', 20)
        .attr('fill', 'red');
    }


  }, [])


  return (
    <View>

      <Canvas>
        <SVG>
          {/* Add D3 components here*/}
        </SVG>
      </Canvas>
    </View>
  )
}

// export default BarChart
