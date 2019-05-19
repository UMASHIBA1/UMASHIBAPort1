import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeContactContentProps } from '../../redux/actions/action';
import { ChangeContactContentPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
import ContentMeta from './ContentMeta';
import { ChangeContentDispatch } from '../../types/redux/map-dispatch-to-props';
import ContentProps from '../../types/systems/contents/content';
import ContentPropsCreater from '../../systems/Contents/content-props-creater';

const mapStateToProps = (state:reduxState) => ({
    ContentProps: Object.assign({},state.contactContentProps)
});

const mapDispatchToProps =(dispatch:Dispatch) => ({
    ChangeContentProps: (payload: ChangeContactContentPropsAction["payload"]) => (dispatch(ChangeContactContentProps(payload)))
});

// type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps >;

interface ContentMetaGalapagosType {
    ContentProps: ContentProps;
    ChangeContentProps :ChangeContentDispatch;
}

type Props =  ContentMetaGalapagosType;
class ContactContent extends React.Component<Props> {

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


export default connect(mapStateToProps,mapDispatchToProps)(ContactContent)
