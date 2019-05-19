import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeToolsContentProps } from '../../redux/actions/action';
import { ChangeToolsContentPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
// import { ChangeAboutMeContentPropsActionWithDispatch } from '../../types/redux/map-dispatch-to-props';
import ContentMeta from './ContentMeta';
import { ChangeContentDispatch } from '../../types/redux/map-dispatch-to-props';
import ContentProps from '../../types/systems/contents/content';
import ContentPropsCreater from '../../systems/Contents/content-props-creater';

const mapStateToProps = (state:reduxState) => ({
    ContentProps: Object.assign({},state.toolsContentProps)
});

const mapDispatchToProps =(dispatch:Dispatch) => ({
    ChangeContentProps: (payload: ChangeToolsContentPropsAction["payload"]) => (dispatch(ChangeToolsContentProps(payload)))
});

// interface ContentMetaGalapagosType {
//     ContentProps: ContentProps;
//     ChangeContentProps :ChangeContentDispatch;
// }

// type Props =  ContentMetaGalapagosType;

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps >;

class ToolsContent extends React.Component<Props> {

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


export default connect(mapStateToProps,mapDispatchToProps)(ToolsContent);
