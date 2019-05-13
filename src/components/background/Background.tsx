import * as React from 'react';
import { Theme } from '@material-ui/core';
import { StyleRules, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import BackgroundSquare from './BackgroundSquare';
import { blue } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { reduxState } from '../../types/redux/reducer';
import { backgroundSquareProp } from '../../types/common/background-square';
import { Dispatch } from 'redux';
import { ChangeBackgroundSquareProps } from '../../redux/actions/action';
import BackgroundController from '../../systems/Background/background-controller';
import EventLitener from 'react-event-listener';
import { ChangeBackgroundSquarePropsActionWithDispatch, ChangeBackgroundSquarePropsAction } from '../../types/redux/actions';
interface mapStateToPropsType {
    backgroundSquareProps: backgroundSquareProp[]
}

const mapStateToProps = (state: reduxState):mapStateToPropsType => ({
        backgroundSquareProps: state.backgroundSquareProps.map((obj: backgroundSquareProp): backgroundSquareProp=>(Object.assign({},obj)))
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        changeSquareProps: (payload: ChangeBackgroundSquarePropsAction["payload"]) => (dispatch(ChangeBackgroundSquareProps(payload)))
}};

const styles = (theme:Theme) :StyleRules => createStyles({
    background:{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: blue[300],
        position: "fixed",
        top:0,
        left:0
    }
});

type Props = WithStyles<typeof styles> & mapStateToPropsType & ReturnType<typeof mapDispatchToProps>;

class Background extends React.Component <Props>{

    private _resizeTimer: number;
    constructor(props:Props){
        super(props);
        this._resizeTimer = 0;
    }

    calculateSquareProps(changeSquareProps: ChangeBackgroundSquarePropsActionWithDispatch): void{
        if(this._resizeTimer !== 0){
            window.clearTimeout(this._resizeTimer);
        }
        this._resizeTimer = window.setTimeout(()=>{
            const backgroundObj: BackgroundController = new BackgroundController();
            const status: backgroundSquareProp[] = backgroundObj.createBackgroundProps();
            changeSquareProps(status);  
        },200);
    }

    render(){
        const changeSquareProps: ChangeBackgroundSquarePropsActionWithDispatch = this.props.changeSquareProps;
        return(
            <div className={this.props.classes.background}>
            {
                this.props.backgroundSquareProps.map(({
                    id,
                    colorName,
                    word,
                    sideLength,
                    zindex,
                    top,
                    left,
                })=>{
                    return(
                        <BackgroundSquare 
                        key={id} 
                        id={id} 
                        colorName={colorName} 
                        word={word} 
                        sideLength={sideLength}
                        zindex={zindex}
                        top={top} 
                        left={left}  />
                    )
                })
            }
            <EventLitener target='window' onResize={()=>(this.calculateSquareProps(changeSquareProps))}></EventLitener>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Background));
