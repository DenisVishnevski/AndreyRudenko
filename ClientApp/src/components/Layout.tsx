import * as React from 'react';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { bindActionCreators } from 'redux';
import { changeIsClick } from '../store/actions';
import { connect } from 'react-redux';

interface Props {
    children: ReactNode
    isClick: number
    changeIsClick: any
}
class Layout extends React.Component<Props> {
    constructor(props: any) {
        super(props);
        this.click = this.click.bind(this);
    }
    click() {
        this.props.changeIsClick(this.props.isClick + 1);
    }
    render() {
        return (
            <div onClick={this.click}>
                {/*<Grid />*/}
                <Header />
                <div>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
        isClick: state.isClick
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeIsClick: bindActionCreators(changeIsClick, dispatch)
    }
}
let LayoutWrapper = connect(mapStateToProps, mapDispatchToProps)(Layout);
export default LayoutWrapper;