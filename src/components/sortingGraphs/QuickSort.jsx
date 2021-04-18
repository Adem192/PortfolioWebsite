import React, { Component } from 'react';
import * as d3 from 'd3';

class QuickSort extends Component {

  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount(){
    let accessToRef = d3.select(this.myRef.current);
    this.quickSort([84,1,41,62,26,61,22,21,15,34,64,77,56,53,81,16,79,44,65,31,45,100,85,69,40,39,66,92,29,80,52,2,9,86,3,89,59,75,28,55,46,78,10,94,19,38,83,93,24,6,14,96,57,97,91,36,72,12,27,90,42,54,87,5,8,95,23,7,35,37,47,73,48,30,82,20,98,58,33,17,49,68,67,76,13,43,32,25,74,71,63,4,18,50,11,60,51,88,99,70]);
  }

  async partition(arr, start, end){
      // Taking the last element as the pivot
      const pivotValue = arr[end];
      let pivotIndex = start;
      for (let i = start; i < end; i++) {
          if (arr[i] < pivotValue) {
          // Swapping elements
          [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
          // Moving to next element
          pivotIndex++;
          }
          this.drawChart(arr, pivotIndex, i);
          await this.sleep(10);
      }

      // Putting the pivot value in the middle
      [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
      return pivotIndex;
  };

  sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

  async quickSort(arr) {
      this.drawChart(arr);
      // Creating an array that we'll use as a stack, using the push() and pop() functions
      let stack = [];
      // Adding the entire initial array as an "unsorted subarray"
      stack.push(0);
      stack.push(arr.length - 1);

      // There isn't an explicit peek() function
      // The loop repeats as long as we have unsorted subarrays
      while(stack[stack.length - 1] >= 0){
          console.log(stack);
          console.log(arr);

            // Extracting the top unsorted subarray
      	     let end = stack.pop();
             let start = stack.pop();

             let pivotIndex = await this.partition(arr, start, end);

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
             //this.sleep(1000);
        }
    }

  drawChart(data, pivotIndex, comparisonIndex){
    const w = 500;
    const h = 400;

    d3.select(this.myRef.current).selectAll("*").remove()

    const accessToRef = d3.select(this.myRef.current)
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("background-color", "#ffffff")
      .style("padding", 10)
      .style("margin-left", 50);

    accessToRef.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 5)
      .attr("y", (d, i) => h - 4 * d)
      .attr("width", 4)
      .attr("height", (d, i) => d * 4)
      .attr("fill", function(d,i){
        if (i===pivotIndex) {
          return "red"
        } else if (i===comparisonIndex) {
          return "green"
        } else {
          return "#282c34"
        }
      });
  }

  render(){
    return <>
      <div ref={this.myRef}></div>
    </>
  }
}

export default QuickSort;
