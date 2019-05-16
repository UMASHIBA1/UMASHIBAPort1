import * as React from 'react';
import { Paper,Typography } from '@material-ui/core';
import {withStyles } from '@material-ui/core/styles';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeContactProps } from '../../redux/actions/action';
import { ChangeContactPropsAction, ChangeContactPropsActionWithDispatch } from '../../types/redux/actions';
import { connect } from 'react-redux';
import { noCalculateMainMarkProps} from '../../types/common/mainmarks';
import EventListener from 'react-event-listener';
import MainMarkMeta, { mainMarkStyles } from './MainMarkMeta';
import {MainMarkMetaType} from '../../types/common/mainmarks';
import { mapStateToPropsMainMarksType } from '../../types/redux/map-state-to-props';
import ContactPropsCreater from '../../systems/MainMarks/contact-props-creater';

const mapStateToProps = (state:reduxState): mapStateToPropsMainMarksType => ({
    mainMarkProps:  Object.assign({},state.contactProps)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    ChangeContactProps: (payload: ChangeContactPropsAction["payload"]) => (dispatch(ChangeContactProps(payload)))
})


type Props = ReturnType<typeof mapDispatchToProps> & MainMarkMetaType;

class Contact extends MainMarkMeta<Props>{

    _changeTopLeftWidthHeight(nowState: noCalculateMainMarkProps,ChangeContactProps: ChangeContactPropsActionWithDispatch): void{
        if(this._resizeTimer !== 0){
            window.clearTimeout(this._resizeTimer);
        }
        this._resizeTimer = window.setTimeout(()=>{
            const calcObj = new ContactPropsCreater(nowState);
            const topLeftWidthHeight = calcObj.createProps();
            ChangeContactProps(topLeftWidthHeight);
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
            borderColor
        } = this.props.mainMarkProps;
        return (
            <React.Fragment>
                <Paper elevation={24} className={`${this.props.classes.outline} ${this.props.classes.paper}`}
                style={{
                    top,
                    left,
                    width: widthHeight,
                    height: widthHeight,
                    borderWidth,
                    borderColor: this._colorObj.specifiedColor(borderColor)[300],
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
                                color: wordColor
                            }}>
                                {word}
                            </Typography>
                        </Paper>
                    </Paper>
                </Paper>
                <EventListener target='window' onResize={()=>(this._changeTopLeftWidthHeight({word,wordColor,borderColor},this.props.ChangeContactProps))}></EventListener>
            </React.Fragment>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withStyles(mainMarkStyles)(Contact));
