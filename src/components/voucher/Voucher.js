import React from "react";
import axios from 'axios';

class Voucher extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user_info: 0
        };
        this.username = localStorage.getItem('CognitoIdentityServiceProvider.7onc1lch198q81avn7tfmc190m.LastAuthUser')
        this.redeemVoucher = this.redeemVoucher.bind(this)
    }

    componentDidMount() {
        axios.get(`https://oa27ptvv12.execute-api.ap-southeast-1.amazonaws.com/prod/user-info`,{headers:{username:"Xeroz"}})
            .then(res => {
                const user_info = res.data.user.Item;
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
                    <tr id="first-row">
                        <td>Voucher Name</td>
                        <td>Discount Percentage</td>
                        <td>Points Cost</td>
                        <td>Redemption</td>
                    </tr>
                    <tr>
                        <td>NTUC Voucher</td>
                        <td>10%</td>
                        <td>5</td>
                        <td><button onClick={this.redeemVoucher}>Redeem</button></td>
                    </tr>
                </table>
            </body>
        );
    }

    redeemVoucher(event) {
        const requestBody = {
            username: this.username,
            balance: this.state.user_info.Balance
        }

        axios.post(`https://oa27ptvv12.execute-api.ap-southeast-1.amazonaws.com/prod/vouchers`, requestBody)
            .then((response) => {
                //Redirect to thank you screen
                window.location.href = "/thank";
            })
            .catch((error) => {
                console.log("ERROR")
            })
    }
}

export default Voucher;