import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import './GraphView.css'
am4core.useTheme(am4themes_animated);

class GraphView extends Component {
    chart: any;
    componentDidMount() {
        let chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
        let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
        let main_node_size = 800;
        let sub_node_size = 600;
        let last_node_size = 400;
        series.data = [
            {
                name: 'Front-End',
                value: main_node_size,
                children: [
                    {
                        name: 'Basic',
                        value: sub_node_size,
                        children: [
                            {
                                name: 'HTML 5',
                                value: last_node_size,
                            },
                            {
                                name: 'Laravel',
                                value: last_node_size,
                            },
                            {
                                name: 'Vue',
                                value: last_node_size,
                            },
                        ],
                    },
                    {
                        name: 'Intermediate',
                        value: sub_node_size,
                        children: [
                            {
                                name: 'React',
                                value: last_node_size,
                            },
                        ]
                    },
                    {
                        name: 'Expert',
                        value: sub_node_size,
                        children: [
                            {
                                name: 'Flutter',
                                value: last_node_size,
                            },
                        ]
                    },
                ],
            },
            {
                name: 'Back-End',
                value: main_node_size,
                children: [
                    {
                        name: 'Basic',
                        value: sub_node_size,
                        children: [
                            {
                                name: 'Node.js',
                                value: last_node_size,
                            },
                            {
                                name: 'Springboot',
                                value: last_node_size,
                            },
                            {
                                name: 'Flask',
                                value: last_node_size,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Other',
                value: main_node_size,
                children: [
                    {
                        name: 'Basic',
                        value: sub_node_size,
                        children: [
                            {
                                name: 'Go',
                                value: last_node_size,
                            },
                            {
                                name: 'Php',
                                value: last_node_size,
                            },
                            {
                                name: 'Docker',
                                value: last_node_size,
                            },
                        ],
                    },
                    {
                        name: 'Intermediate',
                        value: sub_node_size,
                        children: [
                            {
                                name: 'C',
                                value: last_node_size,
                            },
                            {
                                name: 'Typescript',
                                value: last_node_size,
                            },
                            {
                                name: 'Python',
                                value: last_node_size,
                            },
                            {
                                name: 'Git',
                                value: last_node_size,
                            },
                        ],
                    },
                    {
                        name: 'Expert',
                        value: sub_node_size,
                        children: [
                            {
                                name: 'Dart',
                                value: last_node_size,
                            },
                            {
                                name: 'Java',
                                value: last_node_size,
                            },
                            {
                                name: 'Shell',
                                value: last_node_size,
                            },
                        ],
                    },
                ],
            },
        ];

        series.dataFields.linkWith = "linkWith";
        series.dataFields.name = "name";
        series.dataFields.id = "name";
        series.dataFields.value = "value";
        series.dataFields.children = "children";

        series.nodes.template.tooltipText = "{name}";
        series.nodes.template.fillOpacity = 1;

        series.nodes.template.label.text = "{name}"
        series.fontSize = 16;
        series.maxLevels = 2;
        series.maxRadius = am4core.percent(6);
        series.manyBodyStrength = -16;
        series.nodes.template.label.hideOversized = true;
        series.nodes.template.label.truncate = true;
        this.chart = chart;
    }
    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
    render() {
        return (
            <div>
                <div style={{textAlign:'center'}}>
                    <h1><b>PROGRAMING SKILLS</b></h1>
                </div>
                <div id="chartdiv" className='graph-views'></div>
            </div>
        );
    }
}

export default GraphView;
