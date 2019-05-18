import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeContactContentProps } from '../../redux/actions/action';
import { ChangeContactContentPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
import ContentMeta from './ContentMeta';

const mapStateToProps = (state:reduxState) => ({
    contentProps: Object.assign({},state.contactContentProps)
});

const mapDispatchToProps =(dispatch:Dispatch) => ({
    ChangeContactContentProps: (payload: ChangeContactContentPropsAction["payload"]) => (dispatch(ChangeContactContentProps(payload)))
});

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps >;

class ContactContent extends React.Component<Props> {
    render(){
        return(
            <ContentMeta 
            ChangeMainMarkDispatch={this.props.ChangeContactContentProps}
            ContentProps={this.props.contentProps}>
            </ContentMeta>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ContactContent)
