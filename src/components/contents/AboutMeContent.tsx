import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeAboutMeContentProps } from '../../redux/actions/action';
import { ChangeAboutMeContentPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
// import { ChangeAboutMeContentPropsActionWithDispatch } from '../../types/redux/map-dispatch-to-props';
import ContentMeta from './ContentMeta';

const mapStateToProps = (state:reduxState) => ({
    contentProps: Object.assign({},state.aboutMeContentProps)
});

const mapDispatchToProps =(dispatch:Dispatch) => ({
    ChangeAboutMeContentProps: (payload: ChangeAboutMeContentPropsAction["payload"]) => (dispatch(ChangeAboutMeContentProps(payload)))
});

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps >;

class AboutMeContent extends React.Component<Props> {
    render(){
        return(
            <ContentMeta 
            ChangeMainMarkDispatch={this.props.ChangeAboutMeContentProps}
            ContentProps={this.props.contentProps}>
            </ContentMeta>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AboutMeContent)
