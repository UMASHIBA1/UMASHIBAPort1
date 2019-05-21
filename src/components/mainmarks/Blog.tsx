import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeBlogProps, ChangeBlogContentProps } from '../../redux/actions/action';
import { ChangeBlogPropsAction, ChangeBlogContentPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
import MainMarkMeta from './MainMarkMeta';
import { mapStateToPropsMainMarksType } from '../../types/redux/map-state-to-props';


const mapStateToProps = (state:reduxState):mapStateToPropsMainMarksType => ({
    mainMarkProps:  Object.assign({},state.blogProps)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    ChangeBlogProps: (payload: ChangeBlogPropsAction["payload"]) => (dispatch(ChangeBlogProps(payload))),
    ChangeBlogContentProps: (payload: ChangeBlogContentPropsAction["payload"]) => (dispatch(ChangeBlogContentProps(payload)))
})


type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

class Blog extends React.Component<Props>{

    render(){
        return (
            <MainMarkMeta 
            contentType={"Blog"} 
            ChangeMainMarkDispatch={this.props.ChangeBlogProps} 
            mainMarkProps={this.props.mainMarkProps}
            ChangeContentDispatch={this.props.ChangeBlogContentProps}
            >
            </MainMarkMeta>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Blog);
