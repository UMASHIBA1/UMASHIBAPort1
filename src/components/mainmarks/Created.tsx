import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeCreatedProps, ChangeCreaetedContentProps } from '../../redux/actions/action';
import {  ChangeCreatedPropsAction, ChangeCreatedContentPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
import MainMarkMeta from './MainMarkMeta';
import { mapStateToPropsMainMarksType } from '../../types/redux/map-state-to-props';


const mapStateToProps = (state:reduxState): mapStateToPropsMainMarksType => ({
    mainMarkProps:  Object.assign({},state.createdProps)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    ChangeCreatedProps: (payload: ChangeCreatedPropsAction["payload"]) => (dispatch(ChangeCreatedProps(payload))),
    ChangeCreatedContentProps: (payload: ChangeCreatedContentPropsAction["payload"]) => (dispatch(ChangeCreaetedContentProps(payload)))
})

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

class Created extends React.Component<Props>{

    render(){
        return (
            <MainMarkMeta 
            contentType={"Created"} 
            ChangeMainMarkDispatch={this.props.ChangeCreatedProps} 
            MainMarkProps={this.props.mainMarkProps}
            ChangeContentDispatch={this.props.ChangeCreatedContentProps}>
            </MainMarkMeta>
        );
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Created);
