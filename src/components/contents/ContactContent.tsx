import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeContactContentProps } from '../../redux/actions/action';
import { ChangeContactContentPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
import ContentMeta from './material/ContentMeta';

const mapStateToProps = (state:reduxState) => ({
    ContentProps: Object.assign({},state.contactContentProps)
});

const mapDispatchToProps =(dispatch:Dispatch) => ({
    ChangeContentProps: (payload: ChangeContactContentPropsAction["payload"]) => (dispatch(ChangeContactContentProps(payload)))
});

type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps >;

class ContactContent extends React.Component<Props> {

    render(){
        return(
            <React.Fragment>
                {this.props.ContentProps.display==="hidden"?<React.Fragment />:<ContentMeta 
                ContentProps={this.props.ContentProps}
                ChangeContentProps={this.props.ChangeContentProps}
                contentType={"Contact"}
                >
                </ContentMeta>}
            </React.Fragment>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ContactContent)
