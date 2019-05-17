
import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeCreatedProps } from '../../redux/actions/action';
import {  ChangeCreatedPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
import MainMarkMeta from './MainMarkMeta';
import { mapStateToPropsMainMarksType } from '../../types/redux/map-state-to-props';


const mapStateToProps = (state:reduxState): mapStateToPropsMainMarksType => ({
    mainMarkProps:  Object.assign({},state.createdProps)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    ChangeCreatedProps: (payload: ChangeCreatedPropsAction["payload"]) => (dispatch(ChangeCreatedProps(payload)))
})

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

class Created extends React.Component<Props>{

    render(){
        return (
            <MainMarkMeta 
            MainMarkCreaterName={"CreatedPropsCreater"} 
            ChangeMainMarkDispatch={this.props.ChangeCreatedProps} 
            MainMarkProps={this.props.mainMarkProps}>
            </MainMarkMeta>
        );
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Created);
