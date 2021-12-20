import React from 'react';

const TableHeader = () => { 
    // boilerplate table header functional component
    return (
        <thead>
            <tr>
                <th>City Name OR Zipcode</th>
                <th>Weather Report</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    // boilerplate table body functional component 
    // we use Array.map to create table rows from LinkData passed via props
    const rows = props.linkData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.cityName}</td>
                <td><a href={row.URL}>{row.URL}</a></td>
                <td><button onClick={() => props.removeLink(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const WeatherTable = (props) => {
    const { linkData, removeLink } = props;
    {/*TODO - return <table> component, TableHeader and TableBody  */}
    return (<table>
        <div>
            <TableHeader/>
            <TableBody linkData={linkData} removeLink={removeLink} />
        </div>
        </table> )

}

export default WeatherTable;