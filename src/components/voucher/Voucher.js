import React from "react";
import axios from 'axios';

class Voucher extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          user_info: 0
        };
        this.redeemVoucher = this.redeemVoucher.bind(this)
    }

    componentDidMount() {
        axios.get(`https://oa27ptvv12.execute-api.ap-southeast-1.amazonaws.com/prod/user-info`,{headers:{user_id:"0"}})
            .then(res => {
                const user_info = res.data.path.Item;
                console.log(user_info)
                this.setState({user_info: user_info})
            })
    }

    render(){
        return(
            <body id="voucher_page">
                <h1>Redeem your vouchers! </h1>
                <div>
                    <p id="balance">Points Balance: {this.state.user_info.Balance}</p>
                </div>
                <table>
                    <tr>
                        <th>Voucher Name</th>
                        <th>Discount Percentage</th>
                        <th>Redemption</th>
                    </tr>
                    <tr>
                        <td>NTUC Voucher</td>
                        <td>10%</td>
                        <td><button onclick={this.redeemVoucher}>Redeem</button></td>
                    </tr>
                </table>
            </body>
        );
    }

    // redeemVoucher(event) {
    //     event.preventDefault()
    //     const user_id = 
    // }
}

export default Voucher;