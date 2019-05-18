import * as React from 'react';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeAboutMeProps, ChangeAboutMeContentProps } from '../../redux/actions/action';
import { ChangeAboutMePropsAction, ChangeAboutMeContentPropsAction, } from '../../types/redux/actions';
import { connect } from 'react-redux';
import MainMarkMeta from './MainMarkMeta';
import { mapStateToPropsMainMarksType } from '../../types/redux/map-state-to-props';


const mapStateToProps = (state:reduxState):mapStateToPropsMainMarksType => ({
    mainMarkProps:  Object.assign({},state.aboutMeProps)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    ChangeAboutMeProps: (payload: ChangeAboutMePropsAction["payload"]) => (dispatch(ChangeAboutMeProps(payload))),
    ChangeAboutMeContentProps: (payload: ChangeAboutMeContentPropsAction["payload"]) => (dispatch(ChangeAboutMeContentProps(payload)))
})


type Props = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

class AboutMe extends React.Component<Props>{

    render(){
        return (
            <MainMarkMeta 
            contentType={"AboutMe"} 
            ChangeMainMarkDispatch={this.props.ChangeAboutMeProps} 
            MainMarkProps={this.props.mainMarkProps}
            ChangeContentDispatch={this.props.ChangeAboutMeContentProps}
            >
            </MainMarkMeta>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AboutMe);
