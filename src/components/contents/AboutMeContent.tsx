import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeAboutMeContentProps } from '../../redux/actions/action';
import { ChangeAboutMeContentPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
// import { ChangeAboutMeContentPropsActionWithDispatch } from '../../types/redux/map-dispatch-to-props';
import ContentMeta from './ContentMeta';
import ContentProps from '../../types/systems/contents/content';
import { ChangeContentDispatch } from '../../types/redux/map-dispatch-to-props';
import ContentPropsCreater from '../../systems/Contents/content-props-creater';

const mapStateToProps = (state:reduxState) => ({
    ContentProps: Object.assign({},state.aboutMeContentProps)
});

const mapDispatchToProps =(dispatch:Dispatch) => ({
    ChangeContentProps: (payload: ChangeAboutMeContentPropsAction["payload"]) => (dispatch(ChangeAboutMeContentProps(payload)))
});

interface ContentMetaGalapagosType {
    ContentProps: ContentProps;
    ChangeContentProps :ChangeContentDispatch;
}

type Props =  ContentMetaGalapagosType;
// ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps >;

class AboutMeContent extends React.Component<Props> {

    render(){
        return(
            <React.Fragment>
                {this.props.ContentProps.display=="hidden"?<React.Fragment />:<ContentMeta 
                ContentProps={this.props.ContentProps}
                ChangeContentProps={this.props.ChangeContentProps}
                >
                </ContentMeta>}
            </React.Fragment>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AboutMeContent)
