import React, { Component } from 'react';
import * as d3 from 'd3';

class InsertionSort extends Component {

  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount(){
    let accessToRef = d3.select(this.myRef.current);
    this.insertionSort([84,1,41,62,26,61,22,21,15,34,64,77,56,53,81,16,79,44,65,31,45,100,85,69,40,39,66,92,29,80,52,2,9,86,3,89,59,75,28,55,46,78,10,94,19,38,83,93,24,6,14,96,57,97,91,36,72,12,27,90,42,54,87,5,8,95,23,7,35,37,47,73,48,30,82,20,98,58,33,17,49,68,67,76,13,43,32,25,74,71,63,4,18,50,11,60,51,88,99,70]);
  }

  sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

  drawChart(data, j, k){
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
        if (i===j) {
          return "red"
        } else if (i===k) {
          return "green"
        } else {
          return "#282c34"
        }
      });
  }

  async insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i];
        let j = i;
        j = await this.iterateInsert(arr, i, j, value);
        arr[j] = value;
    }
    this.drawChart(arr);
  }

  async iterateInsert(arr, i, j, value){
    if (j > 0 && arr[j - 1] > value){
        arr[j] = arr[j - 1]
        j = j - 1;
        await this.sleep(10);
        this.drawChart(arr, i, j);
        j = await this.iterateInsert(arr, i, j, value);
    }
      return j;
  }

  render(){
    return <>
      <div ref={this.myRef}></div>
    </>
  }
}

export default InsertionSort;
