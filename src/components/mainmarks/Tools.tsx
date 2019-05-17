import { ChangeToolsProps } from '../../redux/actions/action';
import { ChangeToolsPropsAction, } from '../../types/redux/actions';
import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import MainMarkMeta from './MainMarkMeta';
import { mapStateToPropsMainMarksType } from '../../types/redux/map-state-to-props';



const mapStateToProps = (state:reduxState): mapStateToPropsMainMarksType => ({
    mainMarkProps:  Object.assign({},state.toolsProps)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    ChangeToolsProps: (payload: ChangeToolsPropsAction["payload"]) => (dispatch(ChangeToolsProps(payload)))
})

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

class Tools extends React.Component<Props>{

    render(){
        return (
            <MainMarkMeta
            MainMarkCreaterName={"ToolsPropsCreater"} 
            ChangeMainMarkDispatch={this.props.ChangeToolsProps} 
            MainMarkProps={this.props.mainMarkProps}>
            </MainMarkMeta>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tools);
