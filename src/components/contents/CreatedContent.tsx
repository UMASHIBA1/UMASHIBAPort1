import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeCreaetedContentProps } from '../../redux/actions/action';
import { ChangeCreatedContentPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
// import { ChangeAboutMeContentPropsActionWithDispatch } from '../../types/redux/map-dispatch-to-props';
import ContentMeta from './ContentMeta';

const mapStateToProps = (state:reduxState) => ({
    contentProps: Object.assign({},state.createdContentProps)
});

const mapDispatchToProps =(dispatch:Dispatch) => ({
    ChangeCreatedContentProps: (payload: ChangeCreatedContentPropsAction["payload"]) => (dispatch(ChangeCreaetedContentProps(payload)))
});

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps >;

class CreatedContent extends React.Component<Props> {
    render(){
        return(
            <ContentMeta 
            ChangeMainMarkDispatch={this.props.ChangeCreatedContentProps}
            ContentProps={this.props.contentProps}>
            </ContentMeta>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CreatedContent);
