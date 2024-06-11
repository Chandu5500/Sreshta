import React from "react";

export class Register3 extends React.Component{
    constructor(){
        super();
        this.state = {
            Name: '',
            Price: 0,
            City: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
    }

    handleNameChange(e){
        this.setState({
            Name: e.target.value,
            Price: this.state.Price,
            City: this.state.City
        });
    }
    handlePriceChange(e){
        this.setState({
            Name: this.state.Name,
            Price: e.target.value,
            City: this.state.City
        })
    }
    handleCityChange(e){
        this.setState({
            Name: this.state.Name,
            Price: this.state.Price,
            City: e.target.value
        })
    }
    handleRegisterClick(){
        alert(JSON.stringify(this.state));
    }
    
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <dl>
                            <dt>Name</dt>
                            <dd><input type="text" onChange={this.handleNameChange} className="form-control" /></dd>
                            <dt>Price</dt>
                            <dd><input type="text" onChange={this.handlePriceChange.bind(this)} className="form-control" /></dd>
                            <dt>City</dt>
                            <dd>
                                <select onChange={this.handleCityChange} className="form-select">
                                    <option>Delhi</option>
                                    <option>Hyd</option>
                                </select>
                            </dd>
                        </dl>
                        <button onClick={this.handleRegisterClick} className="btn btn-primary w-100">Register</button>
                    </div>
                    <div className="col-9">
                        <dl>
                            <dt>Name</dt>
                            <dd>{this.state.Name}</dd>
                            <dt>Price</dt>
                            <dd>{this.state.Price}</dd>
                            <dt>City</dt>
                            <dd>{this.state.City}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        )
    }
}