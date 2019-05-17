import * as React from 'react';
import { Paper,Typography } from '@material-ui/core';
import {withStyles } from '@material-ui/core/styles';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeAboutMeProps } from '../../redux/actions/action';
import { ChangeAboutMePropsAction, } from '../../types/redux/actions';
import { ChangeAboutMePropsActionWithDispatch } from '../../types/redux/map-dispatch-to-props';
import { connect } from 'react-redux';
import { noCalculateMainMarkProps} from '../../types/common/mainmarks';
import EventListener from 'react-event-listener';
import AboutMePropsCreater from '../../systems/MainMarks/aboutme-props-creater';
import MainMarkMeta, { mainMarkStyles } from './MainMarkMeta';
import {MainMarkMetaType} from '../../types/common/mainmarks';
import { mapStateToPropsMainMarksType } from '../../types/redux/map-state-to-props';


const mapStateToProps = (state:reduxState):mapStateToPropsMainMarksType => ({
    mainMarkProps:  Object.assign({},state.aboutMeProps)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeAboutMeProps: (payload: ChangeAboutMePropsAction["payload"]) => (dispatch(ChangeAboutMeProps(payload)))
})


type Props = ReturnType<typeof mapDispatchToProps> & MainMarkMetaType;

class AboutMe extends MainMarkMeta<Props>{

    _changeTopLeftWidthHeight(nowState: noCalculateMainMarkProps,changeAboutMeProps:ChangeAboutMePropsActionWithDispatch): void{
        if(this._resizeTimer !== 0){
            window.clearTimeout(this._resizeTimer);
        }
        this._resizeTimer = window.setTimeout(()=>{
            const calcObj = new AboutMePropsCreater(nowState);
            const topLeftWidthHeight = calcObj.createProps();
            changeAboutMeProps(topLeftWidthHeight);
        },this._resizeWaitTime);
    }

    render(){
        const {
            top,
            left,
            widthHeight,
            secondWidthHeight,
            thirdWidthHeight,
            borderWidth,
            word,
            wordColor,
            borderColor,
            rotate
        } = this.props.mainMarkProps;
        return (
            <React.Fragment>
                <Paper elevation={24} 
                onMouseEnter={()=>(this.changeRotate(0,this.props.mainMarkProps,this.props.changeAboutMeProps))} 
                onMouseLeave={()=>(this.changeRotate(45,this.props.mainMarkProps,this.props.changeAboutMeProps))}
                className={`${this.props.classes.outline} ${this.props.classes.paper}`}
                style={{
                    top,
                    left,
                    width: widthHeight,
                    height: widthHeight,
                    borderWidth,
                    borderColor: this._colorObj.specifiedColor(borderColor)[300],
                    transform: `rotate(${rotate}deg)`
                }}
                >
                    <Paper className={`${this.props.classes.paper} ${this.props.classes.second}`}
                    style={{
                        top,
                        left,
                        width: secondWidthHeight,
                        height: secondWidthHeight,
                        borderWidth,
                        borderColor: this._colorObj.specifiedColor(borderColor)[500]
                    }}
                    >
                        <Paper className={`${this.props.classes.paper} ${this.props.classes.third}`}
                        style={{
                            top,
                            left,
                            width: thirdWidthHeight,
                            height: thirdWidthHeight,
                            borderWidth,
                            borderColor: this._colorObj.specifiedColor(borderColor)[900]
                        }}>
                            <Typography color={'error'} align={'center'} variant={this.props.mainMarkProps.fontVariant} className={this.props.classes.centerWord} style={{
                                color: wordColor,
                                transform: `rotate(-${rotate}deg)`
                            }}>
                                {word}
                            </Typography>
                        </Paper>
                    </Paper>
                </Paper>
                <EventListener target='window' onResize={()=>(this._changeTopLeftWidthHeight({word,wordColor,borderColor,rotate},this.props.changeAboutMeProps))}></EventListener>
            </React.Fragment>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withStyles(mainMarkStyles)(AboutMe));
