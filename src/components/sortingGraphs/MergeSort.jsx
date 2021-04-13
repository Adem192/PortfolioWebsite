import React, { Component } from 'react';
import * as d3 from 'd3';

class MergeSort extends Component {

  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount(){
    let accessToRef = d3.select(this.myRef.current);
    this.mergeSort([84,1,41,62,26,61,22,21,15,34,64,77,56,53,81,16,79,44,65,31,45,100,85,69,40,39,66,92,29,80,52,2,9,86,3,89,59,75,28,55,46,78,10,94,19,38,83,93,24,6,14,96,57,97,91,36,72,12,27,90,42,54,87,5,8,95,23,7,35,37,47,73,48,30,82,20,98,58,33,17,49,68,67,76,13,43,32,25,74,71,63,4,18,50,11,60,51,88,99,70]);
  }

  async mergeSort(arr) {
    var sorted = arr.slice(),
        n = sorted.length,
        buffer = [...sorted];

    for (var size = 1; size < n; size *= 2) {
      for (var leftStart = 0; leftStart < n; leftStart += 2*size) {
        var left = leftStart,
            right = Math.min(left + size, n),
            leftLimit = right,
            rightLimit = Math.min(right + size, n),
            i = left;
        console.log(i, left, right);
        [i, left, right] = await this.middleSmaller(left, leftLimit, right, rightLimit, buffer, sorted, i)
        console.log(i, left, right);
        await this.leftSmaller(left, leftLimit, buffer, sorted, i);
        await this.rightSmaller(right, rightLimit, buffer, sorted, i);
      }
      var temp = sorted,
          sorted = buffer,
          buffer = [...sorted];
    }
    this.drawChart(sorted, -1, -1, -1);
    console.log(sorted);
    return sorted;
  }

    async middleSmaller(left, leftLimit, right, rightLimit, buffer, sorted, i) {
      if (left < leftLimit && right < rightLimit) {
        await this.sleep(10);
        if (sorted[left] <= sorted[right]) {
          buffer[i++] = sorted[left++];
          this.drawChart(buffer, i, left, leftLimit);
        } else {
          buffer[i++] = sorted[right++];
          this.drawChart(buffer, i, right, rightLimit);
        }
        return await this.middleSmaller(left, leftLimit, right, rightLimit, buffer, sorted, i);
      } else {
        return [i, left, right];
      }
    }

    async rightSmaller(right, rightLimit, buffer, sorted, i) {
        if (right < rightLimit) {
          buffer[i++] = sorted[right++];
          await this.sleep(10);
          this.drawChart(buffer, i, right, rightLimit);
          this.rightSmaller(right, rightLimit, buffer, sorted, i);
        }
      }

      async leftSmaller(left, leftLimit, buffer, sorted, i) {
          if (left < leftLimit) {
            buffer[i++] = sorted[left++];
            await this.sleep(10);
            this.drawChart(buffer, i, left, leftLimit);
            this.leftSmaller(left, leftLimit, buffer, sorted, i);
          }
        }


  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  drawChart(data, j, dir, dirLimit){
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
          return "green"
        } else if (i===dir) {
          return "blue"
        } else if (i===dirLimit){
          return "red"
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

export default MergeSort;
