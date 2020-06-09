import React from 'react';
import {CustomizedTables} from './CustomizedTables'
import { connect } from 'react-redux';
import { getStocklist } from '../actions/stockApp';

class StockDetails extends React.Component{
    componentDidMount(){
        const interval = setInterval(() => {
            this.props.getStockList();
          }, 10000);
    }
    render(){
        return(
            <div>
                <CustomizedTables stocks={this.props.stock}/>
            </div>
        )
    }
};
const mapStateToProps = ({ stockInfo }) => {
    return {
        isLoading: stockInfo.isFetching,
        stock: stockInfo.stock,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getStockList: () => dispatch(getStocklist.request())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StockDetails);
//export default StockDetails;