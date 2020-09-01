import React from "react";
import './App.css';

class Voucher extends React.Component{
    render(){
        return(
            <table>
                <tr>
                    <th>Voucher Name</th>
                    <th>Discount Amount (Off)</th>
                </tr>
                <tr>
                    <td>NTUC Voucher</td>
                    <td>$8</td>
                </tr>
                <tr>
                    <td>NTUC Voucher</td>
                    <td>$10</td>
                </tr>
                <tr>
                    <td>Old Chang Kee Voucher</td>
                    <td>$6</td>
                </tr>
            </table>
        );
    }
}

export default Voucher;