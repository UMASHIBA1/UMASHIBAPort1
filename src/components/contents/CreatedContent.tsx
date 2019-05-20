import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeCreaetedContentProps } from '../../redux/actions/action';
import { ChangeCreatedContentPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
import ContentMeta from './material/ContentMeta';

const mapStateToProps = (state:reduxState) => ({
    ContentProps: Object.assign({},state.createdContentProps)
});

const mapDispatchToProps =(dispatch:Dispatch) => ({
    ChangeContentProps: (payload: ChangeCreatedContentPropsAction["payload"]) => (dispatch(ChangeCreaetedContentProps(payload)))
});

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps >;

class CreatedContent extends React.Component<Props> {


    render(){
        return(
            <React.Fragment>
                {this.props.ContentProps.display==="hidden"?<React.Fragment />:<ContentMeta 
                ContentProps={this.props.ContentProps}
                ChangeContentProps={this.props.ChangeContentProps}
                contentType={"Created"}
                >
                </ContentMeta>}
            </React.Fragment>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CreatedContent);
