import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeBlogContentProps } from '../../redux/actions/action';
import { ChangeBlogContentPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
import ContentMeta from './material/ContentMeta';

const mapStateToProps = (state:reduxState) => ({
    ContentProps: Object.assign({},state.blogContentProps)
});

const mapDispatchToProps =(dispatch:Dispatch) => ({
    ChangeContentProps: (payload: ChangeBlogContentPropsAction["payload"]) => (dispatch(ChangeBlogContentProps(payload)))
});

type Props =  ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps >;

class BlogContent extends React.Component<Props> {

    render(){
        return(
            <React.Fragment>
                {this.props.ContentProps.display==="hidden"?<React.Fragment />:<ContentMeta 
                ContentProps={this.props.ContentProps}
                ChangeContentProps={this.props.ChangeContentProps}
                contentType={"Blog"}
                >
                </ContentMeta>}
            </React.Fragment>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(BlogContent)
