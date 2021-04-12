import React, { Component } from 'react';
import * as d3 from 'd3';

class BarChart extends Component {

  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount(){
    let accessToRef = d3.select(this.myRef.current);
    this.quickSort([15,1,18,12,7,13,5,8,17,19,9,4,3,6,2,20,14,10,16,11]);
  }

  partition(arr, start, end){
      // Taking the last element as the pivot
      const pivotValue = arr[end];
      let pivotIndex = start;
      let i = start;
      this.iteratePartiton(i, end, pivotIndex, pivotValue, arr);
      // Putting the pivot value in the middle
      [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
      return pivotIndex;
  };

  sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    }
      while (currentDate - date < milliseconds);
  }

  quickSort(arr) {
      this.drawChart(arr);
      // Creating an array that we'll use as a stack, using the push() and pop() functions
      let stack = [];
      // Adding the entire initial array as an "unsorted subarray"
      stack.push(0);
      stack.push(arr.length - 1);

      // There isn't an explicit peek() function
      // The loop repeats as long as we have unsorted subarrays
      this.iterate(arr,stack);
    }

  iterate(arr,stack){
    //setTimeout(() => {
    if (stack[stack.length - 1] >= 0){
        console.log(stack);
        console.log(arr);
          // Extracting the top unsorted subarray
           let end = stack.pop();
           let start = stack.pop();

           let pivotIndex = this.partition(arr, start, end);

           // If there are unsorted elements to the "left" of the pivot,
           // we add that subarray to the stack so we can sort it later
           if (pivotIndex - 1 > start){
              stack.push(start);
                stack.push(pivotIndex - 1);
           }

           // If there are unsorted elements to the "right" of the pivot,
           // we add that subarray to the stack so we can sort it later
           if (pivotIndex + 1 < end){
              stack.push(pivotIndex + 1);
                stack.push(end);
           }
           this.drawChart(arr);
           this.iterate(arr,stack);
      }
    //}, 200);
  }

  iteratePartiton(i, end, pivotIndex, pivotValue, arr){
    //setTimeout(() => {
      if (i < end) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
        let j = i+1;
        console.log(j);
        this.drawChart(arr);
        this.iteratePartiton(j, end, pivotIndex, pivotValue, arr);
      }
    //}, 200);
  }

  drawChart(data){
    const w = 500;
    const h = 400;

    d3.select(this.myRef.current).selectAll("*").remove()

    const accessToRef = d3.select(this.myRef.current)
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("background-color", "#cccccc")
      .style("padding", 10)
      .style("margin-left", 50);

    accessToRef.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 15)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 10)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "tomato");
  }

  render(){
    return <>
      <div ref={this.myRef}></div>
    </>
  }
}

export default BarChart;
