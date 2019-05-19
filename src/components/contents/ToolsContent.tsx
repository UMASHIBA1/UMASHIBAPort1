import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeToolsContentProps } from '../../redux/actions/action';
import { ChangeToolsContentPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
import ContentMeta from './material/ContentMeta';

const mapStateToProps = (state:reduxState) => ({
    ContentProps: Object.assign({},state.toolsContentProps)
});

const mapDispatchToProps =(dispatch:Dispatch) => ({
    ChangeContentProps: (payload: ChangeToolsContentPropsAction["payload"]) => (dispatch(ChangeToolsContentProps(payload)))
});


type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps >;

class ToolsContent extends React.Component<Props> {

    render(){
        return(
            <React.Fragment>
                {this.props.ContentProps.display==="hidden"?<React.Fragment />:<ContentMeta 
                ContentProps={this.props.ContentProps}
                ChangeContentProps={this.props.ChangeContentProps}
                contentType={"Tools"}
                >
                </ContentMeta>}
            </React.Fragment>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ToolsContent);
