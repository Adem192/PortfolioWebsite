import React, { Component } from 'react';
import '../../css/Main.css';
import QuickSort from '../../components/sortingGraphs/QuickSort';
import MergeSort from '../../components/sortingGraphs/MergeSort';
import InsertionSort from '../../components/sortingGraphs/InsertionSort';

class Projects extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Quick Sort</h1>
        <QuickSort />
        <h1>Merge Sort</h1>
        <MergeSort />
        <h1>Insertion Sort</h1>
        <InsertionSort />
      </div>
    )
  }

}

export default Projects;
