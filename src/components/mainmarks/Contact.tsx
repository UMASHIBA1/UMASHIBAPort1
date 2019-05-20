
import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeContactProps, ChangeContactContentProps } from '../../redux/actions/action';
import { ChangeContactPropsAction, ChangeContactContentPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
import MainMarkMeta from './MainMarkMeta';
import { mapStateToPropsMainMarksType } from '../../types/redux/map-state-to-props';




const mapStateToProps = (state:reduxState): mapStateToPropsMainMarksType => ({
    mainMarkProps:  Object.assign({},state.contactProps)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    ChangeContactProps: (payload: ChangeContactPropsAction["payload"]) => (dispatch(ChangeContactProps(payload))),
    ChangeContactContentProps: (payload: ChangeContactContentPropsAction["payload"]) => (dispatch(ChangeContactContentProps(payload)))
})

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;


class Contact extends React.Component<Props>{

    render(){
        return (
            <MainMarkMeta 
            contentType={"Contact"} 
            ChangeMainMarkDispatch={this.props.ChangeContactProps} 
            mainMarkProps={this.props.mainMarkProps}
            ChangeContentDispatch={this.props.ChangeContactContentProps}>
            </MainMarkMeta>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);
