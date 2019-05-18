import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeToolsContentProps } from '../../redux/actions/action';
import { ChangeToolsContentPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
// import { ChangeAboutMeContentPropsActionWithDispatch } from '../../types/redux/map-dispatch-to-props';
import ContentMeta from './ContentMeta';

const mapStateToProps = (state:reduxState) => ({
    contentProps: Object.assign({},state.toolsContentProps)
});

const mapDispatchToProps =(dispatch:Dispatch) => ({
    ChangeToolsContentProps: (payload: ChangeToolsContentPropsAction["payload"]) => (dispatch(ChangeToolsContentProps(payload)))
});

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps >;

class ToolsContent extends React.Component<Props> {
    render(){
        return(
            <ContentMeta 
            ChangeMainMarkDispatch={this.props.ChangeToolsContentProps}
            ContentProps={this.props.contentProps}>
            </ContentMeta>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ToolsContent);
