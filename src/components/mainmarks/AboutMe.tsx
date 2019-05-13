import * as React from 'react';
import { Paper,Typography, Color } from '@material-ui/core';
import {createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import { StyleRules } from '@material-ui/core/styles';
import { reduxState } from '../../types/redux/reducer';
import { Dispatch } from 'redux';
import { ChangeAboutMeProps } from '../../redux/actions/action';
import { ChangeAboutMePropsAction, ChangeAboutMePropsActionWithDispatch } from '../../types/redux/actions';
import { connect } from 'react-redux';
import { MainMarksProps } from '../../types/common/mainmarks';
import EventListener from 'react-event-listener';
import AboutMeCalcurator from '../../systems/MainMarks/aboutme-calculator';
import ColorObjController from '../../systems/Colors/color-obj-controller';


interface mapStateToPropsType {
    aboutMeProps: MainMarksProps;
}

const mapStateToProps = (state:reduxState):mapStateToPropsType => ({
    aboutMeProps:  Object.assign({},state.aboutMeProps)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeAboutMeProps: (payload: ChangeAboutMePropsAction["payload"]) => (dispatch(ChangeAboutMeProps(payload)))
})

const tiltAngle = "45deg";

const colorObj:ColorObjController = new ColorObjController();

const aboutMeColor = colorObj.specifiedColor("lightBlue");

const styles = (theme:Theme) :StyleRules => createStyles({
    paper: {
        transition: "1.2s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    outline: {
        zIndex: 100,
        position: "absolute",
        transform: `rotate(${tiltAngle})`,
        backgroundColor: aboutMeColor[200]
    },
    second: {
        backgroundColor: aboutMeColor[500]
    },
    third: {
        backgroundColor: aboutMeColor[200]
    },
    centerWord: {
        transform: `rotate(-${tiltAngle})`,
    }
});



type Props = WithStyles<typeof styles> & mapStateToPropsType & ReturnType<typeof mapDispatchToProps>;


class AboutMe extends React.Component <Props>{
    private _resizeTimer: number;
    constructor(props:Props){
        super(props);
        this._resizeTimer = 0;
    }

    _changeTopLeftWidthHeight(changeAboutMeProps:ChangeAboutMePropsActionWithDispatch): void{
        if(this._resizeTimer !== 0){
            window.clearTimeout(this._resizeTimer);
        }
        this._resizeTimer = window.setTimeout(()=>{
            const calcObj = new AboutMeCalcurator();
            const topLeftWidthHeight = calcObj.calculateTopLeftWidthHeight();
            changeAboutMeProps(topLeftWidthHeight);
        },200);
    }

    render(){
        return (
            <React.Fragment>
                <Paper className={`${this.props.classes.outline} ${this.props.classes.paper}`}
                style={{
                    top: this.props.aboutMeProps.top,
                    left: this.props.aboutMeProps.left,
                    width: this.props.aboutMeProps.widthHeight,
                    height: this.props.aboutMeProps.widthHeight,
                }}
                >
                    <Paper className={`${this.props.classes.paper} ${this.props.classes.second}`}
                    style={{
                        top: this.props.aboutMeProps.top,
                        left: this.props.aboutMeProps.left,
                        width: this.props.aboutMeProps.widthHeight - 30,
                        height: this.props.aboutMeProps.widthHeight - 30
                    }}
                    >
                        <Paper className={`${this.props.classes.paper} ${this.props.classes.third}`}
                        style={{
                            top: this.props.aboutMeProps.top,
                            left: this.props.aboutMeProps.left,
                            width: this.props.aboutMeProps.widthHeight - 60,
                            height: this.props.aboutMeProps.widthHeight - 60
                        }}>
                            <Typography color={'error'} align={'center'} variant={'h4'} className={this.props.classes.centerWord}>
                                AboutMe
                            </Typography>
                        </Paper>
                    </Paper>
                </Paper>
                <EventListener target='window' onResize={()=>(this._changeTopLeftWidthHeight(this.props.changeAboutMeProps))}></EventListener>
            </React.Fragment>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(AboutMe));
