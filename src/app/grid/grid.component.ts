import { Component, OnInit } from '@angular/core';

import Grid from 'tui-grid';

import { DmnService } from '../dmn.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  instance;
  decisionTable;

  constructor(
    private dmnService: DmnService
  ) { }

  ngOnInit() {


    this.instance = new Grid({
      el: ('#grid'), // Container element
      columns: [
        {
          title: 'Number',
          name: 'number'
        }
      ],
      data: [
        {
          number: '1'
        }
      ]
    });

    Grid.applyTheme('striped');

    this.decisionTable = this.dmnService.parse();
  }

  launch() {
    //console.log(this.dmnService.response);
    this.decisionTable = this.dmnService.response.drgElements[0].decisionTable;
    console.log(this.decisionTable)

    //Extract grid columns
    const columns = this.instance.getColumns();

    //Push inputs
    let inputCount = 0;
    this.decisionTable.input.forEach(input => {
      columns.push({
        title: `Input${inputCount}${input.id}`,
        name: `input${inputCount}`
      });
      inputCount++;
    });

    //Push outputs
    let outputCount = 0;
    this.decisionTable.output.forEach(output => {
      columns.push({
        title: `Output${outputCount}${output.id}`,
        name: `output${outputCount}`
      });
      outputCount++;
    });

    this.instance.setColumns(columns);

    //Lets go for the data
    const rows = new Array();
    let rowCount = 0;
    this.decisionTable.rule.forEach(rule => {
      const row = {};

      row['number'] = rowCount;
      //Input entries
      let counter = 0;
      rule.inputEntry.forEach(inputEntry => {
        row[`input${counter}`] = inputEntry.text;
        counter++;
      });

      //Output entries
      counter = 0;
      rule.outputEntry.forEach(outputEntry => {
        row[`output${counter}`] = outputEntry.text;
        counter++;
      });

      rows.push(row);
      rowCount++;
    });
    this.instance.setData(rows);
    console.log(this.instance.getRows());
    console.log(this.instance.getColumns());

  }
}
