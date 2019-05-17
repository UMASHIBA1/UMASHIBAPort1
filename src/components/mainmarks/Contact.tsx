
import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeContactProps } from '../../redux/actions/action';
import { ChangeContactPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
import MainMarkMeta from './MainMarkMeta';
import { mapStateToPropsMainMarksType } from '../../types/redux/map-state-to-props';




const mapStateToProps = (state:reduxState): mapStateToPropsMainMarksType => ({
    mainMarkProps:  Object.assign({},state.contactProps)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    ChangeContactProps: (payload: ChangeContactPropsAction["payload"]) => (dispatch(ChangeContactProps(payload)))
})

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;


class Contact extends React.Component<Props>{

    render(){
        return (
            <MainMarkMeta 
            MainMarkCreaterName={"ContactPropsCreater"} 
            ChangeMainMarkDispatch={this.props.ChangeContactProps} 
            MainMarkProps={this.props.mainMarkProps}>
            </MainMarkMeta>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);
